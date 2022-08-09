import React from 'react'


export const Footer = () => {
    return(
        <footer className='footer'>
            <div className='containerInfo'>
                <div className='infoApp'>
                    <h3>Tourist App</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus beatae aut voluptates dolor iure, quam ad voluptas? Magni nostrum quam voluptatum id aliquam vitae eos assumenda necessitatibus perspiciatis aspernatur!</p>
                </div>
                <div className='contentButtons'>
                    <div className='aboutUss'>
                        <h3>Sobre Nosotros</h3>
                        <p><a href="/">Sobre Nosotros</a></p>
                        <p><a href="/">Terminos y Condiciones</a></p>
                        <p><a href="/">Politica de privacidad</a></p>
                    </div>
                    <div className='customerService'>
                        <h3>Servicio al cliente</h3>
                        <p><a href="/">Centro de ayuda</a></p>
                        <p><a href="/">Terminos y Condiciones</a></p>
                        <p><a href="/">Politica de privacidad</a></p>
                    </div>
                </div>
            </div>
            <div className='subFooter'>
                <h4>© Tourist App, 2022. <br />Dev Group, Armenia - Quindio - Teléfono: (57) 3012117531</h4>
            </div>
        </footer>
    )
}