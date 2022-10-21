import React from 'react'
import "./AddBusiness.css"

//Componentes
import {ModalContext} from '../../context/Modal/ModalContext'
//Imagenes
import AddImagen from '../../images/Title/addBusiness.jpg'
import { useContext } from 'react'

export const AddBusiness = () => {
  const {openRoles} = useContext(ModalContext)
  return (
    <>
      <div className="add__business">
        <div className="add__description">
          <h1>Agrega tu negocio</h1>
          <p>Nuestro servicio de suscripción para propietarios de negocios está diseñado para brindarle una manera de maximizar la exposición de su negocio y llegar a más clientes potenciales.</p>
          <p>Para agregar tu negocio primero creas una cuenta, luego seleccionar tu membrecía, haces el deposito a Chivo wallet, nos mandas el recibo del deposito y luego agregas tu negocio.</p>
          <button onClick={openRoles}>Agregar al listado</button>
        </div>
        <div className="container__addImage">
          <img className='img__add' src={AddImagen} alt='Add'/>
        </div>
      </div>
    </>
  )
}
