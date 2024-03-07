import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import useProfile from "../../Comonents/Hooks/useProfile/useProfile";

const Education = () => {
  const axiosPublic = UseAxiosPublic();
  const [profileData] = useProfile();
  const myProfileData = profileData[0];
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    

    const userInfo = {
      educationInstitute: data.educationInstitute,
      degree: data.degree,
      studyField: data.studyField,
      educationStartMonth: data.educationStartMonth,
      educationStartYear: data.educationStartYear,
      educationEndMonth: data.educationEndMonth,
      educationEndYear: data.educationEndYear,
      educationDescription: data.educationDescription,
    };
    const userRes = await axiosPublic.patch(
      `/UsersProfile/education/${myProfileData._id}`,
      userInfo
    );
  
    if (userRes.data.modifiedCount > 0) {
      Swal.fire("Successfully Edited");
    }
  };

  return (
    <div>
      {profileData.map((data) => (
        <div
          key={data._id}
          className="mt-10 max-w-5xl mx-auto border-[0.5px] border-slate-400 p-10 bg-[#f4f2ee] rounded-lg"
        >
          <div className="">
            <div>
              <h2 className="text-3xl font-bold text-[#FF444A]">
                Edit Education
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className=" ">
                <h3 className="text-slate-600 text-lg font-semibold">
                  Institute
                </h3>
                <input
                  defaultValue={data.educationInstitute}
                  className="pl-2 rounded-md py-2   w-full text-lg font-medium "
                  {...register("educationInstitute", { required: true })}
                  type="text"
                  placeholder="Institute Name"
                  id=""
                />
                {errors.institute && (
                  <span className="mt-2 text-red-600 w-full">
                    This Field is required{" "}
                  </span>
                )}

                <h3 className="text-slate-600 text-lg font-semibold">Degree</h3>
                <input
                  defaultValue={data.degree}
                  className="pl-2 rounded-md py-2    w-full text-lg font-medium "
                  {...register("degree", { required: true })}
                  type="text"
                  placeholder="e.g Bachelor"
                  id=""
                />
                {errors.degree && (
                  <span className="mt-2 text-red-600 w-full">
                    This Field is required{" "}
                  </span>
                )}

                <h3 className="text-slate-600 text-lg font-semibold">
                  Field Of Study
                </h3>
                <input
                  defaultValue={data.studyField}
                  className="pl-2 rounded-md py-2 border-[0.0px] border-black    w-full text-lg font-medium "
                  {...register("studyField", { required: true })}
                  type="text"
                  placeholder="e.g CSE"
                  id=""
                />
                {errors.studyField && (
                  <span className="mt-2 text-red-600 w-full">
                    This Field is required{" "}
                  </span>
                )}

                {/* Start Date */}
                <div className="">
                  <label className="text-slate-600 text-lg font-semibold">
                    Start Date{" "}
                  </label>

                  <div className=" grid grid-cols-2 gap-6">
                    <div>
                      <select
                        defaultValue={data.educationStartMonth}
                        {...register("educationStartMonth", { required: true })}
                        className="text-lg font-medium rounded-md py-2 w-full"
                        id=""
                      >
                        <option disabled className="text-lg font-medium">
                          Month
                        </option>
                        <option className="text-lg font-medium" value="Jan">
                          January
                        </option>
                        <option className="text-lg font-medium" value="Feb">
                          February
                        </option>
                        <option className="text-lg font-medium" value="Mar">
                          March
                        </option>
                        <option className="text-lg font-medium" value="Apr">
                          April
                        </option>
                        <option className="text-lg font-medium" value="May">
                          May
                        </option>
                        <option className="text-lg font-medium" value="Jun">
                          June
                        </option>
                        <option className="text-lg font-medium" value="Jul">
                          July
                        </option>
                        <option className="text-lg font-medium" value="Aug">
                          August
                        </option>
                        <option className="text-lg font-medium" value="Sep">
                          September
                        </option>
                        <option className="text-lg font-medium" value="Oct">
                          October
                        </option>
                        <option className="text-lg font-medium" value="Nov">
                          November
                        </option>
                        <option className="text-lg font-medium" value="Dec">
                          December
                        </option>
                      </select>
                    </div>
                    <div>
                      <select
                        defaultValue={data.educationStartYear}
                        {...register("educationStartYear", { required: true })}
                        className="text-lg font-medium rounded-md py-2  w-full"
                        id=""
                      >
                        <option disabled className="text-lg font-medium ">
                          Year
                        </option>
                        <option className="text-lg font-medium " value="2024">
                          2024
                        </option>
                        <option className="text-lg font-medium" value="2023">
                          2023
                        </option>
                        <option className="text-lg font-medium" value="2022">
                          2022
                        </option>
                        <option className="text-lg font-medium" value="2021">
                          2021
                        </option>
                        <option className="text-lg font-medium" value="2020">
                          2020
                        </option>
                        <option className="text-lg font-medium" value="2019">
                          2019
                        </option>
                        <option className="text-lg font-medium" value="2018">
                          2018
                        </option>
                        <option className="text-lg font-medium" value="2017">
                          2017
                        </option>
                        <option className="text-lg font-medium" value="2016">
                          2016
                        </option>
                        <option className="text-lg font-medium" value="2015">
                          2015
                        </option>
                        <option className="text-lg font-medium" value="2014">
                          2014
                        </option>
                        <option className="text-lg font-medium" value="2013">
                          2013
                        </option>
                        <option className="text-lg font-medium" value="2012">
                          2012
                        </option>
                        <option className="text-lg font-medium" value="2011">
                          2011
                        </option>
                        <option className="text-lg font-medium" value="2010">
                          2010
                        </option>
                        <option className="text-lg font-medium" value="2009">
                          2009
                        </option>
                        <option className="text-lg font-medium" value="2008">
                          2008
                        </option>
                        <option className="text-lg font-medium" value="2007">
                          2007
                        </option>
                        <option className="text-lg font-medium" value="2006">
                          2006
                        </option>
                        <option className="text-lg font-medium" value="2005">
                          2005
                        </option>
                        <option className="text-lg font-medium" value="2004">
                          2004
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* end Date */}
                <div className="">
                  <label className="text-slate-600 text-lg font-semibold">
                    End Date (Or Expected)
                  </label>
                  <div className=" grid grid-cols-2 gap-6">
                    <div>
                      <select
                        defaultValue={data.educationEndMonth}
                        {...register("educationEndMonth", { required: true })}
                        className="text-lg font-medium rounded-md py-2  w-full"
                        id=""
                      >
                        <option disabled className="text-lg font-medium">
                          Month
                        </option>
                        <option className="text-lg font-medium" value="Jan">
                          January
                        </option>
                        <option className="text-lg font-medium" value="Feb">
                          February
                        </option>
                        <option className="text-lg font-medium" value="Mar">
                          March
                        </option>
                        <option className="text-lg font-medium" value="Apr">
                          April
                        </option>
                        <option className="text-lg font-medium" value="May">
                          May
                        </option>
                        <option className="text-lg font-medium" value="Jun">
                          June
                        </option>
                        <option className="text-lg font-medium" value="Jul">
                          July
                        </option>
                        <option className="text-lg font-medium" value="Aug">
                          August
                        </option>
                        <option className="text-lg font-medium" value="Sep">
                          September
                        </option>
                        <option className="text-lg font-medium" value="Oct">
                          October
                        </option>
                        <option className="text-lg font-medium" value="Nov">
                          November
                        </option>
                        <option className="text-lg font-medium" value="Dec">
                          December
                        </option>
                      </select>
                    </div>
                    <div>
                      <select
                        defaultValue={data.educationEndYear}
                        {...register("educationEndYear", { required: true })}
                        className="text-lg font-medium rounded-md py-2 w-full"
                        id=""
                      >
                        <option disabled className="text-lg font-medium ">
                          Year
                        </option>
                        <option className="text-lg font-medium " value="2024">
                          2024
                        </option>
                        <option className="text-lg font-medium" value="2023">
                          2023
                        </option>
                        <option className="text-lg font-medium" value="2022">
                          2022
                        </option>
                        <option className="text-lg font-medium" value="2021">
                          2021
                        </option>
                        <option className="text-lg font-medium" value="2020">
                          2020
                        </option>
                        <option className="text-lg font-medium" value="2019">
                          2019
                        </option>
                        <option className="text-lg font-medium" value="2018">
                          2018
                        </option>
                        <option className="text-lg font-medium" value="2017">
                          2017
                        </option>
                        <option className="text-lg font-medium" value="2016">
                          2016
                        </option>
                        <option className="text-lg font-medium" value="2015">
                          2015
                        </option>
                        <option className="text-lg font-medium" value="2014">
                          2014
                        </option>
                        <option className="text-lg font-medium" value="2013">
                          2013
                        </option>
                        <option className="text-lg font-medium" value="2012">
                          2012
                        </option>
                        <option className="text-lg font-medium" value="2011">
                          2011
                        </option>
                        <option className="text-lg font-medium" value="2010">
                          2010
                        </option>
                        <option className="text-lg font-medium" value="2009">
                          2009
                        </option>
                        <option className="text-lg font-medium" value="2008">
                          2008
                        </option>
                        <option className="text-lg font-medium" value="2007">
                          2007
                        </option>
                        <option className="text-lg font-medium" value="2006">
                          2006
                        </option>
                        <option className="text-lg font-medium" value="2005">
                          2005
                        </option>
                        <option className="text-lg font-medium" value="2004">
                          2004
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                {errors.category && (
                  <span className="mt-2 text-red-600 ">Select A Category</span>
                )}

                <h3 className="text-slate-600 text-lg font-semibold">
                  Description
                </h3>
                <textarea
                  defaultValue={data.educationDescription}
                  {...register("educationDescription", { required: true })}
                  type="text"
                  placeholder="Add Your Description"
                  className="pl-2 rounded-md py-2    w-full text-lg font-medium "
                  cols="30"
                  rows="2"
                ></textarea>
                {errors.educationDescription && (
                  <span className="mt-2 text-red-600 w-full">
                    description is required{" "}
                  </span>
                )}
                <p className="border-[0.5px] border-slate-400 mt-2 mb-1 w-full"></p>

                <button
                  onSubmit={handleSubmit(onSubmit)}
                  className=" from-[#FF444A] transition-colors ease-in duration-500 to-blue-500 py-1 px-8  bg-[#FF444A] text-white rounded-[4px]    border-2 border-white  text-lg font-semibold"
                >
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
