import Navbar from "../../Comonents/Navbar/Navbar";
import { Center } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getTechNewsFromDb } from "../../api";
import Loader from "../../Comonents/Loader/Loader";
import NewsCard from "../../Comonents/JobNews/NewsCard";

const TechNews = () => {
  const { isFetching, data } = useQuery({
    queryKey: ["adminJobs"],
    queryFn: async () => {
      const res = await getTechNewsFromDb();
      return res.data;
    },
  });

  if (isFetching) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className='mx-auto my-16 md:my-28 max-w-7xl '>
        <div className='text-center space-y-1'>
          <p className='font-bold tracking-tighter text-[#FF3811]'>
            Read, Learn, Grow
          </p>
          <h2 className='text-3xl md:text-5xl font-bold '>
            Harmonizing Careers and Job Trends
          </h2>
          {/* <p className='text-lg font-medium'>
            Discover the Melody of Possibilities in the Job-Verse.Climbing the
            Professional Peaks with Insights, Trends, and Opportunities
          </p> */}
        </div>

        <div className='mt-16 grid mx-auto   justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 '>
          {data.map((news, idx) => (
            <Center key={idx}>
              <NewsCard news={news} />
            </Center>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechNews;
