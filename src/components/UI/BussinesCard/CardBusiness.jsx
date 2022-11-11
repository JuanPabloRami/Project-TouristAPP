import React, { useEffect, useState,useContext } from "react";
import "./CardBusiness.css";
import {ModalContext} from '../../context/Modal/ModalContext'
import { UsersContext } from "../../context/Users/UsersContext";

//cards de negocio
import { Cards } from "../Cards/Cards";
import axios from "../../api/axios/axios";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper";

export const CardBusiness = () => {
  const {locationState} = useContext(ModalContext);
  const {request} = useContext(UsersContext)

  const [bussines, setBussines] = useState([]);


  //Peticion que me trae todos los negocios
  const showBussines = () => {
    axios.get("/api/negocio/")
      .then(function (response) {
        setBussines(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    showBussines();
  }, []);

  //Me separa el departamento y el municipio
  const city = locationState.split(" ")

  //Hace el filtado de departamento y municipios para los negocios
  useEffect(()=>{
      axios.get(`/api/negocio/?ciudad__nombre__contains=${city[0]}&ciudad__departamento__nombre__contains=${city[2]}`)
      .then(function (response) {
        setBussines(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  },[locationState])

  useEffect(()=>{
    axios.get(`api/negocio/?tipo_Negocio__nombre__contains=${localStorage.getItem('categoryFilter')}`)
    .then(function(response) {
      console.log(response);
      setBussines(response.data)
    })
    .catch(function(error){
        console.log(error)
    })
  },[request])

  return (
    <>
      <div className="cardBusiness">
        <div className="header-business"></div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          loop={false}
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
          modules={[FreeMode, Pagination, Autoplay]}
        >
          {bussines.map((element, index) => (
            <SwiperSlide id="slider-business" key={index}>
              {bussines.length > 0 ? 
              <Cards
                image={element.imgportada}
                owner={element.imgperfil}
                description={element.descripcion}
                title={element.nombre}
                ciudad={element.ciudad.nombre}
                departamento={element.ciudad.departamento.nombre}
                category={element.tipo_Negocio.nombre}
                id={element.id}
              />
              :
              <h2>No hay negocios en esta ubicación</h2>
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
