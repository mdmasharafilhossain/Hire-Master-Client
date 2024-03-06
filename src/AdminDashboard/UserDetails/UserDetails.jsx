import { Link, useParams } from "react-router-dom";

import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import Loader from "../../Comonents/Loader/Loader";
import { FaPenToSquare } from "react-icons/fa6";
import { FaExternalLinkAlt, FaBriefcase } from "react-icons/fa";

import { PiBookBookmarkFill } from "react-icons/pi";
import { RiAddBoxFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { BsTools } from "react-icons/bs";





const UserDetails = () => {
    const {email} = useParams();
    console.log(email)
    const { data: profile, loading, refetch } = useFetchData(
        `/userProfile/all`,
        "profile"
      );
      if (loading) return <Loader />;
    
      refetch();
    console.log(profile);
    // const [Details] = UseUserDEtails();
    // console.log(Details);
    const UserDetail = profile.find(Info =>Info?.email === email );
    console.log(UserDetail)
    return (
        <div>
            <div>
               <h1 className="md:text-2xl lg:text-3xl text-center mt-20 font-bold"> Detail Information of <span className="text-orange-600">{UserDetail?.name || "anonymous"}  ({UserDetail?.email})</span></h1>
               <Link to="/AdminDashboard/AllUsers">
               <button className='ml-20 mt-10 border text-white bg-orange-500 hover:bg-orange-600 transition px-3 py-2 rounded-lg'>Back To Dashboard</button></Link>
            </div>
            <div className=" p-5 md:p-10 lg:p-20 ">
              <div className=" p-8 rounded-lg border-[1px] border-orange-600 hover:drop-shadow-lg ">
                

                <div className="p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50  hover:drop-shadow-lg md:flex-col  gap-8 hover:text-black">
                  <img className="w-52 mb-5" src={UserDetail?.image} alt="" />

                  <div className="">
                    <div className="flex md:justify-between items-center">
                      <div className="flex gap-5">
                        <h2 className="text-2xl font-bold">{UserDetail?.name}</h2>
                        
                      </div>
                      <h3 className=" font-semibold">
                        {UserDetail?.UniversityName}
                      </h3>
                    </div>
                    <div className="md:flex justify-between mb-2">
                      <h3 className=" font-semibold">{UserDetail?.headline}</h3>
                      <h3 className=" font-semibold">{UserDetail?.location}</h3>
                    </div>
                    <h3 className="w-full  text-lg font-normal">
                      {UserDetail?.aboutDescription}
                      <p className="opacity-0 border-[0.5px] w-[150px] md:w-[400px] lg:w-[700px]"></p>
                    </h3>
                  </div>
                </div>
                {/* Education section */}
                <div className="p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:text-black hover:drop-shadow-lg">
                  <div className="flex justify-end gap-4">
                    <p className="text-2xl mb-2">
                      
                    </p>
                    
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">Education</h3>
                    <p className="text-2xl">
                      <PiBookBookmarkFill></PiBookBookmarkFill>
                    </p>
                  </div>
                  <div className="ml-4">
                    <h3 className=" font-semibold">{UserDetail?.UniversityName}</h3>
                    <h3 className=" font-semibold">{UserDetail?.degree}</h3>
                    <h3 className=" font-semibold">Science</h3>
                    <h3 className=" font-semibold">
                      {UserDetail?.educationStartMonth} {UserDetail?.educationStartYear}{" "}
                      - {UserDetail?.educationEndMonth} {UserDetail?.educationEndYear}
                    </h3>
                    <h3 className=" font-semibold">
                      I have passed hsc from national college
                    </h3>
                  </div>
                </div>
                {/*Project section */}
                <div className="p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:text-black hover:drop-shadow-lg">
                  <div className="flex justify-end gap-4">
                    <p className="text-2xl mb-2">
                      
                    </p>
                    
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">Projects</h3>
                    <p className="text-2xl">
                      <AiFillProject></AiFillProject>
                    </p>
                  </div>
                  <div className="ml-4">
                    <h3 className=" font-semibold">{UserDetail?.projectName}</h3>
                    <h3 className=" font-semibold mb-2">
                      {UserDetail?.projectStartMonth} {UserDetail?.projectStartYear} -{" "}
                      {UserDetail?.projectEndMonth} {UserDetail?.projectEndYear}
                    </h3>
                    <h3 className=" font-semibold mb-2">
                      {UserDetail?.projectDescription}
                    </h3>
                    <h3 className=" font-semibold mb-2">
                      <span className="text-xl font-semibold">
                        Technologies
                      </span>
                      : {UserDetail?.technologies}
                    </h3>
                    <Link
                      target="_blank"
                      to={UserDetail?.projectLink}
                      className="text-xl"
                    >
                      <FaExternalLinkAlt></FaExternalLinkAlt>
                    </Link>
                  </div>
                </div>
                {/*Skills section  */}
                <div className="p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:text-black hover:drop-shadow-lg">
                  <div className="flex justify-end gap-4">
                    <p className="text-2xl mb-2">
                      
                    </p>
                    
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">Skills </h3>
                    <p className="text-2xl">
                      <BsTools></BsTools>
                    </p>
                  </div>

                  <div className="ml-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                      Tailwind
                    </h3>
                    <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                      Javascript
                    </h3>
                    <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                      React
                    </h3>
                    <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                      Mongodb
                    </h3>
                    <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                      Node Js
                    </h3>
                    <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                      Express Js
                    </h3>
                  </div>
                </div>

                {/*work experience section  */}
                <div className="p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:text-black hover:drop-shadow-lg">
                  <div className="flex justify-end gap-4">
                    <p className="text-2xl mb-2">
                      
                    </p>
                    
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">Experience</h3>
                    <p className="text-2xl">
                      <FaBriefcase></FaBriefcase>
                    </p>
                  </div>
                  <div className="ml-4 mb-10">
                    <h3 className=" font-semibold">{UserDetail?.jobTitle}</h3>
                    <h3 className=" font-semibold">{UserDetail?.jobType}</h3>
                    <h3 className=" font-semibold">{UserDetail?.companyName}</h3>
                    <h3 className=" font-semibold">{UserDetail?.location}</h3>
                    <h3 className=" font-semibold">
                      {UserDetail?.jobStartMonth} {UserDetail?.jobStartYear} -{" "}
                      {UserDetail?.jobEndMonth} {UserDetail?.jobEndYear}
                    </h3>
                    <h3 className=" font-semibold">{UserDetail?.jobDescription}</h3>
                  </div>
                </div>
              </div>
              {/* Back to dashBoard */}
              
            </div>
        </div>
    );
};

export default UserDetails;