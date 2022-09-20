import React from 'react'
import NotFoundEstilo from './NotFound.module.css'

export const NotFound = () => {
  return (
    <div>
      <div className={NotFoundEstilo.notFoundcontainer}>
        <div className={NotFoundEstilo.textContainer}>
          <h1>Awwww! :(</h1>
          <h2>El contenido al que intentas acceder no existe </h2>
          <h2>Error 404</h2>
          <a href="/"><button>Volver a inicio</button></a>
        </div>
      </div>
    </div>
  )
}
