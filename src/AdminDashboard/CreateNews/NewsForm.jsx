import { useForm } from "react-hook-form";

const NewsForm = ({ onSubmit, user }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(data => onSubmit(data, reset))}
      className='border container mx-auto my-10 rounded-3xl'
    >
      <div className='flex flex-col px-3 sm:px-6 md:px-16 lg:px-20 py-8 sm:py-12'>
        <div className='flex flex-col w-full my-2'>
          <label className='text-sm md:text-lg'>News Title</label>
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
          <label>News Subtitle</label>
          <input
            type='text'
            placeholder='Subtitle'
            className='text-lg outline-none border px-2 py-1 '
            {...register("subtitle", { required: true })}
          />
          {errors.subtitle && (
            <span className='text-red-500'>Subtitle is required!</span>
          )}
        </div>
        <div className='flex flex-col w-full my-2'>
          <label className='text-sm md:text-lg'>Image URL</label>
          <input
            type='text'
            placeholder='Image url'
            className='text-lg w-full outline-none border px-2 py-1 '
            {...register("imageUrl", { required: true })}
          />
          {errors.imageUrl && (
            <span className='text-red-500'>Image URL is required!</span>
          )}
        </div>
        <div className='flex flex-col w-full my-2'>
          <label>Content</label>
          <textarea
            type='text'
            placeholder='Content'
            className='text-lg outline-none border px-2 py-1 h-[80px] md:h-[150px] resize-none'
            {...register("content", { required: true, maxLength: 2000 })}
          />
          {errors.content && (
            <span className='text-red-500'>Content is required!</span>
          )}
        </div>

        <div className='flex flex-col sm:flex-row items-center gap-x-10'>
          <div className='flex flex-col w-full my-2'>
            <label className='text-sm md:text-lg'>Author Name</label>
            <input
              type='text'
              placeholder='Author'
              defaultValue={user?.displayName}
              className='text-lg w-full outline-none border px-2 py-1 '
              {...register("author", { required: true })}
            />
            {errors.photo && (
              <span className='text-red-500'>Author Name is required!</span>
            )}
          </div>
          <div className='flex flex-col w-full my-2'>
            <label className='text-sm md:text-lg'>Date</label>
            <input
              type='date'
              className='text-lg w-full outline-none border px-2 py-1 '
              {...register("datePublished", { required: true })}
            />
            {errors.datePublished && (
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
            post news
          </span>
        </button>
      </div>
    </form>
  );
};

export default NewsForm;
