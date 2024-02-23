import { useQuery } from "@tanstack/react-query";
import { getFairSponsorEventsFromDb } from "../../api";
import useAuth from "../Hooks/Auth/useAuth";
import FairSponsorEventCard from "./FairSponsorEventCard";

const FairSponsorEvents = () => {
  const { user } = useAuth();

  const { data: events = [], refetch } = useQuery({
    queryKey: ["sponsor-events"],
    queryFn: async () => {
      const res = await getFairSponsorEventsFromDb(user?.email);
      return res.data;
    },
    enabled: !!user,
  });

  console.log(events);
  return (
    <div>
      <div className='rounded-2xl space-y-5 md:space-y-5 shadow-md px-3 sm:px-6 md:px-16 lg:px-20 py-8 sm:py-12'>
        {events.length > 0 &&
          events.map(event => (
            <div key={event._id}>
              <FairSponsorEventCard event={event} refetch={refetch} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FairSponsorEvents;
