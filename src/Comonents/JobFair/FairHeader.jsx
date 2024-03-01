import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  AddIcon,
  CheckIcon,
  ChevronDownIcon,
  DragHandleIcon,
  HamburgerIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Icon,
} from "@chakra-ui/react";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { getFairRegisteredUser } from "../../api";
import useAuth from "../Hooks/Auth/useAuth";
import { TbLogout2 } from "react-icons/tb";
import { useEffect } from "react";

const FairHeader = () => {
  const { user, stateProfilePicture, setStateProfilePicture } = useAuth();

  const { data: fairRegister = {}, isFetching } = useQuery({
    queryKey: ["fairUser"],
    queryFn: async () => {
      const res = await getFairRegisteredUser(user?.email);
      console.log(res);
      return res.data;
    },
    enabled: !!user,
  });

  useEffect(() => {
    if (user && !isFetching) {
      setStateProfilePicture(fairRegister.profilePicture);
    }
  }, [fairRegister.profilePicture, isFetching, setStateProfilePicture, user]);

  // console.log(stateProfilePicture);
  return (
    <div className='flex items-center sticky top-0 z-50 justify-between bg-gray-400 px-5 py-3'>
      <Link to='/' className='w-32'>
        <img
          src='https://i.ibb.co/BcFWdqk/Hire-Master-Logo-2.png'
          className='w-full'
          alt=''
        />
      </Link>
      <div className='flex items-center gap-x-5'>
        {fairRegister?.userType === "sponsor" && (
          <Link
            to='/job-fair/profile/sponsor-create-event'
            className='flex items-center'
          >
            <AddIcon color='black' h={3} w={3} marginRight={1} />
            <p className='font-bold tracking-tight'>Create Event</p>
          </Link>
        )}

        {!fairRegister?.userType ? (
          <Link to='/job-fair/registration'>
            <button className='font-bold'>Sign in</button>
          </Link>
        ) : null}

        <div className=' bg-white rounded-2xl overflow-hidden px-2 py-1'>
          <SearchIcon marginRight={1} h={4} w={4} color='black' />
          <input
            type='search'
            className='outline-none bg-inherit placeholder-black'
            placeholder='Search All Events'
          />
        </div>
        <Menu>
          {isFetching ? (
            ""
          ) : (
            <MenuButton>
              <div className=' flex items-center border rounded-xl  px-2'>
                <Avatar
                  src={stateProfilePicture[0]?.url || undefined}
                  icon={
                    !stateProfilePicture[0]?.url ? (
                      <BsFillPersonVcardFill />
                    ) : (
                      undefined
                    )
                  }
                  size='md'
                />
                <Box ml='1'>
                  <ChevronDownIcon color={"white"} />
                </Box>
              </div>
            </MenuButton>
          )}
          <MenuList>
            {fairRegister?.userType === "job-seeker" && (
              <MenuGroup title='Profile' marginBottom={5}>
                <MenuDivider />
                <MenuItem
                  as={Link}
                  to='/job-fair'
                  marginBottom={3}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <TriangleUpIcon marginRight={1} />
                  Job Fair
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  as={Link}
                  to='/job-fair/profile'
                  marginBottom={3}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <DragHandleIcon marginRight={1} />
                  My Profile
                </MenuItem>
                <MenuItem
                  as={Link}
                  to='/job-fair/profile/bookings'
                  marginBottom={3}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <CheckIcon marginRight={1} />
                  Bookings
                </MenuItem>
                <MenuItem
                  as={Link}
                  to='/job-fair/profile/interested-events'
                  marginBottom={3}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <StarIcon marginRight={1} />
                  Events
                </MenuItem>
                <MenuItem
                  as={Link}
                  to='/job-fair/profile/settings'
                  marginBottom={3}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <SettingsIcon marginRight={1} />
                  Settings
                </MenuItem>
                <MenuItem
                  as={Link}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <Icon as={TbLogout2} marginRight={1} />
                  Logout
                </MenuItem>
              </MenuGroup>
            )}
            {fairRegister?.userType === "sponsor" && (
              <MenuGroup title='Profile' marginBottom={5}>
                <MenuDivider />
                <MenuItem
                  as={Link}
                  to='/job-fair'
                  marginBottom={3}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <TriangleUpIcon marginRight={1} />
                  Job Fair
                </MenuItem>

                <MenuDivider />

                <MenuItem
                  as={Link}
                  to='/job-fair/profile'
                  marginBottom={3}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <DragHandleIcon marginRight={1} />
                  My Profile
                </MenuItem>

                <MenuItem
                  as={Link}
                  to='/job-fair/profile/sponsor-event'
                  marginBottom={3}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <HamburgerIcon marginRight={1} />
                  My Events
                </MenuItem>
                <MenuItem
                  as={Link}
                  to='/job-fair/profile/sponsor-event-bookings'
                  marginBottom={3}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <CheckIcon marginRight={1} />
                  Booked Events
                </MenuItem>
                <MenuItem
                  as={Link}
                  to='/job-fair/profile/settings'
                  marginBottom={3}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <SettingsIcon marginRight={1} />
                  Settings
                </MenuItem>
                <MenuItem
                  as={Link}
                  _hover={{
                    bg: "red.500",
                    color: "white",
                  }}
                >
                  <Icon as={TbLogout2} marginRight={1} />
                  Logout
                </MenuItem>
              </MenuGroup>
            )}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default FairHeader;
