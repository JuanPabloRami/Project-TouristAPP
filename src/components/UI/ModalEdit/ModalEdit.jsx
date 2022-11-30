import { Formik,Field,Form} from 'formik'
import React, {useContext,useState,useEffect} from 'react'
import axios from '../../api/axios/axios'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import { EditBusinessContext } from '../../context/EditBusiness/EditBusinessContext'
import { InformationBusinessContext } from '../../context/InformationBusiness/InformationBusinessContext'

export const ModalEdit = () => {
  const {closeSocial,social} = useContext(InformationBusinessContext)
   //Guarda la data de los departamentos
   const [department, setDepartment] = useState([])
   //Guarda la data de los municipios
   const [citys, setCitys] = useState([])
   //Guarda las categorias
   const [categorie,setCategorie] = useState([])


   const {nameCategorie,locationCity,locationState,locationDepartment,inputDepartment,inputCity} = useContext(EditBusinessContext)
 
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
  const {socialEdit,closeSocialEdit} = useContext(InformationBusinessContext)
  const {setDataEditBusiness,setIdCategory,setIdCity} = useContext(EditBusinessContext)
  const sendInformationBusiness = (ubicacion,horaEntrada,horaSalida,contactFacebook,contactInstagram,contactWEB,contactEmail) =>{
    const data = {ubicacion,horaEntrada,horaSalida,contactFacebook,contactInstagram,contactWEB,contactEmail,locationState,nameCategorie}
    setDataEditBusiness(data)
  }

  const categories = () =>{
    axios.get('/api/tipo-negocio/')
    .then(function (response) {
      setCategorie(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(()=>{
    categories()
  },[])


  useEffect(()=>{
    axios.get(`/api/ciudad/?nombre__contains=${inputCity}&departamento__nombre__contains=${inputDepartment}`)
    .then(function (response) {
      setIdCity(response.data[0].id);
    })
    .catch(function (error) {
      console.log(error);
    })
  },[inputCity])
  

  useEffect(()=>{
    axios.get(`api/tipo-negocio/?nombre=${nameCategorie}`)
    .then(function(response) {
      setIdCategory(response.data[0].id)
    })
    .catch(function(error){
      console.log(error)
    })
  },[nameCategorie])

  const {locationChange,locationBus,faceBuss,emailBuss,hourEnter,editBusiness,hourClose,cityBuss,departmentBuss,categoryBuss} = useContext(EditBusinessContext)
  const {setlocationBuss,setFaceBuss,setEmailBuss,setHourEnter,setHourClose,nameCategories} = useContext(EditBusinessContext)

  const location = (e) =>{
    setlocationBuss(e.target.value)
  }
  const face = (e) =>{
    setFaceBuss(e.target.value)
  }
  const email = (e) =>{
    setEmailBuss(e.target.value)
  }
  const hourEn = (e) =>{
    setHourEnter(e.target.value)
  }
  const hourClo = (e) =>{
    setHourClose(e.target.value)
  }
  const closeModal = ()=>{
    closeSocialEdit()
    locationChange()
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
      <div className={`modal-login${socialEdit ? " open" : " close"}`}>
        <div className="socialNetworks_content">
          <button className="btn-close" onClick={closeSocialEdit}>X</button>
          <h1>Información del negocio edit</h1>
          <Form method="GET" className="form_items">

            <div className="location_content">
              <label>Ubicación:</label>
              <div className="content_select">
                <select defaultValue='departamento' name="Departamento" onClick={locationDepartment}>
                  <option defaultValue="depa" selected disabled hidden>{departmentBuss}</option>
                  {department.map((Element,index)=>(
                    <option key={index} defaultValue={Element.nombre}>{Element.nombre}</option>
                  ))}
                </select >
                <select defaultValue='municipios' name="Municipios" onChange={locationCity}>
                  <option defaultValue="city" selected disabled hidden>{cityBuss}</option>
                  {citys.map((Element,index)=>(
                    <option key={index} defaultValue={Element.nombre}>{Element.nombre}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="ContainerInput">
              <Field
                type="text"
                id="Local"
                defaultValue=''
                name="ubicacion"
                value={locationBus === '' ? ' ' : locationBus}
                onChange={location}
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
                defaultValue=''
                id="Face"
                name="contactFacebook"
                onChange={face}
                value={faceBuss=== '' ? ' ' : faceBuss}
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
                defaultValue=''
                id="emailBusines"
                name="contactEmail"
                onChange={email}
                value={emailBuss === '' ? ' ' : emailBuss}
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
                id="horario"
                name="horaEntrada"
                onChange={hourEn}
                value={hourEnter === '' ? editBusiness.horaEntrada : hourEnter}
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
                id="horaSalid"
                name="horaSalida"
                onChange={hourClo}
                value={hourClose === '' ? editBusiness.horaSalida : hourClose}
                required
              />
              <label htmlFor="horaSalida">
                <span className="text-hours">Horario de cierre</span>
              </label>
            </div>

            <div className="select_categorie">
              <label>Categorias:</label>
            <select defaultValue='categorias' name="Categorias" onChange={nameCategories}>
              <option defaultValue="categorie" selected disabled hidden>{categoryBuss}</option>
              {categorie.map((Element,index)=>(
                <option key={index}>{Element.nombre}</option>
              ))}
            </select>
            </div>
            <button className='btn' onClick={closeModal}>Guardar informacion</button>
          </Form>
        </div>
      </div>
    </Formik>
  )
}
