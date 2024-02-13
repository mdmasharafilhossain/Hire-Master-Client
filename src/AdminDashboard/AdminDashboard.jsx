import { Outlet } from "react-router-dom";


const AdminDashboard = () => {
    return (
        <div className="flex container mx-auto">
           <div>
            <h1>hhdd</h1>
            </div> 

            {/* Outlet */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;