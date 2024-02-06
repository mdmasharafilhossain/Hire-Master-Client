
import { Link } from 'react-router-dom';
import world from '../../../assets/world-animation.json'
import Lottie from 'lottie-react';
// import React, { useContext } from 'react';
import { AuthContext } from '../../../Comonents/AuthProvider/AuthProvider';
// import { useDisclosure } from '@chakra-ui/react';
import { Button, useDisclosure } from "@chakra-ui/react";
import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Banner = () => {
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
    <div className='h-[800px] border-4'>
     
      <div className=' mb-12 border-4 border-red-700'>
      
      <div className="hero h-[650px] bg-[url('/bg-1.avif')]">
        <div className='hero-overlay bg-opacity-60'></div>

        <div className='hero-content flex-col lg:flex-row-reverse '>
          <div className='-mt-32'>
            <h1 className='lg:-ml-[500px] text-3xl md:text-6xl text-white font-bold lg:w-[600px]'>
              Find the perfect Job that you deserved
            </h1>
            <div className='my-4 lg:w-[500px] lg:-ml-[500px] text-white'>
              <p>
                Unlock Your Career Potential with HireMaster – Where Dreams Meet
                Opportunities! Connecting Talent to Triumph.
              </p>
            </div>

            <button className='btn hover-none bg-[#FF3811] border-none text-white rounded-sm mr-4 lg:-ml-[500px] my-3'>
              Discover More
            </button>

            <button className='btn btn-outline border-white rounded-sm text-white w-36 my-3'>
              Latest Jobs
            </button>
          </div>

          {/* <div className='border  text-white h-full'></div> */}
        </div>

          <div className=' lg:-mt-[450px] lg:h-20 lg:absolute lg:ml-[650px]'>
            <Lottie className='hidden md:hidden lg:block lg:w-96 '  animationData={world}></Lottie>
          </div>
      </div>
    </div>
  
      {/* For Navbar */}
      {/* // absolute mt-[450px]
  // sticky  border-4  top-0 z-50  -mt-60*/}
      <div className=" navbar -mt-60  sticky top-0 bottom-0 z-50 border-4 border-blue-700    bg-base-100 h-[10px]">
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
          <img src="https://i.ibb.co/KK2js8C/hire-master-logo.png" className="w-28" alt="logo" />
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
        className="text-3xl md:text-4xl font-bold ml-1 text-[#FF3811]"
      >
        HireMaster
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


    </div>
  );
};

export default Banner;
