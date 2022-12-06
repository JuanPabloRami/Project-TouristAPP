import React from 'react'
import './SelectLanguage.css'
//traducciones
import { useTranslation } from "react-i18next"

export const SelectLanguage = () => {

    const [t,i18n] = useTranslation("home")


  return (
    <div className='content_select_lenguage'>
    <select className='select_lenguage' name="" id="">
      <option defaultValue='Lenguage' selected disabled hidden>Idioma</option>
        <option defaultValue="Español" onClick={()=>i18n.changeLanguage("es")}>Español</option>
        <option defaultValue="English" onClick={()=>i18n.changeLanguage("en")}>English</option>
    </select>
    </div>
  )
}
