import { Link, useLocation, useNavigate } from "react-router-dom";
import svg from "../../assets/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import swal from "sweetalert";
// import { saveHiringManagerInfoDB, saveHiringTalentInDb } from "../../api";
import Navbar2 from "../../Comonents/Navbar/Navbar2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import { updateProfile } from "firebase/auth";

const ManagerSignup = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [selectedRole, setSelectedRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();

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
    googleSignIn().then((result) => {
      console.log(result);
      if (result) {
        const manager = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result?.user?.photoURL,
        };
        axiosPublic.post("/hiring-talents", manager).then((res) => {
          console.log(res.data);
        });
      }
      // navigate(from, { replace: true });
      navigate(location?.state ? location.state : "/managerProfile");
      return swal("Success!", "Login Successful", "success");
    });
  };

  // email sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photo = form.photo.value;
    // console.log(email, password, selectedRole);

    if (password !== confirmPassword) {
      setErrorMessage("Password and confirm password do not match");
      return;
    } else {
      setErrorMessage("");
    }
    const hirer = { email, name, photo, password, role: selectedRole };

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          Promise.all([
            axiosPublic.post("/hiring-talents", hirer),
            axiosPublic.post("/managerProfile", hirer),
          ])
            .then(([hiringTalentsRes, managerProfileRes]) => {
              console.log(hiringTalentsRes.data);
              console.log(managerProfileRes.data);
              navigate(location?.state ? location.state : "/managerForm");
              swal("Success!", "Registration Successful", "success");
            })
            .catch((error) => {
              console.log(error);
              swal("Error!", `${error.message}`, "error");
            });
        });
      })
      .catch((error) => {
        console.log(error);
        swal("Error!", `${error.message}`, "error");
      });

    // console.log(hirer);
  };

  return (
    <div className="">
      <Navbar2 />
      <div className="container mx-auto md:flex items-center justify-center">
        {/* ------------------Left side banner---------------- */}
        <div className="flex items-center justify-center md:mr-6 mb-6 md:mb-0">
          <img
            className="w-52 lg:w-[400px] md:w-[250px] md:h-[400px] lg:h-[350px]"
            src={svg}
            alt=""
          />
        </div>
        {/*--------------- SignUp form------------- */}
        <div className="border lg:w-[500px] md:w-[420px] rounded-lg p-6 md:py-8 px-10 my-5">
          <h2 className="text-2xl lg:text-4xl text-center mb-5 font-bold">
            Set up your account to start hiring
          </h2>
          <div>
            <form onSubmit={handleSignUp} className="flex flex-col gap-2">
              <div className="flex flex-col text-black">
                <select
                  id="role"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  required
                  className="outline-none border border-[#FF3811] px-2 py-1 font-bold"
                >
                  <option value="">Select Role</option>
                  <option value="hiring-manager">Hiring Manager</option>
                </select>
              </div>

              {/* ----------name---------------- */}
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
              <div className="flex flex-col justify-center">
                <button className="btn bg-[#FF3811] text-white">Signup</button>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline mt-4 btn-warning w-full rounded-md overflow-hidden text-xs sm:text-lg font-bold"
                >
                  <FcGoogle className="text-xl" /> Continue with Google
                </button>
              </div>
              <div className="flex justify-center">
                <label className="label">
                  <Link to="/managerlogin">
                    <span className="label-text-alt link link-hover text-base">
                      Have an Account? Login
                    </span>
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerSignup;
