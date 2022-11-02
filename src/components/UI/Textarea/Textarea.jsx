import { useContext} from "react"
import './Textarea.css'
//context
import { CreateBussinesContext } from "../../context/CreateBussines/CreateBussinesContext"

export const Textarea = () => {

  const {closeTextarea,sendText,getDescription,text} = useContext(CreateBussinesContext)

  const getText = (event) =>{
    const text = event.target.value
    getDescription(text) 
    if (event.keyCode === 13) {
      sendText()
    }
  }

  return ( 
    <div className="content_textarea">
      <h2>Descripción</h2>
      <textarea defaultValue={text} onChange={getText} onKeyDown={getText} name="description" id="des_create" cols="20" rows="8" words='true'></textarea>
      <div className="content_button">
        <button onClick={sendText}>Guardar Cambios</button>
        <button onClick={closeTextarea}>Descartar Cambios</button>
      </div>
    </div>
  )
}
