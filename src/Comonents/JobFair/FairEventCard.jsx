import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdStars } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Tooltip } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaHashtag } from "react-icons/fa";
import useAuth from "../Hooks/Auth/useAuth";
import { getFairRegisteredUser, saveEventBookingsInDb } from "../../api";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const FairEventCard = ({ event }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth();

  const {
    title,
    description,
    tags,
    bannerImage,
    dateOfEvent,
    location,
    slug,
    sponsor_email,
  } = event;

  console.log(event);

  const formatDate = dateString => {
    const dateObj = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };
  const formattedDate = formatDate(dateOfEvent);
  console.log(event);

  const { data: fair_register = {}, isFetching, refetch } = useQuery({
    queryKey: ["fair_register", user?.email],
    queryFn: async () => {
      const res = await getFairRegisteredUser(user?.email);
      return res.data;
    },
    enabled: !!user,
  });

  console.log(fair_register);

  const handleEventJoining = async slug => {
    try {
      const res = await saveEventBookingsInDb(slug, user?.email);
      if (res.data.result.insertedId) {
        toast.success(`Event ${title} booked successfully.`);
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Card maxW='xs' height='sm'>
        <CardBody>
          <div className='relative flex'>
            <Image
              src={
                bannerImage.length > 0
                  ? bannerImage[0].url
                  : "https://i.ibb.co/fkw93z8/Hire-Master-Logo-2.png"
              }
              alt=''
              borderRadius='lg'
            />
            <Tooltip label="I'm interested" placement='left'>
              <button className='bg-white '>
                <MdStars
                  size={25}
                  className='rounded-full absolute right-0 -bottom-2  text-black bg-inherit '
                />
              </button>
            </Tooltip>
          </div>

          <Stack mt='5' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Box className=''>
              <Text
                fontSize='sm'
                className='flex items-center gap-x-1 font-semibold'
              >
                <FaLocationDot />
                {location}
              </Text>
              <Text
                fontSize='xs'
                className='flex items-center gap-x-1 font-semibold'
              >
                <CalendarIcon marginRight={1} />
                {formattedDate}
              </Text>
            </Box>
          </Stack>
          <Divider marginTop={2} marginBottom={2} />
          <Button
            width='full'
            colorScheme='orange'
            variant='outline'
            className='uppercase'
            onClick={onOpen}
          >
            Read More
          </Button>
        </CardBody>
      </Card>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{description}</Text>

            <Divider marginTop={5} marginBottom={5} />

            <Text
              fontSize='md'
              className='flex items-center gap-x-1 font-semibold'
            >
              <FaLocationDot />
              {location}
            </Text>

            <Text
              fontSize='md'
              className='flex items-center gap-x-1 font-semibold'
            >
              <CalendarIcon marginRight={1} />
              {formattedDate}
            </Text>
            <Text
              fontSize='sm'
              className='flex flex-wrap items-center gap-x-1 font-semibold'
            >
              {tags.map((tag, idx) => (
                <Stack key={idx} flexDirection={"row"} alignItems='center'>
                  <Icon as={FaHashtag} />
                  <Text>{tag}</Text>
                </Stack>
              ))}
            </Text>
            <Divider marginTop={5} marginBottom={5} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              isDisabled={fair_register.userType === "sponsor"}
              onClick={() => handleEventJoining(slug)}
              colorScheme='green'
            >
              Book Event
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FairEventCard;
