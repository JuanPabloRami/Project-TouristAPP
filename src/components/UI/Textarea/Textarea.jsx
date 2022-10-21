import { useContext } from "react"
import './Textarea.css'
//context
import { CreateBussinesContext } from "../../context/CreateBussines/CreateBussinesContext"

export const Textarea = () => {

  const {closeTextarea,getText,sendtext} = useContext(CreateBussinesContext)



  return ( 
    <div className="content_textarea">
      <h2>Descripción</h2>
      <textarea name="description" id="des_create" cols="20" rows="8" onChange={getText}></textarea>
      <div className="content_button">
        <button onClick={sendtext}>Guardar Cambios</button>
        <button onClick={closeTextarea}>Descartar Cambios</button>
      </div>
    </div>
  )
}
