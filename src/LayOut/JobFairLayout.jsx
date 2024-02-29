import { Outlet } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Comonents/Hooks/Auth/useAuth";
import { getFairRegisteredUser } from "../api";
import FairHeader from "../Comonents/JobFair/FairHeader";
import Loader from "../Comonents/Loader/Loader";
import FairProfileSidebar from "../Comonents/JobFair/FairProfileSidebar";
import { useEffect } from "react";

const JobFairLayout = () => {
  const {
    user,
    stateProfilePicture,
    stateFairRegisterName,
    setStateFairRegisterName,
  } = useAuth();

  const { data, isFetching } = useQuery({
    queryKey: ["fairRegister", user?.email],
    queryFn: async () => {
      const res = await getFairRegisteredUser(user?.email);
      return res.data;
    },
    enabled: !!user,
  });

  useEffect(() => {
    if (user && !isFetching) {
      setStateFairRegisterName(data?.fullname);
    }
  }, [data?.fullname, setStateFairRegisterName, user, isFetching]);

  if (!user || isFetching) {
    return <Loader />;
  }

  console.log(stateProfilePicture);
  console.log(stateFairRegisterName);
  console.log(data);
  return (
    <>
      <FairHeader />

      <div className='max-w-7xl px-2  mx-auto md:flex items-start gap-x-5 md:gap-x-10 lg:gap-x-28 pt-10'>
        <div className='w-full md:w-4/12 flex flex-col  space-y-5'>
          <Box className='md:block hidden'>
            <Image
              src={stateProfilePicture[0]?.url}
              alt='profile picture'
              roundedTop={20}
            />
            <div className='w-full px-2 py-5 shadow-md'>
              <div className='flex justify-center  gap-x-5 md:gap-x-0 md:flex-col'>
                <Box fontSize={22} fontWeight={"medium"}>
                  {stateFairRegisterName}
                </Box>

                <Box fontSize={24} fontWeight={"medium"} color='red.500'>
                  {data?.userType}
                </Box>
              </div>
            </div>
          </Box>
          <FairProfileSidebar jobFair_register={data} />
        </div>
        <div className='w-full mt-20 md:mt-0'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default JobFairLayout;
