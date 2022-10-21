import './CreateBussines.css'
//icons
import {BsPlusSquareFill as Plus} from 'react-icons/bs'
import { useContext } from 'react'
//components
import { Textarea } from '../Textarea/Textarea'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'

export const CreateBussines = () => {
  
  const {inputDescription,textarea} = useContext(CreateBussinesContext)

  return (
    <div className='content_create_bussines'>
      <div className="create description">
        {textarea ? <Textarea/> : <h2>Descripción</h2>}
        <Plus id='input' className='icon_create' onClick={inputDescription}/>
      </div>
      <div className="create items">
        <h2>Catalogo</h2>
        <Plus className='icon_create'/>
      </div>
    </div>
  )
}
