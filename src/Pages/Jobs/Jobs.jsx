import { useState } from "react";
import { Link } from "react-router-dom";
import SingleJobList from "../../Comonents/JobList/SingleJobList";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import JobFilter from "../../Comonents/JobFilter/JobFilter";
import Loader from "../../Comonents/Loader/Loader";

const Jobs = () => {
  const axiosPublic = UseAxiosPublic();
  const [filterJobs, setFilterJobs] = useState([]);
  const [filterLoading, setFilterLoading] = useState(false);
  const [value, setValue] = useState([0, 250000]);
  const [filterParams, setFilterParams] = useState({
    job_title: "",
    job_time: [],
    salaryRange: `${value[0]}-${value[1]}`,
  });

  const { data: jobs, loading, error } = useFetchData("/staticjobpost");

  if (loading) {
    // return <p>Loading...</p>;
    return <Loader />;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }
  const handleSubmit = e => {
    e.preventDefault();
    setFilterLoading(true);
    axiosPublic
      .get("/staticjobpost", { params: filterParams })
      .then(response => {
        setFilterJobs(response.data);
        setFilterLoading(false);
      })
      .catch(error => {
        console.error("Error fetching filtered jobs:", error);
        setFilterLoading(false);
      });
  };
  console.log(filterJobs);
  return (
    <div className='mx-auto'>
      <div className='flex items-center justify-between  my-10 '>
        <h1 className='text-3xl font-bold'>
          Find your dream job abroad or remote
        </h1>
        <Link to='/'>
          <button className='btn btn-outline btn-sm mt-2'>Back</button>
        </Link>
      </div>
      <div className='lg:flex lg:gap-x-10'>
        <div className='lg:w-1/4 px-2'>
          <JobFilter
            handleSubmit={handleSubmit}
            filterParams={filterParams}
            setFilterParams={setFilterParams}
            value={value}
            setValue={setValue}
            setFilterJobs={setFilterJobs}
          />
        </div>
        <div className='lg:flex-grow'>
          {filterLoading ? (
            <Loader />
          ) : (
            (filterJobs.length > 0 ? filterJobs : jobs).map(job => (
              <SingleJobList key={job._id} job={job} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
