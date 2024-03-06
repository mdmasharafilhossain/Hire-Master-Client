import { Button, Center } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getUserTechNewsFromDb } from "../../api";
import Loader from "../../Comonents/Loader/Loader";
import NewsCard from "../../Comonents/TechNews/NewsCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Navbar2 from "../../Comonents/Navbar/Navbar2";

const TechNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { isFetching, data, refetch } = useQuery({
    queryKey: ["news", currentPage, itemsPerPage],
    queryFn: async ({ queryKey }) => {
      const [_key, page, limit] = queryKey;
      const res = await getUserTechNewsFromDb(page, limit);
      return res.data;
    },
  });

  if (isFetching) {
    return <Loader />;
  }
  // console.log(data);
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    refetch();
  };
  const totalPages = Math.ceil(data?.totalNewsCount / itemsPerPage) || 1;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <>
      <Navbar2 />
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
          {data?.news.map((news, idx) => (
            <Center key={idx}>
              <NewsCard news={news} />
            </Center>
          ))}
        </div>
        <div className='flex items-center justify-center my-5 gap-x-5'>
          <Button
            colorScheme='orange'
            variant='outline'
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage <= 1}
          >
            <ArrowLeftIcon />
          </Button>

          {pageNumbers.map(pageNumber => (
            <Button
              fontWeight='bold'
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              isDisabled={pageNumber === currentPage}
            >
              {pageNumber}
            </Button>
          ))}

          <Button
            colorScheme='orange'
            variant='outline'
            onClick={() => handlePageChange(currentPage + 1)}
            isDisabled={currentPage === totalPages}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default TechNews;
