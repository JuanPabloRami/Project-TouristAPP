import React, { useEffect } from "react";
import "./Products.css";

import Comida from "../../images/Outlet/1.jpg";
import Ropa from "../../images/Outlet/2.jpg";
import Zapatos from "../../images/Outlet/3.jpg";
import Cuatro from "../../images/Outlet/4.png";
import Cinco from "../../images/Outlet/5.jpg";
import Seis from "../../images/Outlet/6.jpg";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from '../../api/axios/axios'
import { useState } from "react";

export const Products = () => {

  const [promotions,setPromotions] = useState([])

  useEffect (()=>{
    axios.get('api/item/')
    .then(function (response){
      console.log(response.data);
      setPromotions(response.data)
    })
    .catch(function (error){
      console.log(error);
    })
  },[])
  
  return (
    <div className="promotions">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={false}
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
        {promotions.map((Element,index)=>(
          <SwiperSlide key={index} id="card_promotions">
            {Element.imgpromocion !== null ?
            <img class="swiper-img" src={Element.imgpromocion} alt="Imagen1" />
            : <></>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
