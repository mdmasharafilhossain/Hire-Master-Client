import { useForm } from "react-hook-form";

const FairSponsorEventCreateForm = ({ onSubmit, user, isFetching }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit(data => onSubmit(data, reset))}
      className='flex flex-col px-3 sm:px-6 md:px-16 lg:px-20 pb-8 sm:pb-12'
    >
      <div className='flex flex-col w-full my-2'>
        <label className='text-sm md:text-lg'>Event Title</label>
        <input
          type='text'
          placeholder='Title'
          className='text-lg w-full outline-none border px-2 py-1 '
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className='text-red-500'>Title is required!</span>
        )}
      </div>
      <div className='flex flex-col w-full my-2'>
        <label className='text-sm md:text-lg'>Event Description</label>
        <textarea
          type='text'
          placeholder='Description'
          className='text-lg outline-none border px-2 py-1 h-[150px] resize-none'
          {...register("description", {
            required: true,
            maxLength: 5000,
          })}
        />
        {errors.description && (
          <span className='text-red-500'>Description is required!</span>
        )}
      </div>
      <div className='flex flex-col w-full my-2'>
        <label className='text-sm md:text-lg'>Tags</label>
        <input
          type='text'
          placeholder='Comma separated values'
          className='text-lg outline-none border px-2 py-1 '
          {...register("tags", { required: true })}
        />
        {errors.tags && <span className='text-red-500'>Tags is required!</span>}
      </div>

      <div className='flex flex-col w-full my-2'>
        <label className='text-sm md:text-lg'>Event Location</label>
        <input
          type='text'
          placeholder='location'
          className='text-lg outline-none border px-2 py-1 '
          {...register("location", { required: true })}
        />
        {errors.location && (
          <span className='text-red-500'>Location is required!</span>
        )}
      </div>
      <div className='flex flex-col sm:flex-row items-center gap-x-10'>
        <div className='flex flex-col w-full my-2'>
          {isFetching ? (
            "loading..."
          ) : (
            <label className='text-sm md:text-lg'>Sponsor Email</label>
          )}
          <input
            type='text'
            placeholder='Sponsor email'
            defaultValue={user?.email}
            readOnly
            className='text-lg w-full outline-none border px-2 py-1 '
            {...register("sponsor_email", { required: true })}
          />
        </div>
        <div className='flex flex-col w-full my-2'>
          <label className='text-sm md:text-lg'>Event Date</label>
          <input
            type='date'
            className='text-lg w-full outline-none border px-2 py-1 '
            {...register("dateOfEvent", { required: true })}
          />
          {errors.dateOfEvent && (
            <span className='text-red-500'>Date is required!</span>
          )}
        </div>
      </div>

      <button
        type='submit'
        className='group relative my-2 h-10 w-full overflow-hidden bg-white text-base shadow-md rounded-full'
      >
        <div className='absolute inset-0 w-1/12 bg-[#FF3811] transition-all duration-[300ms] ease-out group-hover:w-full'></div>
        <span className='relative group-hover:text-white text-black uppercase font-semibold tracking-wider'>
          publish event
        </span>
      </button>
    </form>
  );
};

export default FairSponsorEventCreateForm;
