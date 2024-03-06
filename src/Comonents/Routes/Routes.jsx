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

import ProfileHead from "../../Pages/ProfileHead/ProfileHead";
import Education from "../../Pages/Education/Education";

import Appliedjobs from "../../Pages/Appliedjobs/Appliedjobs";
import PrivateRoute from "./PrivateRoute";
import ManagerProfile from "../../Pages/Profile/ManagerProfile";
import ManagerForm from "../../Pages/ManagerProfileForm/ManagerForm";
import MakePayment from "../MakePatment/MakePayment";

import Projects from "../../Pages/Projects/Projects";
import Experience from "../../Pages/Experience/Experience";
import Skills from "../../Pages/Skills/Skills";
import AdminDashboard from "../../AdminDashboard/AdminDashboard";
import AllUsers from "../../AdminDashboard/allUsers/allUsers";
import AllJobPost from "../../AdminDashboard/AllJobPost/AllJobPost";
import TechNews from "../../Pages/TechNews/TechNews";
import AdminTechNews from "../../AdminDashboard/AllTechNews/AdminTechNews";
import CreateNews from "../../AdminDashboard/CreateNews/CreateNews";
import UpdateNews from "../../AdminDashboard/UpdateNews/UpdateNews";
import NewsDetails from "../TechNews/NewsDetails";
import JobFair from "../../Pages/JobFair/JobFair";
import JobFairRegistrationForm from "../JobFair/JobFairRegistrationForm";

