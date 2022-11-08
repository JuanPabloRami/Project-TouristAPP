import './SocialNetworks.css'
import { useContext } from 'react'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'

//icons
import {BsPlusSquareFill as Plus} from 'react-icons/bs'
import { ModalContext } from '../../context/Modal/ModalContext'
// import {FaFacebook as IconFacebook,} from "react-icons/fa";
// import {BsInstagram as IconInstagram} from 'react-icons/bs'
// import {TbWorld as IconNetwork} from 'react-icons/tb'
// import {MdEmail as IconEmail} from 'react-icons/md'
// import {MdLocationPin as IconLocation} from "react-icons/md";


export const SocialNetworks = () => {

  const {setTextName,textName,setNameBusiness,nameBusiness} = useContext(CreateBussinesContext)
  const {openSocial} = useContext(ModalContext)

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
          <button onClick={openSocial}>Más opciones <Plus/></button>
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