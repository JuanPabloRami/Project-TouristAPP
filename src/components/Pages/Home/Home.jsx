import "./Home.css";

//import {Products} from '../../UI/Products of Business/Products'
import Wave from '../../UI/Wave/Wave'
import {Section} from '../../Layouts/Section/Section'

//imagenes
import Draw from '../../images/Home/business.webp'
import Clouds from '../../images/Home/clouds.png'

//traducciones
import { useContext, useEffect } from "react";
import { TranslationContext } from "../../context/Translation/TranslationContext";
import { useTranslation } from "react-i18next";


export const Home = () => {

  const localLang = localStorage.getItem("lang")
  const {language} = useContext(TranslationContext)
  const [t,i18n] = useTranslation("global")
  
  useEffect(() => {
    i18n.changeLanguage(localLang);
  }, [language])
  //fin traduccion
  
  return (
    <>
      <div className="welcome">
        <div className="description-aplication">
          <h1>{t("home.welcome-h1")}</h1>
          <h1>{t("home.welcome-h1")}</h1>
          <p>
            {t("home.welcome-p")}
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
