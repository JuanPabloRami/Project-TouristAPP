import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../images/Navbar/logo.webp'
import { AiOutlineSearch } from "react-icons/ai";
import { BsGeoAlt } from "react-icons/bs";


export const Navbar = () => {

  window.addEventListener("scroll", () => {
    const componentIcon = document.querySelector(".logo");
    const nav = document.querySelector(".first");
    const componentSecond = document.querySelector(".second");
    const componentThird = document.querySelector(".third");
    nav.classList.toggle("abajo",window.scrollY>0);
    componentSecond.classList.toggle("abajo",window.scrollY>0);
    componentThird.classList.toggle("abajo",window.scrollY>0);
    componentIcon.classList.toggle("abajo",window.scrollY>0);
  });

    return (
      <nav>
      <div className="first">
      
        <div className="icon">
          <Link to='/'>
            <img className="logo" src={Logo} />
          </Link>
          <h1>TouristApp</h1>
        </div>
      
        <div className="second">
          <div className="search-accounts">
            <div className="search-places">
              <span className="icon-search"><AiOutlineSearch/></span>
              <input className='input-search' type='text' placeholder='¿Que deseas buscar?' />
          </div>
          <div className="location">
            <span className='location-img'><BsGeoAlt/></span>
            <h3>Armenia - Quindío</h3>
          </div>
          <ul className='dropdown-menu'>
            <li>
              <p className='accounts'>¿Ya tienes cuenta?</p>
              <ul className='vertical-menu'>
                <li><Link to='/login'>Inicia sesión</Link></li>
                <li><Link to='/register'>Registrate</Link></li> 
              </ul>
            </li>
          </ul>
          </div>
        </div>
      </div>
        
      <div className="third">
        <span className='location-img'><BsGeoAlt/></span>
        <h3>Armenia - Quindío</h3>
      </div>
     </nav>
   )
 }
 