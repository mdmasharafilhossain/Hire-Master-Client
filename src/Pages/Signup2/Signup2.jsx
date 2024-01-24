import { FaEarthAmericas } from "react-icons/fa6";
// import { GiBrain } from "react-icons/gi";
import { FaCrop } from "react-icons/fa";
import img from '../../assets/hire_master-logo.png'
import { Link } from 'react-router-dom';
const Signup2 = () => {
    return (
        <div>
            <div>
                <img className='mt-5 ml-12 w-20' src={img} alt="" />
                <Link to='/'>
                <button className="btn btn-outline btn-sm mt-2 ml-14">Back</button>
                </Link>
            </div>
            <h1 className='text-3xl ml-16 mt-2 font-bold md:ml-[30%] md:mb-3 lg:ml-[37%]'>What are you interested in?</h1>

            <div className='lg:flex  md:flex lg:ml-[29%] md:ml-[20%] md:mt-4 mt-3 lg:gap-5 md: gap-3 lg:mt-8'>

                <div className=' bg-[#FF3811] text-white border rounded-lg border-r-8  lg:p-8 md:p-6 p-5 mb-4'>
                    <p  className="lg:ml-14"><FaEarthAmericas className="w-24 h-6"/></p>
                    <h1 className='text-2xl font-bold lg:ml-6 md:ml-4 ml-16 mb-2'>Finding a Job</h1>
                    <p className='w-52 ml-10 lg:ml-2 md:ml-0'>Apply for remote and visa-sponsored job opportunities</p>
                    <Link to='/signup'>
                    <button className='ml-24 lg:ml-14 md:ml-14 mt-3  btn btn-outline text-white'>Click Here</button>
                    </Link>
                </div>

                <div className='bg-gray-800 text-white border rounded-lg border-r-8  lg:p-8 md:p-6 p-5 mb-4'>
                <p  className="lg:ml-14">< FaCrop className="w-24 h-6"/></p>
                    <h1 className='text-2xl font-bold lg:ml-7 md:ml-4 ml-16 mb-2'>Hiring Talent</h1>
                    <p className='w-52 ml-10 lg:ml-2 md:ml-0'>Tap into 400,000+ qualified candidates at no cost</p>
                    {/* <Link className='ml-10 lg:ml-2 md:ml-0'>Click Here</Link> */}
                    <Link to='/managersignup'>
                    <button className='ml-24 mt-3 lg:ml-14 md:ml-14 hover:bg-[#FF3811] btn btn-outline text-white'>Click Here</button>
                    </Link>
                </div>
            </div>

            <p className='w-60 ml-7 lg:w-[30%] lg:ml-[500px] md:w-[55%] md:ml-[27%] my-4 text-center text-black font-medium'>By continuing you accept our standard <span className='text-[#FF3811]'>terms and conditions</span> and our privacy policy</p>
        </div>
    );
};

export default Signup2;