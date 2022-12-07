import React, { useContext } from 'react'
import './SelectLanguage.css'

//traducciones
import { TranslationContext } from '../../context/Translation/TranslationContext'

export const SelectLanguage = () => {

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
      <option defaultValue='Lenguage' selected disabled hidden>Idioma</option>
        <option defaultValue="Español" onChange={()=>console.log("ESPAÑOL HIJUEPUTA")}>Español</option>
        <option defaultValue="English" onChange={()=>console.log("INGLES HIJUEPUTA")}>English</option>
    </select>
    </div>
  )
}
