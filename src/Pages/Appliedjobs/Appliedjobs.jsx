import { useContext, useEffect, useState } from "react";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import SingleAppliedJobs from "./SingleAppliedJobs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import Navbar2 from "../../Comonents/Navbar/Navbar2";

const Appliedjobs = () => {
    const [jobData, setJobData] = useState(null);
    console.log(jobData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const {user} = useContext(AuthContext)
    const email = user?.email;

    const AxiosPublic = UseAxiosPublic()
    // AxiosPublic.get()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AxiosPublic.get(`http://localhost:5000/singleappliedjobs/${email}`, {withCredentials:true});
                setJobData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [AxiosPublic, email]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
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
            <div className="p-5 lg:p-20 md:p-10 -mt-4 ">
                {
                    jobData.map(job => <SingleAppliedJobs key={job.id} job={job}></SingleAppliedJobs>)
                }
            </div>

        </div >
    );
};

export default Appliedjobs;