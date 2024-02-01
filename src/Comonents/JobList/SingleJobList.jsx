import PropTypes from "prop-types";
import { LuMapPin } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleJobList = ({ job }) => {
  return (
    <div className='px-10 py-5 flex flex-col md:flex-row justify-between gap-2 border shadow-xl text-left'>
      {/* ----------Company logo------------ */}
      <figure className='flex items-center justify-center'>
        <img src={job.company_logo} alt='company logo' className='w-12' />
      </figure>

      {/* ----------Job OverView------------ */}
      <div className=''>
        <h1 className='text-xl mb-3 font-semibold'>{job.job_title}</h1>
        <h1 className='text-md mb-3 font-medium'>({job.company_name})</h1>
        <div className='flex flex-col md:flex-row md:items-center gap-5'>
          <p className='flex items-center gap-2'>
            <LuMapPin className='text-[#FF3811]' />{" "}
            <span>{job.job_location}</span>
          </p>
          <p className='flex items-center gap-2'>
            <IoMdTime className='text-[#FF3811]' /> <span>{job.job_time}</span>
          </p>
          <p className='flex items-center gap-2'>
            <FaRegMoneyBillAlt className='text-[#FF3811]' />{" "}
            <span>{job.salary}</span>
          </p>
        </div>
      </div>

      {/* ------------Apply and DeadLine------------- */}
      <div className='flex flex-col gap-3'>
        <div className='flex gap-2'>
          <Link className='btn btn-warning' to={`/jobDetails/${job._id}`}>
            <button>
              {/* <CiHeart className="text-[#FF3811]" />  */}
              Details
            </button>
          </Link>
          <button className='btn bg-[#FF3811] text-white'>Apply Now</button>
        </div>
        <div className='flex items-center gap-2'>
          <FaCalendarAlt className='text-[#FF3811]' />{" "}
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
