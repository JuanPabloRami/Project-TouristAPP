import React from "react";
import './Cards.css'



export const Cards = ({image,owner}) => {
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
        <h2>Business</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus asperiores illo voluptatibus dolorum laboriosam accusamus quas libero odio ex! Labore distinctio minus iste voluptatum voluptas ut cupiditate eos culpa saepe!</p>
        <button>Ver más</button>
      </div>
    </div>
  );
};
