import React from 'react'
import './Products.css'

import Comida from '../../images/Outlet/1.jpg'
import Ropa from '../../images/Outlet/2.jpg'
import Zapatos from '../../images/Outlet/3.jpg'
import Cuatro from '../../images/Outlet/4.png'
import Cinco from '../../images/Outlet/5.jpg'
import Seis from '../../images/Outlet/6.jpg'


//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

export const Products = () => {
  return (
    <div className='promotions'>
      <Swiper
       slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide id='card_promotions'>
          <img class='swiper-img' src={Comida} alt='Imagen1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img class='swiper-img' src={Ropa} alt='Imagen1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img class='swiper-img' src={Zapatos} alt='Imagen2'/>
        </SwiperSlide>
        <SwiperSlide>
          <img class='swiper-img' src={Cuatro} alt='Imagen1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img class='swiper-img' src={Cinco} alt='Imagen2'/>
        </SwiperSlide>
        <SwiperSlide>
          <img class='swiper-img' src={Seis} alt='Imagen2'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
