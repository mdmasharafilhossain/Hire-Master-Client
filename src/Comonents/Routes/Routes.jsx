import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../LayOut/MainLayOut";
import Home from "../../Pages/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      }
    ]
  },
  { path: '/signup', element: <SignUp></SignUp> },
]);

export default router;
