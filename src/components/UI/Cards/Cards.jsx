import React from "react";
import './Cards.css'
import { BsGeoAlt as Location } from "react-icons/bs";
import {BiCategoryAlt as Category} from 'react-icons/bi'



export const Cards = ({image, owner, description, title,ciudad,departamento,category}) => {
  
  return (
    <div className="card">
      <div className="img__owner__business">
        <img src={owner} alt="img" />
      </div>
      <div className="container__img">
        <img className="img__business" src={image} alt="img" />
      </div>
      <div className="card__description">
        <h2>{title}</h2>
          <p><Location color="red" />{ciudad} - {departamento}</p>
          <p className="category_p"> <Category color='#8a9401' />{category}</p>
        <p>{description}</p>
        
        <button>Ver más</button>
      </div>
    </div>
  );
};
