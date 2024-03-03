// import "./App.css";
import io from "socket.io-client";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SingleProfile from "./SingleProfile";
import useManager from "../Hooks/useManager/useManager";
import Navbar2 from "../Navbar/Navbar2";
import { useQuery } from "@tanstack/react-query";
import { getManagerInfo, getUserInfo } from "../../api";
// import useProfile from "../Hooks/useProfile/useProfile";

// const socket = io.connect("https://hire-master-server-sigma.vercel.app");

// client-side
const socket = io("https://hire-master-server-sigma.vercel.app", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "https://hire-master-server-sigma.vercel.app"
  }
});

const Appmain = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const chatContainerRef = useRef(null);

  const [managerInfo] = useManager();
  // const [profileData] = useProfile();
  // console.log(profileData.name);
  const { user } = useContext(AuthContext);
  console.log(user);
  const email = user?.email;
  const picture = user?.photoURL;

  // user profile with context email
  const { data: userProfile = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await getUserInfo(user?.email);
      console.log(res);
      return res.data;
    },
  });

  // // manager profile with context email
  const { data: managerProfile = {} } = useQuery({
    queryKey: ["manager"],
    queryFn: async () => {
      const res = await getManagerInfo(user?.email);
      console.log(res);
      return res.data;
    },
  });
  console.log(userProfile);
  console.log(managerProfile);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { email, picture, message });
    setMessage("");
  };

  useEffect(() => {
    socket.on("chat", (payload) => { 
      setChat([...chat, payload]);
      scrollToBottom();
    });
  }, [chat]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className="">
      <Navbar2></Navbar2>

      <div className="lg:flex m-10  lg:ml-20 lg:h-96 ">
        <div className="lg:w-96 lg:ml-0 md:ml-52">
          <h1 className="font-bold text-[#ff6445]  mb-8 text-2xl">
            Managers Profile
          </h1>
          <div>
            <div className="">
              {managerInfo.map((profileinfo) => (
                <SingleProfile
                  key={profileinfo._id}
                  profileinfo={profileinfo}
                ></SingleProfile>
              ))}
            </div>
          </div>
        </div>
        <div className="w-72 -ml-6 h-96 lg:w-96 md:w-[700px] lg:h-96 md:h-64 border rounded-t-none relative">
          <h1 className=" bg-[#ff6445]  text-2xl pt-2 text-white font-bold h-12 text-center rounded-md mb-2">
            Chat Here
          </h1>
          <div
            className="overflow-y-auto"
            style={{ height: "calc(100% - 110px)" }}
            ref={chatContainerRef}
          >
            {chat.map((payload, index) => {
              return (
                <div key={index} className="ml-7 mb-1">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={payload.picture} />
                    </div>
                    <p className="text-sm font-bold ml-3 mt-3 text-red-500">
                      {payload.email}
                    </p>
                  </div>
                  <p className="ml-16">{payload.message}</p>
                </div>
              );
            })}
          </div>
          <form
            onSubmit={sendChat}
            className="absolute bottom-0 left-0 w-full p-2 flex items-center"
          >
            <input
              type="text"
              className="border lg:pl-2 rounded-md border-[#ff6445] flex-grow"
              name="chat"
              placeholder="send text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="btn btn-outline border-orange-500  btn-xs ml-2"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="lg:w-96  md:mt-5  mt-8">
          <h1 className=" text-center text-2xl font-bold text-[#ff6445]">
            Your Profile
          </h1>
          <p className=" font-bold  lg:text-xl lg:ml-32 lg:pt-6 md:ml-64 md:mt-4 text-black md:text-xl ml-14 ">
            {user?.displayName}
          </p>

          <div className="flex gap-3 justify-center">
            <div className="avatar mb-3">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || managerProfile?.image || userProfile?.image} />
              </div>
            </div>

            <h3 className="mt-2">{user?.email}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appmain;
