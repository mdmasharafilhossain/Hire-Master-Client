import { useQuery } from "@tanstack/react-query";
import {
  deleteJobSeekersEventBookingInDb,
  getJobSeekersEventBookings,
} from "../../api";
import useAuth from "../Hooks/Auth/useAuth";

import JobFairBookingHistoryCard from "./JobFairBookingHistoryCard";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

const JobFairBookingHistory = () => {
  const { user } = useAuth();
  const { data: event_bookings = [], isFetching, refetch } = useQuery({
    queryKey: ["job_seekers_bookings"],
    queryFn: async () => {
      const res = await getJobSeekersEventBookings(user?.email);
      return res.data;
    },
    enabled: !!user,
  });
  // console.log(event_bookings);

  const handleEventBookingRemove = async slug => {
    console.log(slug);

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
            refetch();
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
          console.log(error.message);
        }
      }
    });
  };

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className='space-y-5'>
      {event_bookings.map(event => (
        <div key={event._id}>
          <JobFairBookingHistoryCard
            event={event}
            handleEventBookingRemove={handleEventBookingRemove}
          />
        </div>
      ))}
    </div>
  );
};

export default JobFairBookingHistory;
