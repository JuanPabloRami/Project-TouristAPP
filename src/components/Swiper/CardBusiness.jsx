import React from 'react'
import './CardBusiness.css'
import Image from '../images/Home/uni.jpeg'

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { Autoplay,Navigation } from "swiper";


export const CardBusiness = () => {
  return (
    <>
    <div className="cardBusiness">
      
      <Swiper
       slidesPerView={3}
       //spaceBetween={30}
       loopFillGroupWithBlank={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        pagination={{ 
          clickble: true
        }}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          waitForTransition: true
        }}
        coverflowEffect={{
          rotate: 150,
          stretch: 0,
          depth: 1000,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={false}
        modules={[Autoplay,EffectCoverflow,Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card">
            <img className='img-card' src={Image} alt='SIUUU'/> 
            <h1>UNICENTRO</h1>
            <div className="card-discration">
              <h2>Unicentro</h2>
              <h4>Categoria: comercio</h4>
              <hr></hr>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quod ullam dolorum sed assumenda, quis dolorem corporis atque rem earum aspernatur repellat tenetur dolore iste voluptatibus minus fuga blanditiis eligendi.</p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}
