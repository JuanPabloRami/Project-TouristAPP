import { createContext, useState } from "react";

export const RolesContext = createContext();

export const RolesContextProvider = (props) => {
  const [typeUser,setTypeUser] = useState('')

  const rolUSer = () => {
    setTypeUser('Turista')
  }

  const rolEntrepreneur = () => {
    setTypeUser('Emprendedor')
  }

  return (
  <RolesContext.Provider value={{
    rolUSer,
    rolEntrepreneur,
    typeUser
  }}>
    {props.children}
  </RolesContext.Provider>
  )
}
