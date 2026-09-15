 'use client'
import TestimonialItem from "./TestimonialItem";
import { Swiper,SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const TestimonialSection = ({testimonialData}) => {
    const apiData =  testimonialData;
    
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s"
                >
                <p className="fs-5 fw-medium text-primary">{apiData.small_heading}</p>
                <h2 className="display-5 mb-5">{apiData.heading} </h2>
            </div>
            <Swiper 
            modules={[Autoplay,Navigation,Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            // navigation={true}
            pagination={{clickable:true}}
            autoplay={{
                delay:3000,
                disableOnInteraction:false
            }}
            loop={true}
            breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-slider">

                {apiData.items.map((item, index)=>(
            <SwiperSlide key={index}>
                    <TestimonialItem  data={item}/>
                    </SwiperSlide>
                ))};
            </Swiper>
        </div>
    </div>
  )
}

export default TestimonialSection
