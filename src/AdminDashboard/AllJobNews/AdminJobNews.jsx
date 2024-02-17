import { useQuery } from "@tanstack/react-query";
import { getJobNewsFromDb } from "../../api";
import Loader from "../../Comonents/Loader/Loader";
import AdminNewsCard from "./AdminNewsCard";

const AdminJobNews = () => {
  const { isFetching, data } = useQuery({
    queryKey: ["adminJobs"],
    queryFn: async () => {
      const res = await getJobNewsFromDb();
      return res.data;
    },
  });

  if (isFetching) {
    return <Loader />;
  }
  // console.log(data);

  return (
    <div className='pl-5'>
      <h2 className='text-center font-bold mt-6 text-2xl md:text-4xl'>
        All <span className='text-[#FF3811]'>Job News.</span>
      </h2>
      <hr className='my-5' />
      <div className='rounded-2xl space-y-3 md:space-y-5 shadow-md px-3 sm:px-6 md:px-16 lg:px-20 py-8 sm:py-12'>
        {data.length > 0 &&
          data.map(news => (
            <div key={news._id}>
              <AdminNewsCard news={news} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminJobNews;
