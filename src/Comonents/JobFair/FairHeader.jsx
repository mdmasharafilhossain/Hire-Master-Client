import { Link } from "react-router-dom";
import { AddIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getFairRegisteredUser } from "../../api";
import useAuth from "../Hooks/Auth/useAuth";

const FairHeader = () => {
  const [registeredType, setRegisteredType] = useState("");

  const { user } = useAuth();
  // const email = "abc@debugger.com";

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getFairRegisteredUser(user?.email);
      try {
        if (res.data.userType) {
          setRegisteredType(res.data.userType);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, [user]);
  console.log(registeredType);

  return (
    <div className='flex items-center justify-between bg-gray-400 px-5 py-3'>
      <Link to='/' className='w-32'>
        <img
          src='https://i.ibb.co/BcFWdqk/Hire-Master-Logo-2.png'
          className='w-full'
          alt=''
        />
      </Link>
      <div className='flex items-center gap-x-5'>
        {registeredType === "sponsor" && (
          <button className='flex items-center'>
            <AddIcon color='black' h={3} w={3} marginRight={1} />
            <p className='font-bold tracking-tight'>Create Event</p>
          </button>
        )}

        {!registeredType ? (
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
          <MenuButton>
            <div className=' flex items-center border rounded-xl  px-2'>
              <Avatar as={BsFillPersonVcardFill} size='md' />
              <Box ml='1'>
                <ChevronDownIcon color={"white"} />
              </Box>
            </div>
          </MenuButton>
          <MenuList>
            <MenuGroup title='Profile'>
              <MenuItem as={Link} to='/job-fair/profile'>
                My Account
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
              <MenuItem>Docs</MenuItem>
              <MenuItem as={Link} id='#faq-section'>
                FAQ
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default FairHeader;
