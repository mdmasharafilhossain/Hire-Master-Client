import { useQuery } from "@tanstack/react-query";
import { getAdminTechNewsFromDb } from "../../api";
import Loader from "../../Comonents/Loader/Loader";
import AdminNewsCard from "./AdminNewsCard";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const AdminTechNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { isFetching, data, refetch } = useQuery({
    queryKey: ["adminNews", currentPage, itemsPerPage],
    queryFn: async ({ queryKey }) => {
      const [_key, page, limit] = queryKey;
      const res = await getAdminTechNewsFromDb(page, limit);
      return res.data;
    },
  });

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    refetch();
  };
  const totalPages = Math.ceil(data?.totalNewsCount / itemsPerPage) || 1;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='pl-5'>
      <h2 className='text-center font-bold mt-6 text-2xl md:text-4xl'>
        All <span className='text-[#FF3811]'>Tech News.</span>
      </h2>
      <hr className='my-5' />

      {isFetching ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <div className='rounded-2xl space-y-3 md:space-y-5 shadow-md px-3 sm:px-6 md:px-16 lg:px-20 py-8 sm:py-12'>
            {data?.news.length > 0 &&
              data.news.map(news => (
                <div key={news._id}>
                  <AdminNewsCard news={news} refetch={refetch} />
                </div>
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
        </>
      )}
    </div>
  );
};

export default AdminTechNews;
