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
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Comonents/Hooks/UseAxiosSecure/UseAxiosSecure";
import { Link } from "react-router-dom";

const AllCourseDashboard = ({ course, refetch }) => {

  const { _id, courseName, photoUrl, shortDescription,
  } = course

  const axiosSecure = UseAxiosSecure()

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then((result) => {
        if (result.isConfirmed) {

          axiosSecure.delete(`/premiumusercourse/${id}`)
            .then(res => {
              if (res.data.deletedCount > 0) {

                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                refetch()
              }
            })
        }
      });

  }

  return (
    <div>
      <div>
        <Card
          direction={{ base: "column", md: "row" }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: "100%", md: "200px" }}
            src={
              photoUrl
            }
            alt='news image'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>{courseName}</Heading>

              <Text py='2'>{shortDescription}</Text>
            </CardBody>

            <CardFooter gap={5}>


              <Link to={`/AdminDashboard/premiumusercourse/update/${_id}`}>
                <Button si variant='outline' colorScheme='orange'>
                  <EditIcon marginRight={1} />
                  Edit Course
                </Button>
              </Link>


              <Button
                onClick={() => handleDelete(_id)}
                colorScheme='red'
                variant='solid'
              >
                <DeleteIcon marginRight={1} />
                Delete Course
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </div>
    </div>
  );
};

export default AllCourseDashboard;