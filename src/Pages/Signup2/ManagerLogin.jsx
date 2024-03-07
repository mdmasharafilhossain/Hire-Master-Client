import { Link, useLocation, useNavigate } from "react-router-dom";
import svg from "../../assets/login.svg";
import { FcGoogle } from "react-icons/fc";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import swal from "sweetalert";
import Navbar2 from "../../Comonents/Navbar/Navbar2";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../Comonents/Firebase/firebase.config";
import toast from "react-hot-toast";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";

const ManagerLogin = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [invalidAuth, setInvalidAuth] = useState("");
  const emailRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";
  // google sign in
  const axiosPublic = UseAxiosPublic();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
     
      if (result) {
        const manager = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result?.user?.photoURL,
        };
        axiosPublic.post("/managerProfile", manager).then((res) => {
          
        });
      }
      // navigate(from, { replace: true });
      navigate(location?.state ? location.state : "/managerProfile");
      return swal("Success!", "Login Successful", "success");
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        if (result) {
          navigate(location?.state ? location.state : "/managerProfile");
          return swal("Success!", "Login Successful", "success");
        }
      })
      .catch((error) => {
        
        setInvalidAuth(error?.code);
      });
  };
  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("pelase provide an email", emailRef.current.value);
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      console.log("please write a valid email");
      return;
    }

    // send validation email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("please check your email");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar2 />
      <div className="px-5">
        <div className="lg:flex md:flex lg:ml-52 lg:gap-8 md:gap-5  mb-20">
          <div className="">
            <img
              className="w-52 ml-14 lg:w-[400px] md:w-[250px] md:h-[400px] md:mt-16 lg:h-[350px] lg:my-16"
              src={svg}
              alt=""
            />
          </div>
          <div className="border lg:w-[500px] md:w-[420px] rounded-lg px-10">
            <h2 className="text-4xl text-center my-5 font-bold">Login</h2>
            <div>
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                {/* ---------email--------------- */}
                <div className="flex flex-col">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* --------------password---------- */}
                <div className="flex flex-col">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="input input-bordered w-full"
                      required
                    />
                    <span
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                {/* Forgot password link */}
                <div className="">
                  <button
                    onClick={handleForgotPassword}
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* <Link to='/login'> */}
                <div className="form-control ">
                  <p className="text-red-500">{invalidAuth}</p>
                  <button className="btn bg-[#FF3811] text-white">Login</button>
                </div>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline mt-4 btn-warning w-full rounded-md overflow-hidden text-xs sm:text-lg font-bold"
                >
                  <FcGoogle className="text-xl" /> Continue with Google
                </button>

                <div className="flex justify-center">
                  <label className="label">
                    <Link to="/managersignup">
                      <span className="label-text-alt link link-hover text-base">
                        Dont have any account? register.
                      </span>
                    </Link>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerLogin;
