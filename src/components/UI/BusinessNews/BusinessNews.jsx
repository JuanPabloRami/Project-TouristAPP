import { useState,useEffect } from "react";
import "./BusinessNews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper";
import axios from "../../api/axios/axios";
import { Cards } from "../Cards/Cards";

export const BusinessNews = () => {
  const [bussines, setBussines] = useState([]);
  const [bussiness, setBussiness] = useState([]);

  const showBussines = () => {
    axios.get("/api/negocio/")
      .then(function (response) {
        setBussines(response.data);
        setBussiness(response.data.reverse())
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    showBussines();
  }, []);

  return (
    <>
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
        {bussiness.map((element, index) => (
            <SwiperSlide id="slider-business" key={index}>
              {bussines.length > 0 ? 
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
              :
              <h2>No hay negocios en esta ubicación</h2>
              }
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
