import React from "react";
import './Cards.css'



export const Cards = ({image, owner, description, title,city}) => {
  
  return (
    <div className="card">
      <div className="img__owner__business">
        <h3 className="owner__name">Alberto</h3>
        <img src={owner} alt="img" />
      </div>
      <div className="container__img">
        <img className="img__business" src={image} alt="img" />
      </div>
      <div className="card__description">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{city}</p>
        <button>Ver más</button>
      </div>
    </div>
  );
};
