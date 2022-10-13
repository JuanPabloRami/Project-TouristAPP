import React from 'react'
import './Profile.css'
//Imagenes
import Account from '../../images/Profile/profile.jpg'
import FrontPage from '../../images/Profile/frontPage.jpg'
//componentes
import {Coments} from '../../UI/Coments/Coments'
import { InfoBussines } from '../../UI/InfoBussines/InfoBussines'
//icons
import {FaFacebook as IconFacebook,} from "react-icons/fa";
import {BsInstagram as IconInstagram} from 'react-icons/bs'
import {TbWorld as IconNetwork} from 'react-icons/tb'
import {MdEmail as IconEmail} from 'react-icons/md'
import {MdLocationPin as IconLocation} from "react-icons/md";
import {AiFillLike as Heart} from 'react-icons/ai'

export const Profile = () => {
  return (
    <>
    <div className="account__images">
      <div className="front__page">
        <img src={FrontPage} alt='portada'/>
      </div>
      <div className="profile__img">
        <img src={Account} alt='perfil'/>
      </div>
      <div className="description__account">
        <h1>McDonald's</h1>
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
      </div>
      <button className='btn_like_bussines'> <Heart/> 100</button>
    </div>
    <main>
      <Coments/>
      <InfoBussines/>
    </main>
    </>
  )
}
