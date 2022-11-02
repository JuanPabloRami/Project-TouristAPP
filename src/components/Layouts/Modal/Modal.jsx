import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from '../../api/axios/axios'
import {ModalContext} from '../../context/Modal/ModalContext'
import './Modal.css'

export const Modal = () => {
  //Contexto
  const { openModal , CloseModal,locationChange,locationDepartment,locationCity,inputDepartment} = useContext(ModalContext)
  //Guarda la data de los departamentos
  const [department, setDepartment] = useState([])
  //Guarda la data de los municipios
  const [citys, setCitys] = useState([])

  //Hace la peticion de los departamentos
  const Department = () =>{
    axios.get('/api/departamento/')
    .then(function (response) {
      setDepartment(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(()=>{
    Department()
  },[])

  //Hace la peticion de los municipios
  const city = () =>{
    axios.get(`/api/ciudad/?departamento__nombre__contains=${inputDepartment}`)
    .then(function (response) {
      setCitys(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(()=>{
    city()
  },[inputDepartment])

  return (
    <>
      <div className={`modal ${openModal ? 'open':'close'}`}>
        <div className="filter-modal">
          <button onClick={CloseModal} className='btn-close'>X</button>
          <h2>Escoge una ubicación</h2>
          <div className="filter-select">
            <select defaultValue='departamento' name="Departamento" onClick={locationDepartment}>
              <option defaultValue="depa" selected disabled hidden>Departamentos...</option>
              {department.map((Element,index)=>(
                <option key={index} defaultValue={Element.nombre}>{Element.nombre}</option>
              ))}
            </select >
            <select defaultValue='municipios' name="Municipios" onChange={locationCity}>
              <option defaultValue="city" selected disabled hidden>Municipios...</option>
              {citys.map((Element,index)=>(
                <option key={index} defaultValue={Element.nombre}>{Element.nombre}</option>
              ))}
            </select>
          </div>
          <button onClick={locationChange} className='btn-change-location'>Cambiar</button>
        </div>
      </div>
    </>
    
  );
}
