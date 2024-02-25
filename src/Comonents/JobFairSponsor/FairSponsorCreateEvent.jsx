import FileUpload from "../JobFair/FileUpload";
import { useState } from "react";
import FairSponsorEventCreateForm from "./FairSponsorEventCreateForm";
import { getFairRegisteredUser, saveFairEventDataInDb } from "../../api";
import useAuth from "../Hooks/Auth/useAuth";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const FairSponsorCreateEvent = () => {
  const [uploadedImage, setUploadedImage] = useState([]);

  const { user } = useAuth();

  const { data: fairuser = {}, isFetching } = useQuery({
    queryKey: ["fair-sponsor", user?.email],
    queryFn: async () => {
      const res = await getFairRegisteredUser(user?.email);
      return res.data;
    },
    enabled: !!user,
  });
  console.log(fairuser.userType);

  // const bannerImage = uploadedImage.length > 0 ? uploadedImage[0].url : "";
  console.log(uploadedImage);

  const onSubmit = async (data, reset) => {
    console.log(data);
    const tagsArr = data.tags.split(",").map(tag => tag.trim());
    const modifiedData = {
      ...data,
      tags: tagsArr,
      bannerImage: uploadedImage,
    };
    console.log(modifiedData);
    try {
      const res = await saveFairEventDataInDb(modifiedData);
      console.log(res.data);
      if (res.data.insertedId) {
        setUploadedImage([]);
        reset();
        toast.success(`Event ${modifiedData.title} created successfully.`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h2 className='text-center font-bold text-2xl md:text-3xl xl:text-4xl'>
        Create <span className='text-[#FF3811]'>Fair Event.</span>
      </h2>

      <div className='border  mx-auto my-10 rounded-3xl'>
        <div className='flex flex-col w-full mb-2  px-3 sm:px-6 md:px-16 lg:px-20 my-10'>
          <label className='text-sm md:text-lg mb-5'>Upload Event Banner</label>
          <FileUpload
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
          />
        </div>
        <FairSponsorEventCreateForm
          onSubmit={onSubmit}
          user={user}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
};

export default FairSponsorCreateEvent;
