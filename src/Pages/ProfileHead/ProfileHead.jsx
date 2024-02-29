import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import useProfile from "../../Comonents/Hooks/useProfile/useProfile";
import Swal from "sweetalert2";




const ProfileHead = () => {

    const axiosPublic = UseAxiosPublic()
    const [profileData] = useProfile()
    const myProfileData = profileData[0]
    console.log(profileData[0])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const userInfo = {
            name: data.name,
            UniversityName:data.UniversityName,
            headline:data.headline,
            location:data.location,
            linkedin:data.linkedin,
            portfolio:data.portfolio,
            github:data.github,
            aboutDescription:data.aboutDescription
            

        }
        console.log(data.UniversityName)
        const userRes = await axiosPublic.patch(`/UsersProfile/profileHead/${myProfileData._id}`, userInfo)
        console.log(userRes.data)
        if (userRes.data.modifiedCount > 0) {
            Swal.fire("Successfully Edited");
        }

    }

    return (
       <div>
        {
            profileData.map(data => <div key={data._id} className="mt-10 max-w-5xl mx-4 mb-4 md:mx-auto border-[0.5px] border-slate-400 p-10 bg-[#f4f2ee] rounded-lg">
            <div className="">
                <div  >
                    <form onSubmit={handleSubmit(onSubmit)} className=' '>
                   
                         <div>
                         <h2 className='text-3xl font-bold text-[#FF444A]'>Edit</h2>
                        </div>  
                       <div>
                       <h3 className='text-slate-600 text-lg font-semibold'>Name</h3>
                        <input defaultValue={data.name} className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("name", { required: true })} type="text" placeholder='Enter Your Name' id="" />
                        {errors.name && <span className="mt-2 text-red-600 w-full">Name is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Institute</h3>
                        <input defaultValue={data.UniversityName} className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("UniversityName", { required: true })} type="text" placeholder='Institute' id="" />
                        {errors.UniversityName && <span className="mt-2 text-red-600 w-full">Institute is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Headline</h3>
                        <input defaultValue={data.headline} className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("headline", { required: true })} type="text" placeholder='Ex: Fronted Developer' id="" />
                        {errors.headline && <span className="mt-2 text-red-600 w-full">Headline is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Location</h3>
                        <input defaultValue={data.location} className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("location", { required: true })} type="text" placeholder='Ex: Dhaka, Bangladesh' id="" />
                        {errors.location && <span className="mt-2 text-red-600 w-full">Location is required </span>}


                        <h3 className='text-slate-600 text-lg font-semibold'>Linkedin Profile</h3>
                        <input defaultValue={data.linkedin} className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("linkedin", { required: true })} type="url" placeholder='URL' id="" />
                        {errors.linkedin && <span className="mt-2 text-red-600 w-full">Linkedin is required </span>}


                        <h3 className='text-slate-600 text-lg font-semibold'>Portfolio Site</h3>
                        <input defaultValue={data.portfolio} className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("portfolio", { required: true })} type="url" placeholder='URL' id="" />
                        {errors.portfolio && <span className="mt-2 text-red-600 w-full">Portfolio is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Github Profile</h3>
                        <input defaultValue={data.github} className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium'
                            {...register("github", { required: true })} type="url" placeholder='URL' id="" />
                        {errors.github && <span className="mt-2 text-red-600 w-full">Github is required </span>}

                        <h3 className='text-slate-600 text-lg font-semibold'>Description</h3>
                        <textarea defaultValue={data.aboutDescription}
                         {...register("aboutDescription", { required: true })} type="text" placeholder='Describe Yourself' className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium' cols="30" rows="2"></textarea>
                        {errors.aboutDescription && <span className="mt-2 text-red-600 w-full">description is required </span>}

                        <p className="border-[0.5px] border-slate-400 mt-2 mb-1 w-full"></p>

                        <button onSubmit={handleSubmit(onSubmit)} className=" btn px-8  bg-[#FF444A] text-white rounded-md hover:text-black hover:bg-red-200 text-lg font-semibold">Edit</button>
                       </div>
                    </form>
                </div>
            </div>

        </div>)
        }
       </div>
    );
};

export default ProfileHead;