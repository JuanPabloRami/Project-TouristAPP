import { Formik,Field,Form} from 'formik'
import React, {useContext,useState,useEffect} from 'react'
import axios from '../../api/axios/axios'
import { ModalContext } from '../../context/Modal/ModalContext'
import { Button } from '../Button/Button'
import './ModalSocial.css'

export const ModalSocial = () => {
  const {closeSocial,social} = useContext(ModalContext)
   //Guarda la data de los departamentos
   const [department, setDepartment] = useState([])
   //Guarda la data de los municipios
   const [citys, setCitys] = useState([])
   const { locationDepartment,locationCity,inputDepartment} = useContext(ModalContext)
 
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
    <Formik
    initialValues={{
      ubicacion:"PUTENTE",
      horaEntrada:"14:30",
      horaSalida:"15:30",
      contactFacebook:null,
      contactInstagram:null,
      contactWEB:null,
      contactEmail:null
    }}

    validate={()=>{

    }}
    
    onSubmit={()=>{
     
    }}
    >
      <div className={`modal-login${social ? " open" : " close"}`}>
        <div className="socialNetworks_content">
          <button className="btn-close" onClick={closeSocial}>X</button>
          <h1>Información del negocio</h1>
          <Form method="GET" className="form_items">

            <div className="location_content">
              <label>Ubicación:</label>
              <div className="content_select">
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
            </div>

            <div className="ContainerInput">
              <Field
                type="text"
                id="Localidad"
                name="Localidad"
                required
              />
              <label htmlFor="Localidad">
                <span className="text-name">Dirección del negocio</span>
              </label>
              <div className="errorMsg"></div>
            </div>

            <div className="ContainerInput">
              <Field
                type="text"
                id="Facebook"
                name="Facebook"
                required
              />
              <label htmlFor="Facebook">
                <span className="text-name">Facebook</span>
              </label>
              <div className="errorMsg"></div>
            </div>

            <div className="ContainerInput">
              <Field
                type="text"
                id="emailBusiness"
                name="emailBusiness"
                required
              />
              <label htmlFor="emailBusiness">
                <span className="text-name">Correo electronico de la empresa</span>
              </label>
              <div className="errorMsg"></div>
            </div>

            <div className="ContainerInput">
              <Field
                type="time"
                id="horarios"
                name="horarios"
                required
              />
              <label htmlFor="horarios">
                <span className="text-hours">Horario de apertura</span>
              </label>
              <div className="errorMsg"></div>
            </div>

            <div className="ContainerInput">
              <Field
                type="time"
                id="hoursClose"
                name="hoursClose"
                required
              />
              <label htmlFor="hoursClose">
                <span className="text-hours">Horario de cierre</span>
              </label>
              <div className="errorMsg"></div>
            </div>
            <Button text='Guardar información'/>
          </Form>
        </div>
      </div>
    </Formik>

   
  )
}
