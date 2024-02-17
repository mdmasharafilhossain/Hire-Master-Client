import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
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

const AdminNewsCard = ({ news }) => {
  const { title, subtitle, slug, imageUrl } = news;

  const handleNewsDelete = async slug => {
    console.log(slug);
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
              onClick={() => handleNewsDelete(slug)}
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
