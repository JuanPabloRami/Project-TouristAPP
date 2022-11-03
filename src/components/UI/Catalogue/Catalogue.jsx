import React, {useContext, useEffect, useState} from 'react'
import { CatalogueContext } from '../../context/Catalogue/CatalogueContext'
import './Catalogue.css'

//icons
import { ModalContext } from '../../context/Modal/ModalContext'

export const Catalogue = () => {
  const {itemImage,catalogue} = useContext(CatalogueContext)
  const {openItems} = useContext(ModalContext)

  return (
    <>
      <div className="bussines__items">
        <h2>Catalogo</h2>
        <div className="items__img">
          <div className="content__img__items">
            <div className="text">
              <h3>{catalogue.nombre}</h3>
              <p>{catalogue.descripcion}</p>
              <p id='price'> {catalogue.precio} COP</p>
            </div>
            <img src={itemImage} alt="Item imagen"/>
          </div>
        </div>
        <button onClick={openItems}>Agregar item</button>
      </div>
    </>
  )
}
