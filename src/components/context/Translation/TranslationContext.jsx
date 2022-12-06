import React from 'react'
import { createContext, useState} from "react"
//traducciones
import { useTranslation } from "react-i18next"

export const TranslationContext = createContext()

    

export const TranslationContextProvider = (props) => {



    const [t,i18n] = useTranslation("global")

    
    
  return (
    <TranslationContext.Provider value={{
      t,
      i18n
    }}>

        {props.children}
    </TranslationContext.Provider>
  )
}
