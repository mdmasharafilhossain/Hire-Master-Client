import { Controller, useForm } from "react-hook-form";
import "./FairRegistrationForm.css";
import { saveFairRegistrationInDb } from "../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FairHeader from "./FairHeader";
import useAuth from "../Hooks/Auth/useAuth";
import { useEffect } from "react";

const JobFairRegistrationForm = () => {
  const { user } = useAuth();
  const storedEmail = localStorage.getItem("userEmail");
  const defaultEmail = storedEmail || user?.email;
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: defaultEmail,
    },
  });
  useEffect(() => {
    if (user?.email) {
      localStorage.setItem("userEmail", user?.email);
    }
  }, [user?.email]);

  // https://www.linkedin.com/in/m-arafat61/
  const navigate = useNavigate();

  const onSubmit = async (data, reset) => {
    try {
      const res = await saveFairRegistrationInDb(data);
      if (res.data.insertedId) {
        toast.success("Registration successful.");
        navigate("/job-fair");
        localStorage.removeItem("userEmail");
      }
      if (res.data.status === "Already registered") {
        toast.success("Already registered.");
        navigate("/job-fair");
        localStorage.removeItem("userEmail");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
    reset();
  };

  return (
    <>
      <FairHeader />
      <div className='my-10 md:my-20 lg:my-32'>
        <div className='text-center'>
          <h2 className=' font-bold text-lg'>Quick registration!</h2>
          <p className=' font-medium mb-2'>
            Join event, Find tech jobs from reputed sponsors .
          </p>
        </div>

        <form
          onSubmit={handleSubmit(data => onSubmit(data, reset))}
          className='job-fair-registration-form'
        >
          <div className='form-group '>
            <label htmlFor='fullname' className='text-lg'>
              Full Name
            </label>
            <input
              id='fullname'
              type='text'
              className='outline-none text-lg'
              {...register("fullname", { required: "Full name is required" })}
            />
            {errors.fullname && (
              <p className='error'>{errors.fullname.message}</p>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <Controller
              name='email'
              control={control}
              defaultValue={user?.email}
              render={({ field }) => (
                <input
                  {...field}
                  id='email'
                  type='email'
                  className='outline-none text-lg'
                  readOnly
                />
              )}
            />
            {errors.email && <p className='error'>{errors.email.message}</p>}
          </div>
          {/* <div className='form-group'>
            <label htmlFor='linkedin'>LinkedIn URL</label>
            <input
              id='linkedin'
              type='url'
              className='outline-none text-lg'
              {...register("linkedin", {
                required: "LinkedIn URL is required",
                pattern: {
                  value: /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/,
                  message: "Invalid LinkedIn URL",
                },
              })}
            />
            {errors.linkedin && (
              <p className='error'>{errors.linkedin.message}</p>
            )}
          </div> */}
          <div className='form-group'>
            <label htmlFor='userType'>Are you a sponsor or a job seeker?</label>
            <Controller
              name='userType'
              control={control}
              defaultValue=''
              rules={{
                required: "Please select your user type",
              }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <select
                    {...field}
                    className='outline-none text-lg border px-2 py-1'
                  >
                    <option value=''>Please select</option>
                    <option value='job-seeker'>Job seeker</option>
                    <option value='sponsor'>Sponsor</option>
                  </select>
                  {error && <p className='error'>{error.message}</p>}
                </div>
              )}
            />
          </div>

          <button
            className='bg-[#FF3811] py-2 text-white font-bold uppercase rounded-full'
            type='submit'
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default JobFairRegistrationForm;
