import './Cards.css'
import { BsGeoAlt as Location } from "react-icons/bs";
import {BiCategoryAlt as Category} from 'react-icons/bi'
import { UsersContext } from "../../context/Users/UsersContext";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router";
import businessCardDefault from '../../images/Home/businesCardDefault.jpg'
import { TranslationContext } from '../../context/Translation/TranslationContext';
import { useTranslation } from 'react-i18next';

export const Cards = ({image, description, title,ciudad,departamento,category, id}) => {

  //traduccion multiidioma
  const localLang = localStorage.getItem("lang")
  const {language} = useContext(TranslationContext)
  const [t,i18n] = useTranslation("global")
  useEffect(() => {
    i18n.changeLanguage(localLang);
  }, [language])
  //fin traduccion

  const {getValue,value,setValue} = useContext(UsersContext)
  const idValue = localStorage.getItem('value');
  
  if(value){
    setValue(false)
    return <Navigate to={`/negocio/${idValue}`}/>;
  }

  return (
    <div className="card">
      <div className="container__img">
        {
          image === null ?
          <img className="img__business" src={businessCardDefault} alt="img" />
          :
          <img className="img__business" src={image} alt="img" />
        }
        
      </div>
      <div className="card__description">
        <h2>{title}</h2>
          <p><Location color="red" />{ciudad} - {departamento}</p>
          <p className="category_p"> <Category color='#8a9401' />{category}</p>
        <p>{description}</p>
        
        <button value={id} onClick={getValue}>{t("ui.cards.watchmore")}</button>
      </div>
    </div>
  );
};
