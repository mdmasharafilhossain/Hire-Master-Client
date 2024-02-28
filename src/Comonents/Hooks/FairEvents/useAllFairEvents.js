import { useQuery } from "@tanstack/react-query";
import { getFairEventsFromDb } from "../../../api";
import useAuth from "../Auth/useAuth";

const useAllFairEvents = () => {
  const { user } = useAuth();
  const { data: jobFairData = [], isFetching, refetch } = useQuery({
    queryKey: ["all-events"],
    queryFn: async () => {
      const res = await getFairEventsFromDb();
      return res.data;
    },
    enabled: !!user,
  });
  return { jobFairData, isFetching, refetch };
};

export default useAllFairEvents;
