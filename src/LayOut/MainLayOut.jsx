import { Outlet } from "react-router-dom";
import Footer from "../Comonents/Footer/Footer";
import ChatBotHelper from "../Comonents/chatbot/ChatBotHelper";
// import Theme from "../Comonents/ThemeChange/Theme";

const MainLayOut = () => {
  return (
    <div>
      {/* <Navbar/> */}

      <div className='absolute z-30  lg:ml-[1050px]'>
        <ChatBotHelper></ChatBotHelper>
      </div>
      {/* <div className="fixed top-20 bg-gray-100 p-1 rounded-lg border border-gray-300 z-30">
        <Theme/>
      </div> */}
      <Outlet />
      <div className='bg-gray-300/65'>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayOut;
