import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaGooglePlus,
  FaCaretRight,
} from "react-icons/fa";
import { FaSquareTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto px-3 mt-20 mb-10'>
      <hr />
      <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 place-items-start'>
        <div className='md:col-span-2 lg:col-span-1'>
          <nav className='text-start mb-4 flex flex-col'>
            <img
              className='w-52 '
              src='https://i.ibb.co/BcFWdqk/Hire-Master-Logo-2.png'
              alt='logo'
            />
            <p className='text-gray-500 mt-4 font-medium text-justify text-wrap w-full'>
              Your go-to platform for job searching and career opportunities.
              Find the perfect job for your skills and interests. Let HireMaster
              guide you to your next career move!
            </p>
          </nav>
        </div>

        <div className='md:col-span-1 space-y-2'>
          <header className='font-bold text-xl md:text-2xl'>About Us</header>
          <div className='space-y-1 text-lg'>
            <Link className='flex items-center text-gray-700 hover:text-gray-900'>
              <FaCaretRight />
              About Hire Master
            </Link>
            <Link className='flex items-center text-gray-700 hover:text-gray-900'>
              <FaCaretRight />
              Terms and conditions
            </Link>
            <Link className='flex items-center text-gray-700 hover:text-gray-900'>
              <FaCaretRight />
              Accessibility Statement
            </Link>
            <Link className='flex items-center text-gray-700 hover:text-gray-900'>
              <FaCaretRight />
              Community Standards
            </Link>
            <Link className='flex items-center text-gray-700 hover:text-gray-900'>
              <FaCaretRight />
              Feedback
            </Link>
          </div>
        </div>

        <div className='md:col-span-1 space-y-2'>
          <header className='font-bold text-xl md:text-2xl'>Job Seekers</header>
          <div className='space-y-1 text-lg'>
            <Link
              to='/jobs'
              className='flex items-center text-gray-700 hover:text-gray-900'
            >
              <FaCaretRight />
              All Jobs
            </Link>
            <Link
              to='/job-fair'
              className='flex items-center text-gray-700 hover:text-gray-900'
            >
              <FaCaretRight />
              Job Fair
              <span className='px-[4px] border border-[#ff3811] rounded-lg ml-1'>
                new
              </span>
            </Link>
            <Link
              to='/contacts'
              className='flex items-center text-gray-700 hover:text-gray-900'
            >
              <FaCaretRight />
              Contact us
            </Link>
          </div>
        </div>

        <div className='md:col-span-1 space-y-2'>
          <header className='font-bold text-xl md:text-2xl'>Employers</header>
          <div className='space-y-1 text-lg'>
            <Link
              to='/signup2'
              className='flex items-center text-gray-700 hover:text-gray-900'
            >
              <FaCaretRight />
              Create Account
            </Link>

            <Link
              to='/jobpost'
              className='flex items-center text-gray-700 hover:text-gray-900'
            >
              <FaCaretRight />
              Post a Job
            </Link>
            <Link
              to='/about'
              className='flex items-center text-gray-700 hover:text-gray-900'
            >
              <FaCaretRight />
              FAQ
            </Link>
          </div>
        </div>
      </footer>
      <footer className='footer px-3 py-4 border-t text-base-content border-base-300 '>
        <aside className='items-center grid-flow-col'>
          <p>&copy; 2024 HireMaster. All Rights Reserved.</p>
        </aside>
        <nav className='md:place-self-center md:justify-self-end'>
          <div className='grid grid-flow-col gap-4 text-2xl'>
            <a href='#' className='text-gray-400 hover:text-gray-200'>
              <FaGooglePlus />
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-200'>
              <FaInstagram />
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-200'>
              <FaFacebookSquare />
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-200'>
              <FaPinterestSquare />
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-200'>
              <FaSquareTwitter />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
