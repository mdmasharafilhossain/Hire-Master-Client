import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdStars } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Tooltip } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { CalendarIcon } from "@chakra-ui/icons";

const FairEventCard = ({ event }) => {
  const { title, bannerImage, date, location } = event;

  const formatDate = dateString => {
    const dateObj = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };
  const formattedDate = formatDate(date);

  return (
    <Link>
      <Card maxW='xs' height='xs'>
        <CardBody>
          <div className='relative flex'>
            <Image src={bannerImage} alt='' borderRadius='lg' />
            <Tooltip label="I'm interested" placement='bottom'>
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
        </CardBody>
      </Card>
    </Link>
  );
};

export default FairEventCard;
