import React, { useContext, useState } from "react";
import {ModalContext} from '../../context/Modal/ModalContext'
import "./Navbar.css";

//Imagenes
import Logo from "../../images/Logos TouristApp/logo6.png";

//Iconos
import { AiOutlineClose as Close } from "react-icons/ai";
import { BsGeoAlt as Location } from "react-icons/bs";
import {GiHamburgerMenu as Menu }from 'react-icons/gi'

//Componentes
import {Modal} from '../Modal/Modal'
import {Login} from '../Login/Login'
import {Register} from '../Register/Register'

export const Navbar = () => {
  const [menu,setMenu] = useState("close")

  //Uso de contexto
  const { OpenModal,locationState, openLogin,openRegister} = useContext(ModalContext);

  window.addEventListener("scroll", () => {
    const icon = document.querySelector(".logo-touristapp");
    const nav = document.querySelector("nav");
    const services = document.querySelector("#services");
    const menu = document.querySelector(".menu");
    nav.classList.toggle("down", window.scrollY > 0);
    services.classList.toggle("down", window.scrollY > 0);
    menu.classList.toggle("down", window.scrollY > 0);
    icon.classList.toggle("down", window.scrollY > 0);
  });


  const burgerMenu = () => {
    const menuActive = menu === 'close'
    ? setMenu("active")
    : setMenu("close");
    return menuActive
  }

  const iconMenu = () => {
    const menuIcon = menu === 'close'
    ? <Menu/>
    :<Close/>
    return menuIcon
  }

  return (
    <>
      <nav className="nav">
        <img className="logo-touristapp" src={Logo} alt="touristApp" />
        <div id="services">
          <div className="links">
            <ul>
              <li className="list">Inicio</li>
              <li className="list">Buscar</li>
              <li className="list">Servicios</li>
            </ul>
          </div>
          <div className="location">
            <p onClick={OpenModal}><Location color="red" className="logo-location"/>{`${ locationState ?  locationState:'Seleccione ubicación'}`}</p>
          </div>
          <div className="links ">
            <ul>
              <li><span onClick={openRegister}>Registraté</span></li>
              <li><span onClick={openLogin}>Inicia sesión</span></li>
            </ul>
          </div>
        </div>
        
        {/*Menu hamburguesa*/}
        <div className="location-burger">
            <p onClick={OpenModal}><Location color="red" className="logo-location"/>{`${ locationState ?  locationState:'Seleccione ubicación'}`}</p>
          </div>

        <div onClick={burgerMenu} className="menu">
          {iconMenu()}
        </div>
        <div className={`menu-${menu}`} id="menu-active" >
          <ul className="services-menu">
            <img className="logo-touristapp-burger" src={Logo} alt="" />
            <li className="list">Inicio</li>
            <li className="list">Buscar</li>
            <li className="list">Servicios</li>
            <li><span onClick={openRegister}>Registro</span></li>
            <li><span onClick={openLogin}>Iniciar sesión</span></li>
          </ul>
        </div>
      </nav>
      <Modal/>
      <Login/>
      <Register/>
    </>
  );
};
