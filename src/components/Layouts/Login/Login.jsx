import React, { useContext } from "react";
import "./Login.css";

import axios from "axios";
//Formik
import { Formik, Form, Field, ErrorMessage } from "formik";
//componentes
import { ModalContext } from "../../context/Modal/ModalContext";
import { Button } from "../../UI/Button/Button";
import {SociaLogin} from '../../UI/SociaLogin/SociaLogin'


export const Login = () => {
  const regularExpressions = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/,
  };

  const { loginUser, closeLogin,openRegister } = useContext(ModalContext);

  //Funcion para cambiar de modales de login a registro
  const loginRegister = () => {
    closeLogin();
    return openRegister();
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values) => {
          let errors = {};

          //validacion para el email
          if (!values.email) {
            errors.email = "Por favor ingresa un correo electronico";
          } else if (!regularExpressions.email.test(values.email)) {
            errors.email = "El correo electronico no es valido";
          }

          //validacion para el password
          if (!values.password) {
            errors.password = "Por favor ingresa una contraseña";
          } else if (!regularExpressions.password.test(values.password)) {
            errors.password = "La constraseña tiene que ser de 8 a 12 digitos";
          }

          return errors;
        }}
        onSubmit={({email,password}) => {
          axios.get('http://localhost:8000/auth/signup/',{
            email:  email,
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
        {({ errors }) => (
          <div className={`modal-login${loginUser ? " open" : " close"}`}>
            <div className="form-login">
              <button className="btn-close" onClick={closeLogin}>
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
                <button onClick={loginRegister}>Registrarse</button>
                <SociaLogin/>
              </div>
              <Form method="GET" className="form">
                <h2>INICIAR SESIÓN</h2>

                <div className="ContainerInput">
                  <Field
                   type="text"
                    id="mail"
                    name="email"
                    required
                  />
                  <label htmlFor="email">
                    <span className="text-name">Correo Electronico</span>
                  </label>
                  <div className="errorMsg">
                    <ErrorMessage name="email" component={() => (<p>{errors.email}</p>)} />
                  </div>
                </div>

                <div className="ContainerInput">
                  <Field
                    type="password"
                    id="pass"
                    name="password"
                    required
                  />
                  <label htmlFor="password">
                    <span className="text-name">Contraseña</span>
                  </label>
                  <div className="errorMsg">
                    <ErrorMessage name="password" component={() => (<p>{errors.password}</p>)} />
                  </div>
                </div>
                <Button text="Ingresar" />
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};