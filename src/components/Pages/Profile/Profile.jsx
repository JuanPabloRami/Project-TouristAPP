import React from 'react'
import './Profile.css'
//Imagenes
import Account from '../../images/Profile/profile.jpg'
import FrontPage from '../../images/Profile/frontPage.jpg'
//componentes
import {Coments} from '../../UI/Coments/Coments'
import { NewBussines } from '../../UI/InfoBussines/InfoBussines'
import { CreateBussines } from '../../UI/CreateBussines/CreateBussines'
import { SocialNetworks } from '../../UI/SocialNetworks/SocialNetworks'
//icons
import {FaFacebook as IconFacebook,} from "react-icons/fa";
import {BsInstagram as IconInstagram} from 'react-icons/bs'
import {TbWorld as IconNetwork} from 'react-icons/tb'
import {MdEmail as IconEmail} from 'react-icons/md'
import {MdLocationPin as IconLocation} from "react-icons/md";
import {AiFillLike as Heart} from 'react-icons/ai'
import {BsCameraFill as Cam} from 'react-icons/bs'
import { CatalogueContext } from '../../context/Catalogue/CatalogueContext'
import { useContext } from 'react'


export const Profile = () => {
  const {uploadImageProfile,uploadImagePort,imageProfile,imagePort} = useContext(CatalogueContext)
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
      <button className='btn_like_bussines'> <Heart/> 100</button>
    </div>
    <main>
      <Coments/>
      {/* <NewBussines/>  */}
      <CreateBussines/>
    </main>
    </>
  )
}
