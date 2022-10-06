/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react'
import {AiFillEye} from 'react-icons/ai'
import axios from 'axios'
import './Register.css'
import Image from '../../images/Home/bussines.jpg'

//Contexto
import {ModalContext} from '../../context/Modal/ModalContext'
import {RegisterContext} from '../../context/UserRegister/RegisterContext'

//componentes
import {Button} from '../../UI/Button/Button'


export const Register = () => {
    //objeto el cual incluye todas las expresiones regulares para validar los campos.
    const regularExpressions = {
      name:/¿^[a-z ,.'-]+$/i,
      username:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      password:/^.{4,12}$/,
    }
    


  //Uso de contexto para llamar las modales  
  const {registerUser,closeRegister,openLogin} = useContext(ModalContext);
  
  //Contexto para registro de usuario
  //const {first_name,last_name,email,usernamee,password,userRegister} = useContext(RegisterContext);
  //Cambia de modal de registro a iniciar sesion 
  const loginRegister = () =>{
    closeRegister()
    return openLogin()
  } 

  return (
    <div className={`modal-login${registerUser ? ' open':' close'}`}>
       <div className="form-register">
      <button className='btn-close' onClick={closeRegister}>X</button>
      <div className="content__login">
        <h1>¡Bienvenido!</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate sit, nostrum impedit blanditiis rem accusamus fugit nobis accusantium eos voluptates, atque repellat non? Omnis, laborum. Consequatur delectus fuga distinctio commodi.</p>
        <button onClick={loginRegister}>Iniciar sesión</button>
      </div>

      <form>
        <h2>REGISTRO</h2>
        <div className="ContainerInput">
          <input type="text" name="name" required/>
          <label for="name">
            <span className='text-name'>Nombres</span>
          </label>
          <p></p>
        </div>
        <div className="ContainerInput">
          <input type="text" name="name" required/>
          <label for="name">
            <span className='text-name'>Apellidos</span>
          </label>
          <p></p>
        </div>
        <div className="ContainerInput">
          <input type="text" name="name" required/>
          <label for="name">
            <span className='text-name'>Nombre de usuario</span>
          </label>
          <p></p>
        </div>
        <div className="ContainerInput">
          <input type="username" name="username" required/>
          <label for="username">
            <span className='text-name'>Email</span>
          </label>
          <p></p>
        </div>
        <div className="ContainerInput">
          <input name="pw" required/>
          <label for="pw">
            <span className='text-name'>Contraseña</span>
          </label>
          <p></p>
        </div>
        <div className="ContainerInput">
            <input   required/>
            <label for="pwConfirm">
              <span className='text-name'>Confirmar Contraseña</span>
            </label>
          <p></p>
        </div>
        <Button text="Registrarse"/>
      </form>
    </div>
    </div>
  )
}