import Banner from "./Banner/Banner";
import ExploreByCategory from "../../Comonents/ExploreByCategory/ExploreByCategory";
import JobList from "../../Comonents/JobList/JobList";
import Testimonials from "../../Comonents/Testimonial/Testimonials";
import Navbar from "../../Comonents/Navbar/Navbar";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner></Banner>  
      <JobList />
      <Testimonials />
      <ExploreByCategory></ExploreByCategory>
      
    </div>
  );
};

export default Home;
