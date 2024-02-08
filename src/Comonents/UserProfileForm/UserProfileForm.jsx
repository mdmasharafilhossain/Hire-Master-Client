import { useContext } from "react";
import { AuthContext } from "./../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import { IoMdArrowBack } from "react-icons/io";
import { BsPersonSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProfileNav from "../ProfileNav/ProfileNav";

// image added key from imgbb
const Image_Hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const Profile_Hosting = `https://api.imgbb.com/1/upload?key=${Image_Hosting_key}`;

const UserProfileForm = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const AxiosPublic = UseAxiosPublic();
  const onSubmit = async data => {
    console.log(data);
    const ImageFile = { image: data.image[0] };
    const res = await AxiosPublic.post(Profile_Hosting, ImageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    
    console.log(res.data);
    if (res.data.success) {
      const UserProfileInfo = {
        name: data.name,
        image: res.data.data.display_url,
        location: data.location,
        experience: data.experience,
        role: data.role,
        email: user?.email,
        bio: data.bio,
        portfolio: data.portfolio,
        linkedin: data.linkedin,
        Github: data.Github,
        UniversityName: data.universityName,
        Degree: data.degree,
        GraduationDate: data.Graduation,
        GPA: data.gpa,
        Skill: data.skill,
        ProjectName: data.ProjectName,
        StartDate: data.StartDate,
        EndDate: data.EndDate,
        ProjectDescription: data.AboutProject,
        ProjectTechnologyUsed: data.TechnologyUsed,
        ProjectLiveLink: data.LiveLink,
        ProjectName2: data.ProjectName2,
        StartDate2: data.StartDate2,
        EndDate2: data.EndDate2,
        ProjectDescription2: data.AboutProject2,
        ProjectTechnologyUsed2: data.TechnologyUsed2,
        ProjectLiveLink2: data.LiveLink2,
        CompanyName: data.CompanyName,
        WorkingStartDate: data.StartDate3,
        WorkingEndDate: data.EndDate3,
        JobTitle: data.JobTitle,
        Location: data.Location,
        JobType: data.JobType,
      };
      // console.log(articleInfo);
      const ArticleRes = await AxiosPublic.post(
        "/userProfile",
        UserProfileInfo
      );
      console.log(ArticleRes.data);
      if (ArticleRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your data Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
   <div className="mb-8">
            <div className="max-w-6xl mx-auto">
            <ProfileNav   profile={"profile"} setProfile={"profileForm"}></ProfileNav>
            </div>
     <div  className=" max-w-6xl mx-auto border-[0.5px] border-slate-400 p-10 bg-[#f4f2ee] rounded-lg">
     
            <div className="">
              
                <div  >
            
                    <form onSubmit={handleSubmit(onSubmit)} className=''>

                    <div className="md:flex gap-16 mb-10">
                      {/* About section */}
                       <div className="">
                         <div className="flex flex-col items-center">
                         <h2 className='text-3xl font-bold text-blue-600 '>About</h2>
                         <p className="border-[0.5px]  border-slate-400 mt-2 mb-1 w-[150px]"></p>
                         </div>
                        </div>  
                       <div className="w-full">
                       <h3 className='text-slate-600 text-lg font-semibold'>Name</h3>
                        <input className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("name", { required: true })} type="text" placeholder='Enter Your Name' id="" />
                        {errors.name && <span className="mt-2 text-red-600 w-full">Name is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Institute</h3>
                        <input className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("Institute", { required: true })} type="number" placeholder='Institute' id="" />
                        {errors.Institute && <span className="mt-2 text-red-600 w-full">Institute is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Headline</h3>
                        <input className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("headline", { required: true })} type="number" placeholder='Ex: Fronted Developer' id="" />
                        {errors.headline && <span className="mt-2 text-red-600 w-full">Headline is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Location</h3>
                        <input className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("location", { required: true })} type="number" placeholder='Ex: Dhaka, Bangladesh' id="" />
                        {errors.location && <span className="mt-2 text-red-600 w-full">Location is required </span>}


                        <h3 className='text-slate-600 text-lg font-semibold'>Linkedin Profile</h3>
                        <input className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("linkedin", { required: true })} type="url" placeholder='URL' id="" />
                        {errors.linkedin && <span className="mt-2 text-red-600 w-full">Linkedin is required </span>}


                        <h3 className='text-slate-600 text-lg font-semibold'>Portfolio Site</h3>
                        <input className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("portfolio", { required: true })} type="url" placeholder='URL' id="" />
                        {errors.portfolio && <span className="mt-2 text-red-600 w-full">Portfolio is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Github Profile</h3>
                        <input className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("github", { required: true })} type="url" placeholder='URL' id="" />
                        {errors.github && <span className="mt-2 text-red-600 w-full">Github is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Description</h3>
                        <textarea  {...register("description", { required: true })} type="text" placeholder='Describe Your Self' className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium' cols="30" rows="2"></textarea>
                        {errors.description && <span className="mt-2 text-red-600 w-full">description is required </span>}
             
                       </div>
                       </div>
                       <p className="border-[0.5px] border-slate-400 mt-2 mb-1 w-full"></p>

                    {/* Education section */}
                  <div className="md:flex gap-16 mb-10 mt-10">
                      <div className="">
                      <div className="flex flex-col items-center">
                      <h2 className='text-3xl font-bold text-blue-600 '> Education</h2>
                      <p className="border-[0.5px] border-slate-400 mt-2 mb-1 w-[150px]"></p>
                      </div>
                      </div>
                       <div className="w-full">
                       <h3 className='text-slate-600 text-lg font-semibold'>Institute</h3>
                        <input  className='pl-2 rounded-md py-2   w-full text-lg font-medium '
                            {...register("institute", { required: true })} type="text" placeholder='Institute Name' id="" />
                        {errors.name && <span className="mt-2 text-red-600 w-full">This Field is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Degree</h3>
                        <input   className='pl-2 rounded-md py-2    w-full text-lg font-medium '
                            {...register("age", { required: true })} type="number" placeholder='e.g Bachelor' id="" />
                        {errors.age && <span className="mt-2 text-red-600 w-full">This Field is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Field Of Study</h3>
                        <input   className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium '
                            {...register("location", { required: true })} type="text" placeholder='e.g CSE' id="" />
                        {errors.location && <span className="mt-2 text-red-600 w-full">This Field is required </span>}

                        {/* Start Date */}
                        <div className="">
                        <label className="text-slate-600 text-lg font-semibold">Start Date </label>
                        <div className=" grid grid-cols-2 gap-6">
                        <div>
                       
                       <select  {...register("start-month", { required: true })} className="text-lg font-medium rounded-md py-2 w-full"   id="">

                           <option selected disabled className="text-lg font-medium" value="Jan">Month</option>
                           <option className="text-lg font-medium" value="Jan">January</option>
                           <option className="text-lg font-medium"  value="Feb">February</option>
                           <option className="text-lg font-medium" value="Mar">March</option>
                           <option className="text-lg font-medium" value="Apr">April</option>
                           <option className="text-lg font-medium" value="May">May</option>
                           <option className="text-lg font-medium" value="Jun">June</option>
                           <option className="text-lg font-medium" value="Jul">July</option>
                           <option className="text-lg font-medium" value="Aug">August</option>
                           <option className="text-lg font-medium" value="Sep">September</option>
                           <option className="text-lg font-medium" value="Oct">October</option>
                           <option className="text-lg font-medium" value="Nov">November</option>
                           <option className="text-lg font-medium" value="Dec">December</option>
                       </select>
                       </div>
                        <div>
                        <select  {...register("start-year", { required: true })} className="text-lg font-medium rounded-md py-2  w-full"   id="">

                            <option selected disabled  className="text-lg font-medium ">Year</option>
                            <option className="text-lg font-medium " value="2024">2024</option>
                            <option className="text-lg font-medium" value="2023">2023</option>
                            <option className="text-lg font-medium" value="2022">2022</option>
                            <option className="text-lg font-medium" value="2021">2021</option>
                            <option className="text-lg font-medium" value="2020">2020</option>
                            <option className="text-lg font-medium" value="2019">2019</option>
                            <option className="text-lg font-medium" value="2018">2018</option>
                            <option className="text-lg font-medium" value="2017">2017</option>
                            <option className="text-lg font-medium" value="2016">2016</option>
                            <option className="text-lg font-medium" value="2015">2015</option>
                            <option className="text-lg font-medium" value="2014">2014</option>
                            <option className="text-lg font-medium" value="2013">2013</option>
                            <option className="text-lg font-medium" value="2012">2012</option>
                            <option className="text-lg font-medium" value="2011">2011</option>
                            <option className="text-lg font-medium" value="2010">2010</option>
                            <option className="text-lg font-medium" value="2009">2009</option>
                            <option className="text-lg font-medium" value="2008">2008</option>
                            <option className="text-lg font-medium" value="2007">2007</option>
                            <option className="text-lg font-medium" value="2006">2006</option>
                            <option className="text-lg font-medium" value="2005">2005</option>
                            <option className="text-lg font-medium" value="2004">2004</option>
                            
                        </select>
                        </div>

                       
                        </div>
                        </div>
                        
                         {/* end Date */}
                        <div className="">
                        <label className="text-slate-600 text-lg font-semibold">End Date (Or Expected)</label>
                        <div className=" grid grid-cols-2 gap-6">
                            
                        <div>
                       
                       <select  {...register("end-month", { required: true })} className="text-lg font-medium rounded-md py-2  w-full"   id="">

                       <option selected disabled className="text-lg font-medium" value="Jan">Month</option>
                           <option className="text-lg font-medium" value="Jan">January</option>
                           <option className="text-lg font-medium"  value="Feb">February</option>
                           <option className="text-lg font-medium" value="Mar">March</option>
                           <option className="text-lg font-medium" value="Apr">April</option>
                           <option className="text-lg font-medium" value="May">May</option>
                           <option className="text-lg font-medium" value="Jun">June</option>
                           <option className="text-lg font-medium" value="Jul">July</option>
                           <option className="text-lg font-medium" value="Aug">August</option>
                           <option className="text-lg font-medium" value="Sep">September</option>
                           <option className="text-lg font-medium" value="Oct">October</option>
                           <option className="text-lg font-medium" value="Nov">November</option>
                           <option className="text-lg font-medium" value="Dec">December</option>
                       </select>
                       </div>
                        <div>
                        <select  {...register("end-year", { required: true })} className="text-lg font-medium rounded-md py-2 w-full"   id="">

                        <option selected disabled  className="text-lg font-medium ">Year</option>
                            <option className="text-lg font-medium " value="2024">2024</option>
                            <option className="text-lg font-medium" value="2023">2023</option>
                            <option className="text-lg font-medium" value="2022">2022</option>
                            <option className="text-lg font-medium" value="2021">2021</option>
                            <option className="text-lg font-medium" value="2020">2020</option>
                            <option className="text-lg font-medium" value="2019">2019</option>
                            <option className="text-lg font-medium" value="2018">2018</option>
                            <option className="text-lg font-medium" value="2017">2017</option>
                            <option className="text-lg font-medium" value="2016">2016</option>
                            <option className="text-lg font-medium" value="2015">2015</option>
                            <option className="text-lg font-medium" value="2014">2014</option>
                            <option className="text-lg font-medium" value="2013">2013</option>
                            <option className="text-lg font-medium" value="2012">2012</option>
                            <option className="text-lg font-medium" value="2011">2011</option>
                            <option className="text-lg font-medium" value="2010">2010</option>
                            <option className="text-lg font-medium" value="2009">2009</option>
                            <option className="text-lg font-medium" value="2008">2008</option>
                            <option className="text-lg font-medium" value="2007">2007</option>
                            <option className="text-lg font-medium" value="2006">2006</option>
                            <option className="text-lg font-medium" value="2005">2005</option>
                            <option className="text-lg font-medium" value="2004">2004</option>
                        </select>
                        </div>
                        </div>
                        </div>
                        {errors.category && <span className="mt-2 text-red-600 ">Select A Category</span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Description</h3>
                        <textarea  {...register("longDescription", { required: true })} type="text" placeholder='Add Your Description' className='pl-2 rounded-md py-2    w-full text-lg font-medium ' cols="30" rows="2"></textarea>
                        {errors.longDescription && <span className="mt-2 text-red-600 w-full">description is required </span>}
                       </div>
                  </div>
                  <p className="border-[0.5px] border-slate-400 mt-2 mb-1 w-full"></p>
                       
                    </form>
                </div>
            </div>

        </div>
   </div>
  );
};

export default UserProfileForm;
