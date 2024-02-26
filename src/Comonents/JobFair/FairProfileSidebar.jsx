import {
  CheckIcon,
  HamburgerIcon,
  PlusSquareIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

const FairProfileSidebar = ({ jobFair_register }) => {
  console.log(jobFair_register);

  return (
    <Box className='w-full font-bold flex  md:flex-col  items-start justify-start  md:space-y-3 mb-20 md:mb-0 '>
      {jobFair_register?.userType === "job-seeker" && (
        <div className='flex flex-wrap md:space-y-3 md:flex-col'>
          <NavLink
            to='/job-fair/profile/bookings'
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-400 px-3 py-1 flex items-center  text-xl xl:text-3xl"
                  : "    text-xl xl:text-3xl flex items-center  rounded-full px-3 py-1 "
              }`
            }
          >
            <CheckIcon marginRight={1} />
            Booking History
          </NavLink>
          <NavLink
            to='/job-fair/profile/interested-events'
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-400 px-3 py-1 flex items-center  text-xl xl:text-3xl"
                  : "    text-xl xl:text-3xl flex items-center  rounded-full px-3 py-1 "
              }`
            }
          >
            <StarIcon marginRight={1} />
            Interested Events
          </NavLink>
          <NavLink
            to='/job-fair/profile/settings'
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-400 px-3 py-1 flex items-center  text-xl xl:text-3xl"
                  : "    text-xl xl:text-3xl flex items-center  rounded-full px-3 py-1 "
              }`
            }
          >
            <SettingsIcon marginRight={1} />
            Settings
          </NavLink>
        </div>
      )}

      {jobFair_register?.userType === "sponsor" && (
        <div className='flex flex-wrap md:space-y-3 md:flex-col'>
          <NavLink
            to='/job-fair/profile/sponsor-create-event'
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-400 px-3 py-1 flex items-center  text-xl xl:text-3xl"
                  : "    text-xl xl:text-3xl flex items-center  rounded-full px-3 py-1 "
              }`
            }
          >
            <PlusSquareIcon marginRight={1} />
            Create Events
          </NavLink>
          <NavLink
            to='/job-fair/profile/sponsor-event'
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-400 px-3 py-1 flex items-center  text-xl xl:text-3xl"
                  : "    text-xl xl:text-3xl flex items-center  rounded-full px-3 py-1 "
              }`
            }
          >
            <HamburgerIcon marginRight={1} />
            My Events
          </NavLink>
          <NavLink
            to='/job-fair/profile/sponsor-event-bookings'
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-400 px-3 py-1 flex items-center  text-xl xl:text-3xl"
                  : "    text-xl xl:text-3xl flex items-center  rounded-full px-3 py-1 "
              }`
            }
          >
            <CheckIcon marginRight={1} />
            Booked Events
          </NavLink>
          <NavLink
            to='/job-fair/profile/settings'
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-400 px-3 py-1 flex items-center  text-xl xl:text-3xl"
                  : "    text-xl xl:text-3xl flex items-center  rounded-full px-3 py-1 "
              }`
            }
          >
            <SettingsIcon marginRight={1} />
            Settings
          </NavLink>
        </div>
      )}
    </Box>
  );
};

export default FairProfileSidebar;
