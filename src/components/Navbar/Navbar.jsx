import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../images/logo.webp'
import Lupa from '../images/lupa.png'
import Ubicacion from '../images/ubicacion.png'
 
 export const Navbar = () => {
   return (
     <nav>
      <div className="first">
        <div className="icon">
          <img className="logo" src={Logo} />
          <h1>TouristApp</h1>
        </div>
        <div className="search-places">
          <input className='input-search' type='text' placeholder='¿Que deseas buscar?' />
          <button className='btn-search' type='submit'><img className='img-btn-search' src={Lupa}/></button>
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
      <div className="second">
        <img src={Ubicacion}/>
        <h3>Ubicación: Armenia - Quindío</h3>
      </div>
      <div className="third">
        <p>Acerca de</p>
        <p>Ayuda</p>
      </div>
     </nav>
   )
 }
 