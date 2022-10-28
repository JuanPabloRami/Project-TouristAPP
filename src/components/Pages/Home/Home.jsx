import "./Home.css";

//Componentes
import {OurTeam} from '../../Layouts/OurTeam/OurTeam'
//import {Products} from '../../UI/Products of Business/Products'
import Wave from '../../UI/Wave/Wave'
import {Section} from '../../Layouts/Section/Section'

//imagenes
import Draw from '../../images/Home/business.webp'
import Clouds from '../../images/Home/clouds.png'

export const Home = () => {
  
  return (
    <>
      <div className="welcome">
        <div className="description-aplication">
          <h1>¡Bienvenidos!</h1>
          <h1>¡Bienvenidos!</h1>
          <p>
            TouristApp ayuda a identificar de manera rápida los establecimientos de una ciudad , pueblo o destino turístico en específico.Los turistas podran guiarse de manera rápida acerca de lugares a visitar
          </p>
        </div>
        <img className="draw" src={Draw} alt='imagencita'/>
        <img className="clouds" src={Clouds} alt='imagencita'/>
      </div>
      <Wave/>
      <Section/>
      <OurTeam/>
    </>
  );
};
