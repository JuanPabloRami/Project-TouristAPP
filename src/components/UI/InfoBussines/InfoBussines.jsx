import React from 'react'
import './InfoBussines.css'

//imagenes
import Item from '../../images/Profile/profile.jpg'
export const InfoBussines = () => {
  return (
    <>
      <div className="description__profile">
        <h2>Descripción</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat tempore doloribus nam, animi in quaerat eos ipsum commodi ex quos, praesentium quibusdam eaque deserunt? Eius consectetur nisi quisquam! Inventore?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum soluta numquam nulla quos eum quia saepe dignissimos sit. Dolorum ad distinctio vero atque labore neque possimus sapiente minima iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat tempore doloribus nam, animi in quaerat eos ipsum commodi ex quos, praesentium quibusdam eaque deserunt? Eius consectetur nisi quisquam! Inventore?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum soluta numquam nulla quos eum quia saepe dignissimos sit. Dolorum ad distinctio vero atque labore neque possimus sapiente minima iste.
        </p>
        <div className="bussines__items">
          <h2>Catalogo</h2>
          <div className="items__img">
            <div className="content__img__items">
              <p>McDonald's</p>
              <img src={Item} alt="Item imagen"/>
            </div>
            <div className="content__img__items">
              <p>McDonald's</p>
              <img src={Item} alt="Item imagen"/>
            </div>
            <div className="content__img__items">
              <p>McDonald's</p>
              <img src={Item} alt="Item imagen"/>
            </div>
            <div className="content__img__items">
              <p>McDonald's</p>
              <img src={Item} alt="Item imagen"/>
            </div>
            <div className="content__img__items">
              <p>McDonald's</p>
              <img src={Item} alt="Item imagen"/>
            </div>
            <div className="content__img__items">
              <p>McDonald's</p>
              <img src={Item} alt="Item imagen"/>
            </div>
            <div className="content__img__items">
              <p>McDonald's</p>
              <img src={Item} alt="Item imagen"/>
            </div>
            <div className="content__img__items">
              <p>McDonald's</p>
              <img src={Item} alt="Item imagen"/>
            </div>
            <div className="content__img__items">
              <p>McDonald's</p>
              <img src={Item} alt="Item imagen"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
