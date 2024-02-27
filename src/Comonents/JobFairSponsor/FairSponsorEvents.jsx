import { useQuery } from "@tanstack/react-query";
import { getFairSponsorEventsFromDb } from "../../api";
import useAuth from "../Hooks/Auth/useAuth";
import FairSponsorEventCard from "./FairSponsorEventCard";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const FairSponsorEvents = () => {
  const { user } = useAuth();

  const { data: events = [], refetch, isFetching } = useQuery({
    queryKey: ["sponsor-events", user?.email],
    queryFn: async () => {
      const res = await getFairSponsorEventsFromDb(user?.email);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (!user || isFetching) {
    return <Loader />;
  }

  // console.log(events);
  return (
    <>
      {events.length > 0 && (
        <div className='rounded-2xl space-y-5 md:space-y-5 shadow-md px-3 sm:px-6 md:px-16 lg:px-20 py-8 sm:py-12'>
          {events.map(event => (
            <div key={event._id}>
              <FairSponsorEventCard event={event} refetch={refetch} />
            </div>
          ))}
        </div>
      )}
      {events.length === 0 && (
        <div className='flex items-center gap-x-5 justify-center mx-auto'>
          <InfoOutlineIcon color='red' w={6} h={6} />
          <div className='text-start text-2xl font-medium'>
            <span className=' text-red-500'>No events created by you! </span>
            <br />
            <Link to='/job-fair/profile/sponsor-create-event'>
              <span className='text-teal-500 underline'>
                Please create event.
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FairSponsorEvents;