import FairProfileSettings from "../JobFair/FairProfileSettings";
import JobFairLayout from "../../LayOut/JobFairLayout";
import JobFairProfile from "../../Pages/JobFair/JobFairProfile";
import JobFairBookingHistory from "../JobFair/JobFairBookingHistory";
import FairInterestedEvents from "../JobFair/FairInterestedEvents";
import FairSponsorEvents from "../JobFairSponsor/FairSponsorEvents";
import FairSponsorEventBookings from "../JobFairSponsor/FairSponsorEventBookings";
import FairSponsorCreateEvent from "../JobFairSponsor/FairSponsorCreateEvent";
import FairSponsorUpdateEvent from "../JobFairSponsor/FairSponsorUpdateEvent";
import HiringManagerList from "../../AdminDashboard/HiringManagerList/HiringManagerList";
import PremiumUser from "../../AdminDashboard/PremiumUser/PremiumUser";
import Stripe from "../MakePatment/Stripe";
import SSL from "../MakePatment/SSL";
import PaymentSuccess from "../MakePatment/PaymentSuccess";
import PaymentFail from "../MakePatment/PaymentFail";
import SingleCourse from "../PremiumUserCourse/SingleCourse";
import JobPostReport from "../../Pages/JobPostReport/JobPostReport";
import AllJobReport from "../../AdminDashboard/AllJobReport/AllJobReport";
import PremiumUserCourses from "../../AdminDashboard/PremiumUserCourses/PremiumUserCourses";
import PremiumallCourses from "../PremiumUserCourse/PremiumallCourses";
import Statistics from "../../AdminDashboard/Statistics/Statistics";
import JobFairAllEvents from "../../Pages/JobFair/JobFairAllEvents";
import Appmain from "../ChatApp/Appmain";
import ApplicantsList from "../JobFilter/Applicants/ApplicantsList";
import ApplicantProfile from "../../Pages/Profile/ApplicantProfile";
import UserDetails from "../../AdminDashboard/UserDetails/UserDetails";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/jobs",
        element: (
          <PrivateRoute>
            <Jobs></Jobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/jobpostreport/:id",
        element: <JobPostReport></JobPostReport>,
      },
      {
        path: "/jobpost",
        element: (
          <PrivateRoute>
            <JobPost></JobPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/applicants",
        element: (
          <PrivateRoute>
            <ApplicantsList></ApplicantsList>
          </PrivateRoute>
        ),
      },
      {
        path: "/applicants/:email",
        element: (
          <PrivateRoute>
            <ApplicantProfile></ApplicantProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedjobs",
        element: (
          <PrivateRoute>
            <Appliedjobs></Appliedjobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: <MyJobs />,
      },
      {
        path: "/manager-chat",
        element: <PrivateRoute><Appmain></Appmain></PrivateRoute>,
      },
      {
        path: "contacts",
        element: <ContactUs />,
      },

      {
        path: "tech-news",
        element: <TechNews />,
      },
      {
        path: "tech-news/:slug",
        element: <NewsDetails />,
      },

      // -----------payments----------------
      {
        path: "/MakePaymentRoute",
        element: (
          <PrivateRoute>
            <MakePayment></MakePayment>
          </PrivateRoute>
        ),
      },
      {
        path: "/stripeGateway",
        element: (
          <PrivateRoute>
            <Stripe></Stripe>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-success/:tranId",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-fail/:tranId",
        element: (
          <PrivateRoute>
            <PaymentFail />
          </PrivateRoute>
        ),
      },
      {
        path: "/sslGateway",
        element: (
          <PrivateRoute>
            <SSL />
          </PrivateRoute>
        ),
      },
      // -------------job fair-----------------
      {
        path: "job-fair/all-events",
        element: <JobFairAllEvents />,
      },
      {
        path: "job-fair",
        element: (
          <PrivateRoute>
            <JobFair />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "job-fair/profile",
    element: <JobFairLayout />,
    children: [
      {
        path: "",
        element: <JobFairProfile />,
      },
      {
        path: "bookings",
        element: <JobFairBookingHistory />,
      },
      {
        path: "interested-events",
        element: <FairInterestedEvents />,
      },
      {
        path: "settings",
        element: <FairProfileSettings />,
      },
      {
        path: "sponsor-event",
        element: <FairSponsorEvents />,
      },
      {
        path: "sponsor-event-bookings",
        element: <FairSponsorEventBookings />,
      },
      {
        path: "sponsor-create-event",
        element: <FairSponsorCreateEvent />,
      },
      {
        path: "sponsor-event/update/:slug",
        element: <FairSponsorUpdateEvent />,
      },
    ],
  },
  {
    path: "job-fair/registration",
    element: <JobFairRegistrationForm />,
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
    path: "profile",
    element: <Profile></Profile>,
  },
  {
    path: "/managerProfile",
    element: (
      <PrivateRoute>
        <ManagerProfile />
      </PrivateRoute>
    ),
  },
  {
    path: "/managerForm",
    element: (
      <PrivateRoute>
        <ManagerForm />
      </PrivateRoute>
    ),
  },
  {
    path: "/profileForm",
    element: <UserProfileForm></UserProfileForm>,
  },
  {
    path: "/profileHead",
    element: <ProfileHead></ProfileHead>,
  },
  {
    path: "/education",
    element: <Education></Education>,
  },
  {
    path: "/projects",
    element: <Projects></Projects>,
  },
  {
    path: "/experience",
    element: <Experience></Experience>,
  },
  {
    path: "/skills",
    element: <Skills></Skills>,
  },
  {
    path: "/courseDetails/:id",
    element: <SingleCourse></SingleCourse>,
  },
  {
    path: "/premiumallcourse",
    element: <PremiumallCourses></PremiumallCourses>,
  },

  {
    path: "/courseDetails/:id",
    element: <SingleCourse></SingleCourse>,
  },
  {
    path: "/premiumallcourse",
    element: <PremiumallCourses></PremiumallCourses>,
  },
  {
   path:"/AdminDashboard/AllUsers/:email",
   element:<UserDetails></UserDetails>,
   loader: ()=> fetch('http://localhost:5000/userProfile/all')
  },

  // Admin Dashboard

  {
    path: "/AdminDashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/AdminDashboard/AllUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/AdminDashboard/AllHiringManagers",
        element: <HiringManagerList></HiringManagerList>,
      },
      {
        path: "/AdminDashboard/AllJobPost",
        element: <AllJobPost></AllJobPost>,
      },
      {
        path: "/AdminDashboard/create-news",
        element: <CreateNews />,
      },
      {
        path: "/AdminDashboard/all-news",
        element: <AdminTechNews />,
      },
      {
        path: "/AdminDashboard/all-news/:slug",
        element: <UpdateNews />,
      },
      {
        path: "/AdminDashboard/PremiumUser",
        element: <PremiumUser></PremiumUser>,
      },
      {
        path: "/AdminDashboard/alljobreport",
        element: <AllJobReport></AllJobReport>,
      },
      {
        path: "/AdminDashboard/premiumusercourses",
        element: <PremiumUserCourses></PremiumUserCourses>,
      },
      {
        path: "/AdminDashboard/Statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default router;
