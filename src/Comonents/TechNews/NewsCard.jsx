import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaPenAlt } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, slug, author, imageUrl, datePublished } = news;
  
  return (
    <Card maxW='xs' height='md'>
      <CardBody>
        <Image src={imageUrl} alt='' borderRadius='lg' />
        <Stack mt='2' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Box className='flex justify-between items-center'>
            <Text
              fontSize='xs'
              className='flex items-center gap-x-1 font-semibold'
            >
              <FaPenAlt />
              {author}
            </Text>
            <Text
              fontSize='xs'
              className='flex items-center gap-x-1 font-semibold'
            >
              <CiCalendar />
              {datePublished}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link className='w-full' to={`/tech-news/${slug}`}>
          <Button
            width='full'
            colorScheme='orange'
            variant='outline'
            className='uppercase'
          >
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
