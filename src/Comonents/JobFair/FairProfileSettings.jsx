import { useState } from "react";
import FileUpload from "./FileUpload";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../Hooks/Auth/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getFairRegisteredUser, updateFairRegisteredUserInDb } from "../../api";
import Loader from "../Loader/Loader";

const FairProfileSettings = () => {
  const [uploadedImage, setUploadedImage] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const { data: fairUser = {}, isFetching, refetch } = useQuery({
    queryKey: ["fairRegister", user?.email],
    queryFn: async () => {
      const res = await getFairRegisteredUser(user?.email);
      return res.data;
    },
  });

  const onSubmit = async (data, reset) => {
    try {
      const res = await updateFairRegisteredUserInDb(fairUser._id, data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Profile updated");
      }
    } catch (error) {
      console.log(error.message);
    }
    reset();
  };

  const profilePicture = uploadedImage.length > 0 ? uploadedImage[0].url : "";
  console.log(fairUser);
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <div className='max-w-xl'>
          <h2 className='font-bold text-2xl md:text-2xl text-center mb-10'>
            Update Profile
          </h2>
          <div className='space-y-5'>
            <FileUpload
              uploadedImage={uploadedImage}
              setUploadedImage={setUploadedImage}
            />
            <form
              onSubmit={handleSubmit(data =>
                onSubmit({ ...data, profilePicture }, reset)
              )}
            >
              <div className='form-group '>
                <label htmlFor='fullname' className='text-lg font-medium'>
                  Profile Name
                </label>
                <input
                  id='fullname'
                  type='text'
                  defaultValue={fairUser?.fullname}
                  className='outline-none text-lg'
                  {...register("fullname", {
                    required: "Full name is required",
                  })}
                />
                {errors.fullname && (
                  <p className='error'>{errors.fullname.message}</p>
                )}
              </div>

              <button
                className='bg-[#FF3811] py-2 px-5 text-white font-bold uppercase rounded-lg'
                type='submit'
              >
                Save Profile
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FairProfileSettings;
