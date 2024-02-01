import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import SingleJobList from "../../Comonents/JobList/SingleJobList";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";

const Jobs = () => {
  const axiosPublic = UseAxiosPublic();
  const [filterJobs, setFilterJobs] = useState([]);
  const [filterLoading, setFilterLoading] = useState(false);
  const [filterParams, setFilterParams] = useState({
    job_title: "",
    job_time: "",
  });

  const { data: jobs, loading, error } = useFetchData("/staticjobpost");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  const handleChange = (name, value) => {
    setFilterParams(params => ({ ...params, [name]: value }));
  };

  const handleClearFilters = () => {
    setFilterParams({
      job_title: "",
      job_time: "",
      job_location: "",
    });
    setFilterJobs([]);
  };

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
    <div className='mx-auto w-[90%] '>
      <div className='flex items-center justify-between  my-10 '>
        <h1 className='text-3xl font-bold'>
          Find your dream job abroad or remote
        </h1>
        <Link to='/'>
          <button className='btn btn-outline btn-sm mt-2'>Back</button>
        </Link>
      </div>
      <div className='flex justify-center'>
        <form className='mx-auto flex flex-col w-full' onSubmit={handleSubmit}>
          <div className='flex items-center w-full border'>
            <input
              type='text'
              name='job_title'
              placeholder='Job Title'
              className='flex-1 outline-none px-4 py-2'
              value={filterParams.job_title}
              onChange={e => handleChange("job_title", e.target.value)}
            />
          </div>

          <select
            style={{ width: "200px" }}
            value={filterParams.job_time}
            name='job_time'
            onChange={e => handleChange("job_time", e.target.value)}
            className='outline-none border px-4 py-2'
          >
            <option value=''>Job Types</option>
            <option value='Intern'>Intern</option>
            <option value='Full-time'>Full-time</option>
            <option value='Remote'>Remote</option>
            <option value='Part-time'>Part-time</option>
            <option value='On-site'>On-site</option>
            <option value='Hybrid'>Hybrid</option>
          </select>

          <div className='mt-4 space-x-4'>
            <Button type='submit' colorScheme='blue'>
              Apply Filters
            </Button>
            <Button
              type='button'
              variant='outline'
              onClick={handleClearFilters}
            >
              Clear Filters
            </Button>
          </div>
        </form>
      </div>

      {filterLoading ? (
        <p>Loading filtered jobs...</p>
      ) : (
        (filterJobs.length > 0 ? filterJobs : jobs).map(job => (
          <SingleJobList key={job._id} job={job} />
        ))
      )}
    </div>
  );
};

export default Jobs;
