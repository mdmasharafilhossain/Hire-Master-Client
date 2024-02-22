/* eslint-disable react/prop-types */
import { Button, Image, Tooltip, WrapItem } from "@chakra-ui/react";
import Resizer from "react-image-file-resizer";
import { useState } from "react";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";
import { SmallCloseIcon } from "@chakra-ui/icons";

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
                // console.log(uri);
                axiosPublic
                  .post("/profile/imageUpload", { image: uri })
                  .then(res => {
                    // console.log("Image upload res", res);
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
  // console.log(uploadedImage);
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
    <div className=''>
      <div className='flex  items-center gap-y-5 md:gap-y-0 gap-x-0 md:gap-x-5'>
        <WrapItem>
          <Button
            size='sm'
            colorScheme='green'
            variant='outline'
            isLoading={loading}
          >
            <label htmlFor='image' className='cursor-pointer'>
              Upload Image
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
        {uploadedImage?.length > 0 &&
          uploadedImage.map(image => (
            <div className='relative' key={image?.public_id}>
              <Image
                boxSize='200px'
                w={350}
                src={image?.url}
                alt='Product Image'
              />

              <Tooltip label='Remove Picture' placement='bottom'>
                <SmallCloseIcon
                  color='red.500'
                  w={6}
                  h={6}
                  className='absolute right-0 top-0 cursor-pointer rounded-full bg-black'
                  onClick={() => handleImageRemove(image?.public_id)}
                />
                {/* <CiCircleRemove
                  size={26}
                  className='absolute -right-5 -top-5 text-red-600 cursor-pointer'
                  onClick={() => handleImageRemove(image?.public_id)}
                /> */}
              </Tooltip>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FileUpload;
