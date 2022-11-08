import './SocialNetworks.css'
import { useContext } from 'react'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import { InformationBusinessContext } from '../../context/InformationBusiness/InformationBusinessContext'

//icons
import {BsPlusSquareFill as Plus} from 'react-icons/bs'
import {FaFacebook as IconFacebook,} from "react-icons/fa";
import {MdEmail as IconEmail} from 'react-icons/md'
import {MdLocationPin as IconLocation} from "react-icons/md";


export const SocialNetworks = () => {

  const {setTextName,textName,setNameBusiness,nameBusiness} = useContext(CreateBussinesContext)
  const {openSocial,dataInformation,buttonInfo} = useContext(InformationBusinessContext)

  const getText = (event) =>{
    const text = event.target.value
    setTextName(text) 
    if (event.keyCode === 13) {
      setNameBusiness(true)
    }
  }

  const showName = () =>{
    setNameBusiness(true)
  }

  const editName = () =>{
    setNameBusiness(false)
  }

  return (
    <>
      <div className="content_creating">
        <div className="create_nameBusiness">
          {nameBusiness ?
            <>
              <h1>{textName}</h1>
              <button onClick={editName}>Editar</button>
            </>
          :
            <>
              <input defaultValue={textName} type='text' placeholder='Escribe el nombre del negocio' maxLength='35' onChange={getText} onKeyUp={getText}/>
              <button onClick={showName}>Guardar</button>
            </>
          }
        </div>
        <div className="more_optiones">
          {buttonInfo ?
            <div className="information_business">
              <div className="information_import">
                <p><IconLocation className='icon l'/>{dataInformation.ubicacion} {dataInformation.locationState}</p>
                <p><IconEmail className='icon e'/>{dataInformation.contactEmail}</p>
                <p><IconFacebook className='icon f'/>@{dataInformation.contactFacebook}</p>
              </div>
              <div className="schedule">
              <div className="state"></div>
                <p>Abierto: {dataInformation.horaEntrada} - {dataInformation.horaSalida}</p>
              </div>
              <button onClick={openSocial}>Editar</button>
            </div>
            :
            <button onClick={openSocial}>Más opciones <Plus/></button>
          }
        </div>
      </div>
    </>
  )
}


{/* <div className="description__account">
<input type='text' placeholder='Escribe el nombre del negocio'/>
<div className="socials__networks__bussines">
  <a href="#"><IconFacebook className='icon_social f'/></a>
  <a href="#"><IconInstagram className='icon_social i'/></a>
  <a href="#"><IconNetwork className='icon_social n'/></a>
  <a href="#"><IconEmail className='icon_social e'/></a>
  <a href="#"><IconLocation className='icon_social l'/></a>
  <div className="bussines__state">
    <div className="state"></div>
    <p>Abierto: 10:00:00 - 18:00:00</p>
  </div>
</div>
</div> */}