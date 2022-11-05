import { createContext, useState } from "react"

export const TransitionsContext = createContext()

export const TransitionsContextProvider = (props) => {
  const [transition,setTransition] = useState(false)
  const [loading,setLoading] = useState(false)
  const [switchNav,setSwitchNav] = useState(false)

  return (
    <TransitionsContext.Provider value={{
      transition,
      setTransition,
      setLoading,
      loading,
      setSwitchNav,
      switchNav
    }}>
      {props.children}
    </TransitionsContext.Provider>
  )
}
