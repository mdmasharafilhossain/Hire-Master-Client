import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import React, { useContext, useRef, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import { saveUsersInDb } from "../../api";
import Navbar2 from "../../Comonents/Navbar/Navbar2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../Comonents/Firebase/firebase.config";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const [invalidAuth, setInvalidAuth] = React.useState("");
  const location = useLocation();
   const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const saveUser = async (user) => {
    const response = await saveUsersInDb(user);
    console.log(response.data);
  };
  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        if (result) {
          const user = {
            name: result.user.displayName,
            email: result.user.email,
            photo: result?.user?.photoURL,
          };
          saveUser(user);
        }
        navigate("/profile");
        return swal("Success!", "Login Successful", "success");
      })
      .catch((error) => {
        console.log(error.message);
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
          navigate(location?.state ? location.state : "/profile");
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
      <div className="my-20 md:my-32 container mx-auto flex flex-col lg:flex-row space-x-10 justify-between items-center">
        <div className="w-full mx-auto">
          <img
            className=""
            src="https://i.ibb.co/VCWMv70/10173919-8619.jpg"
            alt=""
          />
        </div>
        <div className="w-full mx-auto lg:w-3/4 border rounded-2xl overflow-hidden px-10 md:px-16 lg:px-24 py-10 md:py-14 lg:py-20">
          <div className="card ">
            <div className="flex flex-col w-full">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-semibold mb-5">
                  Log in to HireMaster{" "}
                </h1>
              </div>
              <div>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Email{" "}
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* -----------password------------ */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered w-full pr-10" // Added pr-10 for padding on the right
                      required
                    />
                    <span
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer" // Adjusted position to the right
                      onClick={() => setShowPassword(!showPassword)} // Toggles the show/hide of password
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                {/* Forgot password link */}
                <div className="mt-2">
                  <button
                    onClick={handleForgotPassword}
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* <Link to='/login'> */}
                <div className="form-control mt-6">
                  <button className="btn bg-[#FF3811] text-white">Login</button>
                </div>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline mt-4 btn-warning w-full rounded-md overflow-hidden text-xs sm:text-lg font-bold"
                >
                  <FcGoogle className="text-xl" /> Continue with Google
                </button>

                <label className="label">
                  <Link to="/signup">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-base -ml-3 lg:ml-[88px] md:ml-[50px] text-center"
                    >
                      Do not Have an Account? SignUp
                    </a>
                  </Link>
                </label>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
