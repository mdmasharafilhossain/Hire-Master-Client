import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaGooglePlus,
  FaCaretRight,
} from "react-icons/fa";
import { FaSquareTwitter, FaInstagram } from "react-icons/fa6";
import logo from "../../assets/hire_master-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='container mx-auto px-3 mt-20 mb-10'>
      <hr />
      <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 place-items-start'>
        <div className='md:col-span-2 lg:col-span-1'>
          <nav className='text-start mb-4'>
            <img className='w-52  mx-auto' src="https://i.ibb.co/BcFWdqk/Hire-Master-Logo-2.png" alt='logo' />
          </nav>
        </div>
        <div className='md:col-span-1 space-y-2'>
          <header className='font-semibold text-lg'>Job Seekers</header>
          <div className='space-y-1'>
            <Link className='flex items-center'>
              <FaCaretRight />
              Create Account
            </Link>
            <Link className='flex items-center'>
              <FaCaretRight />
              List of Features
            </Link>
            <Link className='flex items-center'>
              <FaCaretRight />
              Video CV
              <span className='px-[4px] border border-[#ff3811] rounded-lg ml-1'>
                new
              </span>
            </Link>
            <Link className='flex items-center'>
              <FaCaretRight />
              FAQ
            </Link>
          </div>
        </div>

        <div className='md:col-span-1 space-y-2'>
          <header className='font-semibold text-lg'>Employers</header>
          <div className='space-y-1'>
            <Link className='flex items-center'>
              <FaCaretRight />
              Create Account
            </Link>
            <Link className='flex items-center'>
              <FaCaretRight />
              Products/Service
            </Link>
            <Link className='flex items-center'>
              <FaCaretRight />
              Post a Job
            </Link>
            <Link className='flex items-center'>
              <FaCaretRight />
              FAQ
            </Link>
          </div>
        </div>
        <div className='md:col-span-1 space-y-2'>
          <header className='font-semibold text-lg'>Community</header>
          <div className='space-y-1'>
            <Link className='flex items-center'>
              <FaCaretRight />
              Events
            </Link>
            <Link className='flex items-center'>
              <FaCaretRight />
              Community Hub
            </Link>
            <Link className='flex items-center'>
              <FaCaretRight />
              Community Standards
            </Link>
          </div>
        </div>
      </footer>
      <footer className='footer px-3 py-4 border-t text-base-content border-base-300'>
        <aside className='items-center grid-flow-col'>
          <p>&copy; 2024 HireMaster. All Rights Reserved.</p>
        </aside>
        <nav className='md:place-self-center md:justify-self-end'>
          <div className='grid grid-flow-col gap-4 text-2xl'>
            <FaGooglePlus />
            <FaInstagram />
            <FaFacebookSquare />
            <FaPinterestSquare />
            <FaSquareTwitter />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
