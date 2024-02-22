// import { Outlet } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../Comonents/Hooks/Auth/useAuth";
// import { getFairRegisteredUser } from "../../api";
// import FairHeader from "../../Comonents/JobFair/FairHeader";
// import Loader from "../../Comonents/Loader/Loader";
// import FairProfileSidebar from "../../Comonents/JobFair/FairProfileSidebar";

const JobFairProfile = () => {
  // const { user } = useAuth();

  // const { data, isFetching } = useQuery({
  //   queryKey: ["fairRegister"],
  //   queryFn: async () => {
  //     const res = await getFairRegisteredUser(user?.email);
  //     return res.data;
  //   },
  // });

  return (
    <>
      <h2>Job Fair profile</h2>
    </>
  );
};

export default JobFairProfile;
