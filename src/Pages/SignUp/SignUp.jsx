import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react';
import { AuthContext } from '../../Comonents/AuthProvider/AuthProvider';
import swal from 'sweetalert';


const SignUp = () => {
    const { createUser , googleSignIn}=useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    // google sign in 
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
          navigate(from, { replace: true });
           
        })
    }

// email sign up 
const handleSignUp=e=>{
    e.preventDefault()
   const form=e.target 
   const email=form.email.value 
   const password =form.password.value 

  
   if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
       
    return (swal("Error!", "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character", "error"))
} 

   createUser(email, password)
   .then(result => {
       console.log(result)
    navigate(location?.state? location.state:"/")
    return (swal("Success!", "Registration Successful", "success"))
   })
   .catch(error => console.log(error))
   return (swal("Error!", "Already User", "error"))

   }
 



  
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
      <div className='mb-8 text-center'>
        <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
        <p className='text-sm text-gray-400'>Welcome to HireMaster</p>
      </div>
      <form onSubmit={handleSignUp}>
        <div className='space-y-4'>
          <div>
            <label htmlFor='username' className='block mb-2 text-sm'>
              Name
            </label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Enter Your Name Here'
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              data-temp-mail-org='0'
            />
          </div>
          <div>
            <label htmlFor='email' className='block mb-2 text-sm'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='Enter Your Email Here'
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              data-temp-mail-org='0'
            />
          </div>
          <div>
            <div className='flex justify-between'>
              <label htmlFor='password' className='text-sm mb-2'>
                Password
              </label>
            </div>
            <input
              type='password'
              name='password'
              autoComplete='new-password'
              id='password'
              required
              placeholder='*******'
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
            />
          </div>
        </div>
  
        <div>
          <button
            type='submit'
            className='bg-rose-500 w-full rounded-md py-3 text-white'
          >
            Continue
          </button>
        </div>
      </form>
      <div className='flex items-center pt-4 space-x-1'>
        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        <p className='px-3 text-sm dark:text-gray-400'>
          Signup with social accounts
        </p>
        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
      </div>
      <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded cursor-pointer'>
        <FcGoogle size={32} />
        <p>Continue with Google</p>
      </div>
      <p className='px-6 text-sm text-center text-gray-400'>
        Already have an account?{' '}
        <Link
          to='/login'
          className='hover:underline hover:text-rose-500 text-gray-600'
        >
          Login
        </Link>
        .
      </p>
    </div>
  </div>
  
  )
}

export default SignUp
