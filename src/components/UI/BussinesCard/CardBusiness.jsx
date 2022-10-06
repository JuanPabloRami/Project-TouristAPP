import React from "react";
import "./CardBusiness.css";

//cards de negocio
import {Cards} from '../Cards/Cards'

//Imagenes de negocios
import Unicentro from "../../images/BussinesCard/uni.jpeg";
import BogPizzas from "../../images/BussinesCard/bogpizzas.jpg";
import ArepasCafe from "../../images/BussinesCard/arepasCafe.jpg";
import Estanquillo from "../../images/BussinesCard/estanquillo.jpg";
//import Cacheo from "../../images/BussinesCard/cacheo.jpg";
//import Morcilla from "../../images/BussinesCard/morcilla.webp";
//Imagenes de dueños del negocio
import OWner from '../../images/Profile/owner.jpg'

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay} from "swiper";

export const CardBusiness = () => {
  return (
    <>
      <div className="cardBusiness">
        <div className="header-business">
          
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            waitForTransition: true,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay ]}
        >
          <SwiperSlide id="slider-business">
            <Cards image={Unicentro} owner={OWner}/>
          </SwiperSlide>
          <SwiperSlide id="slider-business">
            <Cards image={BogPizzas} owner={OWner}/>
          </SwiperSlide>
          <SwiperSlide id="slider-business">
            <Cards image={ArepasCafe} owner={OWner}/>
          </SwiperSlide>
          <SwiperSlide id="slider-business">
            <Cards image={Estanquillo} owner={OWner}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
