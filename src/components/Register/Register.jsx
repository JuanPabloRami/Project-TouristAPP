/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'




export const Register = () => {
  return (
    <div>
        <h1>Inscribirse</h1>
        <section className="form-register">
            <h4>Formulario de Registro</h4>
            <input className="controls" type="text"  name="nombres" id="nombre" placeholder="Ingresa su nombre"/>            <input className="controls" type="email"  name="correo" id="correo" placeholder="Ingresa su correo"></input>
            <input className="controls" type="text"  name="numero" id="numero" placeholder="Ingresa su numero"></input>
            <select className="controls" type="text" name="ciudades" id="ciudades" placeholder="Ciudad">
                <option >Ciudad</option>
                <option value="value1">Armenia</option>
                <option value="value2">Pasto</option>
                <option value="value3">Cali</option>
            </select>
            <textarea className="controls" type="text" name="direccion" placeholder="Su direccion"></textarea>
            <input className="controls" type="password" name="contraseña" id="contraseña" placeholder="Contraseña"></input>
            <input className="controls" type="password" name="confirContraseña" id="confirContraseña" placeholder="Confirmar Contraseña"></input>
            <label className='linkBox'>
              <input className="check" name='toAcept' type="checkbox"/>
              <p>Estoy de acuerdo<a href='#'> Terminos y Condiciones</a></p>
            </label>
            <input className="botons" type="submit" value="Enviar"/>
        </section> 
    </div>
  )
}
