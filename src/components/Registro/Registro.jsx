import React from 'react'

export const Registro = () => {
  return (
    <div>
        <h1>Inscribirse</h1>
        <section className="form-register">
            <h4>Formulario de Registro</h4>
            <input type="text" className="controls" name="nombres" id="nombre" placeholder="Ingresa su nombre"></input>
            <input type="email" className="controls" name="correo" id="correo" placeholder="Ingresa su correo"></input>
            <input type="number" className="controls" name="numero" id="numero" placeholder="Ingresa su numero"></input>
            <select type="text" name="ciudades" id="ciudades" placeholder="Ciudad">
                <option >City</option>
                <option value="value1">Armenia</option>
                <option value="value2">Pasto</option>
                <option value="value3">Cali</option>
            </select>
            <textarea type="text" name="direccion" placeholder="Su direccion"></textarea>
            <input type="password" name="contraseña" id="contraseña" placeholder="Contraseña"></input>
            <input type="password" name="confirContraseña" id="confirContraseña" placeholder="Confirmar Contraseña"></input>
            <p>Estoy de acuerdo <a href='#'>Terminos y Condiciones</a></p>
            <input className="botons" type="submit" value="Registrar"/>
            <p><a href='#'></a>Ya tengo cuenta</p>
        </section> 
    </div>
  )
}
