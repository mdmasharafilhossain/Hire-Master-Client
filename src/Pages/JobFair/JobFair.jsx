import FairBanner from "../../Comonents/JobFair/FairBanner";
import FairEvent from "../../Comonents/JobFair/FairEvent";
import FairHeader from "../../Comonents/JobFair/FairHeader";
import FairSponsors from "../../Comonents/JobFair/FairSponsors";
import FairAccordion from "../../Comonents/JobFair/FairAccordion";

const JobFair = () => {
  return (
    <>
      <FairHeader />
      <FairBanner />
      <FairEvent />
      <FairSponsors />
      <FairAccordion />
    </>
  );
};

export default JobFair;
