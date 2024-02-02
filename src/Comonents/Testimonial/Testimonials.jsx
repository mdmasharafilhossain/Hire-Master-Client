import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import "./pagination.css";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch("/testimonials.json");
        const data = await response.json();
        setTestimonial(data);
      } catch (error) {
        console.log("Error fetching testimonials:", error);
      }
    };
    fetchReview();
  }, []);

  return (
    <div className='container px-4 mx-auto my-10 md:my-20'>
      <div className='mb-10 md:mb-20 space-y-5'>
        <h2 className='text-3xl lg:text-5xl font-bold text-center '>
          Collaborative Experiences
        </h2>
        <p className='text-2xl md:text-3xl text-center font-medium'>
          Insights from Job Applicants and Recruiting Agencies.
        </p>

      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonial.map(review => (
          <SwiperSlide key={review.name}>
            <div className='w-full  h-[420px]'>
              <div className='-mb-14'>
                <img
                  className='rounded-tr-3xl w-24 h-[82px]'
                  src={review.image}
                  alt=''
                />
              </div>
              <div className='p-6 flex flex-col items-center space-y-5 justify-center h-[350px] rounded-2xl border hover:shadow-md'>
                <div className='text-left  space-y-1'>
                  <h3 className='font-semibold text-xl'>{review.name}</h3>
                  <p className='text-gray-500'>{review.profession}</p>
                  <p className='text-gray-500'>{review.location}</p>
                </div>

                <p className='text-lg text-center w-full'>
                  {review.testimonial}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
