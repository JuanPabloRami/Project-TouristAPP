import React, { useContext, useState ,useEffect} from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";


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
import { Search } from "../../UI/Search/Search";
import { Transition } from "../../UI/Transition/Transition";
import { DropdownUser } from "../../UI/DropdownUser/DropdownUser";
import { Dropdown } from "../../UI/DropdownCategory/Dropdown";
import { Roles } from "../../UI/Roles/Roles"
import {Items} from '../../UI/Items/Items'

//Contextos
import {ModalContext} from '../../context/Modal/ModalContext'
import { TransitionsContext } from "../../context/Transitions/TransitionsContext";
import { ModalSocial } from "../../UI/ModalSocialNetworks/ModalSocial";
import { ModalConfirm } from "../../UI/ModalOfConfirm/ModalConfirm";
import { ModalEdit } from "../../UI/ModalEdit/ModalEdit";
import { EditItems } from "../../UI/ModalEditItems/EditItems";

export const Navbar = () => {
  const [menu,setMenu] = useState("close")

  //Uso de contexto
  const { OpenModal,locationState, openLogin,openRoles} = useContext(ModalContext);

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
  const {switchNav} = useContext(TransitionsContext)

  const newFuction = () =>{
    return(
      localStorage.getItem('token')  ?
        <DropdownUser/>
      :
      localStorage.getItem('categories') ?
        <ul className="login_and_register">
          <li><span onClick={openRoles}><Button text="Registrate"/></span></li>
          <li><span onClick={openLogin}><Button text="Iniciar sesión"/></span></li>
        </ul>
      :
      <ul className="login_and_register">
      <li><span onClick={openRoles}><Button text="Registrate"/></span></li>
      <li><span onClick={openLogin}><Button text="Iniciar sesión"/></span></li>
    </ul>
    )}

  useEffect(()=>{
    newFuction()
  }, [switchNav])
  return (
    <>
      <nav className="nav" id="navbar">
        <Link to='/' >
          <img className="logo-touristapp" src={Logo} alt="touristApp" />
        </Link>
        <div id="services">
          <div className="links">
            <ul className="login_and_register">
            <Link to='/' ><li className="list">Inicio</li></Link>
              <Search/>
              <div className="containerDrop">
              <li  className="listcategories" id="categories">Categorias</li>
                <Dropdown/>
              </div>
            </ul>
          </div>
          <div className="location">
            <p ><Location color="red" className="logo-location"/>{`${ locationState ?  locationState:'Ubicación'}`}</p>
          </div>
          <div className="links">
            {newFuction()}
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
            <li><span onClick={openRoles}>Registro</span></li>
            <li><span onClick={openLogin}>Iniciar sesión</span></li>
          </ul>
        </div>
      </nav>
      <Modal/>
      <Login/>
      <Register/>
      <Roles/>
      <Transition/>
      <Items/>
      <ModalSocial/>
      <ModalConfirm/> 
      <ModalEdit/>
      <EditItems/>
    </>
  );
};
