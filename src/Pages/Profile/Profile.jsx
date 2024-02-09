import { FaGithub, FaPenToSquare } from "react-icons/fa6";
import { FaExternalLinkAlt, FaBriefcase, FaLinkedin } from "react-icons/fa";
import { PiBookBookmarkFill } from "react-icons/pi";
import { RiAddBoxFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import { useContext} from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import ProfileNav from "../../Comonents/ProfileNav/ProfileNav";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import { TbWorld } from "react-icons/tb";
import ProfileImage from "./ProfileImage";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const AxiosPublic = UseAxiosPublic();

  const { data: profileData = [] } = useQuery({
    queryKey: ["data", user?.email],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/userProfile?email=${user.email}`);
      return res.data;
    },
  });
  console.log(profileData);

  return (
    <div >
      {profileData.map(data => (
        <div  key={data._id} className='max-w-6xl mx-auto '>
          <ProfileNav profile={"profile"} setProfile={"profileForm"}></ProfileNav>
          <div className='md:flex '>
            <div className='flex md:flex-col ml-2 mt-10 mb-2  gap-2'>
              <Link to='/'>
                <div className='p-2 hover:bg-slate-200 rounded-xl '>
                  <p className=' text-2xl ml-1 '>
                    {" "}
                    <IoHome></IoHome>
                  </p>
                  <p>Home</p>
                </div>
              </Link>

              <Link to={`/appliedjobs/${user.email}`}>
                <div className="p-2 hover:bg-slate-200 rounded-xl ">
                  <p className=" text-2xl ml-1 "> <FaBriefcase></FaBriefcase></p>
                  <p>My Jobs</p>
                </div>
              </Link>

              <Link to='/jobpost'>
                <div className='p-2 hover:bg-slate-200 rounded-xl '>
                  <p className=' text-2xl ml-1 '>
                    {" "}
                    <MdPostAdd></MdPostAdd>
                  </p>
                  <p className=''>Post job</p>
                </div>
              </Link>
            </div>
            {/* Profile section */}

            <div className='bg-white w-full rounded-md border-[0.5px] border-slate-300 p-6 '>
              <div className='  bg-white p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:drop-shadow-lg'>
                <Link to='/profileHead'>
                  <h3 className='flex justify-end text-xl mb-2'>
                    <FaPenToSquare></FaPenToSquare>
                  </h3>
                </Link>

                <div  className='md:flex  gap-8'>
                  <ProfileImage></ProfileImage>
                  
                  <div className=''>
                    <div className='flex justify-between items-center'>
                      <h2 className='text-xl font-bold'>{data.name}</h2>
                      <h3 className='text-slate-600 font-semibold'>
                        {data.UniversityName}
                      </h3>
                    </div>
                    <div className='md:flex justify-between mb-2'>
                      <h3 className='text-slate-600 font-semibold'>
                        {data.role}
                      </h3>
                      <h3 className='text-slate-600 font-semibold'>
                        {data.location}
                      </h3>
                    </div>
                    <h3 className='w-full text-slate-600 text-lg font-normal'>
                      {data.bio}
                    </h3>
                    <div className='flex gap-4 mt-4'>
                      <Link to={data.linkedin}>
                        <h3 className=' text-xl '>
                          <FaLinkedin></FaLinkedin>
                        </h3>
                      </Link>
                      <Link to={data.portfolio}>
                        <h3 className=' text-2xl '>
                          <TbWorld></TbWorld>
                        </h3>
                      </Link>
                      <Link to={data.Github}>
                        <h3 className=' text-xl '>
                          <FaGithub></FaGithub>
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Education section */}
              <div className='mt-4  border-[0.5px] border-slate-300  hover:bg-blue-50  hover:drop-shadow-lg  bg-white p-8 rounded-lg'>
                <div className='flex justify-end gap-4'>
                  <p className='text-2xl mb-2'>
                    <RiAddBoxFill></RiAddBoxFill>
                  </p>
                  <Link to='/education'>
                    <p className='text-xl mb-2'>
                      <FaPenToSquare></FaPenToSquare>
                    </p>
                  </Link>
                </div>
                <div className='flex items-center gap-2'>
                  <h3 className='text-xl font-bold'>Education</h3>
                  <p className='text-2xl'>
                    <PiBookBookmarkFill></PiBookBookmarkFill>
                  </p>
                </div>
                <div className='ml-4'>
                  <h3 className='text-slate-600 font-semibold'>
                    {data.UniversityName}
                  </h3>
                  <h3 className='text-slate-600 font-semibold'>
                    {data.Degree}
                  </h3>
                  <h3 className='text-slate-600 font-semibold'>
                    Science
                  </h3>
                  <h3 className='text-slate-600 font-semibold'>
                    {data.GraduationDate}
                  </h3>
                  <h3 className='text-slate-600 font-semibold'>
                    I have passed hsc from national college
                  </h3>
                </div>
              </div>
              {/*Project section */}
              <div className='mt-4 container  border-[0.5px] border-slate-300 hover:bg-blue-50  hover:drop-shadow-lg  bg-white p-8 rounded-lg'>
                <div className='flex justify-end gap-4'>
                  <p className='text-2xl mb-2'>
                    <RiAddBoxFill></RiAddBoxFill>
                  </p>
                 <Link to="/projects">
                 <p className='text-xl mb-2'>
                    <FaPenToSquare></FaPenToSquare>
                  </p>
                 </Link>
                </div>
                <div className='flex items-center gap-2'>
                  <h3 className='text-xl font-bold'>Projects</h3>
                  <p className='text-2xl'>
                    <AiFillProject></AiFillProject>
                  </p>
                </div>
                <div className='ml-4'>
                  <h3 className='text-slate-600 font-semibold'>
                    {data.ProjectName}
                  </h3>
                  <h3 className='text-slate-600 font-semibold mb-2'>
                    {data.StartDate} | {data.EndDate}
                  </h3>
                  <h3 className='text-slate-600 font-semibold mb-2'>
                    {data.ProjectDescription}
                  </h3>
                  <h3 className='text-slate-600 font-semibold mb-2'>
                    <span className='text-xl font-semibold text-black'>
                      Technologies
                    </span>
                    : HTML, Css, Javascript, React, Node js, Express js, Mongodb
                  </h3>
                  <Link target="_blank" to={data.ProjectLiveLink} className='text-xl'>
                    <FaExternalLinkAlt></FaExternalLinkAlt>
                  </Link>
                </div>
              </div>
              {/*Skills section  */}

              <div className='mt-4  border-[0.5px] border-slate-300 hover:bg-blue-50 hover:drop-shadow-lg  bg-white p-8 rounded-lg'>
                <div className='flex justify-end gap-4'>
                  <p className='text-2xl mb-2'>
                    <RiAddBoxFill></RiAddBoxFill>
                  </p>
                  <p className='text-xl mb-2'>
                    <FaPenToSquare></FaPenToSquare>
                  </p>
                </div>
                <div className='flex items-center gap-2'>
                  <h3 className='text-xl font-bold'>Skills </h3>
                  <p className='text-2xl'>
                    <BsTools></BsTools>
                  </p>
                </div>

                <div className='ml-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-2'>
                  <h3 className='text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500'>
                    Tailwind
                  </h3>
                  <h3 className='text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500'>
                    Javascript
                  </h3>
                  <h3 className='text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500'>
                    React
                  </h3>
                  <h3 className='text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500'>
                    Mongodb
                  </h3>
                  <h3 className='text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500'>
                    Node Js
                  </h3>
                  <h3 className='text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500'>
                    Express Js
                  </h3>
                </div>
              </div>

              {/*work experience section  */}
              <div className='mt-4  border-[0.5px] border-slate-300 hover:bg-blue-50 bg-white p-8 rounded-lg hover:drop-shadow-lg'>
                <div className='flex justify-end gap-4'>
                  <p className='text-2xl mb-2'>
                    <RiAddBoxFill></RiAddBoxFill>
                  </p>
                  <Link to="/experience">
                  <p className='text-xl mb-2'>
                    <FaPenToSquare></FaPenToSquare>
                  </p>
                  </Link>
                </div>
                <div className='flex items-center gap-2'>
                  <h3 className='text-xl font-bold'>Experience</h3>
                  <p className='text-2xl'>
                    <FaBriefcase></FaBriefcase>
                  </p>
                </div>
                <div className='ml-4 mb-10'>
                  <h3 className='text-slate-600 font-semibold'>
                    {data.JobTitle}
                  </h3>
                  <h3 className='text-slate-600 font-semibold'>
                    {data.JobType}
                  </h3>
                  <h3 className='text-slate-600 font-semibold'>
                    {data.CompanyName}
                  </h3>
                  <h3 className='text-slate-600 font-semibold'>
                    {data.Location}
                  </h3>
                  <h3 className='text-slate-600 font-semibold'>
                    {data.WorkingStartDate} | {data.WorkingEndDate}
                  </h3>
                  <h3 className='text-slate-600 font-semibold'>
                    That was a it company and i work their for 2 years.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
