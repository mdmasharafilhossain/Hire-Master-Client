import {  FaPenToSquare } from "react-icons/fa6";
import { FaExternalLinkAlt, FaBriefcase } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";

import { PiBookBookmarkFill } from "react-icons/pi";
import { RiAddBoxFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import ProfileNav from "../../Comonents/ProfileNav/ProfileNav";
import ProfileImage from "./ProfileImage";
import useProfile from "../../Comonents/Hooks/useProfile/useProfile";

import PremiumUserCourse from "../../Comonents/PremiumUserCourse/PremiumUserCourse";
import Navbar2 from "../../Comonents/Navbar/Navbar2";
import UseAxiosSecure from "../../Comonents/Hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profileData] = useProfile();
  const [myData] = profileData;
  console.log(profileData);
 
  const axiosSecure = UseAxiosSecure();
  const {loading} = useContext(AuthContext);
  const {data:premium=[]}=useQuery({
      queryKey:["premium"],
      queryFn:async()=>{
          const res =await axiosSecure.get("/payments")
          return res.data
  
      }
  })
 
  const premiumUser = premium.map((userPremium) => userPremium?.email).includes(user?.email);
  console.log(premiumUser)
  return (
    <div>
        <Navbar2></Navbar2>
  {myData ? (
    <div className='max-w-6xl mx-4 mb-4 md:mx-auto'>
    
      <ProfileNav profile={"profile"} setProfile={"profileForm"}></ProfileNav>
      <div className='md:flex mt-5'>
        <div className='flex md:flex-col ml-2 mt-10 mb-2  gap-2'>
          <Link to='/'>
            <div className='p-2 hover:bg-slate-200 rounded-xl '>
              <p className='text-2xl ml-1 '>
                <IoHome></IoHome>
              </p>
              <p>Home</p>
            </div>
          </Link>

          <Link to={`/appliedjobs/${user.email}`}>
            <div className="p-2 hover:bg-slate-200 rounded-xl ">
              <p className="text-2xl ml-1 "> <FaBriefcase></FaBriefcase></p>
              <p>My Jobs</p>
            </div>
          </Link>

          <Link to='/jobpost'>
            <div className='p-2 hover:bg-slate-200 rounded-xl '>
              <p className='text-2xl ml-1 '>
                <MdPostAdd></MdPostAdd>
              </p>
              <p className=''>Post job</p>
            </div>
          </Link>
        </div>
        {/* Profile section */}

        <div className='bg-white w-full rounded-md border-[0.5px] border-slate-300 p-6 '>
          <div className='bg-white p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:drop-shadow-lg'>
            <Link to='/profileHead'>
              <h3 className='flex justify-end text-xl mb-2'>
                <FaPenToSquare></FaPenToSquare>
              </h3>
            </Link>

            <div className='md:flex  gap-8'>
              <ProfileImage></ProfileImage>

              <div className=''>
                <div className='flex md:justify-between items-center'>
                  <div className="flex gap-5">
                    <h2 className='text-2xl font-bold'>{myData?.name}</h2>
                    {
                      premiumUser ? (
                        <div>
                          <div className="tooltip" data-tip="Premium">
                            <img className="w-10 h-10 rounded-full " src="https://i.ibb.co/cTxs13b/free-premium-1891072-1597985.webp" alt="" />
                          </div>
                        </div>
                      ) : <div></div>
                    }
                  </div>
                  <h3 className='text-slate-600 font-semibold'>
                    {myData?.UniversityName}
                  </h3>
                </div>
                <div className='md:flex justify-between mb-2'>
                  <h3 className='text-slate-600 font-semibold'>
                    {myData?.headline}
                  </h3>
                  <h3 className='text-slate-600 font-semibold'>
                    {myData?.location}
                  </h3>
                </div>
                <h3 className='w-full text-slate-600 text-lg font-normal'>
                  {myData?.aboutDescription}
                  <p className="opacity-0 border-[0.5px] w-[150px] md:w-[400px] lg:w-[700px]"></p>
                </h3>
              </div>

              
            </div>
            {/* Education section */}
            <div className="p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:text-black hover:drop-shadow-lg">
              <div className="flex justify-end gap-4">
                <p className="text-2xl mb-2">
                  <RiAddBoxFill></RiAddBoxFill>
                </p>
                <Link to="/education">
                  <p className="text-xl mb-2">
                    <FaPenToSquare></FaPenToSquare>
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-2xl">
                  <PiBookBookmarkFill></PiBookBookmarkFill>
                </p>
              </div>
              <div className="ml-4">
                <h3 className=" font-semibold">
                  {myData?.UniversityName}
                </h3>
                <h3 className=" font-semibold">
                  {myData?.degree}
                </h3>
                <h3 className=" font-semibold">Science</h3>
                <h3 className=" font-semibold">
                  {myData?.educationStartMonth} {myData?.educationStartYear} -{" "}
                  {myData?.educationEndMonth} {myData?.educationEndYear}
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
                  <RiAddBoxFill></RiAddBoxFill>
                </p>
                <Link to="/projects">
                  <p className="text-xl mb-2">
                    <FaPenToSquare></FaPenToSquare>
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">Projects</h3>
                <p className="text-2xl">
                  <AiFillProject></AiFillProject>
                </p>
              </div>
              <div className="ml-4">
                <h3 className=" font-semibold">
                  {myData?.projectName}
                </h3>
                <h3 className=" font-semibold mb-2">
                  {myData?.projectStartMonth} {myData?.projectStartYear} -{" "}
                  {myData?.projectEndMonth} {myData?.projectEndYear}
                </h3>
                <h3 className=" font-semibold mb-2">
                  {myData?.projectDescription}
                </h3>
                <h3 className=" font-semibold mb-2">
                  <span className="text-xl font-semibold">
                    Technologies
                  </span>
                  : {myData?.technologies}
                </h3>
                <Link
                  target="_blank"
                  to={myData?.projectLink}
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
                  <RiAddBoxFill></RiAddBoxFill>
                </p>
                <Link to="/skills">
                  <p className="text-xl mb-2">
                    <FaPenToSquare></FaPenToSquare>
                  </p>
                </Link>
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
                  <RiAddBoxFill></RiAddBoxFill>
                </p>
                <Link to="/experience">
                  <p className="text-xl mb-2">
                    <FaPenToSquare></FaPenToSquare>
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">Experience</h3>
                <p className="text-2xl">
                  <FaBriefcase></FaBriefcase>
                </p>
              </div>
              <div className="ml-4 mb-10">
                <h3 className=" font-semibold">
                  {myData?.jobTitle}
                </h3>
                <h3 className=" font-semibold">
                  {myData?.jobType}
                </h3>
                <h3 className=" font-semibold">
                  {myData?.companyName}
                </h3>
                <h3 className=" font-semibold">
                  {myData?.location}
                </h3>
                <h3 className=" font-semibold">
                  {myData?.jobStartMonth} {myData?.jobStartYear} -{" "}
                  {myData?.jobEndMonth} {myData?.jobEndYear}
                </h3>
                <h3 className=" font-semibold">
                  {myData?.jobDescription}
                </h3>
              </div>
            </div>
          </div>
          {/* premium User Section */}
          <div>
            <div className='mt-4  border-[0.5px] border-slate-300 hover:bg-blue-50 bg-white p-8 rounded-lg hover:drop-shadow-lg'>

              <div className="flex justify-between">
                <div className='flex items-center gap-2'>
                  <h3 className='text-xl font-bold'>Learn Free Courses</h3>
                  <p className='text-2xl'>
                    <FaBookAtlas />
                  </p>
                </div>
                <span className="text-[#FF3811] text-lg font-medium me-2 px-2.5 py-0.5 roundeddark:text-red-400 border border-red-400">Free For Premium</span>
              </div>
              {premiumUser ? (
                <div className='ml-4 mb-10 mt-5'>
                  <PremiumUserCourse></PremiumUserCourse>
                </div>
              ) : <div><h1>Sorry You Are Not a Premium user</h1></div>}
            </div>

          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Link to="/">go back</Link>
    </div>
  )}
</div>

          );
};

export default Profile;
