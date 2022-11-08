import { createContext,useState } from "react";

export const CreateBussinesContext = createContext();

export const CreateBussinesContextProvider = (props) => {
  //Esconde la descripcion
  const [del,setDel] = useState(false)
  //Abre y cierra la textarea
  const [textarea,setTextarea] = useState(false)
  //habilita la descripcion cuando se guarda los cambios
  const [description,setDescription] = useState(false)
  //obtiene el texto escrito por el usuario
  const [text,setText] = useState('')
  //obtiene el nombre del negocio escrito por el usuario
  const [textName,setTextName] = useState('')
  //Muestra el nombre del negocio
  const [nameBusiness,setNameBusiness] = useState(false)
  
  //Oculta boton de más de la descripción
  const inputDescription = () =>{
    const icon = document.getElementById('input')
    icon.style.display = "none"
    return setTextarea(true)
  }

  //aparece boton de más de la descripción
  const closeTextarea = () =>{
    const icon = document.getElementById('input')
    icon.style.display = "block"
    return setTextarea(false)
  }

  //Obtiene el texto escrito por el usuario en el textarea
  const getDescription = (text) =>{
    setText(text)
  }

  //Envia el texto y se pinta en la descripción
  const sendText = () =>{
    closeTextarea()
    setDescription(true)
    setDel(true)
  }

  //abre la modal de la creacion de los items 
  
  
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
      setDel,
      text,
      setTextName,
      textName,
      setNameBusiness,
      nameBusiness
    }}>
      {props.children}
    </CreateBussinesContext.Provider>
  )
}
