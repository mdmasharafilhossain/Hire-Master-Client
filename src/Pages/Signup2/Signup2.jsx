import { FaEarthAmericas } from "react-icons/fa6";
// import { GiBrain } from "react-icons/gi";
import { FaCrop } from "react-icons/fa";

import { Link } from "react-router-dom";
import Navbar2 from "../../Comonents/Navbar/Navbar2";
const Signup2 = () => {
  return (
    <div>
      <Navbar2 />
      <h1 className='mt-32 font-bold  text-2xl md:text-3xl text-center'>
        What are you interested in?
      </h1>

      <div className='md:flex items-center justify-center mt-8 md:gap-x-10'>
        <div className='flex flex-col items-center justify-center bg-[#FF3811] text-white border rounded-lg border-r-8  lg:p-8 md:p-6 p-5 space-y-3'>
          <FaEarthAmericas className='w-24 h-6' />
          <h1 className='text-2xl font-bold '>Finding a Job</h1>
          <p className='w-52 '>
            Apply for remote and visa-sponsored job opportunities
          </p>
          <Link to='/login'>
            <button className='btn btn-outline text-white'>Click Here</button>
          </Link>
        </div>

        <div className='flex flex-col items-center justify-center bg-gray-800 text-white border rounded-lg border-r-8  lg:p-8 md:p-6 p-5 space-y-3'>
          <FaCrop className='w-24 h-6' />
          <h1 className='text-2xl font-bold '>Hiring Talent</h1>
          <p className='w-52'>
            Tap into 400,000+ qualified candidates at no cost
          </p>
          <Link to='/managerlogin'>
            <button className='hover:bg-[#FF3811] btn btn-outline text-white'>
              Click Here
            </button>
          </Link>
        </div>
      </div>

      <p className='text-center text-lg md:text-2xl font-medium mt-5'>
        By continuing you accept our standard <br />
        <span className='text-[#FF3811]'>terms and conditions</span> and our
        privacy policy.
      </p>
    </div>
  );
};

export default Signup2;
