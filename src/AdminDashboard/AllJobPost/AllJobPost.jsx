import useAllJob from "../../Comonents/Hooks/UseAllJob/useAllJob";
import AllJob from "./AllJob";


const AllJobPost = () => {

const [alljob]=useAllJob([])
console.log(alljob)
   
    return (
        <div>
          <div className="flex justify-evenly my-6 mb-10">
                <h2 className="text-4xl font-bold">Manage All <span className='text-[#FF3811]'>Job Post</span></h2>
               
            </div> 
            <div>
                {
                    alljob.map(job=><AllJob job={job} key={job._id}></AllJob>)
                }
            </div>
        </div>
    );
};

export default AllJobPost;
