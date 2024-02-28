import { useQuery } from "@tanstack/react-query";
import { getFairSponsorBookedEventFromDb } from "../../../api";
import useAuth from "../Auth/useAuth";

const useFairSponsorBookedEvents = () => {
  const { user } = useAuth();
  const { data: bookedEvents = [], isFetching, refetch } = useQuery({
    queryKey: ["sponsors-event-bookings"],
    queryFn: async () => {
      const res = await getFairSponsorBookedEventFromDb(user?.email);
      return res.data;
    },
  });
  return { bookedEvents, isFetching, refetch };
};

export default useFairSponsorBookedEvents;
