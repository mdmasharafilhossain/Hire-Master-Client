import { EmailIcon } from "@chakra-ui/icons";
import {
  Image,
  Text,
  VStack,
  HStack,
  Card,
  Heading,
  Badge,
  useColorModeValue,
  Link,
  Divider,
  Stack,
} from "@chakra-ui/react";

const FairSponsorBookedEventCard = ({ event }) => {
  //   const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("black", "white");

  return (
    <Card
      maxW='sm'
      borderWidth='1px'
      className='border'
      borderRadius='2xl'
      overflow='hidden'
      boxShadow='lg'
      _hover={{ transform: "scale(1.02)", transition: "transform 0.2s" }}
      //   bgGradient={bgColor}
    >
      <Stack px='10' py='5'>
        <VStack align='start' spacing='3'>
          <Heading
            fontSize='lg'
            fontWeight='bold'
            textTransform='uppercase'
            color={textColor}
          >
            {event.slug}
          </Heading>
          <Divider />
          <Text fontSize='md' fontWeight='semibold' color={textColor}>
            Booked by {event.fairUser.fullname}
          </Text>

          {event.fairUser.profilePicture &&
            event.fairUser.profilePicture.length > 0 && (
              <HStack spacing='2'>
                {event.fairUser.profilePicture.map((pic, index) => (
                  <Image
                    key={index}
                    src={pic.url}
                    alt={`Profile Picture ${index}`}
                    boxSize='50px'
                    objectFit='cover'
                    borderRadius='full'
                    border='2px solid'
                    borderColor={textColor}
                  />
                ))}
              </HStack>
            )}
          <Badge
            borderRadius='full'
            px='2'
            variant='solid'
            colorScheme='orange'
          >
            {event.fairUser.userType}
          </Badge>
          <Divider />
          <Text fontSize='sm' color='teal'>
            <Link
              textDecoration='underline'
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${event.fairUser.email}`}
              isExternal
            >
              <EmailIcon marginRight={1} />
              {event.fairUser.email}
            </Link>
          </Text>
        </VStack>
      </Stack>
    </Card>
  );
};

export default FairSponsorBookedEventCard;
