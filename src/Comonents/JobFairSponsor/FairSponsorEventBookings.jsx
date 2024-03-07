import Loader from "../Loader/Loader";
import useAuth from "../Hooks/Auth/useAuth";
import FairSponsorBookedEventCard from "./FairSponsorBookedEventCard";
import useFairSponsorBookedEvents from "../Hooks/FairSponsorBookedEvents/useFairSponsorBookedEvents";

const FairSponsorEventBookings = () => {
  const { user } = useAuth();

  const { bookedEvents, isFetching } = useFairSponsorBookedEvents();

  if (!user || isFetching) {
    return <Loader />;
  }

  
  // EmailIcon
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-y-0 md:gap-x-5 justify-items-center'>
      {bookedEvents.length > 0 &&
        bookedEvents.map(event => (
          <FairSponsorBookedEventCard key={event._id} event={event} />
        ))}
    </div>
  );
};

export default FairSponsorEventBookings;
