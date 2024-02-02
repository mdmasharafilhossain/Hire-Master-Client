import { FaFacebook, FaGithub, FaPenToSquare } from "react-icons/fa6";
import { FaExternalLinkAlt, FaBriefcase, FaLinkedin } from "react-icons/fa";
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
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import { FaBusinessTime } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  // console.log(email);
  const {
    data: userInfo,
    loading,
    error,
  } = useFetchData(`/userProfile/${email}`);
  if (loading) {
    return <p>Loading ........</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  console.log(userInfo);
  const {
    name,
    image,
    location,
    experience,
    role,
    bio,
    portfolio,
    linkedin,
    Github,
    UniversityName,
    Degree,
    GraduationDate,
    GPA,
    Skill,
    ProjectName,
    StartDate,
    EndDate,
    ProjectDescription,
    ProjectTechnologyUsed,
    ProjectLiveLink,
    ProjectName2,
    StartDate2,
    EndDate2,
    ProjectDescription2,
    ProjectTechnologyUsed2,
    ProjectLiveLink2,
    CompanyName,
    WorkingStartDate,
    WorkingEndDate,
    JobTitle,
    Location,
    JobType,
  } = userInfo;
  return (
    <div className="max-w-6xl mx-auto ">
      <ProfileNav></ProfileNav>
      <div className="md:flex ">
        <div className="flex md:flex-col ml-2 mt-10 mb-2  gap-2">
          <Link to="/">
            <div className="p-2 hover:bg-slate-200 rounded-xl ">
              <p className=" text-2xl ml-1 ">
                {" "}
                <IoHome></IoHome>
              </p>
              <p>Home</p>
            </div>
          </Link>
          <Link to="/jobs">
            <div className="p-2 hover:bg-slate-200 rounded-xl ">
              <p className=" text-2xl ml-1 ">
                <FaBriefcase></FaBriefcase>
              </p>
              <p>Jobs</p>
            </div>
          </Link>
          <Link to="/myPostedJobs">
            <div className="p-2 hover:bg-slate-200 rounded-xl ">
              <p className=" text-2xl ml-1 ">
                <FaBusinessTime />
              </p>
              <p>your Jobs</p>
            </div>
          </Link>
          <Link to="/jobpost">
            <div className="p-2 hover:bg-slate-200 rounded-xl ">
              <p className=" text-2xl ml-1 ">
                <MdPostAdd></MdPostAdd>
              </p>
              <p className="">Post job</p>
            </div>
          </Link>
        </div>
        {/* Profile section */}

        <div className="bg-white w-full rounded-md border-[0.5px] border-slate-300 p-6 ">
          <div className="  bg-white p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:drop-shadow-lg">
            <Link to="/profileForm">
              <h3 className="flex justify-end text-xl mb-2">
                <FaPenToSquare></FaPenToSquare>
              </h3>
            </Link>

            <div className="md:flex  gap-8">
              <div className=" avatar">
                <div className="w-48 rounded-md border-8 border-white ">
                  <img src={image || user?.photoURL} />
                </div>
              </div>
              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">{name}</h2>
                  <h3 className="text-slate-600 font-semibold">
                    {UniversityName}
                  </h3>
                </div>
                <div className="md:flex justify-between mb-2">
                  <h3 className="text-slate-600 font-semibold">{role}</h3>
                  <h3 className="text-slate-600 font-semibold">{location}</h3>
                </div>
                <h3 className="w-full text-slate-600 text-lg font-normal">
                  {bio}
                </h3>
                <div className="flex gap-4 mt-4">
                  <Link to={linkedin}>
                    <h3 className=" text-xl ">
                      <FaLinkedin></FaLinkedin>
                    </h3>
                  </Link>
                  <Link to={portfolio}>
                    <h3 className=" text-xl ">
                      <FaFacebook></FaFacebook>
                    </h3>
                  </Link>
                  <Link to={Github}>
                    <h3 className=" text-xl ">
                      <FaGithub></FaGithub>
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Education section */}
          <div className="mt-4  border-[0.5px] border-slate-300  hover:bg-blue-50  hover:drop-shadow-lg  bg-white p-8 rounded-lg">
            <div className="flex justify-end gap-4">
              <p className="text-2xl mb-2">
                <RiAddBoxFill></RiAddBoxFill>
              </p>
              <p className="text-xl mb-2">
                <FaPenToSquare></FaPenToSquare>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Education</h3>
              <p className="text-2xl">
                <PiBookBookmarkFill></PiBookBookmarkFill>
              </p>
            </div>
            <div className="ml-4">
              <h3 className="text-slate-600 font-semibold">{UniversityName}</h3>
              <h3 className="text-slate-600 font-semibold">{Degree}</h3>
              <h3 className="text-slate-600 font-semibold">{GraduationDate}</h3>
            </div>
          </div>
          {/*Project section */}
          <div className="mt-4 container  border-[0.5px] border-slate-300 hover:bg-blue-50  hover:drop-shadow-lg  bg-white p-8 rounded-lg">
            <div className="flex justify-end gap-4">
              <p className="text-2xl mb-2">
                <RiAddBoxFill></RiAddBoxFill>
              </p>
              <p className="text-xl mb-2">
                <FaPenToSquare></FaPenToSquare>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Projects</h3>
              <p className="text-2xl">
                <AiFillProject></AiFillProject>
              </p>
            </div>
            <div className="ml-4">
              <h3 className="text-slate-600 font-semibold">{ProjectName}</h3>
              <h3 className="text-slate-600 font-semibold mb-2">{StartDate}</h3>
              <h3 className="text-slate-600 font-semibold mb-2">
                {ProjectDescription}
              </h3>
              <h3 className="text-slate-600 font-semibold mb-2">
                <span className="text-xl font-semibold text-black">
                  Technologies
                </span>
                : {ProjectTechnologyUsed}
              </h3>

              <p className="text-xl ">
                <FaExternalLinkAlt></FaExternalLinkAlt>
              </p>
            </div>
          </div>
          {/*Skills section  */}
          <div className="mt-4  border-[0.5px] border-slate-300 hover:bg-blue-50 hover:drop-shadow-lg  bg-white p-8 rounded-lg">
            <div className="flex justify-end gap-4">
              <p className="text-2xl mb-2">
                <RiAddBoxFill></RiAddBoxFill>
              </p>
              <p className="text-xl mb-2">
                <FaPenToSquare></FaPenToSquare>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Skills </h3>
              <p className="text-2xl">
                <BsTools></BsTools>
              </p>
            </div>
            <div className="ml-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                Tailwind
              </h3>
              <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                Javascript
              </h3>
              <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                React
              </h3>
              <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                Mongodb
              </h3>
              <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                Node Js
              </h3>
              <h3 className="text-slate-600 font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                Express Js
              </h3>
            </div>
          </div>

          {/*work experience section  */}
          <div className="mt-4  border-[0.5px] border-slate-300 hover:bg-blue-50 bg-white p-8 rounded-lg">
            <div className="flex justify-end gap-4">
              <p className="text-2xl mb-2">
                <RiAddBoxFill></RiAddBoxFill>
              </p>
              <p className="text-xl mb-2">
                <FaPenToSquare></FaPenToSquare>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Experience</h3>
              <p className="text-2xl">
                <FaBriefcase></FaBriefcase>
              </p>
            </div>
            <div className="ml-4 mb-10">
              <h3 className="text-slate-600 font-semibold">
                Junior Web Developer
              </h3>
              <h3 className="text-slate-600 font-semibold">Full-Time</h3>
              <h3 className="text-slate-600 font-semibold">
                Next venture capital Ltd.
              </h3>
              <h3 className="text-slate-600 font-semibold">
                Dhaka, Bangladesh
              </h3>
              <h3 className="text-slate-600 font-semibold">
                Jan 2020 - Jan 2022
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
