import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import swal from "sweetalert";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
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

  // email sign up
  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        console.log(result);
        navigate(location?.state ? location.state : "/profileForm");
        return swal("Success!", "Registration Successful", "success");
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='container mx-auto w-3/4 lg:w-3/5 overflow-hidden my-20'>
      <div className='border px-10 md:px-16 lg:px-24 py-10 md:py-14 lg:py-20 rounded-2xl space-y-10'>
        <h2 className='text-2xl md:text-3xl font-semibold text-center'>
          Sign up to HireMaster
        </h2>
        <button
          onClick={handleGoogleSignIn}
          className='btn btn-outline btn-warning w-full rounded-md overflow-hidden text-xs sm:text-lg font-bold'
        >
          <FcGoogle className='text-xl' /> Continue with Google
        </button>
        <div className='flex justify-center items-center'>
          <span className='w-full border border-[#FF3811]'></span>
          <span className='px-4'>Or</span>
          <span className='w-full border border-[#FF3811]'></span>
        </div>
        <div className='card '>
          <div className='flex flex-col w-full'>
            <div>
              <form className='space-y-4' onSubmit={handleSignUp}>
                <div className='form-control'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Full name'
                    className='text-xs sm:text-base border border-gray-300 px-3 py-2 outline-none'
                    required
                  />
                </div>
                <div className='form-control'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email address'
                    className='text-xs sm:text-base border border-gray-300 px-3 py-2 outline-none'
                    required
                  />
                </div>
                <div className='form-control'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password (6 or more characters)'
                    className='text-xs sm:text-base border border-gray-300 px-3 py-2 outline-none'
                    required
                  />
                </div>
                <div className='form-control'>
                  <button
                    type='submit'
                    className='text-xs sm:text-base group relative overflow-hidden py-2 rounded-2xl bg-[#FF3811] font-semibold text-white'
                  >
                    Create Account
                    <div className='absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30'></div>
                  </button>
                </div>
                <div className='sm:flex items-center justify-center sm:space-x-2'>
                  <p className='text-xs sm:text-base'>
                    Already have an account?
                  </p>
                  <Link to='/login' className=''>
                    <button className='text-xs sm:text-base underline text-amber-500 font-bold'>
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
  );
};

export default SignUp;
