import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const useFetchData = (api, key) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();

  const {
    data: data = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: [key, user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(api);
      return res.data;
    },
  });
  return { data, loading, refetch };
};

export default useFetchData;
