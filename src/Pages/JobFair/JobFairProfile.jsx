import { Divider } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import useFairRegister from "../../Comonents/Hooks/FairRegister/useFairRegister";
import Loader from "../../Comonents/Loader/Loader";

const JobFairProfile = () => {
  const { fairUser, isFetching, refetch } = useFairRegister();

  if (isFetching) {
    return <Loader />;
  }

  console.log(fairUser);
  return (
    <>
      <h2 className=' text-center text-2xl lg:text-3xl font-semibold'>
        Hello, <span>{fairUser.fullname}</span> ✋.
      </h2>
      <Divider marginTop={5} marginBottom={5} />
      <Tabs variant='soft-rounded' colorScheme='red' isFitted='true'>
        <TabList>
          <Tab fontSize={24} fontWeight='semibold'>
            Upcoming Events
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div>Some content</div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default JobFairProfile;
