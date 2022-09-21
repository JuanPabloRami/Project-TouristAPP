import React, { useContext, useState } from "react";
import {ModalContext} from '../../context/Modal/ModalContext'
import { Link } from "react-router-dom";
import "./Navbar.css";

//Imagenes
import Logo from "../../images/Logos TouristApp/logo6.png";

//Iconos
import { AiOutlineSearch as Lupa } from "react-icons/ai";
import { BsGeoAlt as Location } from "react-icons/bs";

//Componentes
import {Modal} from '../../Layouts/Modal/Modal'

export const Navbar = () => {

  const { OpenModal,locationState} = useContext(ModalContext);

  

  window.addEventListener("scroll", () => {
    const componentIcon = document.querySelector(".logo");
    const nav = document.querySelector(".first");
    const componentSecond = document.querySelector(".second");
    const componentThird = document.querySelector(".third");
    nav.classList.toggle("down", window.scrollY > 0);
    componentSecond.classList.toggle("down", window.scrollY > 0);
    componentThird.classList.toggle("down", window.scrollY > 0);
    componentIcon.classList.toggle("down", window.scrollY > 0);
  });

  return (
    <>
      <nav>
        <div className="first">
          <div className="icon">
            <a href="/">
              <img className="logo" src={Logo} alt='Logotipo TouristApp'/>
            </a>
          </div>
          <div className="second">
            <div className="search-accounts">
              <div className="search-places">
                <span className="icon-search">
                  <Lupa />
                </span>
                <input
                  className="input-search"
                  type="text"
                  placeholder="¿Que deseas buscar?"
                />
              </div>
              <div className="location">
                <span className="location-img">
                  <Location />
                </span>
                <h3 onClick={OpenModal}>{`${ locationState ?  locationState:'Ubicacion..'}`}</h3>
              </div>
              <ul className="dropdown-menu">
                <li>
                  <p className="accounts">¿Ya tienes cuenta?</p>
                  <ul className="vertical-menu">
                    <li>
                      <Link to="/login">Inicia sesión</Link>
                    </li>
                    <li>
                      <Link to="/register">Registrate</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="third">
          <span className="location-img">
            <Location />
          </span>
          <h3>Armenia - Quindío</h3>
        </div>
      </nav>
      <Modal/>
    </>
  );
};
