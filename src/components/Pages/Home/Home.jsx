import React from "react";
import "./Home.css";

//Componentes
//import { Outlet } from "../../UI/Outlet/Outlet";
import { CardBusiness } from "../../UI/BussinesCard/CardBusiness";
import {OurTeam} from '../../Layouts/OurTeam/OurTeam'
//imagenes
import WelcomeImg from '../../images/Home/welcome.jpg'
import Logotipo from '../../images/Navbar/logo.webp'

export const Home = () => {
  return (
    <>
     <div className="welcome">
      <img className="img-welcome" src={WelcomeImg} alt="photo welcome" />
      <div className="description-aplication">
        <h1>¡Bienvenidos!</h1>
        <p>
          TouristApp ayuda a identificar de manera rápida los establecimientos de una ciudad , pueblo o destino turístico en específico.Los turistas podran guiarse de manera rápida acerca de lugares a visitar
        </p>
      </div>
     </div>

      <section>
        {/* <h1 data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, asperiores similique? Adipisci recusandae soluta voluptatum vitae, cupiditate pariatur vel veritatis amet quod voluptas error non nobis eligendi alias aspernatur consequuntur?</h1> */}
        <CardBusiness />
        <OurTeam/>
        {/*<Outlet />*/}
      </section>
    </>
  );
};
