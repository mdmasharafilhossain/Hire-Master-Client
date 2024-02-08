import { Button, useDisclosure } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import logo from "../../assets/hire_master-logo.png";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
   }

    const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // absolute mt-[450px]
  // sticky  border-4  top-0 z-50
  return (
    <div className="navbar absolute mt-[450px] bg-base-100 h-[10px]">
    <Button
      ref={btnRef}
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    >
      <MdOutlineDashboard className="text-[#FF3811] w-full" size={38} />
    </Button>
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
      size={"sm"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <div className="flex ml-5 mt-2">
          <img src="https://i.ibb.co/BcFWdqk/Hire-Master-Logo-2.png"className="w-28" alt="logo" />
        </div>
        <hr className="my-10" />
        <DrawerBody>
          <div className='flex flex-col font-medium text-2xl space-y-4'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/jobs'>Jobs</Link>
            <Link to='/contacts'>Contact</Link>
            {/* <Link to='/signup2'>Register</Link>
            <Link to='/profile'>Profile</Link> */}

            {user ?
              <div>
                <div className=" mb-3" >
                <Link to='/profile'>Profile</Link>
                </div>
                <Link  onClick={handleSignOut} to='/login'>Logout</Link>
              </div> :
              <Link to='/signup2'>Register</Link>
            }
            <button className='flex px-5 py-2 items-center space-x-1 font-semibold text-lg bg-[#FF3811] text-white rounded-lg'>
              <p className=''>Post a Job</p>
              <MdPostAdd size={30} />
            </button>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    <div className="flex-1">
      <Link
        to="/"
        className="  text-3xl md:text-4xl font-bold ml-1 text-[#FF3811]"
      >
        <img  className=" w-44 md:w-40 lg:w-48 ml-10 md:ml-5 lg:ml-20" src="https://i.ibb.co/BcFWdqk/Hire-Master-Logo-2.png" alt="" />
      </Link>
    </div>
    <div className="flex-none">
      <div className="hidden md:flex  items-center space-x-4 mr-4 font-medium lg:text-lg mdmenu menu-horizontal px-1 md:text-base">
        <Link>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/jobs'>Jobs</Link>
        <Link to='/contacts'>Contact</Link>
        {user ?
          <div>
            <Link className="lg:pr-3 md:pr-3" to='/profile'>Profile</Link>
            <Link onClick={handleSignOut} to='/login'>Logout</Link>
          </div> :
          <Link to='/signup2'>Register</Link>
        }


      </div>
    </div>
    <Link to="/jobpost">
      {" "}
      <button className="hidden md:flex lg:w-44  lg:text-xl md:w-36 md:text-sm px-5 py-2 items-center space-x-1 font-semibold text-lg bg-[#FF3811] text-white rounded-lg">
        <p className="lg:pl-2">Post a Job</p>
        <MdPostAdd size={30} />
      </button>
    </Link>
  </div>
  );
};

export default Navbar;
