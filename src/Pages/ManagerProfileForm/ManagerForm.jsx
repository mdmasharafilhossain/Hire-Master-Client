import { Link, useNavigate } from "react-router-dom";
import ProfileNav from "../../Comonents/ProfileNav/ProfileNav";
import { IoMdArrowBack } from "react-icons/io";
import { BsPersonSquare } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import SideLabel from "./SideLabel";

import InputPackage from "./InputPackage";
import InputLabel from "./InputLabel";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import Loader from "../../Comonents/Loader/Loader";
const Image_Hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const Profile_Hosting = `https://api.imgbb.com/1/upload?key=${Image_Hosting_key}`;

const ManagerForm = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const { register, handleSubmit } = useForm();
  const AxiosPublic = UseAxiosPublic();
  const { data: profile, loading, refetch } = useFetchData(
    `/managerProfile/${user?.email}`,
    "profile"
  );
  if (loading) return <Loader />;

  refetch();
 

  const onSubmit = async (data) => {
    
    const ImageFile = { image: data.image[0] || profile.image };
    const res = await AxiosPublic.post(Profile_Hosting, ImageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    

    if (res.data.success) {
      const managerProfileInfo = {
        name: data.name,
        email: user?.email,
        image: res.data.data.display_url || profile.image,
        location: data.location,
        phone: data.phone,
        companyName: data.companyName,
        companyLocation: data.companyLocation,
        companyWebsite: data.companyWebsite,
        companyDetails: data.companyDetails,
        portfolio: data.portfolio,
        linkedin: data.linkedin,
        universityName: data.universityName,
        graduationDate: data.graduationDate,
        degree: data.degree,
        role: data.role,
      };
      
      updateUserProfile(managerProfileInfo.name, managerProfileInfo.image).then(
        () => {
          AxiosPublic.patch("/managerProfile", managerProfileInfo).then(
            (res) => {
              
              if (res.data.modifiedCount > 0) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your data Added Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/managerProfile");
              } else {
                Swal.fire({
                  position: "top-end",
                  icon: "error",
                  title: `Ops! Something went wrong!!!`,
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
            }
          );
        }
      );
    }
  };
  return (
    <div className="max-w-6xl mx-auto">
      <ProfileNav profile={"managerProfile"} setProfile={"managerForm"} />
      <div className="max-w-6xl p-4 sm:p-8 md:p-12 lg:p-16 mx-auto">
        <div className="rounded-md border-2 border-slate-300 p-4 sm:p-8 md:p-12 lg:p-16">
          <div className="mx-auto text-center">
            <Link to="/managerProfile">
              <p className="text-2xl flex">
                <IoMdArrowBack />
                <BsPersonSquare />
              </p>
            </Link>
            <h1 className="text-4xl sm:text-5xl text-orange-600 border-red-400 font-bold  mb-6 sm:mb-12 py-4">
              Set Your HireMaster Profile
            </h1>
          </div>
          <div className="">
            <form
              className="container space-y-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* -----------------About----------------------*/}
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Text div */}
                <SideLabel XL={"About"} SM={"Tell us about yourself"} />
                {/* form div */}
                <div className="w-full md:w-1/2">
                  {/* Name */}
                  <InputPackage
                    text={"Your name"}
                    regField={"name"}
                    inputType={"text"}
                    defaultValue={profile.name}
                    placeholder={"Your name"}
                    register={register}
                  />
                  {/* Image */}
                  <div className="">
                    <p className="text-lg font-bold">Upload Your Photo*</p>
                    <input
                      {...register("image")}
                      type="file"
                      className="file-input file-input-bordered w-full max-w-xs"
                    />
                  </div>
                  {/*  Location info */}
                  <InputPackage
                    text={"Your Location"}
                    regField={"location"}
                    inputType={"text"}
                    defaultValue={profile.location}
                    placeholder={"Location link"}
                    register={register}
                  />

                  {/* Contact no */}
                  <InputPackage
                    text={"Contact no"}
                    regField={"phone"}
                    inputType={"text"}
                    defaultValue={profile.phone}
                    placeholder={"Phone"}
                    register={register}
                  />
                </div>
              </div>
              <hr className="text-bold mt-20 border-orange-500" />

              {/* ----------------Company-------------------- */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Text div */}
                <SideLabel XL={"Company"} SM={"Which company do you belong?"} />
                {/* form div */}

                <div className="w-full md:w-1/2">
                  <InputPackage
                    text={"Company Name"}
                    regField={"companyName"}
                    inputType={"text"}
                    defaultValue={profile.companyName}
                    placeholder={"Name  of your company"}
                    register={register}
                  />
                  <InputPackage
                    text={"Company Location"}
                    regField={"companyLocation"}
                    inputType={"text"}
                    defaultValue={profile.companyLocation}
                    placeholder={"Company Location map link"}
                    register={register}
                  />
                  <InputPackage
                    text={"Company Website"}
                    regField={"companyWebsite"}
                    inputType={"text"}
                    defaultValue={profile.companyWebsite}
                    placeholder={"Website Link"}
                    register={register}
                  />
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text text-lg font-bold">
                        Company Description
                      </span>
                    </div>
                    <textarea
                      {...register("companyDetails")}
                      className="textarea textarea-bordered h-24"
                      defaultValue={profile.companyDetails}
                      placeholder="Details of your Company"
                    ></textarea>
                  </label>
                </div>
              </div>
              <hr className="text-bold mt-20 border-orange-500" />

              {/* --------------Social-----------------*/}
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Text div */}
                <SideLabel
                  XL={"Social Profiles"}
                  SM={"Where people can find you?"}
                />
                {/* form div */}
                <div className="w-full md:w-1/2">
                  <InputPackage
                    text={"Portfolio"}
                    regField={"portfolio"}
                    inputType={"text"}
                    defaultValue={profile.portfolio}
                    placeholder={"Your personal portfolio link"}
                    register={register}
                  />
                  <InputPackage
                    text={"LinkedIn"}
                    regField={"linkedin"}
                    inputType={"text"}
                    defaultValue={profile.linkedin}
                    placeholder={"Your LinkedIn Link"}
                    register={register}
                  />
                </div>
              </div>
              <hr className="text-bold mt-20 border-orange-500" />

              {/* --------------Education-------------*/}
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Text div */}
                <SideLabel
                  XL={"Education"}
                  SM={"Your Educational background"}
                />
                {/* form div */}
                <div className="w-full md:w-1/2">
                  <InputPackage
                    text={"University Name"}
                    regField={"universityName"}
                    inputType={"text"}
                    defaultValue={profile.universityName}
                    placeholder={"Name  of your University"}
                    register={register}
                  />
                  <InputPackage
                    text={"Graduation Date"}
                    regField={"graduationDate"}
                    inputType={"date"}
                    defaultValue={profile.graduationDate}
                    placeholder={"Name  of your company"}
                    register={register}
                  />
                  <InputPackage
                    text={"Degree"}
                    regField={"degree"}
                    inputType={"text"}
                    defaultValue={profile.degree}
                    placeholder={"Graduation Degree"}
                    register={register}
                  />
                </div>
              </div>
              <hr className="text-bold mt-20 border-orange-500" />

              {/* ---------------Skill Domain--------------*/}
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Text div */}
                <SideLabel
                  XL={"Skill Domain"}
                  SM={"Which skill suits for you?"}
                />
                {/* form div */}
                <div className="w-full md:w-1/2">
                  <label className="form-control ">
                    <InputLabel text={"Skill preference"} />
                    <select
                      {...register("role")}
                      defaultValue={profile.role || ""}
                      className="select select-bordered w-full text-lg font-bold mt-4"
                    >
                      <option disabled={!profile.role} selected={!profile.role}>
                        Select Your skill preference*
                      </option>
                      <option value="Web Development">Web Development</option>
                      <option value="Software Engineering">
                        Software Engineering
                      </option>
                      <option value="Product Management">
                        Product Management
                      </option>
                      <option value="Artificial Intelligence">
                        Artificial Intelligence
                      </option>
                      <option value="App Development">App Development</option>
                      <option value="Game Development">Game Development</option>
                      <option value="DevOps">DevOps</option>
                      <option value="Human Resource">Human Resource</option>
                      <option value="Business Analytics">
                        Business Analytics
                      </option>
                      <option value="Networking">Networking</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Quality Assurance">
                        Quality Assurance
                      </option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                    </select>
                  </label>
                </div>
              </div>
              <hr className="text-bold mt-20 border-orange-500" />

              {/* -------------Submit-------------- */}
              <input
                className="btn w-full bg-orange-600 text-white text-xl font-bold"
                type="submit"
                value={"Save"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerForm;
