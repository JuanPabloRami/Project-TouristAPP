/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import "./Register.css";
import { BarLoader } from "react-spinners";
//peticiones
import {login} from '../../api/requests/Request'
//Icons
import {GiConfirmed as Confirmed} from 'react-icons/gi'
import {VscError as Error} from 'react-icons/vsc'
//icono show password
import {AiFillEye as Eye} from 'react-icons/ai'
import {AiFillEyeInvisible as EyeClose} from 'react-icons/ai'
import { RolesContext } from "../../context/Roles/RolesContext";

//Formik
import { Formik, Form,Field,ErrorMessage} from "formik";
//Contexto
import { ModalContext } from "../../context/Modal/ModalContext";
//componentes
import { Button } from "../../UI/Button/Button";
import {Message} from '../../UI/Message/Message'
//imagenes
import imglogin from "../../images/Login/login.jpg";
//link
import { Link } from "react-router-dom";
import axios from "../../api/axios/axios";


export const Register = () => {
  let [confirm,setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const messageResponse = () =>{
    if(confirm === "confirmed"){
      return <Message text="Registro exitoso" icon={<Confirmed className="icon__message"/>} message="open"/>

    }else if (confirm === "error"){
      return <Message text="Campos incorrectos" icon={<Error className="icon__message"/>} message="open"/>
    }
  }

  //objeto el cual incluye todas las expresiones regulares para validar los campos.
  const regularExpressions = {
    name: /^[a-z ,.'-]+$/i,
    username:/^[a-zA-Z0-9]{4,16}$/,
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,12}$/,
  };

  //Uso de contexto para llamar las modales y el tipo de usuario
  const { registerUser, closeRegister, openLogin, } = useContext(ModalContext);
  const {typeUser} = useContext(RolesContext)

  //Contexto para registro de usuario
  //const {first_name,last_name,email,usernamee,password,userRegister} = useContext(RegisterContext);
  
  //Cambia de modal de registro a iniciar sesion
  const loginRegister = () => {
    closeRegister();
    return openLogin();
  };

  //muestra o no la contraseña
  const [pwStatus,setPwStatus] = useState("password")
  const [iconPassword,setIconPassword] = useState(true)
  function showPassword(){
    pwStatus === "password" ? setPwStatus("text") :setPwStatus("password")
  }
  //cambia el icono
  const changeIcon = () =>{
    const change = iconPassword === true ? <Eye/> : <EyeClose/>
    return change
  }

  //Logeo automatico
  const automation = (email,password) =>{
    login(email,password)
  }
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          last_name: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validate={(values)=>{
          let errors = {}

          //validacion para el nombre
          if(!values.name){
            errors.name = 'Por favor ingresa un nombre'
          }else if(!regularExpressions.name.test(values.name)){
            errors.name = 'El nombre solo puede contener letras y espacios'
          }

          //validacion para el apellido
          if(!values.last_name){
            errors.last_name = 'Por favor ingresa un apellido'
          }else if(!regularExpressions.name.test(values.last_name)){
            errors.last_name = 'El apellido solo puede contener letras y espacios'
          }

          //validacion para el username
          if(!values.username){
            errors.username = 'Por favor ingresa un nombre de usuario'
          }else if(!regularExpressions.username.test(values.username)){
            errors.username = 'El nombre de usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros,letras y guion bajo.'
          }

           //validacion para el email
          if(!values.email){
            errors.email = 'Por favor ingresa un correo electronico'
          }else if(!regularExpressions.email.test(values.email)){
            errors.email = 'El correo electronico no es valido'
          }

           //validacion para el password
          if(!values.password){
            errors.password = 'Por favor ingresa una contraseña'
          }else if(!regularExpressions.password.test(values.password)){
            errors.password = 'La constraseña tiene que ser de 8 a 12 digitos'
          }

           //validacion para el confirmPassword
          if(!values.confirmPassword){
            errors.confirmPassword = 'Por favor ingresa una contraseña'
          }else if(values.confirmPassword !== values.password){
            errors.confirmPassword = 'Las contraseñas no coinciden'
          }
          

          //validacion acepto acceptterms
          if (!values.acceptterms){
            errors.acceptterms = 'Debe aceptar los terminos para poder registrarse.'
          }

          return errors;
        }}
        onSubmit={({name,last_name,email,username,password}) => {
          console.log("si");
        }}
      >
        {({errors}) => (
          <div className={`modal-login${registerUser ? " open" : " close"}`}>
            {messageResponse()}
            {loading ? (
              <>
                {loading && (
                  <BarLoader
                    cssOverride={{
                      margin: "auto",
                      "justify-content": "center",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                    }}
                    color="#0373b4"
                    size={90}
                  />
                )}
              </>
            ) : null}
            <div className="form-register">
              <button className="btn-close" onClick={closeRegister}>
                X
              </button>
              <div className="content__login">
                 {<img src={imglogin} alt="login"/>} 
                 <h1>¿ Ya tienes cuenta ?</h1>
                {/* <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate sit, nostrum impedit blanditiis rem accusamus fugit
                  nobis accusantium eos voluptates, atque repellat non? Omnis,
                  laborum. Consequatur delectus fuga distinctio commodi.
                </p>  */}
                <button onClick={loginRegister}>Iniciar sesión</button>
              </div>

              <Form method="POST" className="form">
                <h2>REGISTRO</h2>
                <div className="ContainerInput">
                  <Field
                    type="text"
                    id="name"
                    name="name" 
                    required 
                  />
                  <label htmlFor="name">
                    <span className="text-name">Nombres</span>
                  </label>
                  <div className="errorMsg">
                    <ErrorMessage name="name" component={() => (<p>{errors.name}</p>)} />
                  </div>
                </div>

                <div className="ContainerInput">
                  <Field 
                    type="text" 
                    id="last_name"
                    name="last_name"
                    required 
                  />
                  <label htmlFor="last_name">
                    <span className="text-name">Apellidos</span>
                  </label>
                  <div className="errorMsg">
                    <ErrorMessage name="last_name" component={() => (<p>{errors.last_name}</p>)} />
                  </div> 
                </div>

                <div className="ContainerInput">
                  <Field 
                    type="text"
                    id="username" 
                    name="username"
                    required
                  />
                  <label htmlFor="username">
                    <span className="text-name">Nombre de usuario</span>
                  </label>
                  <div className="errorMsg">
                    <ErrorMessage name="username" component={() => (<p>{errors.username}</p>)} />
                  </div>
                </div>

                <div className="ContainerInput">
                  <Field 
                    type="email" 
                    name="email" 
                    id='email'
                    required
                  />
                  <label htmlFor="email">
                    <span className="text-name">Email</span>
                  </label>
                  <div className="errorMsg">
                    <ErrorMessage name="email" component={() => (<p>{errors.email}</p>)} />
                  </div>
                </div>

                <div className="ContainerInput">
                  <Field 
                    type={pwStatus}
                    name="password"
                    id='password' 
                    required 
                  />
                  
                  <label htmlFor="password">
                    <span className="text-name">Contraseña</span>
                  </label>
                  <div className="icon_input" onClick={()=>{
                    showPassword()
                    setIconPassword(!iconPassword)
                  }}
                  >
                    {changeIcon()}
                  </div>
                  <div className="errorMsg">
                    <ErrorMessage name="password" component={() => (<p>{errors.password}</p>)} />
                  </div>
                </div>
                <div className="ContainerInput">
                  <Field
                    type="password"
                    name="confirmPassword"
                    id='confirmPassword'
                    required 
                  />
                  <label htmlFor="confirmPassword">
                    <span className="text-name">Confirmar Contraseña</span>
                  </label>
                  {/* <Eye className="icon_input" onClick={showPassword("pwConfirm")}/> */}
                  <div className="errorMsg">
                    <ErrorMessage name="confirmPassword" component={() => (<p>{errors.confirmPassword}</p>)} />
                  </div>
                </div>
                <div className="ContainerCheckbox">
                  <div className="checkboxLabel">
                    <Field 
                      type='checkbox'
                      name="acceptTerms"
                      id='acceptTerms' 
                      required 
                    />

                    <label htmlFor="checkbox">
                      <span className="">Acepto los <Link to='/terminosycondiciones' >Terminos y condiciones</Link> y la <Link to='/privacidad' >politica de privacidad</Link></span>
                    </label>
                  </div>
                  <div className="errorMsg">
                    <ErrorMessage name="password" component={() => (<p>{errors.acceptterms}</p>)} />
                  </div>
                </div>
                <Button text='Registrarse'/>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
