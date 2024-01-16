import {
  Button,
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
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Job Listing</h1>
      <div className="mt-8 w-xl">
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
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels className="w-full">
            <TabPanel>
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

      <div>
        <Button colorScheme="green" size="lg">
          Brows More Jobs
        </Button>
      </div>
    </div>
  );
};

export default JobList;
