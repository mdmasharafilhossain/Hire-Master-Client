import { useQuery } from "@tanstack/react-query";
import { getJobSeekersEventBookingsFromDb } from "../../../api";
import useAuth from "../Auth/useAuth";

const useJobSeekersEventBookings = () => {
  const { user } = useAuth();
  const { data: eventBookings = [], isFetching, refetch } = useQuery({
    queryKey: ["job_seekers_bookings"],
    queryFn: async () => {
      const res = await getJobSeekersEventBookingsFromDb(user?.email);
      return res.data;
    },
  });

  return { eventBookings, isFetching, refetch };
};

export default useJobSeekersEventBookings;
