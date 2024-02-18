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
import { deleteJobNewsFromDb } from "../../api";

const AdminNewsCard = ({ news, refetch }) => {
  const { title, subtitle, slug, _id, imageUrl } = news;

  /* const handleNewsDelete = async slug => {
    Swal.fire({
      title: `Are you sure to delete ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, delete`,
    }).then(async result => {
      if (result.isConfirmed) {
        const res = await deleteJobNewsFromDb(slug);
        console.log(res.data);
        if (res.data) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `News ${title} deleted successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  }; */
  const handleNewsDelete = async id => {
    Swal.fire({
      title: `Are you sure to delete ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, delete`,
    }).then(async result => {
      if (result.isConfirmed) {
        const res = await deleteJobNewsFromDb(id);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `News ${title} deleted successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
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
            imageUrl
              ? imageUrl
              : "https://i.ibb.co/fkw93z8/Hire-Master-Logo-2.png"
          }
          alt='news image'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{title}</Heading>

            <Text py='2'>{subtitle}</Text>
          </CardBody>

          <CardFooter gap={5}>
            <Button si variant='outline' colorScheme='orange'>
              <EditIcon marginRight={1} />
              Edit News
            </Button>
            <Button
              onClick={() => handleNewsDelete(_id)}
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

export default AdminNewsCard;
