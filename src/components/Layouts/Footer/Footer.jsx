import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

//Imagenes
import Logo from '../../images/Logos TouristApp/logo5.png'

//Iconos
import {
  FaFacebook as IconFacebook,
  FaYoutube as IconYoutube,
  FaHandsHelping as Help
} from "react-icons/fa";
import {
  HiUserGroup as AboutUs,
  HiClipboardList as Terms
} from 'react-icons/hi'
import {
  IoDocumentLock as Privacy
} from 'react-icons/io5'
import {
  BsTwitter as IconTwitter,
  BsGithub as IconGithub,
} from "react-icons/bs";


export const Footer = () => {
  return (
    <footer>
      <div className="services">
        <div className="logoFooter">
          <img src={Logo} alt="Logo" />
          <h2>Tourist<span className='app'>App</span></h2>
        </div>
            <a href='/AboutUs'>
              <p> <AboutUs size='10%'/> Sobre Nosotros</p>
            </a >
            <a  href='/'>
              <p> <Terms size='10%'/>Terminos y condiciones</p>
            </a>
            <a  href='/'>
              <p> <Privacy size='10%'/>Politica de privacidad</p>
            </a>
            <a  href='/'>
              <p> <Help size='10%'/>Centro de ayuda</p>
            </a>
      </div>
      <hr></hr>
      <div className="follow">
        <div className="icons">
          <a className='img-icon' href="#"><IconFacebook size='70%'/></a>
          <a className='img-icon' href="#"><IconGithub size='70%'/></a>
          <a className='img-icon' href="#"><IconTwitter size='70%'/></a>
          <a className='img-icon' href="#"><IconYoutube size='70%'/></a>
        </div>
        <p>© Tourist App, 2022.<br></br>
        Dev Group, Armenia - Quindio - Teléfono: (57) 3012117531</p>
      </div>
    </footer>
  )
}
