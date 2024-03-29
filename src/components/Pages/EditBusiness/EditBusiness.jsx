import { useContext, useEffect,useState } from 'react'
//componentes
import {Coments} from '../../UI/Coments/Coments'
//icons
import {BsCameraFill as Cam} from 'react-icons/bs'
import {FaFacebook as IconFacebook,} from "react-icons/fa";
import {MdEmail as IconEmail} from 'react-icons/md'
import {MdLocationPin as IconLocation} from "react-icons/md";
import {BiCategory as Category} from 'react-icons/bi'
import {AiTwotoneEdit as Edit} from 'react-icons/ai'
import {BsTrash as Trash} from 'react-icons/bs'
//contextos
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import { InformationBusinessContext } from '../../context/InformationBusiness/InformationBusinessContext'
import { ModalContext } from '../../context/Modal/ModalContext'
import axios from '../../api/axios/axios'
import { UsersContext } from '../../context/Users/UsersContext'
import { TextareaEdit } from '../../UI/TextareaEdit/TextareaEdit'
import { EditBusinessContext } from '../../context/EditBusiness/EditBusinessContext'
import { Navigate } from 'react-router-dom'
import {BounceLoader} from 'react-spinners'

//imagenes por defecto
import portada from '../../images/BussinesCard/portada.png'
import businessCardDefault from '../../images/Home/businesCardDefault.jpg'

