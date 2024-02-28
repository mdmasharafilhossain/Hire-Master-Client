import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import { getInterestedEventsFromDb } from "../../../api";

const useJobSeekersInterestedEvents = () => {
  const { user } = useAuth();

  const { data: interestedEvents = [], isFetching, refetch } = useQuery({
    queryKey: ["interested-events"],
    queryFn: async () => {
      const res = await getInterestedEventsFromDb(user?.email);
      return res.data;
    },
    enabled: !!user,
  });

  return { interestedEvents, isFetching, refetch };
};

export default useJobSeekersInterestedEvents;
