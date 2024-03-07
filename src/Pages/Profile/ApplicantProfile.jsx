import { useParams } from "react-router-dom";
import { PiBookBookmarkFill } from "react-icons/pi";
import { FaBriefcase, FaDownload } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import Navbar2 from "../../Comonents/Navbar/Navbar2";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";

const ApplicantProfile = () => {
  const { email } = useParams();
  
  const axiosPublic = UseAxiosPublic();
  // user profile with params email
  const api = `/userProfile/${email}`;
  const key = "userProfile";
  const { data: userProfile, loading, refetch } = useFetchData(api, key);
  if (!loading) {
    refetch();
  }

  const handleDownload = async () => {
    try {
      const response = await axiosPublic.get(`/get-resumes/${email}`, {
        responseType: 'blob', // Specify response type as blob
      });
      
      
      // Create a URL for the blob response
      const url = window.URL.createObjectURL(new Blob([response.data]));
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${userProfile.name}.pdf`); // Set default filename
      document.body.appendChild(link);
  
      // Simulate click on the anchor element to trigger download
      link.click();
  
      // Clean up: remove the anchor element and revoke the URL
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Handle error
    }
  };
  
  return (
    <>
      <Navbar2 />
      <div className=" w-full rounded-md border-[0.5px] border-slate-300 p-6 ">
        <div className=" p-8 rounded-lg border-[0.5px] border-slate-300  hover:drop-shadow-lg">
          <div className="md:flex gap-8 hover:bg-blue-50 hover:text-black">
            <figure className="rounded border p-2 mb-2">
              <img src={userProfile.image} className="w-full rounded" alt="" />
            </figure>
            <div className="">
              <div className="flex md:justify-between items-center">
                <div className="flex gap-5">
                  <h2 className="text-2xl font-bold">{userProfile?.name}</h2>
                </div>
                <h3 className="font-semibold">{userProfile?.UniversityName}</h3>
              </div>
              <div className="md:flex justify-between mb-2">
                <h3 className="font-semibold">{userProfile?.headline}</h3>
                <h3 className="font-semibold">{userProfile?.location}</h3>
              </div>
              <h3 className="w-full text-lg font-normal">
                {userProfile?.aboutDescription}
                <p className="opacity-0 border-[0.5px] w-[150px] md:w-[400px] lg:w-[700px]"></p>
              </h3>
              <div className="my-8 md:my-16 lg:my-28">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 btn bg-[#FF3811] text-white hover:text-black"
                >
                  <span>Resume</span>{" "}
                  <span>
                    <FaDownload />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Education section */}
          <div className="p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:text-black hover:drop-shadow-lg">
            <div className="flex justify-end gap-4">
              <p className="text-2xl mb-2">{/* <RiAddBoxFill /> */}</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Education</h3>
              <p className="text-2xl">
                <PiBookBookmarkFill />
              </p>
            </div>
            <div className="ml-4">
              <h3 className=" font-semibold">{userProfile?.UniversityName}</h3>
              <h3 className=" font-semibold">{userProfile?.degree}</h3>
              <h3 className=" font-semibold">Science</h3>
              <h3 className=" font-semibold">
                {userProfile?.educationStartMonth}{" "}
                {userProfile?.educationStartYear} -{" "}
                {userProfile?.educationEndMonth} {userProfile?.educationEndYear}
              </h3>
              <h3 className=" font-semibold">
                I have passed hsc from national college
              </h3>
            </div>
          </div>
          {/*Project section */}
          <div className="p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:text-black hover:drop-shadow-lg">
            <div className="flex justify-end gap-4">
              <p className="text-2xl mb-2">
                {/* <RiAddBoxFill></RiAddBoxFill> */}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Projects</h3>
              <p className="text-2xl">
                <AiFillProject />
              </p>
            </div>
            <div className="ml-4">
              <h3 className=" font-semibold">{userProfile?.projectName}</h3>
              <h3 className=" font-semibold mb-2">
                {userProfile?.projectStartMonth} {userProfile?.projectStartYear}{" "}
                - {userProfile?.projectEndMonth} {userProfile?.projectEndYear}
              </h3>
              <h3 className=" font-semibold mb-2">
                {userProfile?.projectDescription}
              </h3>
              <h3 className=" font-semibold mb-2">
                <span className="text-xl font-semibold">Technologies</span>:{" "}
                {userProfile?.technologies}
              </h3>
            </div>
          </div>
          {/*Skills section  */}
          <div className="p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:text-black hover:drop-shadow-lg">
            <div className="flex justify-end gap-4">
              <p className="text-2xl mb-2">
                {/* <RiAddBoxFill></RiAddBoxFill> */}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Skills </h3>
              <p className="text-2xl">
                <BsTools />
              </p>
            </div>

            <div className="ml-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                Tailwind
              </h3>
              <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                Javascript
              </h3>
              <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                React
              </h3>
              <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                Mongodb
              </h3>
              <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                Node Js
              </h3>
              <h3 className=" font-semibold p-2 rounded-lg border-[0.5px] border-slate-500">
                Express Js
              </h3>
            </div>
          </div>

          {/*work experience section  */}
          <div className="p-8 rounded-lg border-[0.5px] border-slate-300 hover:bg-blue-50 hover:text-black hover:drop-shadow-lg">
            <div className="flex justify-end gap-4">
              <p className="text-2xl mb-2">
                {/* <RiAddBoxFill></RiAddBoxFill> */}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Experience</h3>
              <p className="text-2xl">
                <FaBriefcase />
              </p>
            </div>
            <div className="ml-4 mb-10">
              <h3 className=" font-semibold">{userProfile?.jobTitle}</h3>
              <h3 className=" font-semibold">{userProfile?.jobType}</h3>
              <h3 className=" font-semibold">{userProfile?.companyName}</h3>
              <h3 className=" font-semibold">{userProfile?.location}</h3>
              <h3 className=" font-semibold">
                {userProfile?.jobStartMonth} {userProfile?.jobStartYear} -{" "}
                {userProfile?.jobEndMonth} {userProfile?.jobEndYear}
              </h3>
              <h3 className=" font-semibold">{userProfile?.jobDescription}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantProfile;
