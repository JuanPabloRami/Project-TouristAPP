import React, { useContext, useEffect } from 'react'
import './SelectLanguage.css'

//traducciones
import { TranslationContext } from '../../context/Translation/TranslationContext'
import { useTranslation } from 'react-i18next'

export const SelectLanguage = () => {

    //traduccion multiidioma
  const localLang = localStorage.getItem("lang")
  const {language} = useContext(TranslationContext)
  const [t,i18n] = useTranslation("global")
  useEffect(() => {
    i18n.changeLanguage(localLang);
  }, [language])
  //fin traduccion

    const {setLanguage} = useContext(TranslationContext)

    const validateAndChangeLang = (e)=>{
      if (e.target.value === "Español"){
        localStorage.setItem("lang","es")
        setLanguage(localStorage.getItem("lang"))
      }
      else if(e.target.value === "English"){
        localStorage.setItem("lang","en")
        setLanguage(localStorage.getItem("lang"))
      }
    }

    

  return (
    <div className='content_select_lenguage'>
    <select className='select_lenguage' name="" id="" onChange={(e)=>validateAndChangeLang(e)}>
      <option defaultValue='Lenguage' selected disabled hidden>{t("ui.selectLanguage.language")}</option>
        <option defaultValue="Español" onChange={()=>console.log("ESPAÑOL HIJUEPUTA")}>Español</option>
        <option defaultValue="English" onChange={()=>console.log("INGLES HIJUEPUTA")}>English</option>
    </select>
    </div>
  )
}
