import { Outlet } from "react-router-dom";

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
        <div className='max-w-7xl px-2  mx-auto md:flex items-start w-full gap-x-5 md:gap-x-10 lg:gap-x-28 pt-10 md:pt-24'>
          <div className='md:w-1/4 flex flex-col items-center'>
            <FairProfileSidebar />
          </div>
          <div className='w-full'>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default JobFairLayout;
