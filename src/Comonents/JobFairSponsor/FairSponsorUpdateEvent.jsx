import FileUpload from "../JobFair/FileUpload";
import { useEffect, useState } from "react";
import {
  getSingleFairSponsorEventFromDb,
  updateFairSponsorEventInDb,
} from "../../api";
import useAuth from "../Hooks/Auth/useAuth";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import FairSponsorEventUpdateForm from "./FairSponsorEventUpdateForm";

const FairSponsorUpdateEvent = () => {
  const [uploadedImage, setUploadedImage] = useState([]);

  const { user } = useAuth();
  const { slug } = useParams();
  console.log(slug);

  //   const { data: fairUser = {}, isFetching } = useQuery({
  //     queryKey: ["fair-sponsor", user?.email],
  //     queryFn: async () => {
  //       const res = await getFairRegisteredUser(user?.email);
  //       return res.data;
  //     },
  //     enabled: !!user,
  //   });
  //   console.log(fairUser.userType);

  const { data: singleEvent = {}, isFetching } = useQuery({
    queryKey: ["single-event"],
    queryFn: async () => {
      const res = await getSingleFairSponsorEventFromDb(slug);
      return res.data;
    },
  });
  //   console.log(singleEvent);

  useEffect(() => {
    if (singleEvent) {
      setUploadedImage(singleEvent.bannerImage);
    }
  }, [singleEvent]);

  //   const bannerImage = uploadedImage.length > 0 ? uploadedImage[0].url : "";

  const onSubmit = async (data, reset) => {
    // console.log(data);
    const tagsArr = data.tags.split(",").map(tag => tag.trim());
    const modifiedData = {
      ...data,
      tags: tagsArr,
      bannerImage: uploadedImage,
    };
    console.log(modifiedData);
    try {
      const res = await updateFairSponsorEventInDb(slug, modifiedData);
      console.log(res.data);
      if (res.data) {
        setUploadedImage([]);
        reset();
        toast.success(`Event ${modifiedData.title} updates successful.`);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <h2 className='text-center font-bold text-2xl md:text-3xl xl:text-4xl'>
        Update <span className='text-[#FF3811]'>Fair Event.</span>
      </h2>

      <div className='border  mx-auto my-10 rounded-3xl'>
        <div className='flex flex-col w-full mb-2  px-3 sm:px-6 md:px-16 lg:px-20 my-10'>
          <label className='text-sm md:text-lg mb-5'>Update Event Banner</label>
          <FileUpload
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
          />
        </div>
        <FairSponsorEventUpdateForm
          onSubmit={onSubmit}
          user={user}
          isFetching={isFetching}
          singleEvent={singleEvent}
        />
      </div>
    </div>
  );
};

export default FairSponsorUpdateEvent;
