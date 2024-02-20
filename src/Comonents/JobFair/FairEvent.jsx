import { useEffect, useState } from "react";
import FairEventCard from "./FairEventCard";

const FairEvent = () => {
  const [jobFairData, setJobFairData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/jobfair.json");
        const data = await response.json();
        setJobFairData(data);
      } catch (error) {
        console.error("Error fetching job fair data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(jobFairData);

  return (
    <>
      <h2 className='text-2xl md:text-3xl font-bold text-center mt-10 md:mt-24'>
        Popular Events
      </h2>
      <div className='mt-5 justify-center px-2 md:px-5 grid mx-auto max-w-7xl  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 '>
        {" "}
        {jobFairData.length > 0 &&
          jobFairData.map((event, idx) => (
            <div key={idx} className='flex justify-center'>
              <FairEventCard event={event} />
            </div>
          ))}
      </div>
    </>
  );
};

export default FairEvent;
