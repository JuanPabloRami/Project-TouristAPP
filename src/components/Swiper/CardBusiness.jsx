import React from 'react'
import './CardBusiness.css'
import Image from '../images/Home/uni.jpeg'

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { Autoplay,Navigation } from "swiper";


export const CardBusiness = () => {
  return (
    <>
    <div className="cardBusiness">
      
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
         autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          waitForTransition: true,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card">
            <img className='img-card' src={Image} alt='SIUUU'/> 
            {/* <h1>UNICENTRO</h1> */}
            <div className="card-description">
              <div className="titles">
                <h2>Unicentro</h2> 
                <p><b className='cetegory'>Categoria:</b> comercio</p>
              </div>
              <p className='description-bussines'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quod ullam dolorum sed assumenda, quis dolorem corporis atque rem earum aspernatur repellat tenetur dolore iste voluptatibus minus fuga blanditiis eligendi.</p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className='img-card' src={Image} alt='SIUUU'/> 
            {/* <h1>UNICENTRO</h1> */}
            <div className="card-description">
              <div className="titles">
                <h2>Unicentro</h2> 
                <p><b className='cetegory'>Categoria:</b> comercio</p>
              </div>
              <p className='description-bussines'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quod ullam dolorum sed assumenda, quis dolorem corporis atque rem earum aspernatur repellat tenetur dolore iste voluptatibus minus fuga blanditiis eligendi.</p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className='img-card' src={Image} alt='SIUUU'/> 
            {/* <h1>UNICENTRO</h1> */}
            <div className="card-description">
              <div className="titles">
                <h2>Unicentro</h2> 
                <p><b className='cetegory'>Categoria:</b> comercio</p>
              </div>
              <p className='description-bussines'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quod ullam dolorum sed assumenda, quis dolorem corporis atque rem earum aspernatur repellat tenetur dolore iste voluptatibus minus fuga blanditiis eligendi.</p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className='img-card' src={Image} alt='SIUUU'/> 
            {/* <h1>UNICENTRO</h1> */}
            <div className="card-description">
              <div className="titles">
                <h2>Unicentro</h2> 
                <p><b className='cetegory'>Categoria:</b> comercio</p>
              </div>
              <p className='description-bussines'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quod ullam dolorum sed assumenda, quis dolorem corporis atque rem earum aspernatur repellat tenetur dolore iste voluptatibus minus fuga blanditiis eligendi.</p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className='img-card' src={Image} alt='SIUUU'/> 
            {/* <h1>UNICENTRO</h1> */}
            <div className="card-description">
              <div className="titles">
                <h2>Unicentro</h2> 
                <p><b className='cetegory'>Categoria:</b> comercio</p>
              </div>
              <p className='description-bussines'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quod ullam dolorum sed assumenda, quis dolorem corporis atque rem earum aspernatur repellat tenetur dolore iste voluptatibus minus fuga blanditiis eligendi.</p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className='img-card' src={Image} alt='SIUUU'/> 
            {/* <h1>UNICENTRO</h1> */}
            <div className="card-description">
              <div className="titles">
                <h2>Unicentro</h2> 
                <p><b className='cetegory'>Categoria:</b> comercio</p>
              </div>
              <p className='description-bussines'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quod ullam dolorum sed assumenda, quis dolorem corporis atque rem earum aspernatur repellat tenetur dolore iste voluptatibus minus fuga blanditiis eligendi.</p>
              <button>Ver más</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}
