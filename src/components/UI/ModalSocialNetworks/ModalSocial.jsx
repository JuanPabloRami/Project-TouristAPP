import { Formik,Field,Form} from 'formik'
import React, {useContext,useState,useEffect} from 'react'
import axios from '../../api/axios/axios'
import { InformationBusinessContext } from '../../context/InformationBusiness/InformationBusinessContext'
import { Button } from '../Button/Button'
import './ModalSocial.css'

export const ModalSocial = () => {
  const {closeSocial,social} = useContext(InformationBusinessContext)
   //Guarda la data de los departamentos
   const [department, setDepartment] = useState([])
   //Guarda la data de los municipios
   const [citys, setCitys] = useState([])

   const {locationCity,locationChange,locationState,locationDepartment,inputDepartment} = useContext(InformationBusinessContext)
 
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

  //Contexto de la modal de informacion del negocio
  const {setDataInformation} = useContext(InformationBusinessContext)
  const sendInformationBusiness = (ubicacion,horaEntrada,horaSalida,contactFacebook,contactInstagram,contactWEB,contactEmail) =>{
    const data = {ubicacion,horaEntrada,horaSalida,contactFacebook,contactInstagram,contactWEB,contactEmail,locationState}
    setDataInformation(data)
  }
  
  return (
    <Formik
    initialValues={{
      ubicacion:"",
      horaEntrada:"",
      horaSalida:"",
      contactFacebook:"",
      contactInstagram:null,
      contactWEB:null,
      contactEmail:''
    }}

    validate={()=>{

    }}
    
    onSubmit={({ubicacion,horaEntrada,horaSalida,contactFacebook,contactInstagram,contactWEB,contactEmail})=>{
      sendInformationBusiness(ubicacion,horaEntrada,horaSalida,contactFacebook,contactInstagram,contactWEB,contactEmail)
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
                name="ubicacion"
                required
              />
              <label htmlFor="ubicacion">
                <span className="text-name">Dirección del negocio</span>
              </label>
              <div className="errorMsg"></div>
            </div>

            <div className="ContainerInput">
              <Field
                type="text"
                id="Facebook"
                name="contactFacebook"
                required
              />
              <label htmlFor="contactFacebook">
                <span className="text-name">Facebook</span>
              </label>
              <div className="errorMsg"></div>
            </div>

            <div className="ContainerInput">
              <Field
                type="text"
                id="emailBusiness"
                name="contactEmail"
                required
              />
              <label htmlFor="contactEmail">
                <span className="text-name">Correo electronico de la empresa</span>
              </label>
              <div className="errorMsg"></div>
            </div>

            <div className="ContainerInput">
              <Field
                type="time"
                id="horarios"
                name="horaEntrada"
                required
              />
              <label htmlFor="horaEntrada">
                <span className="text-hours">Horario de apertura</span>
              </label>
              <div className="errorMsg"></div>
            </div>

            <div className="ContainerInput">
              <Field
                type="time"
                id="horaSalida"
                name="horaSalida"
                required
              />
              <label htmlFor="horaSalida">
                <span className="text-hours">Horario de cierre</span>
              </label>
              <div className="errorMsg"></div>
            </div>

            <div className="ContainerInput">
              <select>Categoria</select>
              <label>Categoria</label>
              <div className="errorMsg"></div>
            </div>
            <button onClick={locationChange}>Guardar informacion</button>
          </Form>
        </div>
      </div>
    </Formik>

   
  )
}
