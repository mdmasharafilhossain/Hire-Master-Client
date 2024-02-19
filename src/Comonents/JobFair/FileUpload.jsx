/* eslint-disable react/prop-types */
import { Button, Image, WrapItem } from "@chakra-ui/react";

import Resizer from "react-image-file-resizer";
import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";

const FileUpload = ({ uploadedImage, setUploadedImage }) => {
  const [loading, setLoading] = useState(false);

  const axiosPublic = UseAxiosPublic();

  const handleFileUpload = e => {
    const files = e.target.files;
    let image = [];

    if (files) {
      setLoading(true);

      const uploadPromises = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        uploadPromises.push(
          new Promise(resolve => {
            Resizer.imageFileResizer(
              file,
              720,
              720,
              "JPEG",
              100,
              0,

              uri => {
                console.log(uri);
                axiosPublic
                  .post("/profile/imageUpload", { image: uri })
                  .then(res => {
                    console.log("Image upload res", res);
                    if (res) {
                      image.push(res.data);
                      resolve();
                    }
                  })
                  .catch(err => {
                    console.log("cloudinary upload err", err);
                    resolve();
                  });
              },
              "base64"
            );
          })
        );
      }

      Promise.all(uploadPromises).then(() => {
        setLoading(false);
        setUploadedImage(image);
      });
    }
  };
  console.log(uploadedImage);
  const handleImageRemove = public_id => {
    setLoading(true);
    axiosPublic
      .post("/profile/imageRemove", { public_id })
      .then(res => {
        if (res) {
          setLoading(false);
          console.log(res);
          const filteredImages = uploadedImage.filter(image => {
            return image.public_id !== public_id;
          });
          setUploadedImage(filteredImages);
        }
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  // console.log(uploadedImages);
  return (
    <div className='mt-16 md:mt-28 mx-auto flex justify-start max-w-[600px] pl-10'>
      <div className='flex items-center gap-x-10'>
        <WrapItem>
          <Button colorScheme='red' variant='outline' isLoading={loading}>
            <label htmlFor='image' className='cursor-pointer'>
              Upload Profile Images
              <input
                type='file'
                required
                id='image'
                hidden
                accept='images/*'
                onChange={handleFileUpload}
              />
            </label>
          </Button>
        </WrapItem>
        {/* {images?.length > 0 &&
          images.map(image => (
            <div className='relative' key={image?.public_id}>
              <Image boxSize='140px' src={image?.url} alt='Product Image' />

              <CiCircleRemove
                size={38}
                className='absolute right-0 top-0 text-red-600 cursor-pointer'
                onClick={() => handleImageRemove(image?.public_id)}
              />
            </div>
          ))} */}
        {uploadedImage?.length > 0 &&
          uploadedImage.map(image => (
            <div className='relative' key={image?.public_id}>
              <Image boxSize='140px' src={image?.url} alt='Product Image' />

              <CiCircleRemove
                size={38}
                className='absolute right-0 top-0 text-red-600 cursor-pointer'
                onClick={() => handleImageRemove(image?.public_id)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FileUpload;
