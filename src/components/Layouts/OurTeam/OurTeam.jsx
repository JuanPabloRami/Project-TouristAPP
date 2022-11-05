import React from "react";
import "./OurTeam.css";
import Holi from "../../images/OurTeam/Holi.png"
import Jupa from "../../images/OurTeam/Jupa.png"
import Polez from "../../images/OurTeam/Polez.png"

export const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="linea"></div>
      <h1>Equipo</h1>
      <div className="about-us">
        <div className="photo one">
        <img src={Polez} alt="" />
          <p>FRONT-END DEVELOPER</p>
          
        </div>
        <div className="photo two">
          <img src={Holi} alt="" />
          <p>BACK-END DEVELOPER</p>
        </div>
        <div className="photo three">
        <img src={Jupa} alt="" />
          <p>BACK-END DEVELOPER</p>
        </div>
      </div>
    </div>
  );
};
