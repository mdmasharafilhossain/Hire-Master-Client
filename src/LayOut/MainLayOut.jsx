import { Outlet } from "react-router-dom";
import Navbar from "../Comonents/Navbar/Navbar";
import Footer from "../Comonents/Footer/Footer";

const MainLayOut = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOut;
