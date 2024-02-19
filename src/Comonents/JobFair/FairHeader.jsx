import { Link } from "react-router-dom";
import logo from "../../../src/assets/HireMaster_Logo(2).png";
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

const FairHeader = () => {
  return (
    <div className='flex items-center justify-between bg-gray-400 px-5 py-3'>
      <Link to='/' className='w-32'>
        <img src={logo} className='w-full' alt='' />
      </Link>
      <div className='flex items-center gap-x-5'>
        <button className='flex items-center'>
          <AddIcon color='black' h={3} w={3} marginRight={1} />
          <p className='font-bold tracking-tight'>Create Event</p>
        </button>

        <Link to='/job-fair/registration'>
          <button className='font-bold'>Sign in</button>
        </Link>

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
            <div className=' flex items-center border rounded-xl p-1'>
              <Avatar src='https://bit.ly/sage-adebayo' />
              <Box ml='2'>
                <ChevronDownIcon color={"white"} />
              </Box>
            </div>
          </MenuButton>
          <MenuList>
            <MenuGroup title='Profile'>
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default FairHeader;
