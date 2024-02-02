import { useParams } from "react-router-dom";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { FaWifi } from "react-icons/fa6";
import { LiaIndustrySolid } from "react-icons/lia";
const JobDetails = () => {
  const { id } = useParams();

  const { data: job, loading, error } = useFetchData(`/staticjobpost/${id}`);

  if (loading) {
    return <p>Loading ........</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  console.log(id);
  console.log(job);
  const {
    job_title,
    company_name,
    job_role,
    salary,
    job_time,
    skills,
    job_description,
    hiring_manager_name,
    hiring_manager_photo,
    hiring_manager_email,
    responsibilities,
    benefits,
    qualification,
    job_location,
  } = job;

  return (
    // ----Main div
    <div className="md:grid grid-cols-12 max-w-screen-xl mx-auto px-4 py-10 text-justify">
      {/* Left div */}
      <div className=" col-span-8">
        {/* heading div */}
        <div className="border-b-2">
          <div className="">
            <h1 className="text-4xl font-bold">
              {job_title}
              {job_role && <span className="text-xl">({job_role})</span>}
            </h1>
          </div>
          <div className="md:flex items-center gap-5 my-5 text-md font-medium">
            <div className="flex items-center gap-2">
              <span>
                <LiaIndustrySolid />
              </span>
              <p>{company_name}</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <CiLocationOn />
              </span>
              <p>{job_location}</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaWifi />
              </span>
              <p>{job_time}</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <CiDollar />
              </span>
              <p>{salary} USD</p>
            </div>
          </div>
        </div>
        {/* Description div */}
        <div className="mt-5">
          <h1 className="text-2xl font-semibold">About the Job</h1>
          <div>
            <p className="font-semibold underline mt-2">Job Context: </p>
            <p>{job_description}</p>
          </div>
          <div>
            <p className="font-semibold  underline mt-2">Responsibilities: </p>
            <ul className="list-disc mx-auto p-5 ">
              {responsibilities.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold  underline mt-2">Skills: </p>
            <ul className="list-disc mx-auto p-5 ">
              {skills.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold  underline mt-2">Qualifications: </p>
            <ul className="list-disc mx-auto p-5 ">
              {qualification.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold  underline mt-2">Benefits: </p>
            <ul className="list-disc mx-auto p-5 ">
              {benefits.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Apply button */}
        <div className="md:block hidden">
          <button className="btn bg-[#ff6445] text-white mx-auto w-1/2 font-semibold text-lg">
            Apply For this Job
          </button>
        </div>
      </div>
      {/* right div */}
      <div className=" col-span-4 flex justify-center">
        {/* Apply btn div */}
        <div className="w-4/5 flex flex-col">
          <button className="btn bg-[#ff6445] text-white mx-auto w-full font-semibold text-lg sm:hidden md:block">
            Apply For this Job
          </button>
          <div className="md:hidden fixed bottom-0 left-0 right-0">
            <button className="btn bg-[#ff6445] text-white mx-auto w-full font-semibold text-lg">
              Apply For this Job
            </button>
          </div>
          <div className="bg-gray-100 mt-10 rounded-md p-5">
            <h1 className="text-xl font-bold text-center mb-5 text-orange-500">
              Hiring Manager
            </h1>
            <div className="avatar flex justify-center mb-5">
              <div className="w-12 rounded-full ">
                <img src={hiring_manager_photo} />
              </div>
            </div>
            <div className="text-center">
              <p className="font-semibold"> {hiring_manager_name}</p>
              <p className="font-semibold"> {hiring_manager_email}</p>
            </div>
          </div>
        </div>
        {/* sharing link div */}
        <div></div>
      </div>
    </div>
  );
};

export default JobDetails;
