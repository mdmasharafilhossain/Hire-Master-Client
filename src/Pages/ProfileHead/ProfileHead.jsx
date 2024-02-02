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
        if(res.data.success){

       
       
        const name = data.name
        const age = data.age
        const category = data.category
        const description = data.description
        const longDescription = data.longDescription
        const location = data.location

        
            const petInfo = {
                
                name:name,
                age:age,
                category:category,
                location:location,
                description:description,
                longDescription:longDescription,
                
            }
            const menuRes = await axiosPublic.patch(`/pets`, petInfo)
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // Swal.fire("Pet Updated successfully");
            }

        
        }
    }

    return (
        <div className="mt-10 max-w-5xl mx-auto border-[0.5px] border-slate-400 p-10 bg-[#f4f2ee] rounded-lg">
            <div className="">
                <div  >
                    <h2 className='text-3xl font-bold text-blue-600'>Edit Education</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className=' '>

                        <h3 className='text-white text-lg  font-medium'>Profile Picture</h3>
                        <input  className='pl-2  rounded-md py-2 w-full text-lg '
                            {...register("photo", { required: true })} type="file" placeholder='Password' id="" />
                        {errors.photo && <span className="mt-2 text-red-600 ">picture is required </span>}

                        <h3 className='text-white text-lg  font-medium'>Pet Name</h3>
                        <input  className='pl-2 rounded-md py-2   w-full text-lg'
                            {...register("name", { required: true })} type="text" placeholder='Name' id="" />
                        {errors.name && <span className="mt-2 text-red-600 w-full">Name is required </span>}

                        <h3 className='text-white text-lg  font-medium'>Pet Age</h3>
                        <input  className='pl-2 rounded-md py-2    w-full text-lg'
                            {...register("age", { required: true })} type="number" placeholder='Age' id="" />
                        {errors.age && <span className="mt-2 text-red-600 w-full">Age is required </span>}
                        
                        <div className="">
                        <label className="text-lg font-semibold text-white">Category: </label>
                        <div className=" md:flex items-center gap-6 w-full">
                        <div>
                       
                       <select  {...register("category", { required: true })} className="text-lg font-medium rounded-md py-2 w-[300px] md:w-[460px] "   id="">

                           <option className="text-lg font-medium " value="Jan">January</option>
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
                        <select  {...register("category", { required: true })} className="text-lg font-medium rounded-md py-2  w-[300px] md:w-[460px]"   id="">

                            <option className="text-lg font-medium " value="cat">Cat</option>
                            <option className="text-lg font-medium" value="dog">Dog</option>
                            <option className="text-lg font-medium" value="rabbit">Rabbit</option>
                            <option className="text-lg font-medium" value="eagle">Eagle</option>
                        </select>
                        </div>

                       
                        </div>
                        </div>
                        {errors.category && <span className="mt-2 text-red-600 ">Select A Category</span>}

                        <h3 className='text-white text-lg  font-medium'>Pet Location</h3>
                        <input  className='pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg'
                            {...register("location", { required: true })} type="text" placeholder='Location' id="" />
                        {errors.location && <span className="mt-2 text-red-600 w-full">Location is required </span>}

                        <h3 className='text-white text-lg  font-medium'>test</h3>
                        <input  className='pl-2 rounded-md py-2 border-[0.0px] border-black input input-bordered  w-full text-lg'
                            {...register("location", { required: true })} type="text" placeholder='Location' id="" />
                        {errors.location && <span className="mt-2 text-red-600 w-full">Location is required </span>}

                        <h3 className='text-white text-lg  font-medium'>Short Description</h3>
                        <input  className='pl-2 rounded-md py-2    w-full text-lg'
                            {...register("description", { required: true })} type="text" placeholder='Short description' id="" />
                        {errors.description && <span className="mt-2 text-red-600 w-full">description is required </span>}
                        
                        <h3 className='text-white text-lg  font-medium'>Long Description</h3>
                        <textarea  {...register("longDescription", { required: true })} type="text" placeholder='Long Description' className='pl-2 rounded-md py-2    w-full text-lg' cols="30" rows="2"></textarea>
                        {errors.longDescription && <span className="mt-2 text-red-600 w-full">description is required </span>}

                        <button className="btn w-[300px] md:w-[400px] bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Edit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ProfileHead;