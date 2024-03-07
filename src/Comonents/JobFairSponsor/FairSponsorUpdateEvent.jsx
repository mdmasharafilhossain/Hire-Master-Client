import FileUpload from "../JobFair/FileUpload";
import { useEffect, useState } from "react";
import {
  getSingleFairSponsorEventFromDb,
  updateFairSponsorEventInDb,
} from "../../api";
import useAuth from "../Hooks/Auth/useAuth";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import FairSponsorEventUpdateForm from "./FairSponsorEventUpdateForm";

const FairSponsorUpdateEvent = () => {
  const [uploadedImage, setUploadedImage] = useState([]);

  const { user } = useAuth();
  const { slug } = useParams();
  const navigate = useNavigate();

  

  const { data: singleEvent = {}, isFetching } = useQuery({
    queryKey: ["single-event"],
    queryFn: async () => {
      const res = await getSingleFairSponsorEventFromDb(slug);
      return res.data;
    },
  });
 

  useEffect(() => {
    if (singleEvent) {
      setUploadedImage(singleEvent.bannerImage);
    }
  }, [singleEvent]);

  

  const onSubmit = async (data, reset) => {
    
    const tagsArr = data.tags.split(",").map(tag => tag.trim());
    const modifiedData = {
      ...data,
      tags: tagsArr,
      bannerImage: uploadedImage,
    };
    
    try {
      const res = await updateFairSponsorEventInDb(slug, modifiedData);
      
      if (res.data) {
        navigate("/job-fair/profile/sponsor-event");
        setUploadedImage([]);
        reset();
        toast.success(`Event ${modifiedData.title} updates successful.`);
      }
    } catch (error) {
      
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
