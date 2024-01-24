import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/JobPost.json");
        const data = await response.json();
        // console.log(data);
        setJobs(data);
      } catch (error) {
        console.log("Error fetching testimonials:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className=''>
      {jobs.map((job, idx) => (
        <JobCard key={idx} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
