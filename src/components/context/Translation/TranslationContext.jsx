import React from 'react'
import { createContext, useState} from "react"

export const TranslationContext = createContext()

export const TranslationContextProvider = (props) => {

    const [language,setLanguage] = useState(navigator.language || navigator.userLanguage)
    
  return (
    <TranslationContext.Provider value={{
      language,
      setLanguage
    }}>
        {props.children}
    </TranslationContext.Provider>
  )
}
