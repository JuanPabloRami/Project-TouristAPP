/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./Register.css";
import axios from "axios";

//Formik
import { Formik, Form,Field,ErrorMessage} from "formik";

//Contexto
import { ModalContext } from "../../context/Modal/ModalContext";

//componentes
import { Button } from "../../UI/Button/Button";


export const Register = () => {
  //objeto el cual incluye todas las expresiones regulares para validar los campos.
  const regularExpressions = {
    name: /^[a-z ,.'-]+$/i,
    username:/^[a-zA-Z0-9]{4,16}$/,
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/,
  };

  //Uso de contexto para llamar las modales
  const { registerUser, closeRegister, openLogin } = useContext(ModalContext);

  //Contexto para registro de usuario
  //const {first_name,last_name,email,usernamee,password,userRegister} = useContext(RegisterContext);
  //Cambia de modal de registro a iniciar sesion
  const loginRegister = () => {
    closeRegister();
    return openLogin();
  };

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
            errors.password = 'La constraseña tiene que ser de 4 a 12 digitos'
          }

           //validacion para el confirmPassword
           if(!values.confirmPassword){
            errors.confirmPassword = 'Por favor ingresa una contraseña'
          }else if(!regularExpressions.password.test(values.confirmPassword)){
            errors.confirmPassword = 'La constraseña tiene que ser de 4 a 12 digitos'
          }

          return errors;
        }}
        onSubmit={({name,last_name,email,username,password}) => {
          axios.post('http://localhost:8000/auth/signup/',{
            first_name: name,
            last_name: last_name,
            email:  email,
            username:username,
            password: password
          })
          .then(function (response){
            console.log(response);
          })
          .catch(function (error){
            console.log(error);
          });
        }}
      >
        {({errors}) => (
          <div className={`modal-login${registerUser ? " open" : " close"}`}>
            <div className="form-register">
              <button className="btn-close" onClick={closeRegister}>
                X
              </button>
              <div className="content__login">
                <h1>¡Bienvenido!</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate sit, nostrum impedit blanditiis rem accusamus fugit
                  nobis accusantium eos voluptates, atque repellat non? Omnis,
                  laborum. Consequatur delectus fuga distinctio commodi.
                </p>
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
                    type='password'
                    name="password"
                    id='password' 
                    required 
                  />
                  <label htmlFor="password">
                    <span className="text-name">Contraseña</span>
                  </label>
                  <div className="errorMsg">
                    <ErrorMessage name="password" component={() => (<p>{errors.password}</p>)} />
                  </div>
                </div>

                <div className="ContainerInput">
                  <Field
                    type='password'
                    name="confirmPassword"
                    id='confirmPassword'
                    required 
                  />
                  <label htmlFor="confirmPassword">
                    <span className="text-name">Confirmar Contraseña</span>
                  </label>
                  <div className="errorMsg">
                    <ErrorMessage name="confirmPassword" component={() => (<p>{errors.confirmPassword}</p>)} />
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
