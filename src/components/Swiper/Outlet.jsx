import React from 'react'
import './swiper.css'
import Food from '../images/Swiper/comida.jpg'
import Cafe from '../images/Swiper/cafe.jpg'

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

export const Outlet = () => {
  return (
    <div className='swipper'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img class='swiper-img' src={Cafe} alt='Imagen1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img class='swiper-img' src={Food} alt='Imagen2'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
