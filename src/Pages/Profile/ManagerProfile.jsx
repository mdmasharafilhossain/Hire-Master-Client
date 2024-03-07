import { Link, useNavigate } from "react-router-dom";
import ProfileNav from "../../Comonents/ProfileNav/ProfileNav";
import { IoHome } from "react-icons/io5";
import { FaBriefcase, FaLinkedin, FaSignOutAlt } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { FaLocationDot, FaPenToSquare } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { RiAddBoxFill } from "react-icons/ri";
import { PiBookBookmarkFill } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import Loader from "../../Comonents/Loader/Loader";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import { CgWebsite } from "react-icons/cg";
import { FcViewDetails } from "react-icons/fc";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { RiHomeOfficeLine } from "react-icons/ri";
import { GiNetworkBars } from "react-icons/gi";

const ManagerProfile = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const email = user?.email;

  const { data: profile, loading, refetch } = useFetchData(
    `/managerProfile/${email}`,
    "profile"
  );
  if (loading) return <Loader />;

  refetch();
  
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/signup2");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto ">
        <ProfileNav
          profile={"managerProfile"}
          setProfile={"managerForm"}
        ></ProfileNav>

        <div className="md:flex ">
          <div className="flex md:flex-col ml-2 mt-10 mb-2  gap-2">
            <Link to="/">
              <div className="p-2 hover:bg-slate-200 hover:text-black rounded-xl ">
                <p className=" text-2xl ml-1 ">
                  <IoHome></IoHome>
                </p>
                <p>Home</p>
              </div>
            </Link>
            <Link to="/jobs">
              <div className="p-2 hover:bg-slate-200 hover:text-black rounded-xl ">
                <p className=" text-2xl ">
                  <FaBriefcase></FaBriefcase>
                </p>
                <p>Jobs</p>
              </div>
            </Link>
            <Link to="/myPostedJobs">
              <div className="p-2 hover:bg-slate-200 hover:text-black rounded-xl ">
                <p className=" text-2xl ">
                  <GiNetworkBars />
                </p>
                <p>My Jobs</p>
              </div>
            </Link>
            <Link to="/jobpost">
              <div className="p-2 hover:bg-slate-200 hover:text-black rounded-xl ">
                <p className=" text-2xl ">
                  <MdPostAdd></MdPostAdd>
                </p>
                <p className="">Post job</p>
              </div>
            </Link>
            <Link>
              <button
                onClick={handleLogOut}
                className="p-2 hover:bg-slate-200 hover:text-black rounded-xl "
              >
                <FaSignOutAlt></FaSignOutAlt>
                LogOut
              </button>
            </Link>
          </div>
          {!profile ? (
            <div className="text-center m-auto">
              <h2 className="text-4xl ">
                Profile have not set yet
              </h2>
              <Link to='/managerForm' className="my-5 text-sm hover:underline">click here to set your profile</Link>
            </div>
          ) : (
            <>
              {/* Profile section */}

              <div className=" w-full rounded-md border-[0.5px] border-slate-300 p-6 ">
                <div className=" p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:text-black hover:drop-shadow-lg">
                  <Link>
                    <h3 className="flex justify-end text-xl mb-2">
                      <FaPenToSquare></FaPenToSquare>
                    </h3>
                  </Link>

                  <div className="md:flex  gap-8">
                    <div className=" avatar">
                      <div className="w-48 rounded-md border-8 border-white ">
                        <img src={profile.image || user?.photoURL} />
                      </div>
                    </div>
                    <div className="">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">{profile.name}</h2>
                      </div>
                      <div className="mb-2">
                        <h3 className=" font-semibold">
                          Expertise field : {profile.role}
                        </h3>
                        <h3 className=" font-semibold">
                          Phone : {profile.phone}
                        </h3>
                        <h3 className=" font-semibold">
                          {profile.location}
                        </h3>
                      </div>
                      <h3 className="w-full  text-lg font-normal">
                        {profile.bio}
                      </h3>
                      <div className="flex gap-4 mt-4">
                        <Link to={profile.linkedin}>
                          <h3 className=" text-xl ">
                            <FaLinkedin></FaLinkedin>
                          </h3>
                        </Link>
                        <Link to={profile.portfolio}>
                          <h3 className=" text-2xl ">
                            <TbWorld></TbWorld>
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Education section */}
                <div className="mt-4  border-[0.5px] border-slate-300  hover:bg-blue-50  hover:drop-shadow-lg  hover:text-black p-8 rounded-lg">
                  <div className="flex justify-end gap-4">
                    <p className="text-2xl mb-2">
                     
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
                      {profile.universityName}
                    </h3>
                    <h3 className=" font-semibold">
                      {profile.degree}
                    </h3>
                    <h3 className=" font-semibold">
                      {profile.graduationDate}
                    </h3>
                  </div>
                </div>
                {/* Company */}
                <div className="mt-4  border-[0.5px] border-slate-300  hover:bg-blue-50  hover:drop-shadow-lg  hover:text-black p-8 rounded-lg">
                  <div className="flex justify-end gap-4">
                    <p className="text-2xl mb-2">
                     
                    </p>
                    <Link to="/education">
                      <p className="text-xl mb-2">
                        <FaPenToSquare></FaPenToSquare>
                      </p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">Company Information</h3>
                    <p className="text-2xl">
                      <RiHomeOfficeLine />
                    </p>
                  </div>
                  <div className="ml-4 flex flex-col gap-2">
                    <h3 className=" font-semibold flex items-center gap-2">
                      <HiBuildingOffice2 /> {profile.companyName}
                    </h3>

                    <Link to={profile.companyLocation}>
                      <h3 className=" text-xl flex gap-2">
                        <FaLocationDot />
                        <p className="text-blue-500 underline text-sm overflow-hidden">
                          {profile.companyLocation}
                        </p>
                      </h3>
                    </Link>
                    <Link to={profile.companyWebsite}>
                      <h3 className=" text-xl flex gap-2">
                        <CgWebsite />
                        <span className="text-blue-500 underline text-sm">
                          {profile.companyWebsite}
                        </span>
                      </h3>
                    </Link>
                    <h3 className=" font-semibold flex gap-2 items-center">
                      <FcViewDetails /> {profile.companyDetails}
                    </h3>
                  </div>
                </div>
                
                
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagerProfile;
