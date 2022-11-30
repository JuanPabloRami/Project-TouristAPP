import React, { useEffect } from "react";
import "./Products.css";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from '../../api/axios/axios'
import { useState } from "react";
import {ScaleLoader} from 'react-spinners'

export const Products = () => {

  const [promotions,setPromotions] = useState([])
  const [nameBusiness,setNameBusiness] = useState(0)

  useEffect (()=>{
    axios.get('api/item/?nuevo=true')
    .then(function (response){
      console.log(response);
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
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {promotions.map((Element,index)=>(
          <SwiperSlide key={index} id="card_promotions">
              <img class="swiper-img" src={Element.imgpromocion} alt="Imagen1" />
              <div className="name_business_promotions" disabled>
                <h3>{Element.precio.toLocaleString('es-CO')} COP</h3>
              </div>
              <div className="content_name_business">
                <h3>{Element.negocionombre}</h3>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
