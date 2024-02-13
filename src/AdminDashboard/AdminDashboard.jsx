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
        <ul className="menu p-4 w-80 min-h-full bg-orange-600 text-base-content">
    
          <div className="space-y-2 mb-10">
            <img className="w-28 ml-20 mt-10 rounded-full" src={user?.photoURL} alt="" />
            <h1 className="text-lg text-white font-bold ml-5 ">{user?.displayName}</h1>
          </div>


          {/* Sidebar content here */}


          <ul className="menu p-4 py-auto"> 
                    <li><NavLink to="/AdminDashboard/AllUsers">All Users</NavLink></li>
                    
                    
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