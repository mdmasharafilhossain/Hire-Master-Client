import { Link, useLocation, useNavigate } from "react-router-dom";
import svg from "../../assets/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import swal from "sweetalert";
import { saveHiringTalentInDb } from "../../api";
import Navbar2 from "../../Comonents/Navbar/Navbar2";

const ManagerSignup = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("");

  // email sign up
  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    // console.log(email, password, selectedRole);
    const hirer = { email,name, password, role: selectedRole };

    createUser(email, password)
      .then(result => {
        if (result) {
          const databaseHiringTalent = async () => {
            try {
              const response = await saveHiringTalentInDb(hirer);
              console.log(response);
            } catch (error) {
              console.log(error);
            }
          };
          databaseHiringTalent();
        }
        console.log(result);
        navigate(location?.state ? location.state : "/managerForm");
        return swal("Success!", "Registration Successful", "success");
      })
      .catch(error => {
        console.log(error);
        return swal("Error!", `${error.message}`, "error");
      });
    // console.log(hirer);
  };

  return (
    <div className='mt-20 md:mt-32'>
      <Navbar2 />
      <div className='container mx-auto md:flex items-center justify-center'>
        <div className='flex items-center justify-center'>
          <img
            className='w-52 lg:w-[400px] md:w-[250px] md:h-[400px] md:mt-16 lg:h-[350px] '
            src={svg}
            alt=''
          />
        </div>
        <div className='border lg:w-[500px] md:w-[420px] rounded-lg p-12 h-[600px]'>
          <h2 className='text-2xl lg:text-4xl text-center mb-5 text-[#444444] font-bold'>
            Set up your account to start hiring
          </h2>
          <div>
            <form onSubmit={handleSignUp}>
              <select
                value={selectedRole}
                onChange={e => setSelectedRole(e.target.value)}
                required
                className='outline-none border border-[#FF3811] px-2 py-1 font-medium'
              >
                <option value=''>Select Role</option>
                <option value='hiring-manager'>Hiring Manager</option>
              </select>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-base font-medium'>
                    Name{" "}
                  </span>
                </label>
                <input
                  type='name'
                  name='name'
                  placeholder='Your Name'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-base font-medium'>
                    Business Email{" "}
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
                    Confirm Password
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
                <button className='btn bg-[#FF3811] text-white'>signup</button>
              </div>

              <label className='label'>
                <Link to='/managerlogin'>
                  <a
                    href='#'
                    className='label-text-alt link link-hover text-base ml-14 lg:ml-28 md:ml-[100px] text-center'
                  >
                    Have an Account? Login
                  </a>
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerSignup;
