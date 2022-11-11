import { createContext, useState } from "react"

export const UsersContext = createContext()

export const UsersContextProvider = (props) => {
  const [users,setUsers] = useState(false)
  const [request,setRequest] = useState('')

  return (
    <UsersContext.Provider value={{
      users,
      setUsers,
      setRequest,
      request
    }}>
      {props.children}
    </UsersContext.Provider>
  )
}