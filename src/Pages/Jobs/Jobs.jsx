import SingleJobList from "../../Comonents/JobList/SingleJobList";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import { Link } from "react-router-dom";
import React from "react";

const Jobs = () => {
  const [searchJob, setSearchJob] = React.useState("");
  const [selectedJobTime, setSelectedJobTime] = React.useState("");

  const { data: jobs, loading, error } = useFetchData("/staticjobpost");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  const handleJobSearch = e => {
    // setSearchJob(e.target.value);
    setSearchJob(e.target.value.toLowerCase());
  };
  const handleJobTime = e => {
    setSelectedJobTime(e.target.value);
  };

  // const handleSearched = searchJob => job =>
  //   // job.job_title.includes(searchJob);
  //   job.job_title.toLowerCase().includes(searchJob)
  // console.log(jobs);

  const filterJobs = job => {
    const matchesTitle = job.job_title.toLowerCase().includes(searchJob);
    const matchesJobTime = selectedJobTime
      ? job.job_time === selectedJobTime
      : true;

    return matchesTitle && matchesJobTime;
  };

  return (
    <div className='mx-auto w-[90%] '>
      <div className='flex items-center justify-between  my-10 '>
        <h1 className='text-3xl font-bold'>
          Find your dream job abroad or remote
        </h1>
        <Link to='/'>
          <button className='btn btn-outline btn-sm mt-2'>Back</button>
        </Link>
      </div>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4'>
        <input
          type='search'
          value={searchJob}
          onChange={handleJobSearch}
          placeholder='Search Job'
          autoFocus
          className='outline-none rounded-lg font-semibold text-xl focus:border-[#FF3811] border px-5 py-3 md:py-4 w-full'
        />

        <div
          style={{
            width: "200px",
          }}
        >
          <select
            value={selectedJobTime}
            onChange={handleJobTime}
            className='outline-none rounded-lg font-semibold text-xl focus:border-[#FF3811] border px-5 py-3 md:py-4'
          >
            <option value=''>Job Types</option>
            <option value='Intern'>Intern</option>
            <option value='Full-time'>Full-time</option>
            <option value='Remote'>Remote</option>
            <option value='Part-time'>Part-time</option>
            <option value='On-site'>On-site</option>
            <option value='Hybrid'>Hybrid</option>
          </select>
        </div>
      </div>

      {jobs.filter(filterJobs).map(job => (
        <SingleJobList key={job._id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
