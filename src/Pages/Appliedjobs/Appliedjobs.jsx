import { useEffect, useState } from "react";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import SingleAppliedJobs from "./SingleAppliedJobs";
import { Link } from "react-router-dom";

const Appliedjobs = () => {
    const [jobData, setJobData] = useState(null);
    console.log(jobData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const AxiosPublic = UseAxiosPublic()
    // AxiosPublic.get()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AxiosPublic.get('http://localhost:5000/showapplied-jobs');
                setJobData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <div className="">
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