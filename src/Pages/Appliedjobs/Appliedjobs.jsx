import { useContext } from "react";
import SingleAppliedJobs from "./SingleAppliedJobs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import Navbar2 from "../../Comonents/Navbar/Navbar2";
import useFetchData from "../../Comonents/Hooks/UseFetchData/useFetchData";
import Loader from "../../Comonents/Loader/Loader";

const Appliedjobs = () => {


    const {user} = useContext(AuthContext)
    const email = user?.email;

    
    const {data: jobData, loading, refetch } = useFetchData(`http://localhost:5000/singleappliedjobs/${email}`, "applications");


    if (loading) {
        return <Loader/>;
    }


    return (
        <div className="">
            <div className="mb-28">
            <Navbar2></Navbar2>
            </div>
            <h1 className="text-4xl mt-6 text-center font-bold">Applied Jobs</h1>
            <div className='container mx-auto'>
                <Link to='/'>
                    <button className='btn ml-7 lg:ml-16 md:ml-16  btn-outline btn-sm mt-5'>Back</button>
                </Link>
            </div>
            {jobData.length}
            <div className="p-5 lg:p-20 md:p-10 -mt-4 ">
                {
                    jobData.map(job => <SingleAppliedJobs key={job.id} job={job} refetch={refetch}></SingleAppliedJobs>)
                }
            </div>

        </div >
    );
};

export default Appliedjobs;