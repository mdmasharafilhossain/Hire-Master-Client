import { Outlet } from "react-router-dom";

import Footer from "../Comonents/Footer/Footer";

const MainLayOut = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayOut;
