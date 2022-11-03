//icons
import {FaFacebook as IconFacebook,} from "react-icons/fa";
import {BsInstagram as IconInstagram} from 'react-icons/bs'
import {TbWorld as IconNetwork} from 'react-icons/tb'
import {MdEmail as IconEmail} from 'react-icons/md'
import {MdLocationPin as IconLocation} from "react-icons/md";
import {AiFillLike as Heart} from 'react-icons/ai'

export const SocialNetworks = () => {
  return (
    <>
      <div className="description__account">
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
      </div>
    </>
  )
}
