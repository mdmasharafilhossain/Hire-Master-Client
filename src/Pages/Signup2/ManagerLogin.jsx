import { Link, useLocation, useNavigate } from "react-router-dom";
import svg from "../../assets/login.svg";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import swal from "sweetalert";
import Navbar2 from "../../Comonents/Navbar/Navbar2";

const ManagerLogin = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn().then(result => {
      console.log(result);
      navigate(from, { replace: true });
    });
  };
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        if (result) {
          navigate(location?.state ? location.state : "/managerProfile");
          return swal("Success!", "Login Successful", "success");
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <Navbar2 />
      <div className='my-20 md:my-32'>
        <div className='lg:flex md:flex lg:ml-52 lg:gap-8 md:gap-5  mb-20'>
          <div className=''>
            <img
              className='w-52 ml-14 lg:w-[400px] md:w-[250px] md:h-[400px] md:mt-16 lg:h-[350px] lg:my-16'
              src={svg}
              alt=''
            />
          </div>
          <div className='border lg:w-[500px] md:w-[420px] rounded-lg p-12 h-[500px]'>
            <h2 className='text-4xl text-center my-4 text-[#444444] font-bold'>
              Login
            </h2>
            <div>
              <form onSubmit={handleLogin}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-base font-medium'>
                      Email{" "}
                    </span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    placeholder='email'
                    className='input input-bordered'
                    required
                  />
                </div>

                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-base font-medium'>
                      {" "}
                      Password
                    </span>
                  </label>
                  <input
                    type='password'
                    name='password'
                    placeholder='password'
                    className='input input-bordered'
                    required
                  />
                </div>

                {/* <Link to='/login'> */}
                <div className='form-control mt-6'>
                  <button className='btn bg-[#FF3811] text-white'>Login</button>
                </div>

                {/* <div className='flex lg:w-[400px] lg:ml-0 justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded cursor-pointer'>
                                <FcGoogle size={32} />
                                <p>Continue with Google</p>
                            </div> */}

                <button
                  onClick={handleGoogleSignIn}
                  className='btn btn-outline mt-4 btn-warning w-full rounded-md overflow-hidden text-xs sm:text-lg font-bold'
                >
                  <FcGoogle className='text-xl' /> Continue with Google
                </button>

                <label className='label'>
                  <Link to='/managersignup'>
                    <a
                      href='#'
                      className='label-text-alt link link-hover text-base -ml-3 lg:ml-[88px] md:ml-[50px] text-center'
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
    </>
  );
};

export default ManagerLogin;
