import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";

const FairSponsorEventCard = ({ event }) => {
  const { title, bannerImage, location, dateOfEvent } = event;
  const formatDate = dateString => {
    const dateObj = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };
  const formattedDate = formatDate(dateOfEvent);
  return (
    <div>
      <Card
        direction={{ base: "column", md: "row" }}
        overflow='hidden'
        variant='outline'
        size='sm'
      >
        <Image
          objectFit='cover'
          maxW={{ base: "100%", md: "220px" }}
          src={
            bannerImage
              ? bannerImage
              : "https://i.ibb.co/fkw93z8/Hire-Master-Logo-2.png"
          }
          alt='news image'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{title}</Heading>

            <Text py='2'>
              <CiLocationArrow1 className='inline-flex mr-1' size={22} />
              {location}
            </Text>
            <Text py='1'>
              <MdOutlineDateRange className='inline-flex mr-1' size={22} />
              {formattedDate}
            </Text>
          </CardBody>

          <CardFooter gap={5}>
            {/* <Link to={`/AdminDashboard/all-news/${slug}`}> */}
            <Button si variant='outline' colorScheme='orange'>
              <EditIcon marginRight={1} />
              Edit News
            </Button>
            {/* </Link> */}
            <Button
              //   onClick={() => handleNewsDelete(slug)}
              colorScheme='red'
              variant='solid'
            >
              <DeleteIcon marginRight={1} />
              Delete News
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default FairSponsorEventCard;
