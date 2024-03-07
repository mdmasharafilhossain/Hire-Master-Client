
import { useEffect, useState } from "react";
import ExploreByCategoryCard from "./ExploreByCategoryCard";

const ExploreByCategory = () => {

  const [jobs, setJobs] = useState([])

    

    useEffect(() =>{
        fetch('/category.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

  return (
    <div className="container mx-6 px-10 md:mx-auto ">
      <h2 className="text-center text-5xl font-bold mt-8 mb-8">
        Explore By Category
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {
          jobs.map(job => <ExploreByCategoryCard key={job.id} job={job}></ExploreByCategoryCard>)
      }
      </div>
    </div>
  );
};

export default ExploreByCategory;
