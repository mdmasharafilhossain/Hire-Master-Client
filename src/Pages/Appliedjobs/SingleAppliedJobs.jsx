import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";

const SingleAppliedJobs = ({ job, refetch }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();
  // console.log(job.job_title);
  const email = user?.email;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(
          `/showapplied-jobs/${email}`
        );

        if (res.data.deletedCount > 0) {
          console.log("kjnfs");
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };
  return (
    <div className="my-4 shadow-lg shadow-slate-200">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">{job.job_title}</h2>
        <p className="text-gray-600">{job.company_name}</p>
        <p className="text-gray-700 mt-4">{job.job_description}</p>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-gray-600">{job.job_role}</p>
            <p className="text-gray-600">{job.job_location}</p>
          </div>
          <p className="text-blue-500 font-semibold">${job.salary}/mo</p>
        </div>
        <div className="mt-4 flex gap-5">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Check Status
          </button>
          <button
            onClick={() => handleDelete(job._id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Cancel Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleAppliedJobs;
