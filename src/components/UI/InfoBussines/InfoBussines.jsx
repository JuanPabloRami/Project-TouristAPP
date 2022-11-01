import React from 'react'
import './InfoBussines.css'

//imagenes
import Item from '../../images/Profile/profile.jpg'
import { Description } from '../Description/Description'
export const InfoBussines = () => {
  return (
    <>
      <div className="description__profile">
        <Description/>
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
