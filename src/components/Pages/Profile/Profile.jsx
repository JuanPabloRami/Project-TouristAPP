import React from 'react'
import './Profile.css'
//Imagenes
import Account from '../../images/Profile/profile.jpg'
import FrontPage from '../../images/Profile/frontPage.jpg'

export const Profile = () => {
  return (
    <>
    <div className="account__images">
      <div className="front__page">
        <img src={FrontPage} alt='portada'/>
      </div>
      <div className="profile__img">
        <img src={Account} alt='perfil'/>
      </div>
      <div className="description__account">
        <h1>McDonald's</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit quisquam blanditiis totam ea voluptas labore dolorem officiis possimus! Dolores corporis dolorum molestias! Eos quas nisi voluptatibus cupiditate velit inventore.</p>
      </div>
    </div>
    <main>
      <div className="coments">
        <h2>Comentarios</h2>
      </div>
      <div className="description__profile">
        <h2>Descripción</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat tempore doloribus nam, animi in quaerat eos ipsum commodi ex quos, praesentium quibusdam eaque deserunt? Eius consectetur nisi quisquam! Inventore?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum soluta numquam nulla quos eum quia saepe dignissimos sit. Dolorum ad distinctio vero atque labore neque possimus sapiente minima iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat tempore doloribus nam, animi in quaerat eos ipsum commodi ex quos, praesentium quibusdam eaque deserunt? Eius consectetur nisi quisquam! Inventore?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum soluta numquam nulla quos eum quia saepe dignissimos sit. Dolorum ad distinctio vero atque labore neque possimus sapiente minima iste.
        </p>
      </div>
    </main>
    </>
  )
}
