import { useContext } from 'react'
import { EditBusinessContext } from '../../context/EditBusiness/EditBusinessContext'
import './ConfirmDel.css'

export const ConfirmDel = () => {
  const {setDelItem,alertTrash,setAlertTrash} = useContext(EditBusinessContext)

  const del = () => {
    setDelItem(true)
  }

  const cancel = () => {
    setAlertTrash(false)
  }

  return (
    <div className={`delete_confirm ${alertTrash ? 'open': 'close'}`}>
      <p>¿Esta seguro de eliminarlo?</p>
      <div className="content_btns">
        <button onClick={cancel} className='del'>Cancelar</button>
        <button onClick={del} className='confirm'>Confirmar</button>
      </div>
    </div>
  )
}
