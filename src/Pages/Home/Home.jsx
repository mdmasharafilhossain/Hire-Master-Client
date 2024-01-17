import ExploreByCategory from "../../Comonents/ExploreByCategory/ExploreByCategory";
import JobList from "../../Comonents/JobList/JobList";
import Testimonials from "../../Comonents/Testimonial/Testimonials";

const Home = () => {
  return (
    <div>
      <JobList />
      <Testimonials />
      <ExploreByCategory></ExploreByCategory>
    </div>
  );
};

export default Home;
