import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import swal from "sweetalert";
import { saveUsersInDb } from "../../api";
import Navbar2 from "../../Comonents/Navbar/Navbar2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";
  // google sign in

  const saveUser = async (user) => {
    const response = await saveUsersInDb(user);
    console.log(response.data);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    const password = document.getElementById("password").value;

    if (confirmPassword && password !== confirmPassword) {
      setErrorMessage("Password and confirm password do not match");
    } else {
      setErrorMessage("");
    }
  };

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
        navigate("/profileForm");
        return swal("Success!", "Login Successful", "success");
      })
      .catch((error) => {
        swal(error.message);
      });
  };

  // email sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photo = form.photo.value;

    if (password !== confirmPassword) {
      setErrorMessage("Password and confirm password do not match");
      return;
    } else {
      setErrorMessage("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
      });
        if (result) {
          const user = { name, email, photo };
          saveUser(user);
        }
        navigate(location?.state ? location.state : "/profileForm");
        return swal("Success!", "Registration Successful", "success");
      })
      .catch((error) => {
        return swal("Error!", `${error.message}`, "error");
      });
  };

  return (
    <>
      <Navbar2 />
      <div className="container mx-auto w-3/4 lg:w-3/5 overflow-hidden my-20 md:my-32 ">
        <div className="border px-10 md:px-16 lg:px-24 py-10 md:py-14 lg:py-20 rounded-2xl space-y-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Sign up to HireMaster
          </h2>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-warning w-full rounded-md overflow-hidden text-xs sm:text-lg font-bold"
          >
            <FcGoogle className="text-xl" /> Continue with Google
          </button>
          <div className="flex justify-center items-center">
            <span className="w-full border border-[#FF3811]"></span>
            <span className="px-4">Or</span>
            <span className="w-full border border-[#FF3811]"></span>
          </div>
          <div className="card ">
            <div className="flex flex-col w-full">
              <div>
                <form className="space-y-4" onSubmit={handleSignUp}>
                  {/* -----Name------ */}
                  <div className="flex flex-col">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* -----------Image------------- */}
                  <div className="flex flex-col">
                    <input
                      type="url"
                      id="photo"
                      name="photo"
                      placeholder="Upload your photo"
                      className="input input-bordered"
                      required
                    />
                  </div>
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
                  {/* -------------confirm password----------- */}
                  <div className="form-control">
                    <div className="relative">
                      <input
                        type={show ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="input input-bordered w-full"
                        required
                        onChange={handleConfirmPasswordChange} // Add this line to handle onChange event
                      />
                      <span
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        {show ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>

                  <p className="text-red-500">{errorMessage}</p>
                  <div className="form-control">
                    <button
                      type="submit"
                      className="text-xs sm:text-base group relative overflow-hidden py-2 rounded-2xl bg-[#FF3811] font-semibold text-white"
                    >
                      Create Account
                      <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                    </button>
                  </div>
                  <div className="sm:flex items-center justify-center sm:space-x-2">
                    <p className="text-xs sm:text-base">
                      Already have an account?
                    </p>
                    <Link to="/login" className="">
                      <button className="text-xs sm:text-base underline text-amber-500 font-bold">
                        Login
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
