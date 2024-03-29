import React, { useContext, useState ,useEffect} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
//Imagenes
import Logo from "../../images/Logos TouristApp/logo7.png";
//Iconos
import { BsGeoAlt as Location } from "react-icons/bs";
import {BiDownArrow as Arrow} from 'react-icons/bi'
import {AiOutlineClose as Close} from 'react-icons/ai'
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
import { TranslationContext } from "../../context/Translation/TranslationContext";
import { useTranslation } from "react-i18next";

export const Navbar = () => {

  //Uso de contexto
  const {locationState, openLogin,openRoles} = useContext(ModalContext);
  const {switchNav} = useContext(TransitionsContext)

  //traduccion multiidioma
  const localLang = localStorage.getItem("lang")
  const {language} = useContext(TranslationContext)
  const [t,i18n] = useTranslation("global")
  useEffect(() => {
    i18n.changeLanguage(localLang);
  }, [language])
  //fin traduccion

  const newFuction = () =>{
    return(
      localStorage.getItem('token')  ?
        <DropdownUser/>
      :
      localStorage.getItem('categories') ?
        <ul className="login_and_register">
          <li><span onClick={openRoles}><Button text={t("layouts.navbar.register")}/></span></li>
          <li><span onClick={openLogin}><Button text={t("layouts.navbar.login")}/></span></li>
        </ul>
      :
      <ul className="login_and_register">
      <li><span onClick={openRoles}><Button text={t("layouts.navbar.register")}/></span></li>
      <li><span onClick={openLogin}><Button text={t("layouts.navbar.login")}/></span></li>
    </ul>
    )}

    const newFuctionResponsive = () =>{
      return(
        localStorage.getItem('token')  ?
          <DropdownUser/>
        :
        localStorage.getItem('categories') ?
          <>
            <li><span onClick={openRoles}><Button text={t("layouts.navbar.register")}/></span></li>
            <li><span onClick={openLogin}><Button text={t("layouts.navbar.login")}/></span></li>
          </>
        :
        <>
        <li><span onClick={openRoles}><Button text={t("layouts.navbar.register")}/></span></li>
        <li><span onClick={openLogin}><Button text={t("layouts.navbar.login")}/></span></li>
      </>
      )}

  useEffect(()=>{
    newFuction()
  }, [switchNav])

  const [openNavbar,setOpenNavbar] = useState(false)

  const changeIcons = () =>{
    if(!openNavbar){
      return (
        <Arrow className="icon"  onClick={openNav}/>
      )
    }else{
      return(
        <Close className="icon_close"  onClick={closeNav}/>
      )
    }
  }

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
            <Link to='/' ><li className="list">{t("layouts.navbar.home")}</li></Link>
              <Search/>
              <div className="containerDrop">
              <li  className="listcategories" id="categories">{t("layouts.navbar.categories")}</li>
                <Dropdown/>
              </div>
            </ul>
          </div>
          <div className="location">
            <p ><Location color="red" className="logo-location"/>{`${ locationState ?  locationState:t("layouts.navbar.location")}`}</p>
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
          <p ><Location color="red" className="logo-location"/>{`${ locationState ?  locationState:t("layouts.navbar.location")}`}</p>
        </div>
        {changeIcons()}
      </nav>
      <div className={`navigator ${openNavbar ?  'open':'close'}`}>
          <div id="services">
            <div className="links">
              <ul className="login_and_register">
              <Link to='/' ><li className="list">{t("layouts.navbar.home")}</li></Link>
                <Search/>
                <div className="containerDrop">
                <li  className="listcategories" id="categories">{t("layouts.navbar.categories")}</li>
                  <Dropdown/>
                </div>
              </ul>
            </div>
            <div className="links">
              {newFuction()}
            </div>
          </div>
        </div>

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
