import React from 'react'

export const Login = () => {
  return (
    <form className="form-register">
        <h1>Inicia Sesion</h1>
        <div className="loginContainer">
            <label htmlFor="email">Correo Electronico</label>
            <input className="controls" type="email" id= "email" placeholder="ejemplo: si@si.com"/>
            <label  htmlFor="pw">Contraseña</label>
            <input className="controls" type="password" id= "pw" placeholder="contraseña segura pls"/>
        <button className="botons">Iniciar Sesion</button>
        </div>
    </form>
  )
}