export const EditBusiness = () => {
  const {setLoader,loader,nameBusiness,setNameBusiness,useItem} = useContext(CreateBussinesContext)
  const {openSocialEdit} = useContext(InformationBusinessContext)
  const {description,setDescription} = useContext(CreateBussinesContext)
  const { openItemsEdit,openItems } = useContext(ModalContext);

  const {users,setNegocioId} = useContext(UsersContext)
  const [dataBusiness,setDataBusiness] = useState({})
  const [itemsData,setItemsData] = useState({})
  const [category,setcategory] = useState('')
  const [city,setCity] = useState('')
  const [department,setDepartment] = useState('')
  const [loading, setLoading] = useState(false);
  const [showItems,setShowItems] = useState(false)
  const [updateItem,setUpdateItem] = useState(false)

  const {setAlertTrash,uploadItemModal,setEditItems,nameCategorie,setIdCity,requestEditBusiness,imageProfile,imagePort,setCategoryBuss,setDepartmentBuss,setCityBuss,setEditBusiness,textDes,textNameBuss,setTextNameBuss,uploadImageProfileEdit,uploadImagePortEdit,setUpdateBusiness,updateBusiness} = useContext(EditBusinessContext)

  const url = "https://touristapp-backend-production-c4fa.up.railway.app";

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
        localStorage.setItem('idNegocio',response.data.negocios[0].id)
        setIdCity(response.data.negocios[0].ciudad.id)
      }
    })
    .catch(function (error){
      console.log(error);
    });
  },[users])

  useEffect(() => {
    setLoader(true)
    axios.get(`/api/item/?negocio__id=${dataBusiness.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          setLoader(false)
          setItemsData(response.data);
          setEditItems(response.data)
          setShowItems(true);
          setLoading(false);
  }})
      .catch(function (error) {
        console.log(error);
      });
  }, [uploadItemModal,useItem,dataBusiness,updateItem])

  const getText = (event) =>{
    const text = event.target.value
    setTextNameBuss(text) 
    if (event.keyCode === 13) {
      setNameBusiness(true)
    }
  }
  
  const {setChangeButton,locationBus,faceBuss,emailBuss,hourEnter,hourClose,inputCity,inputDepartment} = useContext(EditBusinessContext)
  const {delBusiness,setDelBusiness,deleteBusiness} = useContext(CreateBussinesContext)

  const itemsEdit = (e) =>{
    localStorage.setItem('idItems',e.target.value)
    openItemsEdit()
  }
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      },
  }

  const {delItem,setDelItem} = useContext(EditBusinessContext)
  const [id,setId] = useState('')

  const itemsDel = (e)=>{
    setAlertTrash(true)
    setUpdateItem(true)
    console.log(e.target.value);
    setId(e.target.value)
  }

  useEffect(()=>{
      setAlertTrash(false)
      setDelItem(false)
      axios.delete(`/api/item/${id}/`,
      config
      )
      .then(function (response) {
        console.log(response);
        if(response.status === 204){
          setUpdateItem(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },[delItem])


  const changeRequest = () =>{
    setChangeButton(true)
    openItems()
  }

  if(delBusiness){
    setDelBusiness(false)
    return <Navigate to='/'/>
  }
  if(updateBusiness){
    setUpdateBusiness(false)
    return <Navigate to='/minegocio'/>
  }

  console.log(itemsData);
  return (
    <>
      <div className="account__images">
      <div className="front__page">
          {
            dataBusiness.imgportada === null & imagePort === '' ?
            <img src={portada} alt="portada" />
            : imagePort === '' ?
            <img src={url+dataBusiness.imgportada} alt="portada" />
            :<img src={imagePort} alt="portada" />
          }
        
        <div className="input_img">
          <label  htmlFor='input_file'><Cam/>Editar foto de portada</label>
          <input onChange={uploadImagePortEdit} id='input_file' type='file'/>
        </div>
      </div>
      <div className="profile__img">
          {
            dataBusiness.imgperfil === null & imageProfile === '' ?
            <img src={businessCardDefault} alt='perfil' />
            : imageProfile === '' ?
            <img src={url+dataBusiness.imgperfil} alt='perfil' />
            :<img src={imageProfile} alt='perfil' />
          }
        
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
      <button onClick={deleteBusiness} className="btn_del">Eliminar negocio<Edit /></button>
      <button onClick={requestEditBusiness} className="btn_edit">Actualizar negocio <Edit /></button>
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
                {itemsData.map((element, index) => (
                  <>
                  {element.nuevo === true ?
                    <div key={index} className="content__img__items">
                      <div className="promotion_item"><p>En promoción</p></div>
                    {loader ? 
                      <BounceLoader
                      color="#186556"
                      size={57}
                      cssOverride={{
                        margin: 'auto'
                      }}
                    />
                    :
                    <>
                    <div className="text">
                      <h3>{element.nombre}</h3>
                      <p>{element.descripcion}</p>
                      <p id="price"> {element.precio} COP</p>
                    </div>
                    <img key={index} src={element.imagen} alt="Item imagen" />
                    <button id='edit_btn' value={element.id} onChange={itemsEdit} onClick={itemsEdit}><Edit/>Editar</button>
                    <button id='del_btn' name='del' value={element.id} onClick={itemsDel}>
                    <Trash name='del'  value={element.id}/>
                      Eliminar</button>
                    </>
                    }
                  </div>
                  :
                  <div key={index} className="content__img__items">
                  {loader ? 
                    <BounceLoader
                    color="#186556"
                    size={57}
                    cssOverride={{
                      margin: 'auto'
                    }}
                  />
                  :
                  <>
                  <div className="text">
                    <h3>{element.nombre}</h3>
                    <p>{element.descripcion}</p>
                    <p id="price"> {element.precio} COP</p>
                  </div>
                  <img key={index} src={element.imagen} alt="Item imagen" />
                  <button id='edit_btn' value={element.id} onChange={itemsEdit} onClick={itemsEdit}><Edit/>Editar</button>
                  <button id='del_btn' name='del' value={element.id} onClick={itemsDel}>
                  <Trash name='del'  value={element.id}/>
                    Eliminar</button>
                  </>
                  }
                </div>
                  }
                  </>
                ))}
                <button className="btn_item" onClick={changeRequest}>Agregar item</button>
              </div>
            </div>
          </div>
        ) : null}
    </main>
    </>
  )
}
