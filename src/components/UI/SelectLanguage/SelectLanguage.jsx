import React, { useContext } from 'react'
import './SelectLanguage.css'

//traducciones
import { TranslationContext } from '../../context/Translation/TranslationContext'
import { useTranslation } from 'react-i18next'


export const SelectLanguage = () => {

    const {setLanguage,i18n} = useContext(TranslationContext)

    // const [t,i18n] = useTranslation("global")

    

  return (
    <div className='content_select_lenguage'>
    <select className='select_lenguage' name="" id="" onChange={(e)=>{e.target.value === "Español" ? i18n.changeLanguage("es") : e.target.value === "English" ? i18n.changeLanguage("en") : setLanguage("es")}}>
      <option defaultValue='Lenguage' selected disabled hidden>Idioma</option>
        <option defaultValue="Español" onChange={()=>console.log("ESPAÑOL HIJUEPUTA")}>Español</option>
        <option defaultValue="English" onChange={()=>console.log("INGLES HIJUEPUTA")}>English</option>
    </select>
    </div>
  )
}
