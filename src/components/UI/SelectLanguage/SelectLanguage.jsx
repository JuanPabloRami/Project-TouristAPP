import React from 'react'
//traducciones
import { useTranslation } from "react-i18next"

export const SelectLanguage = () => {

    const [t,i18n] = useTranslation("home")


  return (
    <>
    <h3>Idioma</h3>
    <select name="" id="">
        <option value="" onClick={()=>i18n.changeLanguage("es")}>Español</option>
        <option value="" onClick={()=>i18n.changeLanguage("en")}>English</option>
    </select>
    </>
  )
}
