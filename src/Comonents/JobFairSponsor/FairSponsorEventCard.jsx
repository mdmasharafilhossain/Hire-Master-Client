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
import { deleteFairSponsorEventFromDb } from "../../api";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const FairSponsorEventCard = ({ event, refetch }) => {
  const { slug, title, bannerImage, location, dateOfEvent } = event;

  const formatDate = dateString => {
    const dateObj = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };
  const formattedDate = formatDate(dateOfEvent);

  const handleEventDelete = async slug => {
    console.log(slug);
    Swal.fire({
      title: `Are you sure to delete ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, delete`,
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const result = await deleteFairSponsorEventFromDb(slug);
          console.log(result.data);
          if (result.data) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `News ${title} deleted successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          toast.error(error.message);
          console.log(error.message);
        }
      }
    });
  };

  console.log(event);

  return (
    <div className=''>
      <Card
        direction={{ base: "column", md: "row" }}
        overflow='hidden'
        variant='outline'
        size='sm'
        borderRadius='2xl'
      >
        <Image
          objectFit='cover'
          maxW={{ base: "100%", md: "220px" }}
          src={
            bannerImage.length > 0
              ? bannerImage[0].url
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
            <Link to={`/job-fair/profile/sponsor-event/update/${slug}`}>
              <Button si variant='outline' colorScheme='orange'>
                <EditIcon marginRight={1} />
                Edit Event
              </Button>
            </Link>
            <Button
              onClick={() => handleEventDelete(slug)}
              colorScheme='red'
              variant='solid'
            >
              <DeleteIcon marginRight={1} />
              Delete Event
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default FairSponsorEventCard;
