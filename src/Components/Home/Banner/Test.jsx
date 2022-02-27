import React from "react";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// import required modules
import { Autoplay, EffectCoverflow, Navigation } from "swiper";
// Import Swiper styles
import "./swiper.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Test = () => {
  return (
    <div className="mt-5">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        modules={[Autoplay, Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1495811853829-7f743aca3770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1524512099866-c65c6bfb2617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1515256722043-0f2b082ddadc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=551&q=80g" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
        </SwiperSlide>


        
      </Swiper>
    </div>
  );
};

export default Test;
