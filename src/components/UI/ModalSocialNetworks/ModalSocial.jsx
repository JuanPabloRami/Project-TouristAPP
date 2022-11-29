import { Formik,Field,Form} from 'formik'
import React, {useContext,useState,useEffect} from 'react'
import axios from '../../api/axios/axios'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import { InformationBusinessContext } from '../../context/InformationBusiness/InformationBusinessContext'
import './ModalSocial.css'

export const ModalSocial = () => {
  const {closeSocial,social} = useContext(InformationBusinessContext)
   //Guarda la data de los departamentos
   const [department, setDepartment] = useState([])
   //Guarda la data de los municipios
   const [citys, setCitys] = useState([])
   //Guarda las categorias
   const [categorie,setCategorie] = useState([])
   //guarda el nombre de la categoria
   const [nameCategorie,setNameCategorie] = useState('')

   const {locationCity,locationChange,locationState,locationDepartment,inputDepartment,inputCity} = useContext(InformationBusinessContext)
 
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
  const {setInformationSocial,setIdCategory,setIdCity} = useContext(CreateBussinesContext)
  const sendInformationBusiness = (ubicacion,horaEntrada,horaSalida,contactFacebook,contactInstagram,contactWEB,contactEmail) =>{
    const data = {ubicacion,horaEntrada,horaSalida,contactFacebook,contactInstagram,contactWEB,contactEmail,locationState,nameCategorie}
    setDataInformation(data)
    setInformationSocial(data)
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


  const nameCategories = (e) =>{
    const name = e.target.value
    setNameCategorie(name)
  }

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
  
  return (
    <Formik
    initialValues={{
      ubicacion:" ",
      horaEntrada:"00:00",
      horaSalida:"00:00",
      contactFacebook:" ",
      contactInstagram:null,
      contactWEB:null,
      contactEmail:' '
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
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
                id="horaSalida"
                name="horaSalida"
                required
              />
              <label htmlFor="horaSalida">
                <span className="text-hours">Horario de cierre</span>
              </label>
            </div>

            <div className="select_categorie">
              <label>Categorias:</label>
            <select defaultValue='categorias' name="Categorias" onChange={nameCategories}>
              <option defaultValue="categorie" selected disabled hidden>Categoria</option>
              {categorie.map((Element,index)=>(
                <option key={index}>{Element.nombre}</option>
              ))}
            </select>
            </div>
            <button className='btn' onClick={locationChange}>Guardar informacion</button>
          </Form>
        </div>
      </div>
    </Formik>

   
  )
}
