import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

//Imagenes
import Logo from '../../images/Logos TouristApp/logo5.png'
import ReactGA from "react-ga4";
//Iconos
import {
  FaFacebook as IconFacebook,
  FaYoutube as IconYoutube,
  FaHandsHelping as Help
} from "react-icons/fa";
import {
  HiUserGroup as AboutUs,
  HiClipboardList as Terms
} from 'react-icons/hi'
import {
  IoDocumentLock as Privacy
} from 'react-icons/io5'
import {
  BsTwitter as IconTwitter,
  BsGithub as IconGithub,
} from "react-icons/bs";
import { TranslationContext } from '../../context/Translation/TranslationContext';
import { useTranslation } from 'react-i18next';


export const Footer = () => {

  //traduccion multiidioma
  const localLang = localStorage.getItem("lang")
  const {language} = useContext(TranslationContext)
  const [t,i18n] = useTranslation("global")
  useEffect(() => {
    i18n.changeLanguage(localLang);
  }, [language])
  //fin traduccion

  const click = () => {
    ReactGA.event({
      category: "about-us",
      action: "click",
      label: "label",
    });
  };
  const clickTerm = () => {
    ReactGA.event({
      category: "terms",
      action: "click",
      label: "label",
    });
  };
  const clickPrivacy = () => {
    ReactGA.event({
      category: "private",
      action: "click",
      label: "label",
    });
  };
  const clickHelp = () => {
    ReactGA.event({
      category: "help",
      action: "click",
      label: "label",
    });
  };
  return (
    <footer>
      <div className="services">
        <div className="logoFooter">
          <img src={Logo} alt="Logo" />
          <h2>Tourist<span className='app'>App</span></h2>
        </div>
            <Link to='/AboutUs' onClick={click}>
              <p> <AboutUs size='10%'/> {t("layouts.footer.aboutus")}</p>
            </Link>
            <Link  to='/terminosycondiciones' onClick={clickTerm}>
              <p> <Terms size='10%'/>{t("layouts.footer.termsandconditions")}</p>
            </Link>
            <Link to='/privacidad' onClick={clickPrivacy}>
              <p> <Privacy size='10%'/>{t("layouts.footer.privacypolicy")}</p>
            </Link>
            <Link  to='/' onClick={clickHelp}>
              <p> <Help size='10%'/>{t("layouts.footer.helpcenter")}</p>
            </Link>
      </div>
      <hr></hr>
      <div className="follow">
        <div className="icons">
          <a className='img-icon' href="#"><IconFacebook size='70%'/></a>
          <a className='img-icon' href="#"><IconGithub size='70%'/></a>
          <a className='img-icon' href="#"><IconTwitter size='70%'/></a>
          <a className='img-icon' href="#"><IconYoutube size='70%'/></a>
        </div>
        <p>© TouristApp, 2022.<br></br>
        Dev Group, Armenia - Quindio </p>
      </div>
    </footer>
  )
}
