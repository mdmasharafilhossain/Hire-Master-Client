import { useParams } from "react-router-dom";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import Loader from "../../Comonents/Loader/Loader";


const JobPostReport = () => {

    const {id}=useParams()
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
            <h1>hello this is me job post report </h1>
        </div>
    );
};

export default JobPostReport;