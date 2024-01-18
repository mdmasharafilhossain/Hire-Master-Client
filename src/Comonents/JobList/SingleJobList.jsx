
import { LuMapPin } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Button } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

const SingleJobList = ({companyLogo, jobName, location , time, salary, deadline}) => {
  return (
    <div className=" p-5 flex justify-center gap-5 border shadow-xl text-left my-7">
      <figure>
        <img src={companyLogo} alt="" />
      </figure>
      <div>
        <h1 className="text-xl mb-3 font-semibold">{jobName}</h1>
        <div className="flex gap-5">
          <p className="flex items-center gap-2">
            <LuMapPin color="green" /> <span>{location}</span>
          </p>
          <p className="flex items-center gap-2">
            <IoMdTime color="green" /> <span>{time}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaRegMoneyBillAlt color="green" /> <span>{salary}</span>
          </p>
        </div>
      </div>
      <div className='ml-10'>
        <div className='flex gap-2'>
          <Button colorScheme="gray" textColor='teal' size="md" fontWeight="extrabold">
            <CiHeart/>
          </Button>
          <Button colorScheme="green"  size="md">
            Apply Now
          </Button>
        </div>
        <div className='flex items-center gap-2'>
            <FaCalendarAlt color="green"/> <span>Deadline: {deadline}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleJobList;
