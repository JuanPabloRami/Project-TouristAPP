import React from 'react'
import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import './Modal.css'

export const Modal = ({ Open, CloseModal }) => {
  const [inputDepartment, setInputDepartment] = useState("");
  const [inputCity, setInputCity] = useState("");


  const locationCity = (event) => {
    const city = event.target.value;
    return setInputCity(city);
  }

  const locationDepartment = (event) => {
    const department = event.target.value;
    return setInputDepartment(department);
  }

  const locationChange = () => {
    const location = inputCity + " - " + inputDepartment;
    console.log(location);
    <Navbar location={location} />
    return location;
  }

  return (

    <div className={`modal ${Open && 'modal-open'}`}>
      <div className="filter-modal">
        <button onClick={CloseModal} className='btn-close'>X</button>
        <h2>Escoge una ubicación</h2>
        <div className="filter-select">
          <select onClick={locationDepartment}>
            <option value="" selected disabled hidden>Departamentos...</option>
            <option>Quindío</option>
          </select >
          <select onChange={locationCity}>
            <option value="" selected disabled hidden>Municipios...</option>
            <option>Armenia</option>
            <option>Circasia</option>
            <option>Calarcá</option>
            <option>Montenegro</option>
            <option>Quimbaya</option>
            <option>Salento</option>
            <option>Pijao</option>
            <option>Córdoba</option>
            <option>Tebaida</option>
            <option>Filandia</option>
            <option>Génova</option>
            <option>Buenavista</option>
          </select>
        </div>
        <button onClick={locationChange} className='btn-change-location'>Cambiar</button>
      </div>
    </div>
  );
}
