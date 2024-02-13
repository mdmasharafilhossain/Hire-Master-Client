import { NavLink, Outlet } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../Comonents/AuthProvider/AuthProvider";
import { FiAlignJustify } from "react-icons/fi";

const AdminDashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="flex container mx-auto">
           <div >
               
               <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn  bg-orange-500 drawer-button lg:hidden"><FiAlignJustify /></label>
      
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-60 min-h-full bg-orange-600 text-base-content">
    
          <div className="space-y-2 mb-10">
            <img className="w-20 ml-16 mt-6 rounded-full" src={user?.photoURL} alt="" />
            <h1 className="text-sm text-white text-center font-bold">{user?.displayName}</h1>
          </div>


          {/* Sidebar content here */}


          <ul className="menu p-4 py-auto"> 
                    <li  className="font-bold text-sm text-white"><NavLink to="/AdminDashboard/AllUsers" className="text-sm font-bold">All Job Seekers</NavLink></li>
                    
                    
               </ul>
        </ul>
      
      </div>
    </div>
    
                   </div>

            {/* Outlet */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;