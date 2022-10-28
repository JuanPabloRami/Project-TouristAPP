import { createContext, useState } from "react"

export const TransitionsContext = createContext()

export const TransitionsContextProvider = (props) => {
  const [transition,setTransition] = useState(false)

  return (
    <TransitionsContext.Provider value={{
      transition,
      setTransition
    }}>
      {props.children}
    </TransitionsContext.Provider>
  )
}
