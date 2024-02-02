import { TbLoaderQuarter } from "react-icons/tb";

const Loader = () => {
  return (
    <div className='flex justify-center min-h-[30vh] md:min-h-[60vh] items-center animate-spin-reverse'>
      <TbLoaderQuarter size={50} className='animate-spin text-[#FF3811]' />
    </div>
  );
};

export default Loader;
