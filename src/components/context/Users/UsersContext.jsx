import { createContext, useState } from "react"

export const UsersContext = createContext()

export const UsersContextProvider = (props) => {
  const [users,setUsers] = useState(false)
  const [request,setRequest] = useState('')
  //le pasa el id del negocio actual
  const [negocioId,setNegocioId] = useState(0)
  //estados del alert de exito o error
  const [alert,setAlert] = useState("close")
  const [errorAlert,setErrAlert] = useState("close")
  const [errorText,setErrText] = useState("Ha ocurrido un error")

  return (
    <UsersContext.Provider value={{
      users,
      setUsers,
      setRequest,
      request,
      negocioId,
      setNegocioId,
      alert,
      setAlert,
      errorAlert,
      setErrAlert,
      errorText,
      setErrText
    }}>
      {props.children}
    </UsersContext.Provider>
  )
}