import "./Home.css";

//Componentes
import {OurTeam} from '../../Layouts/OurTeam/OurTeam'
//import {Products} from '../../UI/Products of Business/Products'
import Wave from '../../UI/Wave/Wave'
import {Section} from '../../Layouts/Section/Section'

//imagenes
import Draw from '../../images/Home/business.webp'
import Clouds from '../../images/Home/clouds.png'

//traducciones
import { useContext } from "react";
import { TranslationContext } from "../../context/Translation/TranslationContext";
import { useTranslation } from "react-i18next";


export const Home = () => {

  
  const [t] = useTranslation("global")
  // const {t} = useContext(TranslationContext)
  
  return (
    <>
      <div className="welcome">
        <div className="description-aplication">
          <h1>¡Bienvenido!</h1>
          <h1>¡Bienvenido!</h1>
          <p>
            TouristApp ayuda a identificar de manera rápida los establecimientos de una ciudad
            , pueblo o destino turístico en específico.Los turistas podran guiarse de manera 
            rápida acerca de lugares a visitar.
          </p>
        </div>
        <img className="draw" src={Draw} alt='imagencita'/>
        <img className="clouds" src={Clouds} alt='imagencita'/>
      </div>
      <Wave/>
      <Section/>
    </>
  );
};
