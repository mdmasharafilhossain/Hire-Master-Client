import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TbSlash } from "react-icons/tb";
import Loader from "../Loader/Loader";

const NewsDetails = () => {
  const [newsDetails, setNewsDetails] = useState(null);
  const { title: newsParams } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch("/technews.json");
        const data = await response.json();
        const selectedJob = data.find(job => job.title === newsParams);

        if (selectedJob) {
          setNewsDetails(selectedJob);
          setLoading(false);
        } else {
          setLoading(false);
          console.error(`Job with title "${newsParams}" not found.`);
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchNewsDetails();
  }, [newsParams]);

  if (loading) {
    <Loader />;
  }

  console.log(newsDetails);
  //   const { title: newsTitle, author, imageUrl, datePublished } = newsDetails;
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex items-center gap-x-2'>
        <Link to='/'>Home</Link>
        <TbSlash />
        <Link to='/tech-news'>tech-news</Link>
        <TbSlash />
        <Link>{newsDetails?.title.slice(0, 10)}...</Link>
      </div>
      <div>
        <h2>{newsDetails?.title}</h2>
        <img src={newsDetails?.imageUrl} alt='' />
        <h3>{newsDetails?.subtitle}</h3>
        <p>{newsDetails?.content}</p>
        <p>{newsDetails?.author}</p>
        <p>{newsDetails?.datePublished}</p>
      </div>
    </div>
  );
};

export default NewsDetails;
