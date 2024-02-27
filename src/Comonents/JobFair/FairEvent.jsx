import FairEventCard from "./FairEventCard";
import { useQuery } from "@tanstack/react-query";
import {
  getFairEventsFromDb,
  saveEventBookingsInDb,
  saveInterestedEventInDb,
} from "../../api";
import toast from "react-hot-toast";
import useAuth from "../Hooks/Auth/useAuth";
import Loader from "../Loader/Loader";
import { Button, Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const FairEvent = () => {
  const { user } = useAuth();
  const { data: jobFairData = [], isFetching } = useQuery({
    queryKey: ["all-events"],
    queryFn: async () => {
      const res = await getFairEventsFromDb();
      return res.data;
    },
    enabled: !!user,
  });
  // console.log(jobFairData);

  const handleInterestedEvent = async slug => {
    try {
      const res = await saveInterestedEventInDb(slug, user?.email);
      if (res.data.result.insertedId) {
        toast.success(`${slug} added as interested event.`);
      }
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  const handleEventJoining = async slug => {
    try {
      const res = await saveEventBookingsInDb(slug, user?.email);
      if (res.data.result.insertedId) {
        toast.success(`Event ${slug} booked successfully.`);
      }
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  if (!user || isFetching) {
    return <Loader />;
  }
  return (
    <>
      <h2 className='text-2xl md:text-3xl font-bold text-center mt-10 md:mt-24'>
        Popular Events
      </h2>

      <div className='mt-5 justify-center px-2 md:px-5 grid mx-auto max-w-7xl  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 '>
        {jobFairData.length > 0 &&
          jobFairData.map((event, idx) => (
            <div key={idx} className='flex justify-center'>
              <FairEventCard
                event={event}
                handleInterestedEvent={handleInterestedEvent}
                handleEventJoining={handleEventJoining}
              />
            </div>
          ))}
      </div>
      <Flex justify='center' marginTop={5} marginBottom={5}>
        <ChakraLink as={ReactRouterLink} to='/job-fair/all-events'>
          <Button
            colorScheme='orange'
            variant='solid'
            size='md'
            fontWeight='semibold'
            fontSize='xl'
          >
            All Events <ExternalLinkIcon ml='4px' />
          </Button>
        </ChakraLink>
      </Flex>
    </>
  );
};

export default FairEvent;
