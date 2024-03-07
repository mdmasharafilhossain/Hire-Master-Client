import { deleteJobSeekersEventBookingInDb } from "../../api";
import useAuth from "../Hooks/Auth/useAuth";

import JobFairBookingHistoryCard from "./JobFairBookingHistoryCard";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobSeekersBookings } from "../../reducers/jobSeekersBookingSlice";

const JobFairBookingHistory = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const { bookings: eventBookings, status } = useSelector(
    state => state.jobSeekerBookings
  );

  useEffect(() => {
    dispatch(fetchJobSeekersBookings(user?.email));
  }, [dispatch, user?.email]);

  

  const handleEventBookingRemove = async slug => {
    

    Swal.fire({
      title: `Are you sure to cancel ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, cancel`,
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const res = await deleteJobSeekersEventBookingInDb(slug, user.email);
          if (res.data.deletedCount > 0) {
            dispatch(fetchJobSeekersBookings(user?.email));
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Event ${slug} cancelled.`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          toast.error(error.message);
         
        }
      }
    });
  };

  if (!user || status === "loading") {
    return <Loader />;
  }

  return (
    <div className='space-y-5'>
      {eventBookings.length > 0 &&
        eventBookings.map(event => (
          <div key={event._id}>
            <JobFairBookingHistoryCard
              event={event}
              handleEventBookingRemove={handleEventBookingRemove}
            />
          </div>
        ))}
      {eventBookings.length === 0 && (
        <div className='flex items-center flex-col gap-y-5 justify-center'>
          <InfoOutlineIcon color='red' w={10} h={8} />
          <div className='text-center text-2xl font-semibold'>
            <span className=' text-red-500'>No event booked! </span>
            <br />
            <Link to='/job-fair'>
              <span className='text-emerald-500 underline'>
                Please Book any event you want to join.
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobFairBookingHistory;
