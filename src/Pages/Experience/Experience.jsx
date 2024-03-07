import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import useProfile from "../../Comonents/Hooks/useProfile/useProfile";
import Swal from "sweetalert2";


const Experience = () => {

    const axiosPublic = UseAxiosPublic()
    const [profileData] = useProfile()
    const myProfileData = profileData[0]
    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        

        const userInfo = {
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


        }
        const userRes = await axiosPublic.patch(`/UsersProfile/experience/${myProfileData._id}`, userInfo)
       
        if (userRes.data.modifiedCount > 0) {
            Swal.fire("Successfully Edited");
        }

    }

    return (
        <div>
            {
                profileData.map(data => <div key={data._id} className="mt-10 max-w-5xl mx-auto border-[0.5px] border-slate-400 p-10 bg-[#f4f2ee] rounded-lg">
                    <div className="">
                        <div  >

                            <form onSubmit={handleSubmit(onSubmit)} className=' '>
                                <h2 className='text-3xl font-bold text-[#FF444A]'>Edit Experience</h2>

                                <h3 className='text-slate-600 text-lg font-semibold'>Job Title</h3>
                                <input defaultValue={data.jobTitle} className='pl-2 rounded-md py-2   w-full text-lg font-medium '
                                    {...register("jobTitle", { required: true })} type="text" placeholder='Ex: Frontend Developer' id="" />
                                {errors.jobTitle && <span className="mt-2 text-red-600 w-full">This Field is required </span>}

                                <h3 className='text-slate-600 text-lg font-semibold'>Employment type</h3>
                                <input defaultValue={data.jobType} className='pl-2 rounded-md py-2    w-full text-lg font-medium '
                                    {...register("jobType", { required: true })} type="text" placeholder='Ex: Full-Time' id="" />
                                {errors.jobType && <span className="mt-2 text-red-600 w-full">This Field is required </span>}

                                <h3 className='text-slate-600 text-lg font-semibold'>Company name</h3>
                                <input defaultValue={data.companyName} className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium '
                                    {...register("companyName", { required: true })} type="text" placeholder='Ex: Microsoft' id="" />
                                {errors.companyName && <span className="mt-2 text-red-600 w-full">This Field is required </span>}

                                <h3 className='text-slate-600 text-lg font-semibold'>Location</h3>
                                <input defaultValue={data.jobLocation} className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium '
                                    {...register("jobLocation", { required: true })} type="text" placeholder='Ex: Dhaka, Bangladesh'  />
                                {errors.jobLocation && <span className="mt-2 text-red-600 w-full">This Field is required </span>}

                                {/* Start Date */}
                                <div className="">
                                    <label className="text-slate-600 text-lg font-semibold">Start Date </label>
                                    <div className=" grid grid-cols-2 gap-6">
                                        <div>

                                            <select defaultValue={data.jobStartMonth}  {...register("jobStartMonth", { required: true })} className="text-lg font-medium rounded-md py-2 w-full" id="">

                                                <option disabled className="text-lg font-medium" value="Jan">Month</option>
                                                <option className="text-lg font-medium" value="Jan">January</option>
                                                <option className="text-lg font-medium" value="Feb">February</option>
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
                                            <select defaultValue={data.jobStartYear}  {...register("jobStartYear", { required: true })} className="text-lg font-medium rounded-md py-2  w-full" id="">

                                                <option  disabled className="text-lg font-medium ">Year</option>
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

                                            <select defaultValue={data.jobEndMonth}  {...register("jobEndMonth", { required: true })} className="text-lg font-medium rounded-md py-2  w-full" id="">

                                                <option  disabled className="text-lg font-medium" value="Jan">Month</option>
                                                <option className="text-lg font-medium" value="Jan">January</option>
                                                <option className="text-lg font-medium" value="Feb">February</option>
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
                                            <select defaultValue={data.jobEndYear} {...register("jobEndYear", { required: true })} className="text-lg font-medium rounded-md py-2 w-full" id="">

                                                <option  disabled className="text-lg font-medium ">Year</option>
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
                                <textarea defaultValue={data.jobDescription}  {...register("jobDescription", { required: true })} type="text" placeholder='Describe your experience' className='pl-2 rounded-md py-2    w-full text-lg font-medium ' cols="30" rows="2"></textarea>
                                {errors.jobDescription && <span className="mt-2 text-red-600 w-full">description is required </span>}
                                <p className="border-[0.5px] border-slate-400 mt-2 mb-1 w-full"></p>

                                <button onSubmit={handleSubmit(onSubmit)} className=" btn px-8  bg-[#FF444A] text-white rounded-md hover:text-black hover:bg-red-300  text-lg font-semibold">Edit</button>
                            </form>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Experience;