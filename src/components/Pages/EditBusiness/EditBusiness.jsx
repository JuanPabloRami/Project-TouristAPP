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
//contextos
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import { InformationBusinessContext } from '../../context/InformationBusiness/InformationBusinessContext'
import { CatalogueContext } from '../../context/Catalogue/CatalogueContext'
import { ModalContext } from '../../context/Modal/ModalContext'
import axios from '../../api/axios/axios'
import { UsersContext } from '../../context/Users/UsersContext'

export const EditBusiness = () => {
  const {uploadImageProfile,uploadImagePort,imageProfile,imagePort,nameBusiness,setNameBusiness,setTextName,textName} = useContext(CreateBussinesContext)
  const {openSocial,dataInformation} = useContext(InformationBusinessContext)
  const {setDel,setDescription,inputDescription} = useContext(CreateBussinesContext)
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

  const url = "http://10.199.2.22:8000";

  const showName = () =>{
    setNameBusiness(false)
  }
  
  const editName = () =>{
    setNameBusiness(true)
  }

  const getText = (event) =>{
    const text = event.target.value
    setTextName(text) 
    if (event.keyCode === 13) {
      setNameBusiness(true)
    }
  }

  const editDescription = () => {
    setDel(false)
    setDescription(false)
    inputDescription()
    return <Textarea/>
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
        setDataBusiness(response.data.negocios[0])
        setcategory(response.data.negocios[0].tipo_Negocio.nombre)
        setCity(response.data.negocios[0].ciudad.nombre)
        setDepartment(response.data.negocios[0].ciudad.departamento.nombre)
        setNegocioId(response.data.negocios[0].id)
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

  return (
    <>
      <div className="account__images">
      <div className="front__page">
        <img src={url+dataBusiness.imgportada} alt='portada'/>
        <div className="input_img">
          <label  htmlFor='input_file'><Cam/>Editar foto de portada</label>
          <input onChange={uploadImagePort} id='input_file' type='file'/>
        </div>
      </div>
      <div className="profile__img">
        <img src={url+dataBusiness.imgperfil} alt='perfil'/>
        <div className="input_img_profile">
          <label htmlFor='input_file_profile'><Cam className='icon'/></label>
          <input onChange={uploadImageProfile} id='input_file_profile' type='file'/>
        </div>
      </div>
      <div className="content_creating">
        <div className="create_nameBusiness">
          {nameBusiness?
            <>
              <input defaultValue={textName} type='text' placeholder='Escribe el nombre del negocio' maxLength='35' onChange={getText} onKeyUp={getText}/>
              <button onClick={showName}>Guardar</button>
            </>
          :
          <>
            <h1>{dataBusiness.nombre}</h1>
            <button onClick={editName}>Editar</button>
          </>
          }
        </div>
        <div className="more_optiones">
          <div className="information_business">
            <div className="location_business">
              <p><IconLocation className='icon l'/>{dataBusiness.ubicacion} - {city} - {department}</p>
            </div>
            <div className="content_grid">
              <div className="information_import">
                <p><IconEmail className='icon e'/>{dataBusiness.contactEmail}</p>
                <p><IconFacebook className='icon f'/>@{dataBusiness.contactFacebook}</p>
                <p><Category className='icon c'/>{category}</p>
              </div>
                <div className="schedule">
                  <div className="state"></div>
                  <p>Abierto: {dataBusiness.horaEntrada} - {dataBusiness.horaSalida}</p>
                  <button onClick={openSocial}>Editar</button>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <button className='btn_like_bussines'> <Heart/> 100</button>
    </div>
    <main>
      <Coments/>
      
    </main>
    </>
  )
}
