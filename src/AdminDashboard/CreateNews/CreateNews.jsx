import { saveNewsInDb } from "../../api";
import toast from "react-hot-toast";
import NewsForm from "./NewsForm";
import useAuth from "../../Comonents/Hooks/Auth/useAuth";

const CreateNews = () => {
  const onSubmit = async (data, reset) => {
    try {
      const res = await (data);
      if (res.status === 200) {
        toast.success("News created successfully.");
      }
    } catch (error) {
      toast.error(error.message);
    }
    reset();
  };

  const { user } = useAuth();

  return (
    <div className='pl-5'>
      <h2 className='text-center font-bold mt-6 text-2xl md:text-4xl'>
        Create <span className='text-[#FF3811]'>Tech News.</span>
      </h2>
      <hr className='my-2' />
      <NewsForm onSubmit={onSubmit} user={user} />
    </div>
  );
};

export default CreateNews;
