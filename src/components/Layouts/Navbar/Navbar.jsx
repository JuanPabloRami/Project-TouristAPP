import React, { useContext, useState ,useEffect} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
//Imagenes
import Logo from "../../images/Logos TouristApp/logo7.png";
//Iconos
import { BsGeoAlt as Location } from "react-icons/bs";
import {BiDownArrow as Arrow} from 'react-icons/bi'
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
import { SelectLanguage } from "../../UI/SelectLanguage/SelectLanguage";

//Contextos
import {ModalContext} from '../../context/Modal/ModalContext'
import { TransitionsContext } from "../../context/Transitions/TransitionsContext";
import { ModalSocial } from "../../UI/ModalSocialNetworks/ModalSocial";
import { ModalConfirm } from "../../UI/ModalOfConfirm/ModalConfirm";
import { ModalEdit } from "../../UI/ModalEdit/ModalEdit";
import { EditItems } from "../../UI/ModalEditItems/EditItems";
import { ConfirmDel } from "../../UI/ModalConfirmDel/ConfirmDel";

export const Navbar = () => {

  //Uso de contexto
  const {locationState, openLogin,openRoles} = useContext(ModalContext);
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

    const newFuctionResponsive = () =>{
      return(
        localStorage.getItem('token')  ?
          <DropdownUser/>
        :
        localStorage.getItem('categories') ?
          <>
            <li><span onClick={openRoles}><Button text="Registrate"/></span></li>
            <li><span onClick={openLogin}><Button text="Iniciar sesión"/></span></li>
          </>
        :
        <>
        <li><span onClick={openRoles}><Button text="Registrate"/></span></li>
        <li><span onClick={openLogin}><Button text="Iniciar sesión"/></span></li>
      </>
      )}

  useEffect(()=>{
    newFuction()
  }, [switchNav])

  const [openNavbar,setOpenNavbar] = useState(false)

  const openNav = () =>{
    setOpenNavbar(true)
  }

  const closeNav = () =>{
    setOpenNavbar(false)
  }

  return (
    <>
      <nav className="nav down" id="navbar">
        <Link to='/' >
          <img className="logo-touristapp down" src={Logo} alt="touristApp" />
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
      </nav>

      <nav className="navbar_responsive">
        <Link to='/' >
          <img className="logo-touristapp down" src={Logo} alt="touristApp" />
        </Link>
        <div className="location">
          <p ><Location color="red" className="logo-location"/>{`${ locationState ?  locationState:'Ubicación'}`}</p>
        </div>
        <Arrow className="icon"  onClick={openNav}/>
        <div className={`navigator ${openNavbar ?  'open':'close'}`}>
          <div id="services">
            <h2 onClick={closeNav} className="close_navbar">X</h2>
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
            <div className="links">
              {newFuction()}
            </div>
          </div>
        </div>
      </nav>
      <SelectLanguage/>


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
      <ConfirmDel/>
    </>
  );
};
