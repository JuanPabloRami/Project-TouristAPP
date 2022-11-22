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
                <p>TouristApp nació con el único propósito de ofrecer
                   a los emprendedores; grandes y pequeños una plataforma para 
                   listar sus negocios en línea para que el mundo conozca sus 
                   productos o servicios.Nos esforzamos por hacer que la plataforma
                   sea simple y fácil de utilizar tanto para los propietarios de 
                   negocios como para los clientes o visitantes.
                   <br></br>
                   <br></br>

                   Somos una empresa totalmente legal y registrada en CNR y Ministerio
                   de Hacienda, todos nuestros clientes reciben una factura digital de
                   consumidor final en su correo después de todo el proceso. Si necesitas
                   crédito fiscal avísanos con anticipación antes de mandarte una factura
                   de consumidor final, documentos legales autorizados por el Ministerio de Hacienda.
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
