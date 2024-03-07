import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TbSlash } from "react-icons/tb";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";
import { getSingleTechNewsFromDb } from "../../api";

const NewsDetails = () => {
  const [newsDetails, setNewsDetails] = useState(null);
  const { slug } = useParams();
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const fetchNews = async () => {
        setLoading(true);
        const res = await getSingleTechNewsFromDb(slug);
        setNewsDetails(res.data);
        setLoading(false);
      };
      fetchNews();
    } catch (error) {
      toast.error(error?.message);
    }
  }, [slug]);

  if (loading) {
    <Loader />;
  }

  return (
    <div className='max-w-7xl mx-auto my-14 md:my-24'>
      <div className='flex items-center gap-x-1 text-[#FF3811] font-semibold md:text-xl px-4 md:px-10'>
        <div className='flex items-center'>
          <Link to='/'>Home</Link>
          <TbSlash />
        </div>
        <div className='flex items-center'>
          <Link to='/tech-news'>tech-news</Link>
          <TbSlash />
        </div>
        <Link>{newsDetails?.title.slice(0, 10)}...</Link>
      </div>
      <div>
        <h2 className='text-3xl px-4 md:px-10 md:text-5xl text-center font-medium my-10'>
          {newsDetails?.title}
        </h2>
        <div className='w-full'>
          <img
            className='w-3/4 mx-auto rounded-2xl'
            src={newsDetails?.imageUrl}
            alt=''
          />
        </div>
        <div className='px-4 mt-10 mb-5 md:px-10'>
          <h3 className='text-xl font-medium md:text-3xl'>
            {newsDetails?.subtitle}
          </h3>
          <p className='text-base md:text-lg text-justify my-5'>
            {newsDetails?.content}
          </p>
        </div>
        <hr />
        <div className='font-normal px-4 md:px-10 mt-5'>
          <p>Author-{newsDetails?.author}</p>
          <p className='italic'>Published on-{newsDetails?.datePublished}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
