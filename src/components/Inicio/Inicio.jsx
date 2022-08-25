import React from 'react'
import EstiloInicio from './Inicio.module.css'




export const Inicio = () => {
  return (
    <div className={EstiloInicio.home}>
      <div className={EstiloInicio.backgroundImg}>
        <h1 >HOME</h1>
      </div>
      <div  className={EstiloInicio.vacio}>
        <h1 data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, asperiores similique? Adipisci recusandae soluta voluptatum vitae, cupiditate pariatur vel veritatis amet quod voluptas error non nobis eligendi alias aspernatur consequuntur?</h1>
      </div>
    </div>
  )
}
