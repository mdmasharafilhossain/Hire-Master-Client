import toast from "react-hot-toast";
import { saveEventBookingsInDb, saveInterestedEventInDb } from "../../api";
import useAuth from "../Hooks/Auth/useAuth";
import useAllFairEvents from "../Hooks/FairEvents/useAllFairEvents";
import AllFairEventsCard from "./AllFairEventsCard";
import Loader from "../Loader/Loader";
import useFairRegister from "../Hooks/FairRegister/useFairRegister";

const AllFairEvents = () => {
  const { user } = useAuth();

  const { jobFairData, isFetching } = useAllFairEvents();
  const { fairUser } = useFairRegister();

  const handleInterestedEvent = async slug => {
    try {
      const res = await saveInterestedEventInDb(slug, user?.email);
      if (res.data.result.insertedId) {
        toast.success(`${slug} added as interested event.`);
      }
    } catch (error) {
      
      toast.error(error.response.data.message);
    }
  };

  const handleEventJoining = async slug => {
    try {
      const res = await saveEventBookingsInDb(slug, fairUser);
      if (res.data.result.insertedId) {
        toast.success(`Event ${slug} booked successfully.`);
      }
    } catch (error) {
      
      toast.error(error.response.data.message);
    }
  };

  if (!user || isFetching) {
    return <Loader />;
  }

  return (
    <div>
      <div className="w-full h-[200px] bg-[url('https://i.ibb.co/qB6FF2P/16683661-5786039.jpg')] bg-cover bg-center">
        <div className='w-full h-full flex flex-col   justify-center items-center backdrop-brightness-75'>
          <h2 className='text-center font-bold '>
            <span className='text-2xl text-white '>
              Events specially curated for you.
            </span>{" "}
            <br /> Never miss out an event that matches your interest!
          </h2>
        </div>
      </div>

      <div className='mt-5 justify-center px-2 md:px-5 grid mx-auto max-w-7xl  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 '>
        {jobFairData.length > 0 &&
          jobFairData.map((event, idx) => (
            <div key={idx} className='flex justify-center'>
              <AllFairEventsCard
                event={event}
                handleInterestedEvent={handleInterestedEvent}
                handleEventJoining={handleEventJoining}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllFairEvents;
