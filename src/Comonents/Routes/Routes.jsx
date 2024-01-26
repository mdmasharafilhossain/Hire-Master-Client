import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../LayOut/MainLayOut";
import Home from "../../Pages/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Error from "../../Pages/Error/Error";
import Profile from "../../Pages/Profile/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home/>,
      }
    ]
  },
  { path: '/signup', element: <SignUp></SignUp> },
 {
  path:"/login",
  element:<Login></Login>
 },
 {
  path:"/profile",
  element:<Profile></Profile>
 }
]);

export default router;
