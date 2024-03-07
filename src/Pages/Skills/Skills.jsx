import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import useProfile from "../../Comonents/Hooks/useProfile/useProfile";
import Swal from "sweetalert2";


const Skills = () => {

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
            UniversityName: data.institute


        }
        const userRes = await axiosPublic.patch(`/UsersProfile/${myProfileData._id}`, userInfo)
        
        if (userRes.data.modifiedCount > 0) {
            Swal.fire("Successfully Edited");
        }

    }


    return (
        <div className="mt-10 max-w-5xl mx-auto border-[0.5px] border-slate-400 p-10 bg-[#f4f2ee] rounded-lg">
            <h2 className='text-3xl font-bold mb-2 text-[#FF444A]'>Edit Skills</h2>

            <form onSubmit={handleSubmit(onSubmit)} className=' '>
                <h3 className='text-slate-600 text-lg font-semibold'>Skills</h3>
                <input className='pl-2 rounded-md py-2   w-full text-lg font-medium '
                    {...register("skills", { required: true })} type="text" placeholder='Ex: HTML, Css, React' id="" />
                {errors.name && <span className="mt-2 text-red-600 w-full">This Field is required </span>}

                <h2 className="mt-4 mb-2 text-slate-600 text-lg font-semibold">Suggested for you</h2>
                <div className="w-full bg-white rounded-md">
                    <div className="grid grid-cols-2 md:grid-cols-4 p-4 gap-3">
                        <h2 className="flex flex-col justify-center text-slate-600 text-lg font-semibold p-2 border-[0.5px] rounded-full">HTML</h2>
                        <h2 className="flex flex-col justify-center text-slate-600 text-lg font-semibold p-2 border-[0.5px] rounded-full">Javascript</h2>
                        <h2 className="flex flex-col justify-center text-slate-600 text-lg font-semibold p-2 border-[0.5px] rounded-full">Graphic Design</h2>
                        <h2 className="flex flex-col justify-center text-slate-600 text-lg font-semibold p-2 border-[0.5px] rounded-full">Software Development</h2>
                        <h2 className="flex flex-col justify-center text-slate-600 text-lg font-semibold p-2 border-[0.5px] rounded-full">Content Writing</h2>

                    </div>
                </div>
                <button onSubmit={handleSubmit(onSubmit)} className=" mt-2 btn px-8  bg-[#FF444A] text-white rounded-md hover:text-black hover:bg-red-300  text-lg font-semibold">Edit</button>
            </form>
        </div>
    );
};

export default Skills;