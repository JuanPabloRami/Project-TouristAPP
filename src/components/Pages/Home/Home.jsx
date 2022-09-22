import React from "react";
import "./Home.css";

//Componentes
import { CardBusiness } from "../../UI/BussinesCard/CardBusiness";
import {OurTeam} from '../../Layouts/OurTeam/OurTeam'

//imagenes
import WelcomeImg from '../../images/Home/welcome.jpg'

export const Home = () => {
  return (
    <>
      <div className="welcome">
        <img className="img-welcome" src={WelcomeImg} alt="welcome" />
        <div className="description-aplication">
          <h1>¡Bienvenidos!</h1>
          <p>
            TouristApp ayuda a identificar de manera rápida los establecimientos de una ciudad , pueblo o destino turístico en específico.Los turistas podran guiarse de manera rápida acerca de lugares a visitar
          </p>
        </div>
      </div>
    <section>
      <CardBusiness />
        <OurTeam/>
    </section>
    </>
  );
};
