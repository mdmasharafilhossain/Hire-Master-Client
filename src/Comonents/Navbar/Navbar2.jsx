import { useContext } from 'react';
import { MdPostAdd } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar2 = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }

    return (
        <div className="navbar shadow-lg fixed top-0 z-50 shadow-base-200  bg-base-100 mb-5">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl md:text-3xl font-bold ml-1 text-[#FF3811] ">HireMaster</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FF3811"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item"></span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            
                            <div className="card-actions">
                                <button className="btn  text-white bg-[#FF3811] btn-block">View Applied Jobs</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        
                        <NavLink to='/login'>
                        <li onClick={handleSignOut}><a>Logout</a></li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;