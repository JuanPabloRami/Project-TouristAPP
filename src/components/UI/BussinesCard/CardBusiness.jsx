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

//componente de carga
import { Transition } from "../Transition/Transition";
import { Transition2 } from "../Transition/Transition2";
import { TransitionsContext } from "../../context/Transitions/TransitionsContext";



import {ScaleLoader} from 'react-spinners'


export const CardBusiness = () => {
  const {locationState} = useContext(ModalContext);
  const {request,delFilter,setDelFilter} = useContext(UsersContext)

  //estado de componente de carga global
  const [transition,setTransition] = useState(false)

  const [bussines, setBussines] = useState([]);


  //Peticion que me trae todos los negocios
  const showBussines = () => {
    setTransition(true)
    axios.get("/api/negocio/")
    
      .then(function (response) {
        setBussines(response.data);
        setTransition(false)
      })
      .catch(function (error) {
        console.log(error);
        setTransition(false)
      });
  };

  useEffect(() => {
    showBussines();
  }, []);

  const delFilters = () => {
    setTransition(true)
    axios.get("/api/negocio/")
      .then(function (response) {
        setTransition(false)
        if (response.status === 200){
          setDelFilter(false)
        }
        setBussines(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setTransition(false)
      });
  };

  useEffect(() => {
    delFilters();
  }, [delFilter]);


  //Me separa el departamento y el municipio
  const city = locationState.split(" ")

  //Hace el filtado de departamento y municipios para los negocios
  useEffect(()=>{
    if(request === '' && locationState !== ''){
      axios.get(`/api/negocio/?ciudad__nombre__contains=${city[0]}&ciudad__departamento__nombre__contains=${city[2]}`)
      .then(function (response) {
        setBussines(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  },[locationState])

  //hace el filtro por categoria
  useEffect(()=>{
    if(request !== '' && locationState === ''){
      axios.get(`api/negocio/?tipo_Negocio__nombre__contains=${localStorage.getItem('categoryFilter')}`)
      .then(function(response) {
        console.log(response);
        setBussines(response.data)
      })
      .catch(function(error){
          console.log(error)
      })
    }
  },[request])

  useEffect(()=>{
    if(request !== '' && locationState !== ''){
      axios.get(`api/negocio/?tipo_Negocio__nombre__contains=${localStorage.getItem('categoryFilter')}&ciudad__departamento__nombre__contains=${city[2]}&ciudad__nombre__contains=${city[0]}`)
      .then(function(response) {
        console.log(response);
        setBussines(response.data)
      })
      .catch(function(error){
          console.log(error)
      })
    }
  },[request,locationState])

  return (
    <>
      <div className="cardBusiness">
        
        <Swiper
            breakpoints={{
              1800: {
                width: 1800,
                slidesPerView: 4,
              },
              // 
              // when window width is >= 640px
              1200: {
                width: 1200,
                slidesPerView: 3,
              },
              // when window width is >= 768px
              900: {
                width: 900,
                slidesPerView: 2,
              },
              0: {
                width: 0,
                slidesPerView: 1,
              },
            }}
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
              {bussines.length === 0 ? 
                <h2>No hay negocios en esta ubicación</h2>
              :
              <Cards
              image={element.imgperfil}
              owner={element.imgportada}
              description={element.descripcion}
              title={element.nombre}
              ciudad={element.ciudad.nombre}
              departamento={element.ciudad.departamento.nombre}
              category={element.tipo_Negocio.nombre}
              id={element.id}
            />
              }
            </SwiperSlide>
          ))}
        </Swiper>
        { transition === true ?
          <Transition2/>
          : <></>
        }
      </div>
      
    </>
  );
};
