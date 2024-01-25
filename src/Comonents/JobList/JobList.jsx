import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import SingleJobList from "./SingleJobList";
import companyLogo1 from "../../assets/company-logo1.jpg";

const JobList = () => {
  return (
    <div className="flex flex-col items-center mt-20 ">
      <h1 className="text-5xl font-bold">Job Listing</h1>
      {/* --------------------Tab start from here------------------ */}
      <div className="mt-16 w-full md:w-[70%] ">
        <Tabs align="center" variant="unstyled">
          <TabList>
            <Tab>Featured</Tab>
            <Tab>Full Time</Tab>
            <Tab>Part Time</Tab>
            <Tab>Internship</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="orange.400"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              {/* -------------Individual Job Card----------------- */}
              <SingleJobList
                companyLogo={companyLogo1}
                jobName={"Software Engineer"}
                location={"San Francisco"}
                time={"Full Time"}
                salary={"$95,000 - $120,000"}
                deadline={"15 Feb 2024"}
              />
            </TabPanel>
            <TabPanel>
              {/* -------------Individual Job Card----------------- */}
              <SingleJobList
                companyLogo={companyLogo1}
                jobName={"Backend Engineer"}
                location={"China"}
                time={"Full Time"}
                salary={"$95,000 - $100,000"}
                deadline={"15 March 2024"}
              />
            </TabPanel>
            <TabPanel>
              {/* -------------Individual Job Card----------------- */}
              <SingleJobList
                companyLogo={companyLogo1}
                jobName={"Technical SEO"}
                location={"Bangladesh"}
                time={"Part Time"}
                salary={"$35,000 - $40,000"}
                deadline={"15 March 2024"}
              />
            </TabPanel>
            <TabPanel>
              {/* -------------Individual Job Card----------------- */}
              <SingleJobList
                companyLogo={companyLogo1}
                jobName={"Web Developer Intern"}
                location={"Bangladesh"}
                time={"Internship"}
                salary={"$25,000 - $30,000"}
                deadline={"15 March 2024"}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div className="w-full flex justify-center">
        <button className="btn bg-[#FF3811] text-white w-[20%] mx-auto">
          Brows More Jobs
        </button>
      </div>
    </div>
  );
};

export default JobList;
