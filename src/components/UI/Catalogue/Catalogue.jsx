import React, { useContext, useEffect, useState } from "react";
import { CatalogueContext } from "../../context/Catalogue/CatalogueContext";
import "./Catalogue.css";

//icons
import { ModalContext } from "../../context/Modal/ModalContext";

export const Catalogue = () => {
  const {catalogue } = useContext(CatalogueContext);
  const { openItems } = useContext(ModalContext);

  return (
    <>
      <div className="bussines__items">
        <h2>Catalogo</h2>
          <div className="items__img">
            {catalogue.map((element, index) => (
            <div key={index} className="content__img__items">
              <div className="text">
                <h3>{element.nombre}</h3>
                <p>{element.descripcion}</p>
                <p id="price"> {element.precio} COP</p>
              </div>
              <img key={index} src={element.itemImage} alt="Item imagen" />
            </div>
        ))}
        </div>
        <button onClick={openItems}>Agregar item</button>
      </div>
    </>
  );
};
