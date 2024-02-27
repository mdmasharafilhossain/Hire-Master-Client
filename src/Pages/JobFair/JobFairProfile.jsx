import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Comonents/Hooks/Auth/useAuth";
import { getFairRegisteredUser } from "../../api";

const JobFairProfile = () => {
  const { user } = useAuth();

  const { data, isFetching } = useQuery({
    queryKey: ["fairRegister"],
    queryFn: async () => {
      const res = await getFairRegisteredUser(user?.email);
      return res.data;
    },
  });
  console.log(data);
  return (
    <>
      <h2>Job fair profile</h2>
    </>
  );
};

export default JobFairProfile;
