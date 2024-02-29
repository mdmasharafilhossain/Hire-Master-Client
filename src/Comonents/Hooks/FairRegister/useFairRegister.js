import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import { getFairRegisteredUser } from "../../../api";

const useFairRegister = () => {
  const { user } = useAuth();

  const { data: fairUser = {}, isFetching, refetch } = useQuery({
    queryKey: ["fairRegister"],
    queryFn: async () => {
      const res = await getFairRegisteredUser(user?.email);
      return res.data;
    },
    enabled: !!user,
  });

  return { fairUser, isFetching, refetch };
};

export default useFairRegister;
