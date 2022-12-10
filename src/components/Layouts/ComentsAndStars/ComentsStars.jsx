import React, { useContext, useEffect } from "react";
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
import { TranslationContext } from "../../context/Translation/TranslationContext";
import { useTranslation } from "react-i18next";

export const ComentsStars = () => {

  //traduccion multiidioma
  const localLang = localStorage.getItem("lang")
  const {language} = useContext(TranslationContext)
  const [t,i18n] = useTranslation("global")
  useEffect(() => {
    i18n.changeLanguage(localLang);
  }, [language])
  //fin traduccion

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
                <h2>{t("layouts.commentsAndStars.commentsH2")}</h2>
                <p>
                  {t("layouts.commentsAndStars.commentsP")}
                </p>
              </div>
              <div className="description_ipad">
                <h2>{t("layouts.commentsAndStars.catalogH2")}</h2>
                <img className="img__menu" src={Menu} alt="menu" />
                <p>
                  {t("layouts.commentsAndStars.catalogP")}
                </p>
                <div className="content_btn__like">
                  <Hand className="hand" />
                  <button onClick={incrementLikes}>{t("layouts.commentsAndStars.likeButton")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
