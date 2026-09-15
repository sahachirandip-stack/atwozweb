
 'use client'

import { Swiper,SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ExpertiseItem from "./ExpertiseItem";
const Expertise = ({expertiseData}) => {
  return (
    
    <div className="container-xxl pt-5">
        <div className="container">
            <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s">
                <h2 className="display-5">{expertiseData.small_heading} </h2>
                <p>{expertiseData.description} </p>
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

                {expertiseData.projects.map((item, index)=>(
            <SwiperSlide key={index}>
                <ExpertiseItem itemdata={item} />
                    </SwiperSlide>
                ))};
            </Swiper>
           
        </div>
    </div>
  )
}

export default Expertise
