import { createContext,useState } from "react";
import { Description } from "../../UI/Description/Description";

export const CreateBussinesContext = createContext();

export const CreateBussinesContextProvider = (props) => {
  const [del,setDel] = useState(false)
  const [textarea,setTextarea] = useState(false)
  const [description,setDescription] = useState(false)
  const [text,setText] = useState('')

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


  const getDescription = (text) =>{
    setText(text)
  }

  const sendText = () =>{
    closeTextarea()
    setDescription(true)
    setDel(true)
  }
  
  return (
    <CreateBussinesContext.Provider value={{
      inputDescription,
      closeTextarea,
      textarea,
      getDescription,
      sendText,
      description,
      setDescription,
      del,
      text
    }}>
      {props.children}
    </CreateBussinesContext.Provider>
  )
}
