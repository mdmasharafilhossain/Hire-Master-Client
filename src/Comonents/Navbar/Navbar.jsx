import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar absolute  md:w-1/2 lg:w-full mt-[450px] bg-base-100 h-[10px]">
                <div className="flex-1">
                    <a className="btn btn-ghost ml-[100px] text-4xl font-bold text-[#FF3811]">HireMaster</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">


                        <Link className='mt-4 mr-4 text-base font-medium'>Home</Link>
                        <Link className='mt-4 mr-4 text-base font-medium'>About</Link>
                        <Link className='mt-4 mr-4 text-base font-medium'>Jobs</Link>
                        <Link className='mt-4 mr-4 text-base font-medium'>Contact</Link>
                        <Link to="/signup2" className='mt-4 mr-4 text-base font-medium'>Register</Link>
                        <button className='flex h-[64px] w-40  bg-[#FF3811] text-white'>
                            <p className='mt-5 ml-10'>Post a Job</p>
                            <svg className='mt-6' xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>

                        </button>
                    </ul>
                </div>
            </div>



        </div>


    );
};

export default Navbar;