import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../LayOut/MainLayOut";
import Home from "../../Pages/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Error from "../../Pages/Error/Error";
import Jobs from "../../Pages/Jobs/Jobs";
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
        path: '/jobs',
        element: <Jobs/>
      }
    ],
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
