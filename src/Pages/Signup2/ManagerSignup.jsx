import { Link } from 'react-router-dom';
import svg from '../../assets/login.svg';

const ManagerSignup = () => {
    return (
        <div className='mt-10'>
            <div className="lg:flex md:flex lg:ml-52 lg:gap-8 md:gap-5  mb-20">
                <div className="">
                    <img className="w-52 ml-14 lg:w-[400px] md:w-[250px] md:h-[400px] md:mt-16 lg:h-[350px] lg:my-16" src={svg} alt="" />
                </div>
                <div className="border lg:w-[500px] md:w-[420px] rounded-lg p-12 h-[600px]">
                    <h2 className="text-4xl text-center my-4 text-[#444444] font-bold">Set up your account to start hiring</h2>
                    <div>
                        <form >

                            <div className=''>
                                <div className="drawer drawer-end mt-3">
                                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content">
                                        {/* Page content here */}
                                        <label htmlFor="my-drawer-4" className="drawer-button btn hover:bg-black  bg-[#1e1d1d] text-white">Select Role</label>
                                    </div>
                                    <div className="drawer-side">
                                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                                            {/* Sidebar content here */}
                                            <li><a>Hiring Manager</a></li>
                                            <li><a>Company Owner</a></li>
                                            <li><a>Company CEO</a></li>
                                            <li><a>Organizer</a></li>
                                            <li><a>Director</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Business Email </span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>

                            {/* <Link to='/login'> */}
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] text-white">signup</button>
                            </div>

                            <label className="label">
                                <Link to='/managerlogin'>
                                <a href="#" className="label-text-alt link link-hover text-base ml-14 lg:ml-28 md:ml-[100px] text-center">Have an  Account? Login</a>
                                </Link>
                            </label>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerSignup;