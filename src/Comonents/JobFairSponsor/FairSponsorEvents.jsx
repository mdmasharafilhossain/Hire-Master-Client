import FairSponsorEventCard from "./FairSponsorEventCard";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import useFairSponsorAllEvents from "../Hooks/FairSponsorAllEvents/useFairSponsorAllEvents";

const FairSponsorEvents = () => {
  const { sponsorEvents, isFetching, refetch } = useFairSponsorAllEvents();

  if (isFetching) {
    return <Loader />;
  }

  // console.log(sponsorEvents);
  return (
    <>
      {sponsorEvents.length > 0 && (
        <div className='rounded-2xl space-y-5 md:space-y-5 shadow-md px-3 sm:px-6 md:px-16 lg:px-20 py-8 sm:py-12'>
          {sponsorEvents.map(event => (
            <div key={event._id}>
              <FairSponsorEventCard event={event} refetch={refetch} />
            </div>
          ))}
        </div>
      )}
      {sponsorEvents.length === 0 && (
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
