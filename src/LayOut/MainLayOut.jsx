import { Outlet } from "react-router-dom";
import Footer from "../Comonents/Footer/Footer";
import ChatBotHelper from "../Comonents/chatbot/ChatBotHelper";

const MainLayOut = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className='absolute z-30  lg:ml-[1050px]'>
        <ChatBotHelper></ChatBotHelper>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOut;
