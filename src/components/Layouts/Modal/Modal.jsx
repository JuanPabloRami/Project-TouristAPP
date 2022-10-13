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
            <option value="" selected disabled hidden>Departamentos...</option>
            <option value="Quindio">Quindío</option>
          </select >
          <select name="Municipios" onChange={locationCity}>
            <option value="" selected disabled hidden>Municipios...</option>
            <option value="Armenia">Armenia</option>
            <option value="Circasia">Circasia</option>
            <option value="Calarcá">Calarcá</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Quimbaya">Quimbaya</option>
            <option value="Salento">Salento</option>
            <option value="Pijao">Pijao</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Tebaida">Tebaida</option>
            <option value="Filandia">Filandia</option>
            <option value="Génova">Génova</option>
            <option value="Buenavista">Buenavista</option>
          </select>
        </div>
        <button onClick={locationChange} className='btn-change-location'>Cambiar</button>
      </div>
    </div>
    </>
    
  );
}
