import { useState } from "react";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import TagsInput from "react-tagsinput";
const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY_COURSE_PHOTO
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const PremiumUserCourses = () => {
    const [selectedTopics, setselectedTopics] = useState([]);

    const [selectedRoutine, setSelectedRoutine] = useState([]);
  
    const { register, handleSubmit, reset } = useForm();
  
    const onSubmit = async (data) => {
      console.log(data);
      const axiosPublic = UseAxiosPublic();
      // image upload to imgbb and then get an url 
const imageFile={image:data.photourl[0]}
console.log(imageFile)
const res = await axiosPublic.post(image_hosting_api, imageFile, {
    headers: {
        'content-type': 'multipart/form-data'
    }
});
if(res.data.success){
  const formData = {
    courseName: data.name,
    instructor: data.instructor,
    duration: data.duration,
    topics: selectedTopics,
    level:data.level,
    price:data.price,
    photoUrl:res.data.data.display_url,
    shortDescription:data.shortdes,
    description:data.des,
 dailyBreakdown: selectedRoutine,
  };
  console.log(formData);
  const dataForm = await axiosPublic.post("/premiumusercourse", formData);
  
  if (dataForm.data.insertedId) {
    // show success popup
    reset();
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Course Added",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
    
    };
  
    return (
      <div className=" mx-auto h-100vh p-4 m-6 bg-slate-50 border-2 rounded-lg border-orange-500 ">
       
       <div className="flex justify-evenly  my-6 mb-10">
                <h2 className="text-4xl font-bold">Add <span className='text-[#FF3811]'>Courses</span></h2>
               
            </div>
        <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Course Name*
              </span>
            </label>
            <input
              type="text"
              placeholder="Course Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                Instructor Name*
                </span>
              </label>
              <input
                type="text"
                placeholder="Instructor Name"
                {...register("instructor", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
  
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                  Duration*
                </span>
              </label>
              <input
                type="text"
                placeholder="Duration"
                {...register("duration", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                Level*
                </span>
              </label>
              <input
                type="text"
                placeholder="Level"
                {...register("level", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
  
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                  Price*
                </span>
              </label>
              <input
                type="text"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
           
   <div className="form-control w-full">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                  Routine*
                </span>
              </label>
              <TagsInput
                value={selectedRoutine}
                onChange={setSelectedRoutine}
                placeHolder="Enter Routine"
                className="input input-bordered w-full"
              />
              <em>press enter to add Routine</em>
            </div>
            <div>
              <pre className="mb-2">
                <input
                  className="hidden"
                  type="text"
                  placeholder="Routine"
                  {...register("routine")}
                  value={selectedRoutine
                    .map((routine) => routine.text)
                    .join(", ")}
                  readOnly
                />
              </pre>
            </div>
          </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                  Topics*
                </span>
              </label>
              <TagsInput
                value={selectedTopics}
                onChange={setselectedTopics}
                placeHolder="Enter Topics"
                className="input input-bordered w-full"
              />
              <em>press enter to add Topics</em>
            </div>
  
            <pre className="mb-2">
              <input
                className="hidden"
                type="text"
                placeholder="Topics"
                {...register("topics")}
                value={selectedTopics.map((topic) => topic.text).join(", ")}
                readOnly
              />
            </pre>
          </div>
         
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                  Short Description*
                </span>
              </label>
              <input
                type="text"
                placeholder="Short Description"
                {...register("shortdes", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
  
           
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                  Description*
                </span>
              </label>
              <input
                type="text"
                placeholder="Description"
                {...register("des", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
  
           
          </div>
             <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
              PhotoUrl*
              </span>
            </label>
              <div className="form-control  w-1/3 ">
                    <input {...register('photourl', { required:true })} type="file" className="file-input w-full  bg-orange-500" />
                </div>
          </div>
          <button
            className="btn btn-warning w-full bg-white text-black text-xl font-semibold hover:bg-orange-500 hover:text-white"
            // className="btn w-full bg-orange-600 text-white"
          >
            ADD COURSE
          </button>
        </form>
      </div>
    );
  };

export default PremiumUserCourses;