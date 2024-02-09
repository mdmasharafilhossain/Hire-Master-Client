import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getManagerInfo, getUserInfo } from "../../api";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";

const Navbar2 = () => {
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
  return (
    <div className='navbar shadow-lg fixed top-0 z-50 shadow-base-200  bg-base-100 mb-5'>
      <div className='flex-1'>
        <Link to='/' className=''>
          <img
            src='https://i.ibb.co/BcFWdqk/Hire-Master-Logo-2.png'
            className='w-28'
            alt='logo'
          />
        </Link>
      </div>

      <div className='hidden md:flex flex-1 items-center space-x-4 mr-4 font-medium lg:text-lg menu-horizontal px-1 md:text-base'>
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
              to='/profile'
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

      <div className='flex-none'>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='#FF3811'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'></span>
            </div>
          </div>
          <div
            tabIndex={0}
            className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow'
          >
            <div className='card-body'>
              <div className='card-actions'>
                <button className='btn  text-white bg-[#FF3811] btn-block'>
                  View Applied Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full'>
              <img
                alt='Tailwind CSS Navbar component'
                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            {/* {userProfile?.name ? (
              <li className='px-2 py-2'>{userProfile?.name}</li>
            ) : (
              ""
            )} */}
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
