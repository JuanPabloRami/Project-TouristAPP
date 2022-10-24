import React, { useContext } from 'react'
import {ModalContext} from '../../context/Modal/ModalContext'
import './Modal.css'

export const Modal = () => {
  const { openModal , CloseModal,locationChange,locationDepartment,locationCity} = useContext(ModalContext)
 
  return (
    <>
      <div className={`modal ${openModal ? 'open':'close'}`}>
      <div className="filter-modal">
        <button onClick={CloseModal} className='btn-close'>X</button>
        <h2>Escoge una ubicación</h2>
        <div className="filter-select">
          <select name="Departamento" onClick={locationDepartment}>
            <option defaultValue="" selected disabled hidden>Departamentos...</option>
            <option defaultValue="Quindio">Quindío</option>
          </select >
          <select name="Municipios" onChange={locationCity}>
            <option defaultValue="" selected disabled hidden>Municipios...</option>
            <option defaultValue="Armenia">Armenia</option>
            <option defaultValue="Circasia">Circasia</option>
            <option defaultValue="Calarcá">Calarcá</option>
            <option defaultValue="Montenegro">Montenegro</option>
            <option defaultValue="Quimbaya">Quimbaya</option>
            <option defaultValue="Salento">Salento</option>
            <option defaultValue="Pijao">Pijao</option>
            <option defaultValue="Córdoba">Córdoba</option>
            <option defaultValue="Tebaida">Tebaida</option>
            <option defaultValue="Filandia">Filandia</option>
            <option defaultValue="Génova">Génova</option>
            <option defaultValue="Buenavista">Buenavista</option>
          </select>
        </div>
        <button onClick={locationChange} className='btn-change-location'>Cambiar</button>
      </div>
    </div>
    </>
    
  );
}
