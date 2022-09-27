import React from 'react'
import './Profile.css'

//Imagenes
import Portada from '../../images/Profile/portada.jpg'
import ProfileImg from '../../images/Profile/profile.jpg'
import Owner from '../../images/Profile/owner.jpg'
import Catergory from '../../images/Profile/category.png'
import { Products } from '../../UI/Products of Business/Products'

//React Icons
import {GrFormView as Views} from 'react-icons/gr'
import {AiFillLike as Like} from 'react-icons/ai'

export const Profile = () => {
  return (
    <>
    {/* Portada y perfil del negocio*/}
    <div className="images-profile">
      <div className="img-front-page">
        <img src={Portada}/>
      </div>
      <div className="description-profile">
        <img className='img-profile' src={ProfileImg}/>
        <h3 className='name-business'>MOOI</h3>
        <div className="category">
          <img src={Catergory} alt='Category'/>
          <h3>Madera</h3>
        </div>
        <h3 className="views"><Views className='logo-views'/>100 vistas</h3>
        <h3 className="likes"><Like className='logo-likes'/>100 likes</h3>
      </div>
    </div>

    {/*Descripcion del negocio*/}
    <div className="description-business">
      <div className="content-letters">
        <h1>Descripción</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, omnis. Ab sint mollitia maxime deleniti fugit quo in consectetur aliquid illo minus. Deserunt nesciunt consequuntur odio? Alias facilis molestias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus. Odit, ex laborum tempora neque consequatur, eligendi ratione et esse eos possimus blanditiis numquam aut aliquam porro nobis id animi?</p>
      </div>
      <div className="content-items">
        <Products/>
      </div>
    </div>

    <div className="business-owner-card">
      <h2>Datos de contacto</h2>
      <img className='img-owner' src={Owner}/>
      <h3>Hernesto Carrillo</h3>
      <div className="contact-data">
      </div>
    </div>
    </>
  )
}
