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
  const [idBusiness,setIdBusiness] = useState(0)
  const [value,setValue] = useState(false)

  const getValue = (e) =>{
    console.log(e.target);
    setIdBusiness(e.target.value)
    localStorage.setItem('value',e.target.value)
    setValue(true)
  }
  const [idProfile, setIdProfile] = useState('')
  const [valueCard,setValueCard] = useState(false)


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
      setErrText,
      idBusiness,
      setIdBusiness,
      value,
      setValue,
      getValue,
      idProfile,
      setIdProfile,
      setValueCard,
      valueCard,
    }}>
      {props.children}
    </UsersContext.Provider>
  )
}