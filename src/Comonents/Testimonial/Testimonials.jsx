import { FreeMode, Pagination } from "swiper/modules";

import { MdRateReview } from "react-icons/md";
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
        // console.log(data);
        setTestimonial(data);
      } catch (error) {
        console.log("Error fetching testimonials:", error);
      }
    };
    fetchReview();
  }, []);
  return (
    <div className='container px-3 mx-auto my-10 md:my-20 space-y-5'>
      <h2 className='text-2xl lg:text-5xl font-bold'>
        Collaborative Experiences
      </h2>

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
            <div className='w-full h-[300px]  flex flex-col justify-center space-y-3'>
              <MdRateReview color='#ff3811' size={35} />
              <p className='text-lg italic'>{review.testimonial}</p>

              <div className='flex gap-x-5 mt-5'>
                <img
                  className='rounded-xl w-[84px] h-[84px]'
                  src={review.image}
                  alt=''
                />
                <div>
                  <h3 className='font-semibold text-lg'>{review.name}</h3>
                  <p>{review.profession}</p>
                  <p>{review.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
