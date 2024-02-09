import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import TagsInput from "react-tagsinput";
import { useState } from "react";

const JobPost = () => {
  const [selectedSkills, setselectedSkills] = useState([]);

  const [selectedResponsibilities, setSelectedResponsibilities] = useState([]);

  const [selectedBenefits, setSelectedBenefits] = useState([]);

  const [selectedQualification, setSelectedQualification] = useState([]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const axiosPublic = UseAxiosPublic();

    const formData = {
      job_title: data.name,
      company_name: data.companyname,
      company_logo: data.logo,
      job_role: data.role,
      salary: data.salary,
      job_time: data.time,
      skills: selectedSkills,
      job_description: data.description,
      hiring_manager_name: data.managername,
      hiring_manager_photo: data.managerphoto,
      hiring_manager_email: data.manageremail,
      responsibilities: selectedResponsibilities,
      benefits: selectedBenefits,
      qualification: selectedQualification,
      job_posting_date: data.date,
      user_email: data.email,
      job_location: data.location,
    };
    console.log(formData);
    const dataForm = await axiosPublic.post("/jobpost", formData);

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
  };

  return (
    <div
      className=" mx-auto h-100vh"
      //   style={{
      //     backgroundImage:
      //       "url(https://i.ibb.co/1K0jfGK/arthur-mazi-Jmuv-Y9-Di9-BU-unsplash.jpg)",
      //   }}
    >
      <div>
        <h1 className=" font-serif font-bold text-center p-12 text-3xl uppercase ">
          Add Job{" "}
        </h1>
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
            {...register("name", { required: true })}
            required
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
              {...register("companyname", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Company Logo*
              </span>
            </label>
            <input
              type="text"
              placeholder="Company Logo"
              {...register("logo", { required: true })}
              className="input input-bordered w-full"
            />
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
              {...register("role", { required: true })}
              required
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
              {...register("salary", { required: true })}
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
              {...register("time", { required: true })}
              required
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
              {...register("description", { required: true })}
              required
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
              {...register("managername", { required: true })}
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
              {...register("managerphoto", { required: true })}
              required
              className="input input-bordered w-full"
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
              {...register("manageremail", { required: true })}
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
              {...register("date", { required: true })}
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
              {...register("email", { required: true })}
              required
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
              {...register("location", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <button 
        className="btn btn-warning w-full bg-white text-black text-xl font-semibold hover:bg-orange-500 hover:text-white"
        // className="btn w-full bg-orange-600 text-white"
        >
          ADD JOB
        </button>
      </form>
    </div>
  );
};

export default JobPost;
