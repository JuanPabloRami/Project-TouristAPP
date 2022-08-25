import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaFacebook as IconFacebook, FaYoutube as IconYoutube} from 'react-icons/fa';
import {BsTwitter as IconTwitter, BsGithub as IconGithub, BsGithub} from 'react-icons/bs';
import EstiloFoter from './Footer.module.css'



export const Footer = () => {
    return(
        <footer className={EstiloFoter.footer}>
            <div className={EstiloFoter.containerInfo}>
                <div className={EstiloFoter.infoApp}>
                    <h3>Tourist App</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus beatae aut voluptates dolor iure, quam ad voluptas? Magni nostrum quam voluptatum id aliquam vitae eos assumenda necessitatibus perspiciatis aspernatur!</p>
                </div>
                <div className={EstiloFoter.contentButtons}>
                    <div className={EstiloFoter.contentOptions}>
                        <div className={EstiloFoter.aboutUss}>
                            <h3>Sobre Nosotros</h3>
                            <p><a href="/">Sobre Nosotros</a></p>
                            <p><a href="/">Terminos y Condiciones</a></p>
                            <p><a href="/">Politica de privacidad</a></p>
                        </div>
                        <div className={EstiloFoter.customerService}>
                            <h3>Servicio al cliente</h3>
                            <p><a href="/">Centro de ayuda</a></p>
                            <p><a href="/">Terminos y Condiciones</a></p>
                            <p><a href="/">Politica de privacidad</a></p>
                        </div>
                    </div>
                    <div className={EstiloFoter.contentInfoRed}>
                        <hr />
                        <div className={EstiloFoter.icons}>
                            <a href='/' className={EstiloFoter.iconBtn}><IconFacebook /></a>
                            <a href='/' className={EstiloFoter.iconBtn}><IconTwitter/></a>
                            <a href='/' className={EstiloFoter.iconBtn}><IconYoutube/></a>
                            <a href='/' className={EstiloFoter.iconBtn}><BsGithub/></a>
                        </div>
                    </div>
                </div>
                
                

            </div>
            <div className={EstiloFoter.subFooter}>
                <h4>© Tourist App, 2022. <br />Dev Group, Armenia - Quindio - Teléfono: (57) 3012117531</h4>
            </div>
        </footer>
    )
}