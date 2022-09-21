import React from "react";
import "./CardBusiness.css";

//cards de negocio
import {Cards} from '../Cards/Cards'

//Imagenes de negocios
import BogPizzas from "../../images/BussinesCard/bogpizzas.jpg";
import ArepasCafe from "../../images/BussinesCard/arepasCafe.jpg";
import Estanquillo from "../../images/BussinesCard/estanquillo.jpg";
import Cacheo from "../../images/BussinesCard/cacheo.jpg";
import Morcilla from "../../images/BussinesCard/morcilla.webp";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay} from "swiper";

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
          modules={[FreeMode, Pagination ]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Cards/>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="img-card" src={BogPizzas} alt="SIUUU" />
              <div className="title-card">
                <p className="t-stroke t-shadow">Bogotana de pizza</p>
              </div>
              <div className="card-description">
                <div className="titles">
                  <h2>Bogotana de pizzas</h2>
                  <p>
                    <b className="cetegory">Categoria:</b> Comida
                  </p>
                </div>
                <p className="description-bussines">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti quod ullam dolorum sed assumenda, quis dolorem
                  corporis atque rem earum aspernatur repellat tenetur dolore
                  iste voluptatibus minus fuga blanditiis eligendi.
                </p>
                <button>Ver más</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="img-card" src={ArepasCafe} alt="SIUUU" />
              <div className="title-card">
                <p className="t-stroke t-shadow">Arepas y café</p>
              </div>
              <div className="card-description">
                <div className="titles">
                  <h2>Arepas y café</h2>
                  <p>
                    <b className="cetegory">Categoria:</b> Comida
                  </p>
                </div>
                <p className="description-bussines">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti quod ullam dolorum sed assumenda, quis dolorem
                  corporis atque rem earum aspernatur repellat tenetur dolore
                  iste voluptatibus minus fuga blanditiis eligendi.
                </p>
                <button>Ver más</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="img-card" src={Estanquillo} alt="SIUUU" />
              <div className="title-card">
                <p className="t-stroke t-shadow">Estanquillo cañaveral</p>
              </div>
              <div className="card-description">
                <div className="titles">
                  <h2>Estanquillo Cañaveral</h2>
                  <p>
                    <b className="cetegory">Categoria:</b> comercio
                  </p>
                </div>
                <p className="description-bussines">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti quod ullam dolorum sed assumenda, quis dolorem
                  corporis atque rem earum aspernatur repellat tenetur dolore
                  iste voluptatibus minus fuga blanditiis eligendi.
                </p>
                <button>Ver más</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="img-card" src={Cacheo} alt="SIUUU" />
              <div className="title-card">
                <p className="t-stroke t-shadow">Delicias Don Cacheo</p>
              </div>
              <div className="card-description">
                <div className="titles">
                  <h2>Delicias Don Cacheo</h2>
                  <p>
                    <b className="cetegory">Categoria:</b> Comida
                  </p>
                </div>
                <p className="description-bussines">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti quod ullam dolorum sed assumenda, quis dolorem
                  corporis atque rem earum aspernatur repellat tenetur dolore
                  iste voluptatibus minus fuga blanditiis eligendi.
                </p>
                <button>Ver más</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="img-card" src={Morcilla} alt="SIUUU" />
              <div className="title-card">
                <p className="t-stroke t-shadow">Morcilla Andina</p>
              </div>
              <div className="card-description">
                <div className="titles">
                  <h2>Morcilla Andina</h2>
                  <p>
                    <b className="cetegory">Categoria:</b> Comida
                  </p>
                </div>
                <p className="description-bussines">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti quod ullam dolorum sed assumenda, quis dolorem
                  corporis atque rem earum aspernatur repellat tenetur dolore
                  iste voluptatibus minus fuga blanditiis eligendi.
                </p>
                <button>Ver más</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Cards/>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="img-card" src={BogPizzas} alt="SIUUU" />
              <div className="title-card">
                <p className="t-stroke t-shadow">Bogotana de pizza</p>
              </div>
              <div className="card-description">
                <div className="titles">
                  <h2>Bogotana de pizzas</h2>
                  <p>
                    <b className="cetegory">Categoria:</b> Comida
                  </p>
                </div>
                <p className="description-bussines">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti quod ullam dolorum sed assumenda, quis dolorem
                  corporis atque rem earum aspernatur repellat tenetur dolore
                  iste voluptatibus minus fuga blanditiis eligendi.
                </p>
                <button>Ver más</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="img-card" src={ArepasCafe} alt="SIUUU" />
              <div className="title-card">
                <p className="t-stroke t-shadow">Arepas y café</p>
              </div>
              <div className="card-description">
                <div className="titles">
                  <h2>Arepas y café</h2>
                  <p>
                    <b className="cetegory">Categoria:</b> Comida
                  </p>
                </div>
                <p className="description-bussines">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti quod ullam dolorum sed assumenda, quis dolorem
                  corporis atque rem earum aspernatur repellat tenetur dolore
                  iste voluptatibus minus fuga blanditiis eligendi.
                </p>
                <button>Ver más</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="img-card" src={Estanquillo} alt="SIUUU" />
              <div className="title-card">
                <p className="t-stroke t-shadow">Estanquillo cañaveral</p>
              </div>
              <div className="card-description">
                <div className="titles">
                  <h2>Estanquillo Cañaveral</h2>
                  <p>
                    <b className="cetegory">Categoria:</b> comercio
                  </p>
                </div>
                <p className="description-bussines">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti quod ullam dolorum sed assumenda, quis dolorem
                  corporis atque rem earum aspernatur repellat tenetur dolore
                  iste voluptatibus minus fuga blanditiis eligendi.
                </p>
                <button>Ver más</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="img-card" src={Cacheo} alt="SIUUU" />
              <div className="title-card">
                <p className="t-stroke t-shadow">Delicias Don Cacheo</p>
              </div>
              <div className="card-description">
                <div className="titles">
                  <h2>Delicias Don Cacheo</h2>
                  <p>
                    <b className="cetegory">Categoria:</b> Comida
                  </p>
                </div>
                <p className="description-bussines">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti quod ullam dolorum sed assumenda, quis dolorem
                  corporis atque rem earum aspernatur repellat tenetur dolore
                  iste voluptatibus minus fuga blanditiis eligendi.
                </p>
                <button>Ver más</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="img-card" src={Morcilla} alt="SIUUU" />
              <div className="title-card">
                <p className="t-stroke t-shadow">Morcilla Andina</p>
              </div>
              <div className="card-description">
                <div className="titles">
                  <h2>Morcilla Andina</h2>
                  <p>
                    <b className="cetegory">Categoria:</b> Comida
                  </p>
                </div>
                <p className="description-bussines">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti quod ullam dolorum sed assumenda, quis dolorem
                  corporis atque rem earum aspernatur repellat tenetur dolore
                  iste voluptatibus minus fuga blanditiis eligendi.
                </p>
                <button>Ver más</button>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </>
  );
};
