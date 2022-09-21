import React from "react";
import './Cards.css'

//imagenes
import Unicentro from "../../images/BussinesCard/uni.jpeg";

export const Cards = () => {
  return (
    <div className="card">
      <img className="img-card" src={Unicentro} alt="SIUUU" />
      <div className="title-card">
        <p className="t-stroke t-shadow">Unicentro</p>
      </div>
      <div className="card-description">
        <div className="titles">
          <h2>Unicentro</h2>
          <p>
            <b className="cetegory">Categoria:</b> comercio
          </p>
        </div>
        <p className="description-bussines">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          quod ullam dolorum sed assumenda, quis dolorem corporis atque rem
          earum aspernatur repellat tenetur dolore iste voluptatibus minus fuga
          blanditiis eligendi.
        </p>
        <button>Ver más</button>
      </div>
    </div>
  );
};
