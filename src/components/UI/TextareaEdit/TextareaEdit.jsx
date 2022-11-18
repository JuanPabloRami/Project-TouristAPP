import { useContext} from "react"
//context
import { CreateBussinesContext } from "../../context/CreateBussines/CreateBussinesContext"
import { EditBusinessContext } from "../../context/EditBusiness/EditBusinessContext"

export const TextareaEdit = () => {

  const {editBusiness,setTextDes,textDes} = useContext(EditBusinessContext)
  const {setDescription} = useContext(CreateBussinesContext)

  const getText = (event) =>{
    const text = event.target.value
    setTextDes(text)
    if (event.keyCode === 13) {
      closeTextarea()
    }
  }

  const closeTextarea = () =>{
    setDescription(false)
  }
  

  return ( 
    <div className="content_textarea">
      <h2>Descripción</h2>
      <textarea defaultValue={textDes === '' ? editBusiness.descripcion : textDes} onChange={getText} onKeyDown={getText} name="description" id="des_create" cols="20" rows="8" words='true'></textarea>
      <div className="content_button">
        <button onClick={closeTextarea}>Guardar Cambios</button>
        <button onClick={closeTextarea}>Descartar Cambios</button>
      </div>
    </div>
  )
}
