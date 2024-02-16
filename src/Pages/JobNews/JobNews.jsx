import { useEffect, useState } from "react";
import Navbar from "../../Comonents/Navbar/Navbar";
import NewsCard from "../../Comonents/JobNews/NewsCard";
import { Center } from "@chakra-ui/react";

const JobNews = () => {
  const [techNews, setTechNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/technews.json");
        const data = await response.json();
        setTechNews(data);
      } catch (error) {
        console.error("Error fetching tech news data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(techNews);
  return (
    <>
      <Navbar />
      <div className='mx-auto my-16 md:my-28 max-w-7xl '>
        <div className='text-center space-y-1'>
          <p className='font-bold tracking-tighter'>Read, Learn, Grow</p>
          <h2 className='text-3xl md:text-5xl font-bold '>
            Harmonizing Careers and Job Trends
          </h2>
          {/* <p className='text-lg font-medium'>
            Discover the Melody of Possibilities in the Job-Verse.Climbing the
            Professional Peaks with Insights, Trends, and Opportunities
          </p> */}
        </div>

        <div className='mt-16 grid mx-auto   justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 '>
          {techNews.map((news, idx) => (
            <Center key={idx}>
              <NewsCard news={news} />
            </Center>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobNews;
