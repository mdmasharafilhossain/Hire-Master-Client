import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getManagerInfo, getUserInfo } from "../../api";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

// const Navbar2 = ({ socket }) => {
  const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  // const [notifications, setNotifications] = useState([]);
  const { user, logOut } = useContext(AuthContext);

  // user profile with context email
  const { data: userProfile = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await getUserInfo(user?.email);
      return res.data;
    },
  });

  // manager profile with context email
  const { data: managerProfile = {} } = useQuery({
    queryKey: ["manager"],
    queryFn: async () => {
      const res = await getManagerInfo(user?.email);
      return res.data;
    },
  });

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch();
  };
  console.log(userProfile);
  console.log(managerProfile);

  //--------------------- notification using socket io-------------------------
  // useEffect(() => {
  //   socket.on("getNotification", (data) => {
  //     setNotifications((prev) => [...prev, data]);
  //   });
  // }, [socket]);

  // const displayNotification = ({ senderEmail, type }) => {
  //   let action;

  //   if (type === 1) {
  //     action = "applied";
  //   } else {
  //     action = "message";
  //   }
  //   return <p className="">{`${senderEmail} ${action} to your post.`}</p>;
  // };

  // const handleRead = () => {
  //   setNotifications([]);
  //   setOpen(false);
  // };

  return (
    <div className="navbar shadow-lg sticky top-0 z-50 shadow-base-200  bg-base-100 mb-5">
      <div className="flex-1">
        <Link to="/" className="">
          <img
            src="https://i.ibb.co/BcFWdqk/Hire-Master-Logo-2.png"
            className="w-28"
            alt="logo"
          />
        </Link>
      </div>

      <div className="hidden md:flex flex-1 items-center space-x-4 mr-4 font-medium lg:text-lg menu-horizontal px-1 md:text-base">
        <Link to="/">Home</Link>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `{ ${isActive ? "text-[#FF3811] underline " : " "}}`
          }
        >
          Jobs
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
          to="/contacts"
          className={({ isActive }) =>
            `{ ${isActive ? "text-[#FF3811] underline " : " "}}`
          }
        >
          Contact
        </NavLink>

        {user ? (
          <div className="space-x-4">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `{ ${isActive ? "text-[#FF3811] underline " : " "}}`
              }
            >
              Profile
            </NavLink>
            <NavLink onClick={handleSignOut}>Logout</NavLink>
          </div>
        ) : (
          <Link to="/signup2">Register</Link>
        )}
      </div>

      {/* -----------------notification bell icon ---------------*/}
      <div className="flex-none">
        {user && (
          <>
            <div className="flex items-center cursor-pointer">
              <div className="relative mr-3" onClick={() => setOpen(!open)}>
                <FaRegBell className="w-7 h-7 " />
                {/* {notifications.length > 0 && ( */}
                  <div className="bg-[#FF3811] font-semibold w-4 h-4 rounded-full flex items-center justify-center text-xs absolute top-0 right-0">
                    {/* {notifications.length} */}4
                  </div>
                {/* )} */}
              </div>
            </div>
            {/* --------------dropdown box of bell icon-------------- */}
            {open && (
              <div className="absolute top-16 right-5 bg-white outline text-black font-light flex flex-col p-2 rounded-lg">
                {/* {notifications.map((n) => displayNotification(n))} */}
                <button
                  className="text-[#FF3811] font-semibold text-xs underline"
                  // onClick={handleRead}
                >
                  Mark as read
                </button>
              </div>
            )}
          </>
        )}

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <hr />

            {user ? (
              <Link
                className="text-xl flex items-center gap-x-1 hover:bg-gray-300 rounded-full font-medium py-2 px-2"
                onClick={handleSignOut}
                to="/login"
              >
                <RiLogoutCircleLine className="inline-block" />
                Logout
              </Link>
            ) : (
              <Link
                className="text-xl flex items-center gap-x-1 hover:bg-gray-300 rounded-full font-medium py-2 px-2"
                to="/signup2"
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
