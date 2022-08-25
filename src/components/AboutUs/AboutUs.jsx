import React from 'react'
import AcercaDe from '../images/AboutUs/AcercaDe.jpg'
import { BsFillTagsFill,BsPeopleFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { AiTwotoneEyeInvisible, AiOutlinePlus } from 'react-icons/ai'
import styleAboutUs from './AboutUs.module.css'


export const AboutUs = () => {
  return (
    <div className={styleAboutUs.containerPadre}>
        <section className={styleAboutUs.about}>
            <div className={styleAboutUs.containerAbout}>
                <h1>SOBRE NOSOTROS</h1>
            </div>
        </section>
        <div className={styleAboutUs.containerParrafo}>
            <div className={styleAboutUs.containerImg}>
                <img className={styleAboutUs.imgAcerca} src={AcercaDe}></img>
            </div>
            <div className={styleAboutUs.containerImg}>
                <h3>A cerca de nosotros</h3>
                <p>Negocios a la vista nació con el único propósito de ofrecer
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
        <div className={styleAboutUs.containerEstadistica}>
            <div className={styleAboutUs.containerIcons}>
                <p><BsFillTagsFill id={styleAboutUs.iconTags} /></p>
                <p id={styleAboutUs.num}>40 <AiOutlinePlus id={styleAboutUs.iconSum} /></p>
                <h3>Categorias</h3>
            </div>
            <div className={styleAboutUs.containerIcons}>
                <p><FaThList id={styleAboutUs.iconTags} /></p>
                <p id={styleAboutUs.num}>250 <AiOutlinePlus id={styleAboutUs.iconSum} /></p>
                <h3>Listados</h3>
            </div>
            <div className={styleAboutUs.containerIcons}>
                <p><BsPeopleFill id={styleAboutUs.iconTags} /></p>
                <p id={styleAboutUs.num}>1M <AiOutlinePlus id={styleAboutUs.iconSum} /></p>
                <h3>Miembros</h3>
            </div>
            <div className={styleAboutUs.containerIcons}>
                <p><AiTwotoneEyeInvisible id={styleAboutUs.iconTags} /></p>
                <p id={styleAboutUs.num}>571</p>
                <h3>Visitantes</h3>
            </div>
        </div>
    </div>
  )
}
