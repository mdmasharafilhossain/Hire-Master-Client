import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
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
import useFairRegister from "../Hooks/FairRegister/useFairRegister";

const AllFairEventsCard = ({
  event,
  handleInterestedEvent,
  handleEventJoining,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    title,
    description,
    tags,
    bannerImage,
    dateOfEvent,
    location,
    slug,
  } = event;

  // console.log(event);

  const formatDate = dateString => {
    const dateObj = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };
  const formattedDate = formatDate(dateOfEvent);
  // console.log(event);

  const { fairUser } = useFairRegister();

  return (
    <>
      <Card maxW='xs' height='sm'>
        <CardBody className='flex flex-col h-full justify-between'>
          <Flex position='relative'>
            <Image
              src={
                bannerImage.length > 0
                  ? bannerImage[0].url
                  : "https://i.ibb.co/fkw93z8/Hire-Master-Logo-2.png"
              }
              alt=''
              borderRadius='lg'
              width='100%'
            />
            <Tooltip
              isDisabled={fairUser?.userType === "sponsor"}
              label='Add as interested!'
              hasArrow
              placement='left'
              fontSize='lg'
            >
              <Button
                disabled={fairUser?.userType === "sponsor"}
                onClick={() => handleInterestedEvent(slug)}
                position='absolute'
                bottom='0'
                right='0'
                zIndex={1}
                variant='solid'
                colorScheme='orange'
                size='sm'
              >
                <MdStars size={25} />
              </Button>
            </Tooltip>
          </Flex>
          <Stack>
            <Heading size='sm'>{title}</Heading>
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
            className='uppercase flex justify-end'
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
              isDisabled={fairUser?.userType === "sponsor" || fairUser === null}
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

export default AllFairEventsCard;
