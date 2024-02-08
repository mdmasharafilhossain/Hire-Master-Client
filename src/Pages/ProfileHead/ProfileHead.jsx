import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";


const Image_Hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const Profile_Hosting = `https://api.imgbb.com/1/upload?key=${Image_Hosting_key}`;

const ProfileHead = () => {

    const axiosPublic = UseAxiosPublic()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const ImageFile = { image: data.image[0] }
        const res = await axiosPublic.patch(Profile_Hosting, ImageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
        if (res.data.success) {



            const name = data.name
            const age = data.age
            const category = data.category
            const description = data.description
            const longDescription = data.longDescription
            const location = data.location


            const petInfo = {

                name: name,
                age: age,
                category: category,
                location: location,
                description: description,
                longDescription: longDescription,

            }
            const menuRes = await axiosPublic.patch(`/pets`, petInfo)
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {
                // Swal.fire("Pet Updated successfully");
            }


        }
    }

    return (
        <div className="mt-10 max-w-5xl mx-auto border-[0.5px] border-slate-400 p-10 bg-[#f4f2ee] rounded-lg">
            <div className="">
                <div  >
                    <form onSubmit={handleSubmit(onSubmit)} className=' '>
                   
                         <div>
                         <h2 className='text-3xl font-bold text-blue-600'>Edit</h2>
                        </div>  
                       <div>
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

                        <p className="border-[0.5px] border-slate-400 mt-2 mb-1 w-full"></p>

                        <button onSubmit={handleSubmit(onSubmit)} className=" btn px-8  bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-200  text-lg font-semibold">Edit</button>
                       </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ProfileHead;