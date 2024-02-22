import { CheckIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/Auth/useAuth";
import { getFairRegisteredUser } from "../../api";
import Loader from "../Loader/Loader";

const FairProfileSidebar = () => {
  const [loading, setLoading] = useState(false);
  const [fairUser, setFairUser] = useState({});
  const [registeredType, setRegisteredType] = useState("");

  const { user } = useAuth();
  // const email = "abc@debugger.com";

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await getFairRegisteredUser(user?.email);
        setFairUser(res.data);
        setLoading(false);
        if (res.data.userType) {
          setRegisteredType(res.data.userType);
        }
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };
    fetchUser();
  }, [user]);
  console.log(registeredType);
  console.log(fairUser);
  if (loading) {
    return <Loader />;
  }

  return (
    <Box className='flex md:flex-col font-bold md:space-y-5 mb-10 md:mb-0 sm:space-x-5 space-x-2 md:space-x-0'>
      {registeredType === "job-seeker" && (
        <>
          <NavLink
            to='/job-fair/profile/bookings'
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-500 flex items-center  text-lg  "
                  : "  text-lg  flex items-center  "
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
                  ? "text-red-500 flex items-center  text-lg  "
                  : "  text-lg  flex items-center"
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
                  ? "text-red-500 flex items-center  text-lg  "
                  : "  text-lg  flex items-center"
              }`
            }
          >
            <SettingsIcon marginRight={1} />
            Settings
          </NavLink>
        </>
      )}

      {registeredType === "sponsor" && (
        <>
          <NavLink
            to='/job-fair/profile/sponsor-event'
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-500 flex items-center  text-lg  "
                  : "  text-lg  flex items-center  "
              }`
            }
            isActive={(match, location) => {
              // Check if the current URL matches the 'to' prop of this NavLink
              return location.pathname === "/job-fair/profile/sponsor-event";
            }}
          >
            <CheckIcon marginRight={1} />
            My Events
          </NavLink>
          <NavLink
            to='/job-fair/profile/sponsor-event-bookings'
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-500 flex items-center  text-lg  "
                  : "  text-lg  flex items-center"
              }`
            }
            isActive={(match, location) => {
              return (
                location.pathname === "/job-fair/profile/sponsor-event/bookings"
              );
            }}
          >
            <StarIcon marginRight={1} />
            Booked Events
          </NavLink>
          <NavLink
            to='/job-fair/profile/settings'
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-500 flex items-center  text-lg  "
                  : "  text-lg  flex items-center"
              }`
            }
          >
            <SettingsIcon marginRight={1} />
            Settings
          </NavLink>
        </>
      )}
    </Box>
  );
};

export default FairProfileSidebar;
