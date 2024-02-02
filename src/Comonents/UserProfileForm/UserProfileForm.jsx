import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
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
    const { register, handleSubmit } = useForm();
    const AxiosPublic = UseAxiosPublic();
    const onSubmit = async (data) => {

        console.log(data);
        const ImageFile = { image: data.image[0] }
        const res = await AxiosPublic.post(Profile_Hosting, ImageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
        if(res.data.success){
            const UserProfileInfo = {
                name: data.name,
                image: res.data.data.display_url,
                location: data.location,
                experience: data.experience,
                role: data.role,
                email:user?.email,
                bio:data.bio,
                portfolio:data.portfolio,
                linkedin:data.linkedin,
                Github:data.Github,
                UniversityName:data.universityName,
                Degree:data.degree,
                GraduationDate:data.Graduation,
                GPA:data.gpa,
                Skill:data.skill,
                ProjectName:data.ProjectName,
                StartDate:data.StartDate,
                EndDate:data.EndDate,
                ProjectDescription:data.AboutProject,
                ProjectTechnologyUsed:data.TechnologyUsed,
                ProjectLiveLink:data.LiveLink,
                ProjectName2:data.ProjectName2,
                StartDate2:data.StartDate2,
                EndDate2:data.EndDate2,
                ProjectDescription2:data.AboutProject2,
                ProjectTechnologyUsed2:data.TechnologyUsed2,
                ProjectLiveLink2:data.LiveLink2,
                CompanyName:data.CompanyName,
                WorkingStartDate:data.StartDate3,
                WorkingEndDate:data.EndDate3,
                JobTitle:data.JobTitle,
                Location:data.Location,
                JobType:data.JobType





    
            }
            // console.log(articleInfo);
            const ArticleRes = await AxiosPublic.post('/userProfile',UserProfileInfo);
            console.log(ArticleRes.data);
            if(ArticleRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your data Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
           }
 


    }
    return (
        <div className="max-w-6xl mx-auto">
            <ProfileNav></ProfileNav>
            <div className="max-w-6xl mx-auto">
            <div className=" rounded-md border-[0.5px] border-slate-300 text-center p-14 " >
                <div className="mx-auto text-center  ">
                    <Link to="/profile">
                       <p className="text-2xl flex"><IoMdArrowBack></IoMdArrowBack> <BsPersonSquare></BsPersonSquare></p>
                    </Link>
                    <h1 className="text-5xl text-orange-600 border-red-400 font-bold  mb-12 py-4">Set Your HireMaster Profile</h1>
                </div>



                {/* <div className="flex gap-96 mt-20">
                    
                    <div className="mt-4">
                        <p className="text-xl font-bold">About</p>
                        <p className="text-sm ml-16">Tell us about Yourself</p>
                    </div >
                    
                    
                </div> */}
                <div>
                        <form className="container  mx-auto space-y-5" onSubmit={handleSubmit(onSubmit)}>
                          {/* About Main div 1*/}
                         <div className="flex md:gap-20 lg:gap-[365px] mt-20 mb-10">
                              {/* Text div */}
                           <div className="mt-10">
                           <p className="text-xl font-bold md:mr-16 lg:mr-5">About</p>
                            <p className="text-sm lg:ml-12">Tell us about Yourself</p>
                           </div>
                           {/* form div */}
                           <div className="flex-1">
                           <label className="form-control w-full mb-5">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Your Name*</span>

                                </div>
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder="Your Name" required
                                    className="input input-bordered w-full" />

                            </label>
                            <div className="flex">
                                {/* Image div */}
                                <div>

                                </div>
                                <div className="mb-3">
                                    <p className="text-lg font-bold md:mr-[135px] lg:mr-[136px] mb-2">Upload Your Photo*</p>
                                    <input
                                        {...register("image")}
                                        type="file"
                                        className="file-input file-input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            
                            <label className="form-control w-full mb-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Your Location*</span>

                                </div>
                                <input
                                    {...register("location")}
                                    type="text"
                                    placeholder="Your Location" required
                                    className="input input-bordered w-full " />

                            </label>
                            <div className="flex gap-5 mb-3">
                                <select {...register("role")}
                                    className="select select-bordered w-full text-lg font-bold mt-4">
                                    <option disabled selected required>Select Your Role*</option>
                                    <option value="Frontend Developer">Frontend Developer</option>
                                    <option value="Full Stack Developer">Full Stack Developer</option>
                                    <option value="Software Engineer">Software Engineer</option>
                                    <option value="Data Engineer">Data Engineer</option>
                                    <option value="Data Scientist">Data Scientist</option>
                                    <option value="iOS Developer">iOS Developer</option>
                                    <option value="Backend Developer">Backend Developer</option>

                                </select>
                                <select {...register("experience")}
                                    className="select select-bordered w-full text-lg font-bold mt-4">
                                    <option disabled selected required>Years of experience*</option>
                                    <option value="0 Year">0 Year</option>
                                    <option value="1 Years">1 Years</option>
                                    <option value="2 Years">2 Years</option>
                                    <option value="3 Years">3 Years</option>
                                    <option value="5 Years+">5 Years+</option>
                                    <option value="10 Years+">10 Years+</option>

                                </select>
                                
                            </div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Your bio</span>
                                   
                                </div>
                                <textarea 
                                {...register("bio")}
                                className="textarea textarea-bordered h-24" placeholder="Your Bio"></textarea>
                                
                            </label>
                           </div>
                         </div>
                         
                         <hr className="text-bold mt-20" />


                          {/* Social Main div 2*/}
                         <div className="flex gap-[340px] mt-30  mb-10">
                              {/* Text div */}
                           <div className="mt-10">
                           <p className="text-xl font-bold">Social Profiles</p>
                            <p className="text-sm ml-9">Where people can find you</p>
                           </div>
                           {/* form div */}
                           <div className="flex-1 mb-5">
                           <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Portfolio</span>

                                </div>
                                <input
                                    {...register("portfolio")}
                                    type="text"
                                    placeholder="Your Website Link" required
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Linkedin</span>

                                </div>
                                <input
                                    {...register("linkedin")}
                                    type="text"
                                    placeholder="Your Linkedin Link" required
                                     className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">GitHub</span>

                                </div>
                                <input
                                    {...register("Github")}
                                    type="text"
                                    placeholder="Your github Link" required
                                    className="input input-bordered w-full" />

                            </label>
                            
                           </div>
                         </div>
                         
                         <hr className="text-bold mt-20" />
                          {/* Education Main div 3*/}
                         <div className="flex gap-72 mt-30  mb-10">
                              {/* Text div */}
                           <div className="mt-10">
                           <p className="text-xl font-bold mr-20">Education</p>
                            <p className="text-sm ml-9">What schools have you studied at?</p>
                           </div>
                           {/* form div */}
                           <div className="flex-1 mb-5">
                           <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">University Name</span>

                                </div>
                                <input
                                    {...register("universityName")}
                                    type="text"
                                    placeholder="Your University Name" required
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Graduation</span>

                                </div>
                                <input
                                    {...register("Graduation")}
                                    type="date"
                                    
                                    placeholder="Your Linkedin Link" required
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Degree</span>

                                </div>
                                <input
                                    {...register("degree")}
                                    type="text"
                                    placeholder="Name of your Degree" required
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">GPA</span>

                                </div>
                                <input
                                    {...register("gpa")}
                                    type="text"
                                    placeholder="Your Current GPA" required
                                    className="input input-bordered w-full" />

                            </label>
                            
                           </div>
                         </div>
                         <hr className="text-bold mt-20" />
                          {/* Skills Main div 4*/}
                         <div className="flex lg:gap-[352px] mt-30  mb-10">
                              {/* Text div */}
                           <div className="mt-10">
                           <p className="text-xl font-bold lg:mr-16">Skills</p>
                            <p className="text-sm ml-9">Share your  Skills with us</p>
                           </div>
                           {/* form div */}
                           <div className="flex-1 mb-5">
                           <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Your Skills</span>

                                </div>
                                <input
                                    {...register("skill")}
                                    type="text"
                                    placeholder="eg. HTML,CSS,React ect.." required
                                    className="input input-bordered w-full" />

                            </label>
                           
                            
                           </div>
                         </div>
                         
                         <hr className="text-bold mt-20 bg-orange-600" />
                          {/* Projects Main div 5*/}
                          <div className="flex lg:gap-[330px] mt-30  mb-10">
                              {/* Text div */}
                           <div className="mt-10">
                           <p className="text-xl font-bold mr-14">Projects</p>
                            <p className="text-sm ml-9">Tell us about your projects?</p>
                           </div>
                           {/* form div */}
                           <div className="flex-1 mb-5">
                           <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Project Name(1)</span>

                                </div>
                                <input
                                    {...register("ProjectName")}
                                    type="text"
                                    placeholder="Your Project Name" required
                                    className="input input-bordered w-full" />

                            </label>
                           <div className="flex gap-5">
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Starting Date</span>

                                </div>
                                <input
                                    {...register("StartDate")}
                                    type="date"
                                    
                                    placeholder="Your Linkedin Link" required
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Ending Date</span>

                                </div>
                                <input
                                    {...register("EndDate")}
                                    type="date"
                                    
                                    placeholder="Your Linkedin Link" required
                                    className="input input-bordered w-full" />

                            </label>
                           </div>
                            <label className="form-control mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">About Your Project</span>
                                   
                                </div>
                                <textarea 
                                {...register("AboutProject")}
                                className="textarea textarea-bordered h-24" placeholder="Description of your project"></textarea>
                                
                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Main Technology Used</span>

                                </div>
                                <input
                                    {...register("TechnologyUsed")}
                                    type="text"
                                    placeholder="eg. React, Node.js ect.." required
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Live Link</span>

                                </div>
                                <input
                                    {...register("LiveLink")}
                                    type="text"
                                    placeholder="Live Link of Your Project" required
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-14">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Project Name(2)</span>

                                </div>
                                <input
                                    {...register("ProjectName2")}
                                    type="text"
                                    placeholder="Your Project Name" required
                                    className="input input-bordered w-full" />

                            </label>
                           <div className="flex gap-5">
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Starting Date</span>

                                </div>
                                <input
                                    {...register("StartDate2")}
                                    type="date"
                                    
                                    placeholder="Your Linkedin Link" required
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Ending Date</span>

                                </div>
                                <input
                                    {...register("EndDate2")}
                                    type="date"
                                    
                                    placeholder="Your Linkedin Link" required
                                    className="input input-bordered w-full" />

                            </label>
                           </div>
                            <label className="form-control mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">About Your Project</span>
                                   
                                </div>
                                <textarea 
                                {...register("AboutProject2")}
                                className="textarea textarea-bordered h-24" placeholder="Description of your project"></textarea>
                                
                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Main Technology Used</span>

                                </div>
                                <input
                                    {...register("TechnologyUsed2")}
                                    type="text"
                                    placeholder="eg. React, Node.js ect.." required
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Live Link</span>

                                </div>
                                <input
                                    {...register("LiveLink2")}
                                    type="text"
                                    placeholder="Live Link of Your Project" required
                                    className="input input-bordered w-full" />

                            </label>
                            
                           </div>
                         </div>
                         <hr className="text-bold mt-20" />
                          {/* Experience Main div 6*/}
                          <div className="flex lg:gap-80 mt-30  mb-10">
                              {/* Text div */}
                           <div className="mt-10">
                           <p className="text-xl font-bold mr-14">Experience</p>
                            <p className="text-sm ml-7">Tell us about your Experience?</p>
                           </div>
                           {/* form div */}
                           <div className="flex-1 mb-5">
                           <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Company Name</span>

                                </div>
                                <input
                                    {...register("CompanyName")}
                                    type="text"
                                    placeholder="Where are you working now.." 
                                    className="input input-bordered w-full" />

                            </label>
                           <div className="flex gap-5">
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Starting Date</span>

                                </div>
                                <input
                                    {...register("StartDate3")}
                                    type="date"
                                    
                                    placeholder="Your Linkedin Link" 
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Ending Date</span>

                                </div>
                                <input
                                    {...register("EndDate3")}
                                    type="date"
                                    
                                    placeholder="Your Linkedin Link" 
                                    className="input input-bordered w-full" />

                            </label>
                           </div>
                            {/* <label className="form-control mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">About Your Project</span>
                                   
                                </div>
                                <textarea 
                                {...register("AboutProject")}
                                className="textarea textarea-bordered h-24" placeholder="Description of your project"></textarea>
                                
                            </label> */}
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Job Title</span>

                                </div>
                                <input
                                    {...register("JobTitle")}
                                    type="text"
                                    placeholder="eg. Junior Web Developer, React Developer ect.." 
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Location</span>

                                </div>
                                <input
                                    {...register("Location")}
                                    type="text"
                                    placeholder="Location" 
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Job Type</span>

                                </div>
                                <input
                                    {...register("JobType")}
                                    type="text"
                                    placeholder="eg. Full-Time , Remote ect..." 
                                    className="input input-bordered w-full" />

                            </label>
                           {/* <div className="flex gap-5">
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Starting Date</span>

                                </div>
                                <input
                                    {...register("StartDate2")}
                                    type="date"
                                    
                                    placeholder="Your Linkedin Link" required
                                    className="input input-bordered w-full" />

                            </label>
                           <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Ending Date</span>

                                </div>
                                <input
                                    {...register("EndDate2")}
                                    type="date"
                                    
                                    placeholder="Your Linkedin Link" required
                                    className="input input-bordered w-full" />

                            </label>
                           </div> */}
                            {/* <label className="form-control mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">About Your Project</span>
                                   
                                </div>
                                <textarea 
                                {...register("AboutProject2")}
                                className="textarea textarea-bordered h-24" placeholder="Description of your project"></textarea>
                                
                            </label> */}
                           {/* <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Main Technology Used</span>

                                </div>
                                <input
                                    {...register("TechnologyUsed2")}
                                    type="text"
                                    placeholder="eg. React, Node.js ect.." required
                                    className="input input-bordered w-full" />

                            </label> */}
                           {/* <label className="form-control w-full mt-3">
                                <div className="label">
                                    <span className="label-text text-lg font-bold">Live Link</span>

                                </div>
                                <input
                                    {...register("LiveLink2")}
                                    type="text"
                                    placeholder="Live Link of Your Project" required
                                    className="input input-bordered w-full" />

                            </label> */}
                            
                           </div>
                         </div>
                         <hr className="text-bold mt-20" />
                            <input className="btn w-full bg-orange-600 text-white" type="submit" />
                        </form>
                    </div>
                
            </div>

        </div>
        </div>
    );
};

export default UserProfileForm;