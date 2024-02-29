import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Divider,
  Button,
} from "@chakra-ui/react";

const JobFairBookingHistoryCard = ({ event, handleEventBookingRemove }) => {
  // console.log(event);

  const formatDate = dateString => {
    const dateObj = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };
  const formattedDate = formatDate(event?.dateOfEvent);
  return (
    <div>
      <Box
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        width='100%'
        p={4}
      >
        <Image
          src={event?.bannerImage[0].url}
          alt={event?.title}
          objectFit='cover'
          h='200px'
          w='100%'
        />
        <VStack spacing={2} align='start' mt={4}>
          <Text fontSize='xl' fontWeight='bold'>
            {event?.title}
          </Text>

          <HStack spacing={2} mt={2}>
            {event?.tags.map((tag, index) => (
              <Badge key={index} colorScheme='orange' variant='solid'>
                {tag}
              </Badge>
            ))}
          </HStack>
          <Text fontSize='lg' mt={2} fontWeight='medium'>
            <span className='font-bold text-xl'>Event location-</span>
            {event?.location}
          </Text>
          <Text fontSize='md'>
            {" "}
            <span className='font-bold text-xl'>Event date-</span>
            {formattedDate}
          </Text>

          <Divider marginTop={2} marginBottom={2} colorScheme='orange' />
          <Button
            colorScheme='red'
            variant='solid'
            fontWeight='medium'
            textTransform='uppercase'
            size='sm'
            onClick={() => handleEventBookingRemove(event?.slug)}
          >
            Cancel Event
          </Button>
        </VStack>
      </Box>
    </div>
  );
};

export default JobFairBookingHistoryCard;
