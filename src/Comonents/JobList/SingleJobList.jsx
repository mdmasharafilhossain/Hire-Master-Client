import PropTypes from "prop-types";
import { LuMapPin } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";

const SingleJobList = ({
  companyLogo,
  jobName,
  location,
  time,
  salary,
  deadline,
}) => {
  return (
    <div className="px-10 py-5 flex flex-col md:flex-row justify-between gap-2 border shadow-xl text-left my-7 ">
      {/* ----------Company logo------------ */}
      <figure className="">
        <img src={companyLogo} alt="company logo" className="" />
      </figure>

      {/* ----------Job OverView------------ */}
      <div className="">
        <h1 className="text-xl mb-3 font-semibold">{jobName}</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <p className="flex items-center gap-2">
            <LuMapPin className="text-[#FF3811]" /> <span>{location}</span>
          </p>
          <p className="flex items-center gap-2">
            <IoMdTime className="text-[#FF3811]" /> <span>{time}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaRegMoneyBillAlt className="text-[#FF3811]" />{" "}
            <span>{salary}</span>
          </p>
        </div>
      </div>

      {/* ------------Apply and DeadLine------------- */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <button className="btn">
            <CiHeart className="text-[#FF3811]" /> Details
          </button>
          <button className="btn bg-[#FF3811] text-white">Apply Now</button>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-[#FF3811]" />{" "}
          <span>Deadline: {deadline}</span>
        </div>
      </div>
    </div>
  );
};

SingleJobList.propTypes = {
  companyLogo: PropTypes.string.isRequired,
  jobName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
};

export default SingleJobList;
