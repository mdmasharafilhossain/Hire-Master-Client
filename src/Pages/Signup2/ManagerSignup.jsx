import { Link, useLocation, useNavigate } from "react-router-dom";
import svg from "../../assets/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import swal from "sweetalert";
import { saveHiringTalentInDb } from "../../api";

const ManagerSignup = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("");

  // Function to handle role selection
  const handleRoleSelect = role => {
    setSelectedRole(role);
  };

  // email sign up
  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password, selectedRole);
    const hirer = { email, password, role: selectedRole };
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
  };
  console.log(selectedRole);

  return (
    <div className='mt-10'>
      <Link to='/'>
        <button className='btn btn-outline bg-[#FF3811] text-white btn-sm mt-2 ml-14'>
          Back
        </button>
      </Link>

      <div className='lg:flex md:flex lg:ml-52 lg:gap-8 md:gap-5  mb-20'>
        <div className=''>
          <img
            className='w-52 ml-14 lg:w-[400px] md:w-[250px] md:h-[400px] md:mt-16 lg:h-[350px] lg:my-16'
            src={svg}
            alt=''
          />
        </div>
        <div className='border lg:w-[500px] md:w-[420px] rounded-lg p-12 h-[600px]'>
          <h2 className='text-4xl text-center my-4 text-[#444444] font-bold'>
            Set up your account to start hiring
          </h2>
          <div>
            <form onSubmit={handleSignUp}>
              <div className=''>
                <div className='drawer drawer-end mt-3'>
                  <input
                    name='role'
                    id='my-drawer-4'
                    type='checkbox'
                    className='drawer-toggle'
                  />
                  <div className='drawer-content'>
                    {/* Page content here */}
                    <label
                      htmlFor='my-drawer-4'
                      className='drawer-button btn hover:bg-black  bg-[#1e1d1d] text-white'
                    >
                      Select Role
                    </label>
                  </div>
                  <div className='drawer-side'>
                    <label
                      htmlFor='my-drawer-4'
                      aria-label='close sidebar'
                      className='drawer-overlay'
                    ></label>
                    <ul className='menu p-4 w-60 min-h-full bg-base-200 text-base-content'>
                      {/* Sidebar content here */}
                      <li>
                        <a onClick={() => handleRoleSelect("Hiring Manager")}>
                          Hiring Manager
                        </a>
                      </li>
                      <li>
                        <a onClick={() => handleRoleSelect("Company Owner")}>
                          Company Owner
                        </a>
                      </li>
                      <li>
                        <a onClick={() => handleRoleSelect("Company CEO")}>
                          Company CEO
                        </a>
                      </li>
                      <li>
                        <a onClick={() => handleRoleSelect("Organizer")}>
                          Organizer
                        </a>
                      </li>
                      <li>
                        <a onClick={() => handleRoleSelect("Director")}>
                          Director
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
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
