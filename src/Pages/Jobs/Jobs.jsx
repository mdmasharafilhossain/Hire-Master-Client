import SingleJobList from "../../Comonents/JobList/SingleJobList";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import { Link } from "react-router-dom";

const Jobs = () => {
  const { data: jobs, loading, error } = useFetchData("/staticjobpost");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="mx-auto w-[90%] ">
      <div className="flex items-center justify-between  my-10 ">
        <h1 className="text-3xl font-bold">
          Find your dream job abroad or remote
        </h1>
        <Link to="/">
          <button className="btn btn-outline btn-sm mt-2">Back</button>
        </Link>
      </div>
      {jobs.map((job) => (
        <SingleJobList key={job._id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
