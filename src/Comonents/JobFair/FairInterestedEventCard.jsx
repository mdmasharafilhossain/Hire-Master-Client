import {
  Box,
  Heading,
  Text,
  Image,
  Badge,
  Button,
  Flex,
  Divider,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { BsFillBookmarkXFill } from "react-icons/bs";

const FairInterestedEventCard = ({ event, handleInterestedEventRemove }) => {
  const formatDate = dateString => {
    const dateObj = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };
  const formattedDate = formatDate(event?.dateOfEvent);
  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='md'
      mb={4}
      position='relative'
      justifySelf='center'
    >
      <Image src={event.bannerImage[0].url} alt={event.title} />
      <Tooltip
        hasArrow
        label='Remove from interested!'
        bg='red.600'
        color='white'
        fontSize='lg'
        placement='right'
      >
        <Button
          position='absolute'
          top='0'
          left='0'
          colorScheme='red'
          size='sm'
          borderRadius='0'
          zIndex='1'
          onClick={() => handleInterestedEventRemove(event?.slug)}
        >
          <Icon as={BsFillBookmarkXFill} />
        </Button>
      </Tooltip>

      <Box p={4}>
        <Heading as='h3' size='md' mb={2}>
          {event.title}
        </Heading>

        <Flex alignItems='center' flexWrap='wrap' mb={2}>
          {event.tags.map(tag => (
            <Badge key={tag} mr={1} mb={1} colorScheme='orange' variant='solid'>
              {tag}
            </Badge>
          ))}
        </Flex>
        <Divider marginTop={2} marginBottom={2} colorScheme='orange' />
        <Text fontSize='lg' mt={2} fontWeight='medium'>
          <span className='font-bold text-xl'>Event location-</span>
          {event?.location}
        </Text>
        <Text fontSize='md'>
          {" "}
          <span className='font-bold text-xl'>Event date-</span>
          {formattedDate}
        </Text>
      </Box>
    </Box>
  );
};

export default FairInterestedEventCard;
