import { useQuery } from "@tanstack/react-query";
import { getFairSponsorEventsFromDb } from "../../../api";
import useAuth from "../Auth/useAuth";

const useFairSponsorAllEvents = () => {
  const { user } = useAuth();
  const { data: sponsorEvents = [], refetch, isFetching } = useQuery({
    queryKey: ["sponsor-events", user?.email],
    queryFn: async () => {
      const res = await getFairSponsorEventsFromDb(user?.email);
      return res.data;
    },
  });

  return { sponsorEvents, isFetching, refetch };
};

export default useFairSponsorAllEvents;
