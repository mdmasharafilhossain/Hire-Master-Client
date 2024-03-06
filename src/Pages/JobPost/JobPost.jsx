import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import TagsInput from "react-tagsinput";
import { useContext, useState } from "react";
import Navbar2 from "../../Comonents/Navbar/Navbar2";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY_COMPANY_LOGO
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const JobPost = () => {
  const [selectedSkills, setselectedSkills] = useState([]);
  const [selectedResponsibilities, setSelectedResponsibilities] = useState([]);
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const [selectedQualification, setSelectedQualification] = useState([]);
  const { register, handleSubmit,reset, formState: { errors },} = useForm();
  const { user} = useContext(AuthContext);
  const onSubmit = async (data) => {

    const axiosPublic = UseAxiosPublic()
    // image upload to imgbb and then get an url 
const imageFile={image:data.companylogo[0]}
console.log(imageFile)
const res = await axiosPublic.post(image_hosting_api, imageFile, {
    headers: {
        'content-type': 'multipart/form-data'
    }
});
if(res.data.success){
  const formData = {
    job_title: data.name,
    company_name: data.companyname,
    company_logo: res.data.data.display_url,
    job_role: data.role,
    salary: data.salary,
    job_time: data.time,
    skills: selectedSkills,
    job_description: data.description,
    hiring_manager_name: data.managername,
    hiring_manager_photo: user.photoURL,
    hiring_manager_email: data.manageremail,
    responsibilities: selectedResponsibilities,
    benefits: selectedBenefits,
    qualification: selectedQualification,
    job_posting_date: data.date,
    user_email: data.email,
    job_location: data.location,
  };
  console.log(formData)
  const dataForm = await axiosPublic.post("/staticjobpost", formData);
  if (dataForm.data.insertedId) {
    // show success popup
    reset();
    Swal.fire({
      position: "top",
      icon: "success",
      title: `${data.name} is added to the Job Post.`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}



  };

  return (
    <div className=" mx-auto h-100vh ">
        <Navbar2/>
        <div className="p-4 m-6 bg-slate-50 border-2 rounded-lg border-orange-500">
        <div >
        
        <h2 className="text-4xl font-serif  text-center uppercase font-bold">Add <span className='text-[#FF3811]'>Job </span></h2>
    
      </div>
      <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text font-serif font-bold text-lg ">
              Job Title*
            </span>
          </label>
          <input
            type="text"
            placeholder="Job Title"
            {...register("name", { required: false })}
          
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Company Name*
              </span>
            </label>
            <input
              type="text"
              placeholder="Company Name"
              {...register("companyname", { required: false })}
        
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Company Logo*
              </span>
            </label>
              <div className="form-control  w-full ">
                    <input {...register('companylogo', { required:true })} type="file" className="file-input w-full  bg-orange-500" />
                </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Job Role*
              </span>
            </label>
            <input
              type="text"
              placeholder="Job Role"
              {...register("role", { required: false})}
            
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Salary*
              </span>
            </label>
            <input
              type="text"
              placeholder="Salary"
              {...register("salary", { required:false })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Job Time*
              </span>
            </label>
            <input
              type="text"
              placeholder="Job Time"
              {...register("time", { required:false})}
            
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Skills*
              </span>
            </label>
            <TagsInput
              value={selectedSkills}
              onChange={setselectedSkills}
              placeHolder="Enter Skills"
              className="input input-bordered w-full"
            />
            <em>press enter to add Skills</em>
          </div>

          <pre className="mb-2">
            <input
              className="hidden"
              type="text"
              placeholder="Skills"
              {...register("skills")}
              value={selectedSkills.map((skill) => skill.text).join(", ")}
              readOnly
            />
          </pre>
        </div>

        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Job Description*
              </span>
            </label>
            <input
              type="text"
              placeholder="Job Description"
              {...register("description", { required: false })}
             
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Hiring Manager Name*
              </span>
            </label>
            <input
              type="text"
              placeholder="Hiring Manager Name"
              {...register("managername", { required: false })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Hiring Manager Photo*
              </span>
            </label>
            <input
              type="text"
              placeholder="Hiring Manager Photo"
              {...register("managerphoto", { required: false })}
            
              className="input input-bordered w-full"
              readOnly
              defaultValue={user.photoURL
              }
            />
          
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Hiring Manager Email*
              </span>
            </label>
            <input
              type="text"
              placeholder="Hiring Manager Email"
              {...register("manageremail", { required:false })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Responsiblities*
              </span>
            </label>
            <TagsInput
              value={selectedResponsibilities}
              onChange={setSelectedResponsibilities}
              placeHolder="Enter Responsibilities"
              className="input input-bordered w-full"
            />
            <em>press enter to add Responsibilities</em>
          </div>
          <div>
            <pre className="mb-2">
              <input
                className="hidden"
                type="text"
                placeholder="Responsibilities"
                {...register("responsibilities")}
                value={selectedResponsibilities
                  .map((responsibility) => responsibility.text)
                  .join(", ")}
                readOnly
              />
            </pre>
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Benifits*
              </span>
            </label>
            <TagsInput
              value={selectedBenefits}
              onChange={setSelectedBenefits}
              placeHolder="Enter Benefits"
              className="input input-bordered w-full"
            />
            <em>press enter to add Benefits</em>

            <pre className="mb-2">
              <input
                className="hidden"
                type="text"
                placeholder="Benefits"
                {...register("benefits")}
                value={selectedBenefits
                  .map((benefit) => benefit.text)
                  .join(", ")}
                readOnly
              />
            </pre>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Qualification*
              </span>
            </label>
            <TagsInput
              value={selectedQualification}
              onChange={setSelectedQualification}
              placeHolder="Enter Qualification"
              className="input input-bordered w-full"
            />
            <em>press enter to add Qualification</em>
            <pre className="mb-2">
              <input
                className="hidden"
                type="text"
                placeholder="Qualification"
                {...register("qualification")}
                value={selectedQualification
                  .map((qualification) => qualification.text)
                  .join(", ")}
                readOnly
              />
            </pre>
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Job Posting Date*
              </span>
            </label>
            <input
              type="date"
              placeholder="Job Posting Date"
              {...register("date", { required: false })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                User Email*
              </span>
            </label>
            <input
              type="email"
              placeholder="User Email"
              {...register("email", { required: 
              false })}
             
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Job Location*
              </span>
            </label>
            <input
              type="text"
              placeholder="Job Location"
              {...register("location", { required: false })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <button
          className="btn btn-warning w-full bg-white text-[#FF3811] text-xl font-semibold hover:bg-[#FF3811]   hover:text-white"
          // className="btn w-full bg-orange-600 text-white"
        >
          ADD JOB
        </button>
      </form>
        </div>
     
    </div>
  );
};

export default JobPost;
