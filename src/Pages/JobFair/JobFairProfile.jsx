import { Box, Card, CardBody, Divider, Heading, Text } from "@chakra-ui/react";
import useFairRegister from "../../Comonents/Hooks/FairRegister/useFairRegister";
import Loader from "../../Comonents/Loader/Loader";
import useFairSponsorAllEvents from "../../Comonents/Hooks/FairSponsorAllEvents/useFairSponsorAllEvents";
import useFairSponsorBookedEvents from "../../Comonents/Hooks/FairSponsorBookedEvents/useFairSponsorBookedEvents";
import useJobSeekersEventBookings from "../../Comonents/Hooks/FairJobSeekersEventBookings/useJobSeekersEventBookings";
import useJobSeekersInterestedEvents from "../../Comonents/Hooks/FairJobSeekersInterestedEvents/useJobSeekersInterestedEvents";

const JobFairProfile = () => {
  const { fairUser, isFetching } = useFairRegister();
  const { sponsorEvents } = useFairSponsorAllEvents();
  const { bookedEvents } = useFairSponsorBookedEvents();
  const { eventBookings } = useJobSeekersEventBookings();
  const {
    interestedEvents,
    isFetching: fetching,
  } = useJobSeekersInterestedEvents();

  if (isFetching || fetching) {
    return <Loader />;
  }
 

  return (
    <Box textAlign='center' marginTop={10}>
      <Divider my={5} />
      <Text fontSize='lg' fontWeight='semibold'>
        🌟welcome to your Job Fair Profile!
      </Text>
      <Heading size='xl' fontWeight='bold'>
        Hello, <span>{fairUser?.fullname}</span> ✋.
      </Heading>
      <Divider my={5} />

      {/* 
      
     sponsor

      */}

      {fairUser?.userType === "sponsor" && (
        <>
          <Text fontSize='md' mb={4} fontWeight='semibold'>
            Create/Manage exciting job fair events and connect with potential
            job seekers.
          </Text>
          <Card border='1px' borderRadius='2xl'>
            <CardBody>
              <Text fontWeight='bold' fontSize='xl' textAlign='start'>
                Created Events
              </Text>
              <Text fontSize='xl' fontWeight='bold'>
                {sponsorEvents.length}
              </Text>
            </CardBody>
          </Card>
          <Card border='1px' borderRadius='2xl' marginTop={5}>
            <CardBody>
              <Text fontWeight='bold' fontSize='xl' textAlign='start'>
                Event Booked by Job Seekers
              </Text>
              <Text fontSize='xl' fontWeight='bold'>
                {bookedEvents.length}{" "}
                <span className=' font-medium'>times.</span>
              </Text>
            </CardBody>
          </Card>
        </>
      )}

      {/* 
      
      Job seeker

      */}
      {fairUser?.userType === "job-seeker" && (
        <>
          <Text fontSize='md' mb={4} fontWeight='semibold'>
            Apply for exciting job fair events and connect with potential
            sponsors.
          </Text>
          <Card border='1px' borderRadius='2xl'>
            <CardBody>
              <Text fontWeight='bold' fontSize='xl' textAlign='start'>
                Booked Events
              </Text>
              <Text fontSize='xl' fontWeight='bold'>
                {eventBookings.length}
              </Text>
            </CardBody>
          </Card>
          <Card border='1px' borderRadius='2xl' marginTop={5}>
            <CardBody>
              <Text fontWeight='bold' fontSize='xl' textAlign='start'>
                Marked as Interested
              </Text>
              <Text fontSize='xl' fontWeight='bold'>
                {interestedEvents.length}
              </Text>
            </CardBody>
          </Card>
        </>
      )}
    </Box>
  );
};

export default JobFairProfile;
