import { useContext, useState } from "react";
import { AuthContext } from "./../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import ProfileNav from "../ProfileNav/ProfileNav";

import { useNavigate } from "react-router-dom";

import useProfile from "../Hooks/useProfile/useProfile";

// image added key from imgbb
const Image_Hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const Profile_Hosting = `https://api.imgbb.com/1/upload?key=${Image_Hosting_key}`;

const UserProfileForm = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [profileData] = useProfile();
  const [disabled, setDisabled] = useState(false);
  const [file, setFile] = useState("");

  console.log(user);
  // console.log(file);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const AxiosPublic = UseAxiosPublic();

  const onSubmit = async data => {
    console.log(data);
    const ImageFile = { image: data.image[0] };
    const res = await AxiosPublic.post(Profile_Hosting, ImageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const formData = new FormData();
    formData.append("user_email", user?.email);
    formData.append("file", file);
    console.log(formData);
    const resumeResponse = await AxiosPublic.post(
      "/upload/cv-resume",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(res.data);
    console.log(resumeResponse?.data);
    if (res.data.success || resumeResponse?.data?.success) {
      const UserProfileInfo = {
        name: data.name,
        image: res.data.data.display_url,
        resume: resumeResponse?.data?.savedResume?.resume,
        email: user?.email,
        UniversityName: data.institute,
        headline: data.headline,
        location: data.location,
        linkedin: data.linkedin,
        portfolio: data.portfolio,
        github: data.github,
        aboutDescription: data.aboutDescription,

        educationInstitute: data.educationInstitute,
        degree: data.degree,
        studyField: data.studyField,
        educationStartMonth: data.educationStartMonth,
        educationStartYear: data.educationStartYear,
        educationEndMonth: data.educationEndMonth,
        educationEndYear: data.educationEndYear,
        educationDescription: data.educationDescription,

        projectName: data.projectName,
        projectLink: data.projectLink,
        technologies: data.technologies,
        projectStartMonth: data.projectStartMonth,
        projectStartYear: data.projectStartYear,
        projectEndMonth: data.projectEndMonth,
        projectEndYear: data.projectEndYear,
        projectDescription: data.projectDescription,

        skills: data.skills,

        jobTitle: data.jobTitle,
        jobType: data.jobType,
        JobType: data.JobType,
        companyName: data.companyName,
        jobLocation: data.jobLocation,
        jobStartMonth: data.jobStartMonth,
        jobStartYear: data.jobStartYear,
        jobEndMonth: data.jobEndMonth,
        jobEndYear: data.jobEndYear,
        jobDescription: data.jobDescription,
      };
      // console.log(articleInfo);
      const ArticleRes = await AxiosPublic.post(
        "/userProfile",
        UserProfileInfo
      );
      console.log(ArticleRes.data);
      if (ArticleRes.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Profile Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/profile");
      }
      setDisabled(true);
    }
  };

  return (
    <div className='mb-8'>
      <div className='max-w-6xl mx-auto'>
        <ProfileNav profile={"profile"} setProfile={"profileForm"}></ProfileNav>
      </div>
      <div className=' max-w-6xl mx-auto border-[0.5px] border-slate-400 p-10 bg-[#f4f2ee] rounded-lg'>
        <div className=''>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
              <div className='md:flex gap-16 mb-10'>
                {/* About section */}
                <div className=''>
                  <div className='flex flex-col items-center'>
                    <h2 className='text-3xl font-bold text-[#FF444A] '>
                      About
                    </h2>
                    <p className='text-lg font-medium'>
                      Tell us about Yourself
                    </p>
                    <p className='opacity-0 border-[0.5px]  border-slate-400 mt-2 mb-1 w-[300px]'></p>
                  </div>
                </div>
                <div className='w-full'>
                  <h3 className='text-slate-600 text-lg font-semibold'>Name</h3>
                  <input
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                    {...register("name", { required: true })}
                    type='text'
                    placeholder='Enter Your Name'
                    id=''
                  />
                  {errors.name && (
                    <span className='mt-2 text-red-600 w-full'>
                      Name is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Upload Your Photo
                  </h3>
                  <input
                    {...register("image", { required: true })}
                    type='file'
                    className='file-input file-input-bordered file-input-md w-full '
                  />
                  {errors.image && (
                    <span className='mt-2 text-red-600 w-full'>
                      Photo is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Institute
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                    {...register("institute", { required: true })}
                    type='text'
                    placeholder='Institute'
                    id=''
                  />
                  {errors.institute && (
                    <span className='mt-2 text-red-600 w-full'>
                      Institute is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Headline
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                    {...register("headline", { required: true })}
                    type='text'
                    placeholder='Ex: Fronted Developer'
                    id=''
                  />
                  {errors.headline && (
                    <span className='mt-2 text-red-600 w-full'>
                      Headline is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Location
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                    {...register("location", { required: true })}
                    type='text'
                    placeholder='Ex: Dhaka, Bangladesh'
                    id=''
                  />
                  {errors.location && (
                    <span className='mt-2 text-red-600 w-full'>
                      Location is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Linkedin Profile
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                    {...register("linkedin", { required: true })}
                    type='url'
                    placeholder='URL'
                    id=''
                  />
                  {errors.linkedin && (
                    <span className='mt-2 text-red-600 w-full'>
                      Linkedin is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Portfolio Site
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                    {...register("portfolio", { required: true })}
                    type='url'
                    placeholder='URL'
                    id=''
                  />
                  {errors.portfolio && (
                    <span className='mt-2 text-red-600 w-full'>
                      Portfolio is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Github Profile
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                    {...register("github", { required: true })}
                    type='url'
                    placeholder='URL'
                    id=''
                  />
                  {errors.github && (
                    <span className='mt-2 text-red-600 w-full'>
                      Github is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Description
                  </h3>
                  <textarea
                    {...register("aboutDescription", { required: true })}
                    type='text'
                    placeholder='Describe Yourself'
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                    cols='30'
                    rows='2'
                  ></textarea>
                  {errors.description && (
                    <span className='mt-2 text-red-600 w-full'>
                      description is required{" "}
                    </span>
                  )}
                </div>
              </div>
              <p className='border-[0.5px] border-slate-400 mt-2 mb-1 w-full'></p>

              {/* Education section */}
              <div className='md:flex gap-16 mb-10 mt-10'>
                <div className=''>
                  <div className='flex flex-col items-center'>
                    <h2 className='text-3xl font-bold text-[#FF444A] '>
                      Education
                    </h2>
                    <p className='text-lg font-medium'>
                      Your educational qualification
                    </p>
                    <p className='opacity-0 border-[0.5px]  border-slate-400 mt-2 mb-1 w-[300px]'></p>
                  </div>
                </div>
                <div className='w-full'>
                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Institute
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2   w-full text-lg font-medium '
                    {...register("educationInstitute", { required: true })}
                    type='text'
                    placeholder='Institute Name'
                    id=''
                  />
                  {errors.educationInstitute && (
                    <span className='mt-2 text-red-600 w-full'>
                      This Field is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Degree
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2    w-full text-lg font-medium '
                    {...register("degree", { required: true })}
                    type='type'
                    placeholder='e.g Bachelor'
                    id=''
                  />
                  {errors.degree && (
                    <span className='mt-2 text-red-600 w-full'>
                      This Field is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Field Of Study
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium '
                    {...register("studyField", { required: true })}
                    type='text'
                    placeholder='e.g CSE'
                    id=''
                  />
                  {errors.studyField && (
                    <span className='mt-2 text-red-600 w-full'>
                      This Field is required{" "}
                    </span>
                  )}

                  {/* Start Date */}
                  <div className=''>
                    <label className='text-slate-600 text-lg font-semibold'>
                      Start Date{" "}
                    </label>
                    <div className=' grid grid-cols-2 gap-6'>
                      <div>
                        <select
                          {...register("educationStartMonth", {
                            required: true,
                          })}
                          className='text-lg font-medium rounded-md py-2 w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium'
                            value='Jan'
                          >
                            Month
                          </option>
                          <option className='text-lg font-medium' value='Jan'>
                            January
                          </option>
                          <option className='text-lg font-medium' value='Feb'>
                            February
                          </option>
                          <option className='text-lg font-medium' value='Mar'>
                            March
                          </option>
                          <option className='text-lg font-medium' value='Apr'>
                            April
                          </option>
                          <option className='text-lg font-medium' value='May'>
                            May
                          </option>
                          <option className='text-lg font-medium' value='Jun'>
                            June
                          </option>
                          <option className='text-lg font-medium' value='Jul'>
                            July
                          </option>
                          <option className='text-lg font-medium' value='Aug'>
                            August
                          </option>
                          <option className='text-lg font-medium' value='Sep'>
                            September
                          </option>
                          <option className='text-lg font-medium' value='Oct'>
                            October
                          </option>
                          <option className='text-lg font-medium' value='Nov'>
                            November
                          </option>
                          <option className='text-lg font-medium' value='Dec'>
                            December
                          </option>
                        </select>
                      </div>
                      <div>
                        <select
                          {...register("educationStartYear", {
                            required: true,
                          })}
                          className='text-lg font-medium rounded-md py-2  w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium '
                          >
                            Year
                          </option>
                          <option className='text-lg font-medium ' value='2024'>
                            2024
                          </option>
                          <option className='text-lg font-medium' value='2023'>
                            2023
                          </option>
                          <option className='text-lg font-medium' value='2022'>
                            2022
                          </option>
                          <option className='text-lg font-medium' value='2021'>
                            2021
                          </option>
                          <option className='text-lg font-medium' value='2020'>
                            2020
                          </option>
                          <option className='text-lg font-medium' value='2019'>
                            2019
                          </option>
                          <option className='text-lg font-medium' value='2018'>
                            2018
                          </option>
                          <option className='text-lg font-medium' value='2017'>
                            2017
                          </option>
                          <option className='text-lg font-medium' value='2016'>
                            2016
                          </option>
                          <option className='text-lg font-medium' value='2015'>
                            2015
                          </option>
                          <option className='text-lg font-medium' value='2014'>
                            2014
                          </option>
                          <option className='text-lg font-medium' value='2013'>
                            2013
                          </option>
                          <option className='text-lg font-medium' value='2012'>
                            2012
                          </option>
                          <option className='text-lg font-medium' value='2011'>
                            2011
                          </option>
                          <option className='text-lg font-medium' value='2010'>
                            2010
                          </option>
                          <option className='text-lg font-medium' value='2009'>
                            2009
                          </option>
                          <option className='text-lg font-medium' value='2008'>
                            2008
                          </option>
                          <option className='text-lg font-medium' value='2007'>
                            2007
                          </option>
                          <option className='text-lg font-medium' value='2006'>
                            2006
                          </option>
                          <option className='text-lg font-medium' value='2005'>
                            2005
                          </option>
                          <option className='text-lg font-medium' value='2004'>
                            2004
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* end Date */}
                  <div className=''>
                    <label className='text-slate-600 text-lg font-semibold'>
                      End Date (Or Expected)
                    </label>
                    <div className=' grid grid-cols-2 gap-6'>
                      <div>
                        <select
                          {...register("educationEndMonth", { required: true })}
                          className='text-lg font-medium rounded-md py-2  w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium'
                            value='Jan'
                          >
                            Month
                          </option>
                          <option className='text-lg font-medium' value='Jan'>
                            January
                          </option>
                          <option className='text-lg font-medium' value='Feb'>
                            February
                          </option>
                          <option className='text-lg font-medium' value='Mar'>
                            March
                          </option>
                          <option className='text-lg font-medium' value='Apr'>
                            April
                          </option>
                          <option className='text-lg font-medium' value='May'>
                            May
                          </option>
                          <option className='text-lg font-medium' value='Jun'>
                            June
                          </option>
                          <option className='text-lg font-medium' value='Jul'>
                            July
                          </option>
                          <option className='text-lg font-medium' value='Aug'>
                            August
                          </option>
                          <option className='text-lg font-medium' value='Sep'>
                            September
                          </option>
                          <option className='text-lg font-medium' value='Oct'>
                            October
                          </option>
                          <option className='text-lg font-medium' value='Nov'>
                            November
                          </option>
                          <option className='text-lg font-medium' value='Dec'>
                            December
                          </option>
                        </select>
                      </div>
                      <div>
                        <select
                          {...register("educationEndYear", { required: true })}
                          className='text-lg font-medium rounded-md py-2 w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium '
                          >
                            Year
                          </option>
                          <option className='text-lg font-medium ' value='2024'>
                            2024
                          </option>
                          <option className='text-lg font-medium' value='2023'>
                            2023
                          </option>
                          <option className='text-lg font-medium' value='2022'>
                            2022
                          </option>
                          <option className='text-lg font-medium' value='2021'>
                            2021
                          </option>
                          <option className='text-lg font-medium' value='2020'>
                            2020
                          </option>
                          <option className='text-lg font-medium' value='2019'>
                            2019
                          </option>
                          <option className='text-lg font-medium' value='2018'>
                            2018
                          </option>
                          <option className='text-lg font-medium' value='2017'>
                            2017
                          </option>
                          <option className='text-lg font-medium' value='2016'>
                            2016
                          </option>
                          <option className='text-lg font-medium' value='2015'>
                            2015
                          </option>
                          <option className='text-lg font-medium' value='2014'>
                            2014
                          </option>
                          <option className='text-lg font-medium' value='2013'>
                            2013
                          </option>
                          <option className='text-lg font-medium' value='2012'>
                            2012
                          </option>
                          <option className='text-lg font-medium' value='2011'>
                            2011
                          </option>
                          <option className='text-lg font-medium' value='2010'>
                            2010
                          </option>
                          <option className='text-lg font-medium' value='2009'>
                            2009
                          </option>
                          <option className='text-lg font-medium' value='2008'>
                            2008
                          </option>
                          <option className='text-lg font-medium' value='2007'>
                            2007
                          </option>
                          <option className='text-lg font-medium' value='2006'>
                            2006
                          </option>
                          <option className='text-lg font-medium' value='2005'>
                            2005
                          </option>
                          <option className='text-lg font-medium' value='2004'>
                            2004
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Description
                  </h3>
                  <textarea
                    {...register("educationDescription", { required: true })}
                    type='text'
                    placeholder='Add Your Description'
                    className='pl-2 rounded-md py-2    w-full text-lg font-medium '
                    cols='30'
                    rows='2'
                  ></textarea>
                  {errors.educationDescription && (
                    <span className='mt-2 text-red-600 w-full'>
                      description is required{" "}
                    </span>
                  )}
                </div>
              </div>
              <p className='border-[0.5px] border-slate-400 mt-2 mb-1 w-full'></p>
              {/* Project section */}
              <div className='md:flex gap-16 mb-10 mt-10'>
                <div className='flex flex-col items-center'>
                  <h2 className='text-3xl font-bold text-[#FF444A] '>
                    Project
                  </h2>
                  <p className='text-lg font-medium'>Add your best project</p>
                  <p className='opacity-0 border-[0.5px]  border-slate-400 mt-2 mb-1 w-[300px]'></p>
                </div>
                <div className='w-full'>
                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Project Name
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2   w-full text-lg font-medium '
                    {...register("projectName", { required: true })}
                    type='text'
                    placeholder='Enter your project name'
                    id=''
                  />
                  {errors.projectName && (
                    <span className='mt-2 text-red-600 w-full'>
                      This Field is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Project Link
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2    w-full text-lg font-medium '
                    {...register("projectLink", { required: true })}
                    type='url'
                    placeholder='Add your project link'
                    id=''
                  />
                  {errors.projectLink && (
                    <span className='mt-2 text-red-600 w-full'>
                      This Field is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Technologies
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium '
                    {...register("technologies", { required: true })}
                    type='text'
                    placeholder='e.g HTML, Css, React'
                    id=''
                  />
                  {errors.technologies && (
                    <span className='mt-2 text-red-600 w-full'>
                      This Field is required{" "}
                    </span>
                  )}

                  {/* Start Date */}
                  <div className=''>
                    <label className='text-slate-600 text-lg font-semibold'>
                      Start Date{" "}
                    </label>
                    <div className=' grid grid-cols-2 gap-6'>
                      <div>
                        <select
                          {...register("projectStartMonth", { required: true })}
                          className='text-lg font-medium rounded-md py-2 w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium'
                            value='Jan'
                          >
                            Month
                          </option>
                          <option className='text-lg font-medium' value='Jan'>
                            January
                          </option>
                          <option className='text-lg font-medium' value='Feb'>
                            February
                          </option>
                          <option className='text-lg font-medium' value='Mar'>
                            March
                          </option>
                          <option className='text-lg font-medium' value='Apr'>
                            April
                          </option>
                          <option className='text-lg font-medium' value='May'>
                            May
                          </option>
                          <option className='text-lg font-medium' value='Jun'>
                            June
                          </option>
                          <option className='text-lg font-medium' value='Jul'>
                            July
                          </option>
                          <option className='text-lg font-medium' value='Aug'>
                            August
                          </option>
                          <option className='text-lg font-medium' value='Sep'>
                            September
                          </option>
                          <option className='text-lg font-medium' value='Oct'>
                            October
                          </option>
                          <option className='text-lg font-medium' value='Nov'>
                            November
                          </option>
                          <option className='text-lg font-medium' value='Dec'>
                            December
                          </option>
                        </select>
                      </div>
                      <div>
                        <select
                          {...register("projectStartYear", { required: true })}
                          className='text-lg font-medium rounded-md py-2  w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium '
                          >
                            Year
                          </option>
                          <option className='text-lg font-medium ' value='2024'>
                            2024
                          </option>
                          <option className='text-lg font-medium' value='2023'>
                            2023
                          </option>
                          <option className='text-lg font-medium' value='2022'>
                            2022
                          </option>
                          <option className='text-lg font-medium' value='2021'>
                            2021
                          </option>
                          <option className='text-lg font-medium' value='2020'>
                            2020
                          </option>
                          <option className='text-lg font-medium' value='2019'>
                            2019
                          </option>
                          <option className='text-lg font-medium' value='2018'>
                            2018
                          </option>
                          <option className='text-lg font-medium' value='2017'>
                            2017
                          </option>
                          <option className='text-lg font-medium' value='2016'>
                            2016
                          </option>
                          <option className='text-lg font-medium' value='2015'>
                            2015
                          </option>
                          <option className='text-lg font-medium' value='2014'>
                            2014
                          </option>
                          <option className='text-lg font-medium' value='2013'>
                            2013
                          </option>
                          <option className='text-lg font-medium' value='2012'>
                            2012
                          </option>
                          <option className='text-lg font-medium' value='2011'>
                            2011
                          </option>
                          <option className='text-lg font-medium' value='2010'>
                            2010
                          </option>
                          <option className='text-lg font-medium' value='2009'>
                            2009
                          </option>
                          <option className='text-lg font-medium' value='2008'>
                            2008
                          </option>
                          <option className='text-lg font-medium' value='2007'>
                            2007
                          </option>
                          <option className='text-lg font-medium' value='2006'>
                            2006
                          </option>
                          <option className='text-lg font-medium' value='2005'>
                            2005
                          </option>
                          <option className='text-lg font-medium' value='2004'>
                            2004
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* end Date */}
                  <div className=''>
                    <label className='text-slate-600 text-lg font-semibold'>
                      End Date
                    </label>
                    <div className=' grid grid-cols-2 gap-6'>
                      <div>
                        <select
                          {...register("projectEndMonth", { required: true })}
                          className='text-lg font-medium rounded-md py-2  w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium'
                            value='Jan'
                          >
                            Month
                          </option>
                          <option className='text-lg font-medium' value='Jan'>
                            January
                          </option>
                          <option className='text-lg font-medium' value='Feb'>
                            February
                          </option>
                          <option className='text-lg font-medium' value='Mar'>
                            March
                          </option>
                          <option className='text-lg font-medium' value='Apr'>
                            April
                          </option>
                          <option className='text-lg font-medium' value='May'>
                            May
                          </option>
                          <option className='text-lg font-medium' value='Jun'>
                            June
                          </option>
                          <option className='text-lg font-medium' value='Jul'>
                            July
                          </option>
                          <option className='text-lg font-medium' value='Aug'>
                            August
                          </option>
                          <option className='text-lg font-medium' value='Sep'>
                            September
                          </option>
                          <option className='text-lg font-medium' value='Oct'>
                            October
                          </option>
                          <option className='text-lg font-medium' value='Nov'>
                            November
                          </option>
                          <option className='text-lg font-medium' value='Dec'>
                            December
                          </option>
                        </select>
                      </div>
                      <div>
                        <select
                          {...register("projectEndYear", { required: true })}
                          className='text-lg font-medium rounded-md py-2 w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium '
                          >
                            Year
                          </option>
                          <option className='text-lg font-medium ' value='2024'>
                            2024
                          </option>
                          <option className='text-lg font-medium' value='2023'>
                            2023
                          </option>
                          <option className='text-lg font-medium' value='2022'>
                            2022
                          </option>
                          <option className='text-lg font-medium' value='2021'>
                            2021
                          </option>
                          <option className='text-lg font-medium' value='2020'>
                            2020
                          </option>
                          <option className='text-lg font-medium' value='2019'>
                            2019
                          </option>
                          <option className='text-lg font-medium' value='2018'>
                            2018
                          </option>
                          <option className='text-lg font-medium' value='2017'>
                            2017
                          </option>
                          <option className='text-lg font-medium' value='2016'>
                            2016
                          </option>
                          <option className='text-lg font-medium' value='2015'>
                            2015
                          </option>
                          <option className='text-lg font-medium' value='2014'>
                            2014
                          </option>
                          <option className='text-lg font-medium' value='2013'>
                            2013
                          </option>
                          <option className='text-lg font-medium' value='2012'>
                            2012
                          </option>
                          <option className='text-lg font-medium' value='2011'>
                            2011
                          </option>
                          <option className='text-lg font-medium' value='2010'>
                            2010
                          </option>
                          <option className='text-lg font-medium' value='2009'>
                            2009
                          </option>
                          <option className='text-lg font-medium' value='2008'>
                            2008
                          </option>
                          <option className='text-lg font-medium' value='2007'>
                            2007
                          </option>
                          <option className='text-lg font-medium' value='2006'>
                            2006
                          </option>
                          <option className='text-lg font-medium' value='2005'>
                            2005
                          </option>
                          <option className='text-lg font-medium' value='2004'>
                            2004
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {errors.category && (
                    <span className='mt-2 text-red-600 '>
                      Select A Category
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Description
                  </h3>
                  <textarea
                    {...register("projectDescription", { required: true })}
                    type='text'
                    placeholder='Describe your project'
                    className='pl-2 rounded-md py-2    w-full text-lg font-medium '
                    cols='30'
                    rows='2'
                  ></textarea>
                  {errors.projectDescription && (
                    <span className='mt-2 text-red-600 w-full'>
                      description is required{" "}
                    </span>
                  )}
                </div>
              </div>
              <p className='border-[0.5px] border-slate-400 mt-2 mb-1 w-full'></p>

              {/* Skills section */}
              <div className='md:flex gap-16 mb-10 mt-10'>
                <div className='flex flex-col items-center'>
                  <h2 className='text-3xl font-bold text-[#FF444A] '>Skills</h2>
                  <p className='text-lg font-medium'>Add your skills</p>
                  <p className='opacity-0 border-[0.5px]  border-slate-400 mt-2 mb-1 w-[300px]'></p>
                </div>
                <div className='w-full'>
                  <input
                    className='pl-2 rounded-md py-2   w-full text-lg font-medium '
                    {...register("skills", { required: true })}
                    type='text'
                    placeholder='Ex: HTML, Css, React'
                    id=''
                  />
                  {errors.skills && (
                    <span className='mt-2 text-red-600 w-full'>
                      This Field is required{" "}
                    </span>
                  )}
                </div>
              </div>
              <p className='border-[0.5px] border-slate-400 mt-2 mb-1 w-full'></p>

              {/* Cv upload */}
              <div className='md:flex gap-16 mb-10 mt-10'>
                <div className='flex flex-col items-center'>
                  <h2 className='text-3xl font-bold text-[#FF444A] '>
                    CV/Resume
                  </h2>
                  <p className='text-lg font-medium'>Upload CV/Resume</p>
                  <p className='opacity-0 border-[0.5px]  border-slate-400 mt-2 mb-1 w-[300px]'></p>
                </div>
                <div className='w-full'>
                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Upload CV/Resume
                  </h3>

                  <input
                    {...register("resume", { required: true })}
                    type='file'
                    className='file-input file-input-bordered file-input-md w-full '
                    accept='application/pdf'
                    onChange={e => setFile(e.target.files[0])}
                  />
                  {errors.resume && (
                    <span className='mt-2 text-red-600 w-full'>
                      Resume is required{" "}
                    </span>
                  )}
                </div>
              </div>
              <p className='border-[0.5px] border-slate-400 mt-2 mb-1 w-full'></p>

              {/* experience section */}
              <div className='md:flex gap-16 mb-10 mt-10'>
                <div className='flex flex-col items-center'>
                  <h2 className='text-3xl font-bold text-[#FF444A] '>
                    Experience
                  </h2>
                  <p className='text-lg font-medium'>Share your Experience</p>
                  <p className='opacity-0 border-[0.5px]  border-slate-400 mt-2 mb-1 w-[300px]'></p>
                </div>
                <div className='w-full'>
                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Job Title
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2   w-full text-lg font-medium '
                    {...register("jobTitle", { required: true })}
                    type='text'
                    placeholder='Ex: Frontend Developer'
                    id=''
                  />
                  {errors.jobTitle && (
                    <span className='mt-2 text-red-600 w-full'>
                      This Field is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Employment type
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2    w-full text-lg font-medium '
                    {...register("jobType", { required: true })}
                    type='text'
                    placeholder='Ex: Full-Time'
                    id=''
                  />
                  {errors.jobType && (
                    <span className='mt-2 text-red-600 w-full'>
                      This Field is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Company name
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium '
                    {...register("companyName", { required: true })}
                    type='text'
                    placeholder='Ex: Microsoft'
                    id=''
                  />
                  {errors.companyName && (
                    <span className='mt-2 text-red-600 w-full'>
                      This Field is required{" "}
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Location
                  </h3>
                  <input
                    className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium '
                    {...register("jobLocation", { required: true })}
                    type='text'
                    placeholder='Ex: Dhaka, Bangladesh'
                    id=''
                  />
                  {errors.jobLocation && (
                    <span className='mt-2 text-red-600 w-full'>
                      This Field is required{" "}
                    </span>
                  )}

                  {/* Start Date */}
                  <div className=''>
                    <label className='text-slate-600 text-lg font-semibold'>
                      Start Date{" "}
                    </label>
                    <div className=' grid grid-cols-2 gap-6'>
                      <div>
                        <select
                          {...register("jobStartMonth", { required: true })}
                          className='text-lg font-medium rounded-md py-2 w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium'
                          >
                            Month
                          </option>
                          <option className='text-lg font-medium' value='Jan'>
                            January
                          </option>
                          <option className='text-lg font-medium' value='Feb'>
                            February
                          </option>
                          <option className='text-lg font-medium' value='Mar'>
                            March
                          </option>
                          <option className='text-lg font-medium' value='Apr'>
                            April
                          </option>
                          <option className='text-lg font-medium' value='May'>
                            May
                          </option>
                          <option className='text-lg font-medium' value='Jun'>
                            June
                          </option>
                          <option className='text-lg font-medium' value='Jul'>
                            July
                          </option>
                          <option className='text-lg font-medium' value='Aug'>
                            August
                          </option>
                          <option className='text-lg font-medium' value='Sep'>
                            September
                          </option>
                          <option className='text-lg font-medium' value='Oct'>
                            October
                          </option>
                          <option className='text-lg font-medium' value='Nov'>
                            November
                          </option>
                          <option className='text-lg font-medium' value='Dec'>
                            December
                          </option>
                        </select>
                      </div>
                      <div>
                        <select
                          {...register("jobStartYear", { required: true })}
                          className='text-lg font-medium rounded-md py-2  w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium '
                          >
                            Year
                          </option>
                          <option className='text-lg font-medium ' value='2024'>
                            2024
                          </option>
                          <option className='text-lg font-medium' value='2023'>
                            2023
                          </option>
                          <option className='text-lg font-medium' value='2022'>
                            2022
                          </option>
                          <option className='text-lg font-medium' value='2021'>
                            2021
                          </option>
                          <option className='text-lg font-medium' value='2020'>
                            2020
                          </option>
                          <option className='text-lg font-medium' value='2019'>
                            2019
                          </option>
                          <option className='text-lg font-medium' value='2018'>
                            2018
                          </option>
                          <option className='text-lg font-medium' value='2017'>
                            2017
                          </option>
                          <option className='text-lg font-medium' value='2016'>
                            2016
                          </option>
                          <option className='text-lg font-medium' value='2015'>
                            2015
                          </option>
                          <option className='text-lg font-medium' value='2014'>
                            2014
                          </option>
                          <option className='text-lg font-medium' value='2013'>
                            2013
                          </option>
                          <option className='text-lg font-medium' value='2012'>
                            2012
                          </option>
                          <option className='text-lg font-medium' value='2011'>
                            2011
                          </option>
                          <option className='text-lg font-medium' value='2010'>
                            2010
                          </option>
                          <option className='text-lg font-medium' value='2009'>
                            2009
                          </option>
                          <option className='text-lg font-medium' value='2008'>
                            2008
                          </option>
                          <option className='text-lg font-medium' value='2007'>
                            2007
                          </option>
                          <option className='text-lg font-medium' value='2006'>
                            2006
                          </option>
                          <option className='text-lg font-medium' value='2005'>
                            2005
                          </option>
                          <option className='text-lg font-medium' value='2004'>
                            2004
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* end Date */}
                  <div className=''>
                    <label className='text-slate-600 text-lg font-semibold'>
                      End Date (Or Expected)
                    </label>
                    <div className=' grid grid-cols-2 gap-6'>
                      <div>
                        <select
                          {...register("jobEndMonth", { required: true })}
                          className='text-lg font-medium rounded-md py-2  w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium'
                            value='Jan'
                          >
                            Month
                          </option>
                          <option className='text-lg font-medium' value='Jan'>
                            January
                          </option>
                          <option className='text-lg font-medium' value='Feb'>
                            February
                          </option>
                          <option className='text-lg font-medium' value='Mar'>
                            March
                          </option>
                          <option className='text-lg font-medium' value='Apr'>
                            April
                          </option>
                          <option className='text-lg font-medium' value='May'>
                            May
                          </option>
                          <option className='text-lg font-medium' value='Jun'>
                            June
                          </option>
                          <option className='text-lg font-medium' value='Jul'>
                            July
                          </option>
                          <option className='text-lg font-medium' value='Aug'>
                            August
                          </option>
                          <option className='text-lg font-medium' value='Sep'>
                            September
                          </option>
                          <option className='text-lg font-medium' value='Oct'>
                            October
                          </option>
                          <option className='text-lg font-medium' value='Nov'>
                            November
                          </option>
                          <option className='text-lg font-medium' value='Dec'>
                            December
                          </option>
                        </select>
                      </div>
                      <div>
                        <select
                          {...register("jobEndYear", { required: true })}
                          className='text-lg font-medium rounded-md py-2 w-full'
                          id=''
                        >
                          <option
                            selected
                            disabled
                            className='text-lg font-medium '
                          >
                            Year
                          </option>
                          <option className='text-lg font-medium ' value='2024'>
                            2024
                          </option>
                          <option className='text-lg font-medium' value='2023'>
                            2023
                          </option>
                          <option className='text-lg font-medium' value='2022'>
                            2022
                          </option>
                          <option className='text-lg font-medium' value='2021'>
                            2021
                          </option>
                          <option className='text-lg font-medium' value='2020'>
                            2020
                          </option>
                          <option className='text-lg font-medium' value='2019'>
                            2019
                          </option>
                          <option className='text-lg font-medium' value='2018'>
                            2018
                          </option>
                          <option className='text-lg font-medium' value='2017'>
                            2017
                          </option>
                          <option className='text-lg font-medium' value='2016'>
                            2016
                          </option>
                          <option className='text-lg font-medium' value='2015'>
                            2015
                          </option>
                          <option className='text-lg font-medium' value='2014'>
                            2014
                          </option>
                          <option className='text-lg font-medium' value='2013'>
                            2013
                          </option>
                          <option className='text-lg font-medium' value='2012'>
                            2012
                          </option>
                          <option className='text-lg font-medium' value='2011'>
                            2011
                          </option>
                          <option className='text-lg font-medium' value='2010'>
                            2010
                          </option>
                          <option className='text-lg font-medium' value='2009'>
                            2009
                          </option>
                          <option className='text-lg font-medium' value='2008'>
                            2008
                          </option>
                          <option className='text-lg font-medium' value='2007'>
                            2007
                          </option>
                          <option className='text-lg font-medium' value='2006'>
                            2006
                          </option>
                          <option className='text-lg font-medium' value='2005'>
                            2005
                          </option>
                          <option className='text-lg font-medium' value='2004'>
                            2004
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {errors.category && (
                    <span className='mt-2 text-red-600 '>
                      Select A Category
                    </span>
                  )}

                  <h3 className='text-slate-600 text-lg font-semibold'>
                    Description
                  </h3>
                  <textarea
                    {...register("jobDescription", { required: true })}
                    type='text'
                    placeholder='Describe your experience'
                    className='pl-2 rounded-md py-2    w-full text-lg font-medium '
                    cols='30'
                    rows='2'
                  ></textarea>
                  {errors.jobDescription && (
                    <span className='mt-2 text-red-600 w-full'>
                      description is required{" "}
                    </span>
                  )}
                </div>
              </div>
              <p className='border-[0.5px] border-slate-400 mt-2 mb-1 w-full'></p>
              {disabled || profileData.length ? (
                <button
                  disabled
                  className='  mt-2 btn px-8  bg-[#FF444A] text-white rounded-md hover:text-black hover:bg-red-300  text-lg font-semibold'
                >
                  Create
                </button>
              ) : (
                <button className='  mt-2 btn px-8  bg-[#FF444A] text-white rounded-md hover:text-black hover:bg-red-300  text-lg font-semibold'>
                  Create
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileForm;
