import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../images/logo.webp'
import { AiOutlineSearch } from "react-icons/ai";
import { BsGeoAlt } from "react-icons/bs";
 
 export const Navbar = () => {

 
  window.addEventListener("scroll", function(){
    const nav = document.querySelector(".first");
    const componentSecond = document.querySelector(".second");
    const componentThird = this.document.querySelector(".third");
    nav.classList.toggle("abajo",window.scrollY>0);
    componentSecond.classList.toggle("abajo",window.scrollY>0);
    componentThird.classList.toggle("abajo",window.scrollY>0);
    // if (window.scrollY>0) {
    //   componentThird.style.display = "flex"
    //   componentSecond.style.display = "block"
    // } else {
    //   componentThird.style.display = "none"
    //   componentSecond.style.display = "none"
    // }
  })

 

   return (
     <nav>
      <div className="first">
        <div className="icon">
          <img className="logo" src={Logo} />
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
            <h3>Ubicación: Armenia - Quindío</h3>
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
        <p>Acerca de</p>
        <p>Ayuda</p>
      </div>
     </nav>
   )
 }
 