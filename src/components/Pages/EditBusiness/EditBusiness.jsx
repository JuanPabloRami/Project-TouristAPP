import { useContext, useEffect,useState } from 'react'
//Imagenes
import Account from '../../images/Profile/profile.jpg'
import FrontPage from '../../images/Profile/frontPage.jpg'
//componentes
import {Coments} from '../../UI/Coments/Coments'
import { Textarea } from '../../UI/Textarea/Textarea'
//icons
import {AiFillLike as Heart} from 'react-icons/ai'
import {BsCameraFill as Cam} from 'react-icons/bs'
import {FaFacebook as IconFacebook,} from "react-icons/fa";
import {MdEmail as IconEmail} from 'react-icons/md'
import {MdLocationPin as IconLocation} from "react-icons/md";
import {BiCategory as Category} from 'react-icons/bi'
import {AiTwotoneEdit as Edit} from 'react-icons/ai'
//contextos
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import { InformationBusinessContext } from '../../context/InformationBusiness/InformationBusinessContext'
import { CatalogueContext } from '../../context/Catalogue/CatalogueContext'
import { ModalContext } from '../../context/Modal/ModalContext'
import axios from '../../api/axios/axios'
import { UsersContext } from '../../context/Users/UsersContext'
import { TextareaEdit } from '../../UI/TextareaEdit/TextareaEdit'
import { EditBusinessContext } from '../../context/EditBusiness/EditBusinessContext'
import { Link } from 'react-router-dom'

export const EditBusiness = () => {
  const {nameBusiness,setNameBusiness,setTextName,textName} = useContext(CreateBussinesContext)
  const {openSocialEdit} = useContext(InformationBusinessContext)
  const {description,setDescription} = useContext(CreateBussinesContext)
  const {catalogue } = useContext(CatalogueContext);
  const { openItems } = useContext(ModalContext);

  const {users,setNegocioId} = useContext(UsersContext)
  const [dataBusiness,setDataBusiness] = useState({})
  const [dataItems,setDataItems] = useState({})
  const [category,setcategory] = useState('')
  const [city,setCity] = useState('')
  const [department,setDepartment] = useState('')
  const [loading, setLoading] = useState(false);
  const [showItems,setShowItems] = useState(false)

  const {nameCategorie,setIdCity,requestEditBusiness,imageProfile,imagePort,setCategoryBuss,setDepartmentBuss,setCityBuss,setEditBusiness,textDes,textNameBuss,setTextNameBuss,uploadImageProfileEdit,uploadImagePortEdit} = useContext(EditBusinessContext)

  const url = "http://localhost:8000";

  const showName = () =>{
    setNameBusiness(false)
  }
  
  const editName = () =>{
    setNameBusiness(true)
  }

  const editDescription = () => {
    setDescription(true)
  }
  const token = localStorage.getItem('token')

  useEffect(()=>{
    axios.get('/api/misnegocios/',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(function (response){
      if(response.status === 200){
        setEditBusiness(response.data.negocios[0])
        setDepartmentBuss(response.data.negocios[0].ciudad.departamento.nombre)
        setCategoryBuss(response.data.negocios[0].tipo_Negocio.nombre)
        setCityBuss(response.data.negocios[0].ciudad.nombre)
        setDataBusiness(response.data.negocios[0])
        setcategory(response.data.negocios[0].tipo_Negocio.nombre)
        setCity(response.data.negocios[0].ciudad.nombre)
        setDepartment(response.data.negocios[0].ciudad.departamento.nombre)
        setNegocioId(response.data.negocios[0].id)
        setIdCity(response.data.negocios[0].ciudad.id)
      }
    })
    .catch(function (error){
      console.log(error);
    });
  },[users])

  useEffect(() => {
    axios.get(`/api/item/?negocio__id=${dataBusiness.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          setDataItems(response.data);
          setShowItems(true);
          setLoading(false);
  }})
      .catch(function (error) {
        console.log(error);
      });
  }, [dataBusiness])


  const getText = (event) =>{
    const text = event.target.value
    setTextNameBuss(text) 
    if (event.keyCode === 13) {
      setNameBusiness(true)
    }
  }
  
  const {locationBus,faceBuss,emailBuss,hourEnter,hourClose,inputCity,inputDepartment} = useContext(EditBusinessContext)

  return (
    <>
      <div className="account__images">
      <div className="front__page">
        <img src={imagePort === '' ? url+dataBusiness.imgportada: imagePort} alt='portada'/>
        <div className="input_img">
          <label  htmlFor='input_file'><Cam/>Editar foto de portada</label>
          <input onChange={uploadImagePortEdit} id='input_file' type='file'/>
        </div>
      </div>
      <div className="profile__img">
        <img src={imageProfile === '' ? url+dataBusiness.imgperfil: imageProfile} alt='perfil'/>
        <div className="input_img_profile">
          <label htmlFor='input_file_profile'><Cam className='icon'/></label>
          <input onChange={uploadImageProfileEdit} id='input_file_profile' type='file'/>
        </div>
      </div>
      <div className="content_creating">
        <div className="create_nameBusiness">
          {nameBusiness?
            <>
              <input defaultValue={textNameBuss=== '' ? dataBusiness.nombre : textNameBuss} type='text' placeholder='Escribe el nombre del negocio' maxLength='35' onChange={getText} onKeyUp={getText}/>
              <button onClick={showName}>Guardar</button>
            </>
          :
          <>
            <h1>{textNameBuss=== '' ? dataBusiness.nombre : textNameBuss}</h1>
            <button onClick={editName}>Editar</button>
          </>
          }
        </div>
        <div className="more_optiones">
          <div className="information_business">
            <div className="location_business">
              <p><IconLocation className='icon l'/>{locationBus === '' ? dataBusiness.ubicacion: locationBus} - {inputCity} - {inputDepartment}</p>
            </div>
            <div className="content_grid">
              <div className="information_import">
                <p><IconEmail className='icon e'/>{emailBuss === '' ? dataBusiness.contactEmail: emailBuss}</p>
                <p><IconFacebook className='icon f'/>@{faceBuss === '' ? dataBusiness.contactFacebook: faceBuss}</p>
                <p><Category className='icon c'/>{nameCategorie === '' ? category:nameCategorie}</p>
              </div>
                <div className="schedule">
                  <div className="state"></div>
                  <p>Abierto: {hourEnter === '' ? dataBusiness.horaEntrada: hourEnter} - {hourClose === '' ? dataBusiness.horaSalida:hourClose}</p>
                  <button onClick={openSocialEdit}>Editar</button>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <button className='btn_like_bussines'> <Heart/> 100</button>
      <Link to='/minegocio'> <button onClick={requestEditBusiness} className="btn_edit">Actualizar negocio <Edit /></button></Link>
    </div>
    <main>
      <Coments/>
      {showItems ? (
          <div className="content_create_bussines">
              {description ? 
                <div className='create description'>
                  <TextareaEdit/>
                </div>
              :
              <div className="description__create">
                <h2>Descripción</h2>
                <p>{textDes === '' ? dataBusiness.descripcion : textDes}</p>
                <button onClick={editDescription}>Editar</button>         
              </div>
              }
            <div className="bussines__items">
              <h2>Catalogo</h2>
              <div className="items__img">
                {dataItems.map((element, index) => (
                  <div key={index} className="content__img__items">
                    <div className="text">
                      <h3>{element.nombre}</h3>
                      <p>{element.descripcion}</p>
                      <p id="price"> {element.precio} COP</p>
                    </div>
                    <img key={index} src={element.imagen} alt="Item imagen" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
    </main>
    </>
  )
}
