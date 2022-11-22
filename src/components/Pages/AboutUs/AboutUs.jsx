import React from 'react'
import "./AboutUs.css"  
import AcercaDe from '../../images/AboutUs/AcercaDe.jpg'
import { BsFillTagsFill,BsPeopleFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { AiTwotoneEyeInvisible, AiOutlinePlus } from 'react-icons/ai'



export const AboutUs = () => {
  return (
    <div className="containerPadre">
        <section className="about">
            <div className="containerAbout">
                <h1>SOBRE NOSOTROS</h1>
            </div>
        </section>
        <div className="containerParrafo">
            <div className="containerImg">
                <img className="imgAcerca" src={AcercaDe}></img>
            </div>
            <div className="containerImg">
                <h3>Acerca de nosotros</h3>
                <p>
El objetivo es brindar un mejor servicio y ahorrar tiempo a la hora de implementar este emprendimiento. Ya que el usuario solo al entrar a nuestro sistema por este medio podrá encontrar todos los sitios de negocios, estadía, entretenimiento y mucho más. Sin necesidad de perder muchísimo tiempo y que se ubiquen de la manera correcta para cumplir sus deseos o necesidades.

                   <br></br>
                   <br></br>

                </p>
            </div>
        </div>
        <div className="containerEstadistica">
            <div className="containerIcons">
                <p><BsFillTagsFill id="iconTags" /></p>
                <p id="num">40 <AiOutlinePlus id="iconSum" /></p>
                <h3>Categorias</h3>
            </div>
            <div className="containerIcons">
                <p><FaThList id="iconTags" /></p>
                <p id="num">250 <AiOutlinePlus id="iconSum" /></p>
                <h3>Listados</h3>
            </div>
            <div className="containerIcons">
                <p><BsPeopleFill id="iconTags" /></p>
                <p id="num">1M <AiOutlinePlus id="iconSum" /></p>
                <h3>Miembros</h3>
            </div>
            <div className="containerIcons">
                <p><AiTwotoneEyeInvisible id="iconTags" /></p>
                <p id="num">571</p>
                <h3>Visitantes</h3>
            </div>
        </div>
    </div>
  )
}
