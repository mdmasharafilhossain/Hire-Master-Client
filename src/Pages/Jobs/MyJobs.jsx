import { useContext } from "react";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import SingleJobList from "../../Comonents/JobList/SingleJobList";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  console.log(email);
  const { data: jobs, loading, error } = useFetchData(`/staticjobpost`);
  if (loading) {
    return <p>Loading ........</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  const myJobs = jobs.filter(job => job.hiring_manager_email === email);
  console.log(myJobs);

  return (
    <div className="px-20 py-10">
      <h1 className="text-5xl text-center font-semibold">My Posted Jobs</h1>
      {myJobs.map(job => <SingleJobList key={job._id} job={job} />)}
    </div>
  );
};

export default MyJobs;
