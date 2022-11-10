import React,{useEffect,useState,useContext} from "react";
import "./CardBusiness.css";
import {ModalContext} from '../../context/Modal/ModalContext'

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

  const {locationState} = useContext(ModalContext);



  // request de negocios
  const [bussines,setBussines] = useState([])
  const city = locationState.split(" ")
  console.log(city[0]);
  const showBussines = () =>{
    axios.get(`/api/negocio/?ciudad__nombre__contains=${city[0]}`)
    .then(function (response){
      setBussines(response.data)
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    });
  }
  
  useEffect(()=>{
    
    showBussines()
  },[city[0]])

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
                <Cards image={element.imgperfil} owner={element.imgperfil} description={element.descripcion} title={element.nombre} city={element.ciudad.nombre} />
              </SwiperSlide>
            ))}
          
        </Swiper>
      </div>
    </>
  );
};
