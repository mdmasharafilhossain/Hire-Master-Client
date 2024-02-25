import { useParams } from "react-router-dom";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import Loader from "../../Comonents/Loader/Loader";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import { useContext } from "react";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";


const JobPostReport = () => {

    const {id}=useParams()
    const { user } = useContext(AuthContext);
  const AxiosPublic = UseAxiosPublic();
    console.log(id)
    const { data: job, loading, refetch } = useFetchData(
        `/staticjobpost/${id}`,
        "job"
      );
    
      if (loading) {
        return <Loader />;
      }
    
      refetch();
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
        <div>
            
        </div>
    );
};

export default JobPostReport;