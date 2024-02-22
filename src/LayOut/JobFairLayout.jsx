import { Outlet } from "react-router-dom";
import { Box, Divider, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Comonents/Hooks/Auth/useAuth";
import { getFairRegisteredUser } from "../api";
import FairHeader from "../Comonents/JobFair/FairHeader";
import Loader from "../Comonents/Loader/Loader";
import FairProfileSidebar from "../Comonents/JobFair/FairProfileSidebar";

const JobFairLayout = () => {
  const { user } = useAuth();
  // const email = "abc@debugger.com";

  const { data, isFetching } = useQuery({
    queryKey: ["fairRegister"],
    queryFn: async () => {
      const res = await getFairRegisteredUser(user?.email);
      return res.data;
    },
    enabled: !!user,
  });

  console.log(data);
  return (
    <>
      <FairHeader />
      {isFetching ? (
        <Loader />
      ) : (
        <div className='max-w-7xl px-2  mx-auto md:flex items-start gap-x-5 md:gap-x-10 lg:gap-x-28 pt-10'>
          <div className='w-full md:w-4/12 flex flex-col items-center space-y-5'>
            <Box className='md:block hidden'>
              <Image src={data?.profilePicture} alt='Dan Abramov' />
              <div className='w-full px-5 py-5 shadow-md'>
                <div className='flex justify-center  gap-x-5 md:gap-x-0 md:flex-col'>
                  <Box fontSize={26} fontWeight={"medium"}>
                    {data?.fullname}
                  </Box>

                  <Box fontSize={26} fontWeight={"medium"} color='red.500'>
                    {data?.userType}
                  </Box>
                </div>
              </div>
            </Box>

            <FairProfileSidebar />
          </div>
          <div className='w-full mt-10'>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default JobFairLayout;
