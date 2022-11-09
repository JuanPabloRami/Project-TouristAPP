import React from "react";
import "./ComentsStars.css";

//imagenes
import Logo from "../../images/Logos TouristApp/logo7.png";
import Portada from "../../images/Home/portada.jpg";
import Account from "../../images/Logos TouristApp/logo5.png";
import Menu from "../../images/Home/imgIpad.jpg";

//Icons
import { BiLike as Like } from "react-icons/bi";
import { BsHandIndexThumb as Hand } from "react-icons/bs";
import { useState } from "react";

export const ComentsStars = () => {
  const [like, setlike] = useState(10);

  const incrementLikes = () => {
    return setlike(like + 1);
  };

  return (
    <>
      <div className="content__coments">
        <div className="border__ipad">
          <div className="content__ipad">
            <div className="navbar_ipad">
              <img src={Logo} alt="logo" />
            </div>
            <div className="header__ipad">
              <img className="img__ipad" src={Portada} alt="portada" />
              <div className="profile_img">
                <img className="account_img_ipad" src={Account} alt="account" />
              </div>
              <div className="description_account_ipad">
                <h2>Valle cocora</h2>
                <div className="content__likes">
                  <Like className="icon_likes" />
                  <h3>{like}</h3>
                </div>
              </div>
            </div>
            <div className="section__ipad">
              <div className="coments__ipad">
                <h2>Comentarios</h2>
                <p>
                  El Valle es hermoso, lo primero que tienes que hacer es llegar
                  temprano, tipo 7.30am así evitas la cantidad de personas que
                  visitan el lugar. Puedes ir carro y parquear en el último
                  lugar del camino que es gratuito o en los parqueaderos de la
                  entrada que igual son económicos de 2USD a 3USD todo el día.
                </p>
              </div>
              <div className="description_ipad">
                <h2>Catalogo</h2>
                <img className="img__menu" src={Menu} alt="menu" />
                <p>
                  Dasafortunadamente no nos fué bien en el almuerzo, enviaron a
                  la mesa una trucha quemada, olvidaron un plato del pedido, no
                  trajeron ensaladas, pedidos un patacón y hogao adicionales y
                  despues de 15 minutos tuvimos que cancelar, adicional querían
                  cobrar el plato que no llegó.
                </p>
                <div className="content_btn__like">
                  <Hand className="hand" />
                  <button onClick={incrementLikes}>Like</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
