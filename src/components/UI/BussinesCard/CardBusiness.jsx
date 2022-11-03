import React,{useEffect,useState} from "react";
import "./CardBusiness.css";

//cards de negocio
import {Cards} from '../Cards/Cards'
import axios from "../../api/axios/axios";
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
  const [bussines,setBussines] = useState([])
  const showBussines = () =>{
    axios.get('/api/negocio/')
    .then(function (response){
      setBussines(response.data)
    })
    .catch(function (error){
      console.log(error);
    });
  }
  console.log(bussines)

  useEffect(()=>{
    showBussines()
  },[])

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
            {bussines.map((element, index)=>(
              <SwiperSlide id="slider-business" key={index}>
                <Cards image={element.imgperfil} owner={element.imgperfil} description={element.descripcion} title={element.nombre} />
              </SwiperSlide>
            ))}
          
        </Swiper>
      </div>
    </>
  );
};
