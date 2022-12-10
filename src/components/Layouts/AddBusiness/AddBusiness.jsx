import React, { useEffect } from "react";
import "./AddBusiness.css";

//Componentes
import { ModalContext } from "../../context/Modal/ModalContext";
//Imagenes
import AddImagen from "../../images/Title/addBusiness.jpg";
import { useContext } from "react";

import { TranslationContext } from "../../context/Translation/TranslationContext";
import { useTranslation } from "react-i18next";

export const AddBusiness = () => {

  const token = localStorage.getItem("token")

  const { openRoles } = useContext(ModalContext);

  //traduccion multiidioma
  const localLang = localStorage.getItem("lang")
  const {language} = useContext(TranslationContext)
  const [t,i18n] = useTranslation("global")
  useEffect(() => {
    i18n.changeLanguage(localLang);
  }, [language])
  //fin traduccion

  return (
    <>
      <div className="add__business">
        <div className="add__description">
          <h1>{t("layouts.addBusiness.addYourBusinessH1")}</h1>
          <p>
            {t("layouts.addBusiness.addYourBusinessP")}
          </p>
          <button onClick={()=>{
            token === null ?
            openRoles()
            :console.log("ok");
            }
          }>{t("layouts.addBusiness.createBusinessButton")}</button>
        </div>
        <div className="container__addImage">
          <img className="img__add" src={AddImagen} alt="Add" />
        </div>
      </div>
    </>
  );
};
