import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaGooglePlus,
} from "react-icons/fa";
import { FaSquareTwitter, FaInstagram } from "react-icons/fa6";
import logo from '../../assets/420167893_392812103320040_1727173477032307330_n.png'
const Footer = () => {
  return (
    <div className='mt-16 mx-auto'>
      <footer className='grid grid-cols-1 lg:grid-cols-4 footer py-10 '>
        <nav className=''>
          <img className="w-10" src={logo} alt='logo' />
          <header className=' text-xl'>What HireMaster Does?</header>
          <p>
            HireMaster is an innovative web application that serves as a
            comprehensive platform for agencies, job applicants, and recruiters
          </p>
        </nav>
        <nav>
          <header className='font-semibold text-lg'>
            Candidate Opportunities
          </header>
          <a className='link link-hover'>Add A Resume</a>
          <a className='link link-hover'> Job Alerts</a>
          <a className='link link-hover'> My Account</a>
        </nav>
        <nav>
          <header className='font-semibold text-lg'>
            Employers Opportunities
          </header>
          <a className='link link-hover'> Browse Candidates</a>
          <a className='link link-hover'> Browse Candidates</a>
          <a className='link link-hover'> Browse Candidates</a>
        </nav>
        <nav>
          <header className='font-semibold text-lg'>Join the Community</header>
          <a className='link link-hover'>community</a>
          <a className='link link-hover'>community</a>
          <a className='link link-hover'>community</a>
        </nav>
      </footer>
      <footer className='footer px-10 py-4 border-t text-base-content border-base-300'>
        <aside className='items-center grid-flow-col'>
          <p>&copy; 2024 Hire Master. All Rights Reserved.</p>
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
