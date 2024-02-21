import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleTechNewsFromDb, updateNewsInDb } from "../../api";
import toast from "react-hot-toast";
import Loader from "../../Comonents/Loader/Loader";
import NewsUpdateForm from "./NewsUpdateForm";
import { useQuery } from "@tanstack/react-query";

const UpdateNews = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: newsDetails = {}, isFetching, isLoading } = useQuery({
    queryKey: ["singleNewsDetails"],
    queryFn: async () => {
      const res = await getSingleTechNewsFromDb(slug);
      return res.data;
    },
  });

  if (isFetching) {
    return <Loader />;
  }
  if (isLoading) {
    return <Loader />;
  }
  const onSubmit = async data => {
    try {
      const res = await updateNewsInDb(slug, data);
      if (res.data) {
        navigate("/AdminDashboard/all-news");
        toast.success(`News ${newsDetails?.title} updated.`);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className='pl-5'>
      <h2 className='text-center font-bold mt-6 text-2xl md:text-4xl'>
        Update <span className='text-[#FF3811]'>Tech News.</span>
      </h2>
      <hr className='my-2' />
      <NewsUpdateForm onSubmit={onSubmit} newsDetails={newsDetails} />
    </div>
  );
};

export default UpdateNews;
