import React from "react";
import "./AddBusiness.css";

//Componentes
import { ModalContext } from "../../context/Modal/ModalContext";
//Imagenes
import AddImagen from "../../images/Title/addBusiness.jpg";
import { useContext } from "react";

export const AddBusiness = () => {
  const { openRoles } = useContext(ModalContext);
  return (
    <>
      <div className="add__business">
        <div className="add__description">
          <h1>Agrega tu negocio</h1>
          <p>
            Crear tu negocio en TouristApp, te ayudara a que miles de personas
            conozcan tu emprendimiento, te visiten y compartan su experiencia
            con tus servicios, obtendrás un posicionamiento que
            indicara que tan satisfechos están los usuarios.TouristApp conlleva
            aumentar la popularidad y el comercio de tu negocio.
          </p>
          <button onClick={openRoles}>Crea tu negocio</button>
        </div>
        <div className="container__addImage">
          <img className="img__add" src={AddImagen} alt="Add" />
        </div>
      </div>
    </>
  );
};
