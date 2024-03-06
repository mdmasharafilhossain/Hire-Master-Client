import PropTypes from "prop-types";
import { LuMapPin } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import useNotifications from "../Hooks/Notifications/getNotifications";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../api";
import useFetchData from "../Hooks/UseFetchData/useFetchData";

const SingleJobList = ({ job }) => {
  const [isManager, setIsManager] = useState(0);
  const {
    selectedChat,
    setSelectedChat,
    user,
    notification,
    setNotification,
  } = useContext(AuthContext);
  const email = user?.email;
  let hiring_manager = false;
  if (email === job.hiring_manager_email) {
    hiring_manager = true;
  }

  const {
    _id,
    job_title,
    company_name,
    job_role,
    salary,
    job_time,
    skills,
    job_description,
    hiring_manager_name,
    hiring_manager_photo,
    hiring_manager_email,
    responsibilities,
    benefits,
    qualification,
    job_location,
  } = job;

  // user profile with context email
  const { data: userProfile = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await getUserInfo(email);
      console.log(res);
      return res.data;
    },
  });

  const appliedJobs = {
    job_id: _id,
    user_id: userProfile._id,
    name: userProfile.name,
    email,
    job_title,
    company_name,
    job_role,
    salary,
    job_time,
    skills,
    job_description,
    hiring_manager_name,
    hiring_manager_photo,
    hiring_manager_email,
    responsibilities,
    benefits,
    qualification,
    job_location,
  };

  const AxiosPublic = UseAxiosPublic();

  const handleAppliedJobs = () => {
    AxiosPublic.post("/users-appliedjobs", appliedJobs)
      .then((res) => {
        console.log("add to database");
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: " Successfull Applied",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          toast.error(`${res.data.message}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const api = `/notifications/${email}`;
  const key = "applications";

  const [notifications] = useNotifications(api, key);

  // -----------detecting the route for user/manager------------
  const { data: profile, loading, refetch } = useFetchData(
    `/managerProfile/${email}`,
    "profile"
  );
  if (!loading) {
    refetch();
  }
  console.log(profile);
  let profileRoute = false;
  if (user?.email === profile?.email || user?.email === 'admin@gmail.com') {
    profileRoute = true;
  }
  // -------------end--------------------------

  return (
    <div className="px-10 py-2 md:py-5 mb-3 flex flex-col md:flex-row justify-between gap-y-1 md:gap-y-0 md:gap-2 border text-center md:text-left hover:shadow-xl">
      <Toaster position="top-right" reverseOrder={false} />
      {/* ----------Company logo------------ */}
      <figure className=" md:flex items-center justify-center ">
        <img
          src={job.company_logo}
          alt="company logo"
          className="w-16 mx-auto"
        />
        <p></p>
      </figure>
      {/* ----------Job OverView------------ */}
      <div className="space-y-1 md:space-y-3 flex flex-col  md:items-start md:w-96">
        <h1 className="text-lg md:text-xl font-semibold">{job.job_title}</h1>
        <h1 className="text-sm md:text-md font-medium">({job.company_name})</h1>
        <hr className="w-full md:hidden " />

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
          <p className="flex items-baseline gap-2 text-justify">
            <LuMapPin className="text-[#FF3811]" />
            <span className=" ">{job.job_location}</span>
          </p>
          <p className="flex items-center gap-2">
            <IoMdTime className="text-[#FF3811]" /> <span>{job.job_time}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaRegMoneyBillAlt className="text-[#FF3811]" />
            <span>{job.salary}</span>
          </p>
        </div>
      </div>

      {/* ------------Apply and DeadLine------------- */}

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-center gap-2">
          <Link
            className="btn btn-sm  btn-warning"
            to={`/jobDetails/${job._id}`}
          >
            <button>
              {/* <CiHeart className="text-[#FF3811]" />  */}
              Details
            </button>
          </Link>
          {!hiring_manager ? (
            <>
              <button
                onClick={() => {
                  handleAppliedJobs();
                }}
                hidden={profileRoute}
                className="btn btn-sm  bg-[#FF3811] text-white"
              >
                Apply Now
              </button>
            </>
          ) : (
            <>
              <Link
                to="/applicants"
                className="btn btn-sm  bg-[#FF3811] text-white"
              >
                Applicants ({notifications.length})
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaCalendarAlt className="text-[#FF3811]" />
          <span>Deadline: {job.job_posting_date}</span>
        </div>
      </div>
    </div>
  );
};

SingleJobList.propTypes = {
  job: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    job_title: PropTypes.string.isRequired,
    job_location: PropTypes.string.isRequired,
    job_time: PropTypes.string.isRequired,
    salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    job_posting_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleJobList;
