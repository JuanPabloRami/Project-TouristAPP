import { useContext } from "react"
import './Textarea.css'
//context
import { CreateBussinesContext } from "../../context/CreateBussines/CreateBussinesContext"

export const Textarea = () => {

  const {closeTextarea,sendText,getDescription} = useContext(CreateBussinesContext)

  const getText = (event) =>{
    const text = event.target.value
    getDescription(text) 
  }


  return ( 
    <div className="content_textarea">
      <h2>Descripción</h2>
      <textarea onChange={getText} name="description" id="des_create" cols="20" rows="8"></textarea>
      <div className="content_button">
        <button onClick={sendText}>Guardar Cambios</button>
        <button onClick={closeTextarea}>Descartar Cambios</button>
      </div>
    </div>
  )
}
