import { useEffect, useState } from "react";
import FileUpload from "./FileUpload";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../Hooks/Auth/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getFairRegisteredUser, updateFairRegisteredUserInDb } from "../../api";

const FairProfileSettings = () => {
  const [uploadedImage, setUploadedImage] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    setValue, // Destructure setValue from useForm
    formState: { errors },
  } = useForm();

  const { user, setStateProfilePicture, setStateFairRegisterName } = useAuth();

  const { data: fairUser = {}, isFetching, refetch } = useQuery({
    queryKey: ["fairRegister"],
    queryFn: async () => {
      const res = await getFairRegisteredUser(user?.email);
      return res.data;
    },
    enabled: !!user,
  });

  // Use useEffect to set the initial value of the fullname input
  useEffect(() => {
    if (fairUser?.fullname) {
      setValue("fullname", fairUser.fullname);
    }
  }, [fairUser, setValue]);

  const onSubmit = async (data, reset) => {
    try {
      const res = await updateFairRegisteredUserInDb(fairUser._id, data);
      if (res.data.modifiedCount > 0) {
        refetch();
        setUploadedImage([]);
        toast.success("Profile updated");
      }
    } catch (error) {
      console.log(error.message);
    }
    reset();
  };

  useEffect(() => {
    if (user && !isFetching) {
      setUploadedImage(fairUser.profilePicture);
      setStateProfilePicture(fairUser.profilePicture);
      setStateFairRegisterName(fairUser.fullname);
    }
  }, [
    user,
    isFetching,
    fairUser.profilePicture,
    setStateProfilePicture,
    setStateFairRegisterName,
    fairUser.fullname,
  ]);

  const profilePicture = uploadedImage?.length > 0 ? uploadedImage : [];

 

  return (
    <>
      <div className='max-w-xl'>
        <h2 className='font-bold text-2xl md:text-3xl xl:text-4xl text-center mb-10'>
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
                {...register("fullname", {
                  required: "Full name is required",
                })}
                className='outline-none text-lg'
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
    </>
  );
};

export default FairProfileSettings;
