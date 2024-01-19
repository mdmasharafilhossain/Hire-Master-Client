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
    <div className='mt-16 space-y-10'>
      <div className=''>
        <h2 className='text-3xl font-bold'>Clients Testimonials</h2>
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
            <div className='w-full h-[350px] px-4 flex flex-col justify-center space-y-3'>
              <MdRateReview size={35} />
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
