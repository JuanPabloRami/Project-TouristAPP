import { useContext } from 'react'
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

export const EditBusiness = () => {
  const {uploadImageProfile,uploadImagePort,imageProfile,imagePort,nameBusiness,setNameBusiness,setTextName,textName} = useContext(CreateBussinesContext)
  const {openSocial,dataInformation} = useContext(InformationBusinessContext)
  const {setDel,setDescription,inputDescription} = useContext(CreateBussinesContext)
  const {catalogue } = useContext(CatalogueContext);
  const { openItems } = useContext(ModalContext);

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

  return (
    <>
       <div className="account__images">
      <div className="front__page">
        {imagePort === '' ?
          <img src={FrontPage} alt='portada'/>
         :  
          <img src={imagePort} alt='portada'/>
         }
        <div className="input_img">
          <label  htmlFor='input_file'><Cam/>Editar foto de portada</label>
          <input onChange={uploadImagePort} id='input_file' type='file'/>
        </div>
      </div>
      <div className="profile__img">
      {imageProfile === '' ?
          <img src={Account} alt='perfil'/>
         :  
          <img src={imageProfile} alt='perfil'/>
         }
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
            <h1>Sin nombre</h1>
            <button onClick={editName}>Editar</button>
          </>
          }
        </div>
        <div className="more_optiones">
          <div className="information_business">
            <div className="location_business">
              <p><IconLocation className='icon l'/>{dataInformation.ubicacion} - {dataInformation.locationState}</p>
            </div>
            <div className="content_grid">
              <div className="information_import">
                <p><IconEmail className='icon e'/>{dataInformation.contactEmail}</p>
                <p><IconFacebook className='icon f'/>@{dataInformation.contactFacebook}</p>
                <p><Category className='icon c'/>{dataInformation.nameCategorie}</p>
              </div>
                <div className="schedule">
                  <div className="state"></div>
                  <p>Abierto: {dataInformation.horaEntrada} - {dataInformation.horaSalida}</p>
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
      <div className='content_create_bussines'>
        <div className="description__create">
          <h2>Descripción</h2>
          <button onClick={editDescription}>Editar</button>
        </div>
        <div className="bussines__items">
          <h2>Catalogo</h2>
            <div className="items__img">
              {catalogue.map((element, index) => (
              <div key={index} className="content__img__items">
                <div className="text">
                  <h3>{element.nombre}</h3>
                  <p>{element.descripcion}</p>
                  <p id="price"> {element.precio} COP</p>
                </div>
                <img key={index} src={element.itemImage} alt="Item imagen" />
              </div>
          ))}
          </div>
          <button onClick={openItems}>Agregar item</button>
        </div>
      </div>
    </main>
    </>
  )
}
