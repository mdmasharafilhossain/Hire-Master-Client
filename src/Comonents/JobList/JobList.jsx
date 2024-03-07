import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import SingleJobList from "./SingleJobList";
import { Link } from "react-router-dom";
import useFetchData from "../Hooks/UseFetchData/useFetchData";
import Loader from "../Loader/Loader";

const JobList = () => {
  const { data: jobs, loading, refetch } = useFetchData("/staticjobpost", 'jobs');

  if (loading) {
    return <Loader />;
  }

  // if (error) {
  //   return <p>Error fetching data: {error.message}</p>;
  // }
  refetch();

  const remotes = jobs.filter(job => job.job_time === "Remote").slice(0, 2);
  const fullTimes = jobs
    .filter(job => job.job_time === "Full-time")
    .slice(0, 2);
  const partTime = jobs.filter(job => job.job_time === "Part-time").slice(0, 2);
  const intern = jobs.filter(job => job.job_time === "On-site").slice(0, 2);

  return (
    <div className='flex flex-col items-center mt-20 '>
      <h1 className='text-5xl font-bold'>Job Listing</h1>
      {/* --------------------Tab start from here------------------ */}
      <div className='mt-16 w-full md:w-[80%] '>
        <Tabs align='center' variant='unstyled'>
          <TabList>
            <Tab>Remote</Tab>
            <Tab>Full Time</Tab>
            <Tab>Part Time</Tab>
            <Tab>Internship</Tab>
          </TabList>
          <TabIndicator
            mt='-1.5px'
            height='2px'
            bg='orange.400'
            borderRadius='1px'
          />
          <TabPanels>
            <TabPanel>
              {/* -------------Individual Job Card----------------- */}
              {remotes.map(job => (
                <SingleJobList key={job._id} job={job} />
              ))}
            </TabPanel>
            <TabPanel>
              {/* -------------Individual Job Card----------------- */}
              {fullTimes.map(job => (
                <SingleJobList key={job._id} job={job} />
              ))}
            </TabPanel>
            <TabPanel>
              {/* -------------Individual Job Card----------------- */}
              {partTime.map(job => (
                <SingleJobList key={job._id} job={job} />
              ))}
            </TabPanel>
            <TabPanel>
              {/* -------------Individual Job Card----------------- */}
              {intern.map(job => (
                <SingleJobList key={job._id} job={job} />
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div className='w-full flex justify-center'>
        <Link
          to='/jobs'
          className='btn bg-[#FF3811] text-white w-[20%] mx-auto'
        >
          <button>Brows More Jobs</button>
        </Link>
      </div>
    </div>
  );
};

export default JobList;
