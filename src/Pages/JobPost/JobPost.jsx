import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";


const JobPost = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const axiosPublic = UseAxiosPublic()
        //   const job_title = data.name;
        //   const company_name = data.companyName;
        //   const company_logo = data.logo;
        //   const job_role = data.role;
        //   const salary = data.salary;
        //   const job_time = data.time;
        //   const skills = data.skills;
        //   const job_description = data.description;
        //   const hiring_manager_name = data.managerName;
        //   const hiring_manager_photo = data.managerPhoto;
        //   const hiring_manager_email = data.managerEmail;
        //   const responsibilities = data.responsibilities;
        //   const benefits = data.benefits;
        //   const qualification = data.qualification;
        //   const job_posting_date = data.date;
        //   const user_email = data.email;
        //   const job_location = data.location;


        const formData = {
            job_title: data.name,
            company_name: data.companyname,
            company_logo: data.logo,
            job_role: data.role,
            salary: data.salary,
            job_time: data.time,
            skills: data.skills,
            job_description: data.description,
            hiring_manager_name: data.managername,
            hiring_manager_photo: data.managerphoto,
            hiring_manager_email: data.manageremail,
            responsibilities: data.responsiblities,
            benefits: data.benefits,
            qualification: data.qualification,
            job_posting_date: data.date,
            user_email: data.email,
            job_location: data.location,
        };
        console.log(formData)
        const dataForm = await axiosPublic.post('/jobpost', formData);

        if (dataForm.data.insertedId) {
            // show success popup
            reset();
            Swal.fire({
                position: "top",
                icon: "success",
                title: `${data.name} is added to the Job Post.`,
                showConfirmButton: false,
                timer: 1500
            });
        }



    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Job Title*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Job Title"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Company Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Company Name"
                            {...register('companyname', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Company Logo*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Company Logo"
                            {...register('logo', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                <div className="flex gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Job Role*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Job Role"
                            {...register('role', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Salary*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Salary"
                            {...register('salary', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                <div className="flex gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Job Time*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Job Time"
                            {...register('time', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Skills*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Skills"
                            {...register('skills', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                <div className="flex gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Job Description*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Job Description"
                            {...register('description', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Hiring Manager Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Hiring Manager Name"
                            {...register('managername', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                <div className="flex gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Hiring Manager Photo*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Hiring Manager Photo"
                            {...register('managerphoto', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Hiring Manager Email*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Hiring Manager Email"
                            {...register('manageremail', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                <div className="flex gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Responsiblities*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Responsiblities"
                            {...register('responsiblities', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Benifits*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Benifits"
                            {...register('benefits', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                <div className="flex gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Qualification*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Qualification"
                            {...register('qualification', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Job Posting Date*</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Job Posting Date"
                            {...register('date', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                <div className="flex gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">User Email*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="User Email"
                            {...register('email', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Job Location*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Job Location"
                            {...register('location', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                <button className="btn btn-secondary btn-outline btn-block">
                    Add Job
                </button>

            </form>
        </div>
    );
};

export default JobPost;