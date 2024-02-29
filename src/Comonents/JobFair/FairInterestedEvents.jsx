import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/Auth/useAuth";
import {
  deleteInterestedEventInDb,
  getInterestedEventsFromDb,
} from "../../api";
import Loader from "../Loader/Loader";
import FairInterestedEventCard from "./FairInterestedEventCard";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const FairInterestedEvents = () => {
  const { user } = useAuth();
  const { data: interested_events = [], isFetching, refetch } = useQuery({
    queryKey: ["job_seekers_bookings"],
    queryFn: async () => {
      const res = await getInterestedEventsFromDb(user?.email);
      return res.data;
    },
    enabled: !!user,
  });

  const handleInterestedEventRemove = async slug => {
    Swal.fire({
      title: `Are you sure to remove ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, remove`,
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const res = await deleteInterestedEventInDb(slug, user.email);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${slug} removed from interested event.`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          toast.error(error.message);
          console.log(error.message);
        }
      }
    });
  };

  if (!user || isFetching) {
    return <Loader />;
  }

  return (
    <>
      {interested_events.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 md:gap-x-5 mx-auto'>
          {interested_events.map(event => (
            <FairInterestedEventCard
              key={event._id}
              event={event}
              handleInterestedEventRemove={handleInterestedEventRemove}
            />
          ))}
        </div>
      )}

      {interested_events.length === 0 && (
        <div className='flex items-center flex-col gap-y-5 justify-center'>
          <InfoOutlineIcon color='red' w={10} h={8} />
          <div className='text-center text-2xl font-semibold'>
            <span className=' text-red-500'>No event added as interested!</span>
            <br />
            <Link to='/job-fair'>
              <span className='text-emerald-500 underline'>
                Add events in your interest list.
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FairInterestedEvents;
