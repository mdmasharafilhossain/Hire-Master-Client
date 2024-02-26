import FairEventCard from "./FairEventCard";
import { useQuery } from "@tanstack/react-query";
import { getFairEventsFromDb } from "../../api";

const FairEvent = () => {
  const { data: jobFairData = [], isFetching } = useQuery({
    queryKey: ["all-events"],
    queryFn: async () => {
      const res = await getFairEventsFromDb();
      return res.data;
    },
  });
  console.log(jobFairData);
  return (
    <>
      <h2 className='text-2xl md:text-3xl font-bold text-center mt-10 md:mt-24'>
        Popular Events
      </h2>
      {!isFetching && (
        <div className='mt-5 justify-center px-2 md:px-5 grid mx-auto max-w-7xl  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 '>
          {" "}
          {jobFairData.length > 0 &&
            jobFairData.map((event, idx) => (
              <div key={idx} className='flex justify-center'>
                <FairEventCard event={event} />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default FairEvent;
