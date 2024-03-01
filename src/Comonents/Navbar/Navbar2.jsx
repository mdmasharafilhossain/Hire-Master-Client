import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getManagerInfo, getUserInfo } from "../../api";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import useFetchData from "../Hooks/UseFetchData/useFetchData";
import useNotifications from "../Hooks/Notifications/getNotifications";
import userImage from "./usericon2.png";
const Navbar2 = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const email = user?.email;

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/signup2");
        localStorage.removeItem("userEmail");
      })
      .catch(error => console.log(error));
  };

  // user profile with context email
  const { data: userProfile = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await getUserInfo(user?.email);
      console.log(res);
      return res.data;
    },
  });

  // // manager profile with context email
  const { data: managerProfile = {} } = useQuery({
    queryKey: ["manager"],
    queryFn: async () => {
      const res = await getManagerInfo(user?.email);
      console.log(res);
      return res.data;
    },
  });
  console.log(userProfile);
  console.log(managerProfile);

  // -----------detecting the route for user/manager------------
  const { data: profile, loading, refetch } = useFetchData(
    `/managerProfile/${email}`,
    "profile"
  );
  if (!loading) {
    refetch();
  }
  console.log(profile);
  let profileRoute = "profile";
  if (user?.email === profile?.email) {
    profileRoute = "managerProfile";
  }
  // -------------end--------------------------

  // ----------Notifications--------------------
  const api = `/notifications/${email}`;
  const key = "applications";

  const [
    notifications,
    temp,
    display,
    localTemp,
    localDisplay,
    setTemp,
    setDisplay,
  ] = useNotifications(api, key);
  const [showNotifications, setShowNotifications] = useState(
    notifications.slice(-localDisplay)
  );

  useEffect(() => {
    setShowNotifications(notifications.slice(-localDisplay));
  }, [notifications, localDisplay]);
  console.log(showNotifications);
  const handleRead = async () => {
    try {
      setDisplay(0);
      localStorage.setItem("display", display);
      setShowNotifications([]);
      setTemp(notifications.length);
      localStorage.setItem("temp", temp);
      // applicationRefetch();
      setOpen(false);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  console.log(notifications);
  console.log(temp);
  console.log(display);
  console.log(localTemp);
  console.log(localDisplay);

  return (
    <div className='navbar shadow-lg sticky top-0 z-50 shadow-base-200  bg-base-100 mb-5'>
      <div className='flex-1'>
        <Link to='/' className=''>
          <img
            src='https://i.ibb.co/BcFWdqk/Hire-Master-Logo-2.png'
            className='w-28'
            alt='logo'
          />
        </Link>
      </div>

      <div className='hidden md:flex flex-1 items-center -ml-64 space-x-4 mr-4 font-medium lg:text-lg menu-horizontal px-1 md:text-base'>
        <Link to='/'>Home</Link>
        <NavLink
          to='/jobs'
          className={({ isActive }) =>
            `{ ${isActive ? "text-[#FF3811] underline " : " "}}`
          }
        >
          Jobs
        </NavLink>
        <NavLink
          to='/job-fair'
          className={({ isActive }) =>
            `{ ${isActive ? "text-[#FF3811] underline " : " "}}`
          }
        >
          Job Fair
        </NavLink>
        <NavLink
          to='/tech-news'
          className={({ isActive }) =>
            `{ ${isActive ? "text-[#FF3811] underline " : " "}}`
          }
        >
          News
        </NavLink>

        <NavLink
          to='/about'
          className={({ isActive }) =>
            `{ ${isActive ? "text-[#FF3811] underline " : " "}}`
          }
        >
          About
        </NavLink>
        <NavLink
          to='/contacts'
          className={({ isActive }) =>
            `{ ${isActive ? "text-[#FF3811] underline " : " "}}`
          }
        >
          Contact
        </NavLink>

        {user ? (
          <div className='space-x-4'>
            <NavLink
              to={`/${profileRoute}`}
              className={({ isActive }) =>
                `{ ${isActive ? "text-[#FF3811] underline " : " "}}`
              }
            >
              Profile
            </NavLink>
            <NavLink onClick={handleSignOut}>Logout</NavLink>
          </div>
        ) : (
          <Link to='/signup2'>Register</Link>
        )}
      </div>

      {/* -----------------notification bell icon ---------------*/}
      <div className='flex-none'>
        {user && (
          <>
            <div className='flex items-center cursor-pointer'>
              <div className='relative mr-3' onClick={() => setOpen(!open)}>
                <FaRegBell className='w-7 h-7 ' />
                {localDisplay > 0 && (
                  <div className='bg-[#FF3811] font-semibold w-4 h-4 rounded-full flex items-center justify-center text-xs absolute top-0 right-0'>
                    {localDisplay}
                  </div>
                )}
              </div>
            </div>
            {/* Dropdown box of bell icon */}
            {open && (
              <div className='absolute top-16 right-5 bg-white outline text-black font-light flex flex-col p-2 rounded-lg'>
                {showNotifications.map((notification, index) => (
                  <div key={index}>
                    {notification.email} has applied to your job
                  </div>
                ))}
                <button
                  className='text-[#FF3811] font-semibold text-xs underline'
                  onClick={handleRead}
                >
                  Mark as read
                </button>
              </div>
            )}
          </>
        )}
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className=' w-10 rounded-full'>
              <img
                alt='Tailwind CSS Navbar component'
                src={
                  user?.photoURL ||
                  managerProfile.image ||
                  userProfile.image ||
                  userImage
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <hr />

            {user ? (
              <Link
                className='text-xl flex items-center gap-x-1 hover:bg-gray-300 rounded-full font-medium py-2 px-2'
                onClick={handleSignOut}
                to='/login'
              >
                <RiLogoutCircleLine className='inline-block' />
                Logout
              </Link>
            ) : (
              <Link
                className='text-xl flex items-center gap-x-1 hover:bg-gray-300 rounded-full font-medium py-2 px-2'
                to='/signup2'
              >
                <RiLoginCircleLine />
                Login
              </Link>
            )}
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
