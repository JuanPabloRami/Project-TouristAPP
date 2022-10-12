import React, { useContext, useState ,useEffect} from "react";
import "./Navbar.css";
import axios from "axios";

//Imagenes
import Logo from "../../images/Logos TouristApp/logo7.png";

//Iconos
import { AiOutlineClose as Close } from "react-icons/ai";
import { BsGeoAlt as Location } from "react-icons/bs";
import {GiHamburgerMenu as Menu }from 'react-icons/gi'

//Componentes
import {Modal} from '../Modal/Modal'
import {Login} from '../Login/Login'
import {Register} from '../Register/Register'
import {Button} from '../../UI/Button/Button'

//Contextos
import {ModalContext} from '../../context/Modal/ModalContext'
import { Dropdown } from "../../UI/Dropdown/Dropdown";

export const Navbar = () => {
  const [menu,setMenu] = useState("close")

  //Uso de contexto
  const { OpenModal,locationState, openLogin,openRegister} = useContext(ModalContext);

  window.addEventListener("scroll", () => {
    const icon = document.querySelector(".logo-touristapp");
    const nav = document.querySelector("nav");
    const services = document.querySelector("#services");
    const menu = document.querySelector(".menu");
    const locationBurger = document.querySelector(".location-burger")
    nav.classList.toggle("down", window.scrollY > 0);
    services.classList.toggle("down", window.scrollY > 0);
    menu.classList.toggle("down", window.scrollY > 0);
    icon.classList.toggle("down", window.scrollY > 0);
    locationBurger.classList.toggle("down", window.scrollY > 0);
    
  });

  //Efecto para esconder la navbar con el scroll
  useEffect(() =>{
    let principal = window.scrollY
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      let actual = window.scrollY
      if (principal >= actual){
        navbar.style.top = "0px"
      }else{
        navbar.style.top = "-90px"
      }
      principal = actual
    });
  },[]);


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

  const openCategory = () =>{
    const dropdown = document.querySelector(".drop__down")
    const bg = document.querySelector(".bg")
    dropdown.style = "display:flex"
    bg.style = "display:block"
  }
  const closeCategory = () =>{
    const dropdown = document.querySelector(".drop__down")
    const bg = document.querySelector(".bg")
    dropdown.style = "display:none"
    bg.style = "display:none"
  }
  return (
    <>
      <nav className="nav" id="navbar">
        <a href='/'>
          <img className="logo-touristapp" src={Logo} alt="touristApp" />
        </a>
        <div id="services">
          <div className="links">
            <ul>
              <a href='/'><li className="list">Inicio</li></a>
              <a href='/'><li className="list">Buscar</li></a>
              <li className="list" onClick={openCategory}>Categoria</li>
            </ul>
            <Dropdown/>
          </div>
          <div className="bg" onClick={closeCategory}></div>
          <div className="location">
            <p onClick={OpenModal}><Location color="red" className="logo-location"/>{`${ locationState ?  locationState:'Seleccione ubicación'}`}</p>
          </div>
          <div className="links">
            <ul>
              <li><span onClick={openRegister}><Button text="Registrate"/></span></li>
              <li><span onClick={openLogin}><Button text="Iniciar sesión"/></span></li>
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
          <a href='/'>
            <img className="logo-touristapp-burger" src={Logo} alt="" />
          </a>
            <li className="list">  <a href='/'>Inicio</a></li>
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