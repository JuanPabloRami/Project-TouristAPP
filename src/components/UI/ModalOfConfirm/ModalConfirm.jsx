import './ModalConfirm.css'
import {FiAlertCircle as Alert} from 'react-icons/fi'
import { useContext } from 'react'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'

export const ModalConfirm = () => {
  const {modalConfirm,setModalConfirm,bussinesRequest} = useContext(CreateBussinesContext)

  const closeModal = () =>{
    setModalConfirm(false)
  }

  return (
  <div className={`modal-login${modalConfirm ? " open" : " close"}`}>
   <div className={`content_confirm_modal ${modalConfirm ? 'open' : 'close'}`}>
    <div className="confirm_modal_header">
      <Alert className='icon'/>
      <h1>¿Listo para crear tu negocio?</h1>
    </div>
    <div className="buttons">
      <button onClick={closeModal} className='cancel'>Cancelar</button>
      <button onClick={bussinesRequest} className='confirm'>Aceptar</button>
    </div>
   </div>
  </div>
  )
}
