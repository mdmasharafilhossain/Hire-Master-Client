import React, { useState } from "react";
import SingleJobList from "../../Comonents/JobList/SingleJobList";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import JobFilter from "../../Comonents/JobFilter/JobFilter";
import Loader from "../../Comonents/Loader/Loader";
import Navbar2 from "../../Comonents/Navbar/Navbar2";

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

  const { data: jobs, loading, refetch } = useFetchData("/staticjobpost");

  React.useEffect(() => {
    if (jobs) {
      setFilterJobs(jobs);
    }
  }, [jobs]);
  if (loading) {
    // return <p>Loading...</p>;
    return <Loader />;
  }

  // if (error) {
  //   return <p>Error fetching data: {error.message}</p>;
  // }
  refetch();
  const handleSubmit = e => {
    e.preventDefault();
    setFilterLoading(true);
    axiosPublic
      .get("/staticjobpost", { params: filterParams })
      .then(response => {
        setFilterJobs(response.data);
        setFilterLoading(false);
        console.log(response.data.message);
      })
      .catch(error => {
        console.error("Error fetching filtered jobs:", error);
        setFilterLoading(false);
      });
  };
  console.log(filterJobs);
  return (
    <div className='mx-auto px-4'>
      <Navbar2 />
      <div className='mt-20'>
        <div className='flex gap-x-5 md:gap-x-10 justify-center items-center px-4 py-5 sm:px-6'>
          <div className='bg-[#FF3811] h-40 w-[6px] rounded-full'></div>
          <div className='text-center '>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-5xl'>
              <span className='block lg:inline'>Find Your Perfect</span>{" "}
              <span className='block text-[#FF3811] lg:inline'>
                Job Opportunity!!
              </span>
            </h1>
            <p className='mt-3 max-w-[550px]  mx-auto text-base text-gray-500 font-medium sm:text-lg md:mt-5 md:max-w-3xl'>
              With our comprehensive job listings, you will never miss out on
              exciting opportunities. Apply today and start your journey with
              us.
            </p>
          </div>
        </div>
      </div>
      <div className='px-2 lg:flex lg:gap-x-10 my-10'>
        <div className='lg:w-1/4'>
          <JobFilter
            jobs={jobs}
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
          ) : filterJobs.length > 0 ? (
            filterJobs.map(filteredJob => (
              <SingleJobList key={filteredJob._id} job={filteredJob} />
            ))
          ) : (
            <p className='text-center md:text-start text-red-500 text-xl md:text-2xl'>
              No jobs found matching your criteria.Reset Filters!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
