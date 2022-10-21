import { createContext,useState } from "react";

export const CreateBussinesContext = createContext();

export const CreateBussinesContextProvider = (props) => {
  const [textarea,setTextarea] = useState(false)

  const inputDescription = () =>{
    const icon = document.getElementById('input')
    icon.style.display = "none"
    return setTextarea(true)
  }

  const closeTextarea = () =>{
    const icon = document.getElementById('input')
    icon.style.display = "block"
    return setTextarea(false)
  }

  const getText = (e) =>{
    const text = e.target.value
    return text
  }

  const sendtext = () =>{
    console.log(getText());
  }
  
  return (
    <CreateBussinesContext.Provider value={{
      inputDescription,
      closeTextarea,
      textarea,
      getText,
      sendtext,
    }}>
      {props.children}
    </CreateBussinesContext.Provider>
  )
}
