import SingleJobList from "../../Comonents/JobList/SingleJobList";

const Jobs = () => {
    const companyLogo1 = 'https://i.ibb.co/cTQpSTh/jb-connect-limited-logo.jpg';
    return (
        <div className="mx-auto w-[90%] ">
            <SingleJobList
                companyLogo={companyLogo1}
                jobName={"Software Engineer"}
                location={"San Francisco"}
                time={"Full Time"}
                salary={"$95,000 - $120,000"}
                deadline={"15 Feb 2024"}
              />
        </div>
    );
};

export default Jobs;
