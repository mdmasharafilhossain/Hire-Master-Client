import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../LayOut/MainLayOut";
import Home from "../../Pages/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Error from "../../Pages/Error/Error";
import Signup2 from "../../Pages/Signup2/Signup2";
import ManagerSignup from "../../Pages/Signup2/ManagerSignup";
import ManagerLogin from "../../Pages/Signup2/ManagerLogin";
import Jobs from "../../Pages/Jobs/Jobs";
import JobPost from "../../Pages/JobPost/JobPost";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import About from "../../Pages/About/About";
import JobDetails from "../../Pages/JobDetails/JobDetails";
import Profile from "../../Pages/Profile/Profile";
import UserProfileForm from "../UserProfileForm/UserProfileForm";
import MyJobs from "../../Pages/Jobs/MyJobs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails/>,
      },
      {
        path: "/jobpost",
        element: <JobPost></JobPost>,
      },
      {
        path: "/myPostedJobs",
        element: <MyJobs/>
      },
      {
        path: "contacts",
        element: <ContactUs />,
      },
    ],
  },
  { path: "/signup", element: <SignUp></SignUp> },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signup2",
    element: <Signup2></Signup2>,
  },
  {
    path: "/managersignup",
    element: <ManagerSignup></ManagerSignup>,
  },
  {
    path: "/managerlogin",
    element: <ManagerLogin></ManagerLogin>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path:"profile",
    element:<Profile></Profile>
  },
  {
    path:"/profileForm",
    element:<UserProfileForm></UserProfileForm>
  }
]);

export default router;
