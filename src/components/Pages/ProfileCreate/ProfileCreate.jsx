import React from 'react'
import './ProfileCreate.css'
//Imagenes
import Account from '../../images/Profile/profile.jpg'
import FrontPage from '../../images/Profile/frontPage.jpg'
//componentes
import {Coments} from '../../UI/Coments/Coments'
import { CreateBussines } from '../../UI/CreateBussines/CreateBussines'
import { SocialNetworks } from '../../UI/SocialNetworks/SocialNetworks'
//icons
import {BsCameraFill as Cam} from 'react-icons/bs'
import { useContext } from 'react'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import { Navigate } from 'react-router-dom'
import { ComentsEmpty } from '../../UI/Coments/ComentsEmpty'


export const ProfileCreate = () => {
  const {setUpdateDrop,updateDrop,uploadImageProfile,uploadImagePort,imageProfile,imagePort,showBtnItem} = useContext(CreateBussinesContext)
  const {setModalConfirm} = useContext(CreateBussinesContext)


  const openModal = () =>{
    setModalConfirm(true)
  }

  if(updateDrop){
    setUpdateDrop(false)
    return <Navigate to='/minegocio'/>
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
      <SocialNetworks/>
      {showBtnItem ?
        <></>
        :
        <button onClick={openModal} className='btn_like_bussines'>Crear negocio</button>
        }
    </div>
    <main>
      <ComentsEmpty/>
      <CreateBussines/>
    </main>
    </>
  )
}
