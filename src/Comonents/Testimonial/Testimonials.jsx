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
        setTestimonial(data);
      } catch (error) {
        console.log("Error fetching testimonials:", error);
      }
    };
    fetchReview();
  }, []);

  return (
    <div className='container px-4 mx-auto my-10 md:my-20'>
      <h2 className='text-3xl lg:text-5xl font-bold text-center mb-10'>
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
            <div className='w-full h-[420px] bg-white rounded-xl shadow-lg overflow-hidden'>
              <div className='p-6 flex flex-col items-center justify-center h-full'>
                <MdRateReview color='#ff3811' size={35} className='mb-4' />
                <p className='text-lg italic text-center w-3/4 md:w-full mb-4'>
                  {review.testimonial}
                </p>

                <div className='flex flex-col items-center'>
                  <img
                    className='rounded-full w-20 h-20 mb-2'
                    src={review.image}
                    alt=''
                  />
                  <div className='text-center'>
                    <h3 className='font-semibold text-lg mb-1'>
                      {review.name}
                    </h3>
                    <p className='text-gray-500'>{review.profession}</p>
                    <p className='text-gray-500'>{review.location}</p>
                  </div>
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
