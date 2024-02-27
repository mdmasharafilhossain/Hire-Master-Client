import { useQuery } from "@tanstack/react-query";
import { getFairSponsorBookedEventFromDb } from "../../api";
import Loader from "../Loader/Loader";
import useAuth from "../Hooks/Auth/useAuth";

const FairSponsorEventBookings = () => {
  const { user } = useAuth();

  const { data, isFetching } = useQuery({
    queryKey: ["sponsors-event-bookings"],
    queryFn: async () => {
      const res = await getFairSponsorBookedEventFromDb(user?.email);
      return res.data;
    },
  });

  // if (isFetching) {
  //   return <Loader />;
  // }

  console.log(data);

  return <div>FairSponsorEventBookings</div>;
};

export default FairSponsorEventBookings;
