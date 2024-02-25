import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Comonents/AuthProvider/AuthProvider";
import { FiAlignJustify } from "react-icons/fi";
import { BiBriefcase } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import { TiNews } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const handleRouteClick = () => {
    setShowWelcomeMessage(false);
  };
  return (
    <div className='flex flex-1 max-w-7xl container mx-auto'>
      <div className="max-h-full  bg-orange-600">
        <div className='drawer lg:drawer-open bg-slate-100'>
          <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content flex flex-col items-center justify-center'>
            {/* Page content here */}
            <label
              htmlFor='my-drawer-2'
              className='btn  bg-orange-500 drawer-button lg:hidden'
            >
              <FiAlignJustify />
            </label>
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer-2'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <ul className='menu p-4 sticky top-0  w-60 min-h-screen z-50 bg-orange-600 text-base-content'>
              <div className='space-y-2 mb-10'>
                <img
                  className='w-20 ml-16 mt-6 rounded-full'
                  src={user?.photoURL || user?.photo}
                  alt=''
                />
                <h1 className='text-sm text-white text-center font-bold'>
                  {user?.displayName || user?.name}
                </h1>
              </div>

              {/* Sidebar content here */}

              <ul className='menu p-4  py-auto'>
                <li
                  onClick={handleRouteClick}
                  className='font-bold text-sm text-white '
                >
                  <NavLink
                    to='/AdminDashboard/AllUsers'
                    className={({ isActive }) =>
                      `{ ${isActive ? " text-white border " : " "}}`
                    }
                  >
                    {" "}
                    <FaUsers />
                    All Job Seekers
                  </NavLink>
                </li>
                <li
                  onClick={handleRouteClick}
                  className='font-bold text-sm  text-white '
                >
                  <NavLink
                    to="/AdminDashboard/AllHiringManagers"
                    className={({ isActive }) =>
                      `{ ${isActive ? " text-white border " : " "}}`
                    }
                  >
                    {" "}
                    <FaPeopleGroup />
                    All Hiring Managers
                  </NavLink>
                </li>
                <li
                  onClick={handleRouteClick}
                  className='font-bold text-sm text-white'
                >
                  <NavLink
                    to='/AdminDashboard/AllJobPost'
                    className={({ isActive }) =>
                      `{ ${isActive ? " border text-white hover:none " : " "}}`
                    }
                  >
                    {" "}
                    <BiBriefcase />
                    All Job Post
                  </NavLink>
                </li>
                <li
                  onClick={handleRouteClick}
                  className='font-bold text-sm text-white'
                >
                  <NavLink
                    to='/AdminDashboard/create-news'
                    className={({ isActive }) =>
                      `{ ${isActive ? " border  " : " "}}`
                    }
                  >
                    <TiNews />
                    Create News
                  </NavLink>
                </li>
                <li
                  onClick={handleRouteClick}
                  className='font-bold text-sm text-white'
                >
                  <NavLink
                    to='/AdminDashboard/all-news'
                    className={({ isActive }) =>
                      `{ ${isActive ? " border  " : " "}}`
                    }
                  >
                    <TiNews />
                    All News
                  </NavLink>
                </li>
                <li
                  onClick={handleRouteClick}
                  className='font-bold text-sm text-white'
                >
                  <NavLink
                    to='/AdminDashboard/PremiumUser'
                    className={({ isActive }) =>
                      `{ ${isActive ? " border  " : " "}}`
                    }
                  >
                    <MdPeopleAlt />
                    Premium Users
                  </NavLink>
                </li>
                <li
                  onClick={handleRouteClick}
                  className='font-bold text-sm text-white'
                >
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      `{ ${isActive ? " border  " : " "}}`
                    }
                  >
                    <FaHome />
                    Go Back Home
                  </NavLink>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      {/* Welcome message for admin */}
      {showWelcomeMessage && (
        <div>
          <h1 className='text-5xl font-bold mt-60 ml-32'>
            Welcome Admin{" "}
            <span className='text-orange-600'>{user?.displayName}</span>!!!
          </h1>
        </div>
      )}

      {/* Outlet */}
      <div className='w-full md:w-full lg:w-full  pr-10'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminDashboard;
