import Banner from "./Banner/Banner";
import ExploreByCategory from "../../Comonents/ExploreByCategory/ExploreByCategory";
import JobList from "../../Comonents/JobList/JobList";
import Testimonials from "../../Comonents/Testimonial/Testimonials";
import Navbar from "../../Comonents/Navbar/Navbar";
import PaymentHomeCard from "../../Comonents/Payment/PaymentHomeCard/PaymentHomeCard";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar> 
      <Banner></Banner> 
      <JobList />
      <Testimonials />
      <ExploreByCategory></ExploreByCategory>
      <PaymentHomeCard></PaymentHomeCard>
    </div>
  );
};

export default Home;
