import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { BarLoader } from "react-spinners";
//Formik
import { Formik, Form, Field, ErrorMessage } from "formik";
//componentes
import { ModalContext } from "../../context/Modal/ModalContext";
import { Button } from "../../UI/Button/Button";
import { Message } from "../../UI/Message/Message";
//iconos
import { AiFillEye as Eye } from "react-icons/ai";
import { AiFillEyeInvisible as EyeClose } from "react-icons/ai";
import axios from "../../api/axios/axios";
import { TransitionsContext } from "../../context/Transitions/TransitionsContext";
import { UsersContext } from "../../context/Users/UsersContext";
import {GiConfirmed as Confirmed} from 'react-icons/gi'
import {VscError as ErrorIcon} from 'react-icons/vsc'
//images
import imgregister from "../../images/Register/register.jpg"
import { TranslationContext } from "../../context/Translation/TranslationContext";
import { useTranslation } from "react-i18next";


export const Login = () => {
  
  //traduccion multiidioma
  const localLang = localStorage.getItem("lang")
  const {language} = useContext(TranslationContext)
  const [t,i18n] = useTranslation("global")
  useEffect(() => {
    i18n.changeLanguage(localLang);
  }, [language])
  //fin traduccion

  //muestra o no la contraseña
  const [pwStatus,setPwStatus] = useState("password")
  const [iconPassword,setIconPassword] = useState(true)
  const [loading, setLoading] = useState(false);
  function showPassword(){
    pwStatus === "password" ? setPwStatus("text") :setPwStatus("password")
  }
  //cambia el icono
  const changeIcon = () =>{
    const change = iconPassword === true ? <Eye/> : <EyeClose/>
    return change
  }

  const regularExpressions = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/,
  };

  //Contexto
  const { loginUser, closeLogin, openRoles } = useContext(ModalContext);
  const { setUsers } = useContext(UsersContext);

  //Funcion para cambiar de modales de login a registro
  const loginRegister = () => {
    closeLogin();
    return openRoles();
  };

  //estado del alert de exito o error
  const [alert,setAlert] = useState("close")
  const [errorAlert,setErrAlert] = useState("close")
  const [errorText,setErrText] = useState(t("layouts.login.errorocurred"))
  return (
    <>
      
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          let errors = {};

          //validacion para el email
          if (!values.email) {
            errors.email = t("layouts.login.errorsemail1")
          } else if (!regularExpressions.email.test(values.email)) {
            errors.email = t("layouts.login.errorsemail2");
          }

          //validacion para el password
          if (!values.password) {
            errors.password = t("layouts.login.errorspw1");
          } else if (!regularExpressions.password.test(values.password)) {
            errors.password = t("layouts.login.errorspw2");
          }

          return errors;
        }}
        onSubmit={({ email, password }) => {
          setLoading(true);
          axios.post("/auth/login/", {
              email,
              password,
            })
            .then(function (response) {
              console.log(response);
              if (response.status === 200) {
                setLoading(false);
                setUsers(true);
                localStorage.setItem("token", response.data.tokens.access);
                setAlert("open")
                setTimeout(()=>{
                  setAlert("close")
                  window.location.reload()
                },1500)
                setTimeout(()=>{
                  closeLogin();
                },2000)
                // 
                // 
                //setTransition(true)
              }
              
            })
            .catch(function (error) {
              console.log(error);
              if (error.response.status === 400){
                setLoading(false)
                setErrText(error.response.data.message)
                setErrAlert("open")
                setTimeout(()=>{
                  setErrAlert("close")
                },1500)
              }
            });
        }}
      >
        {({ errors }) => (
          <div className={`modal-login${loginUser ? " open" : " close"}`}>
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
            <div className="form-login">
              <button className="btn-close" onClick={closeLogin}>
                X
              </button>
              <div className="content__login"> 
              {<img src={imgregister} alt="login"/>}
                <h1>{t("layouts.login.donthaveaccyet")}</h1>
                {/* <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate sit, nostrum impedit blanditiis rem accusamus fugit
                  nobis accusantium eos voluptates, atque repellat non? Omnis,
                  laborum. Consequatur delectus fuga distinctio commodi.
                </p> */}

                <button onClick={loginRegister}>{t("layouts.login.register")}</button>
              </div>
              <Form method="GET" className="form">
                <h2>{t("layouts.login.login")}</h2>

                <div className="ContainerInput">
                  <Field type="text" id="mail" name="email" required />
                  <label htmlFor="email">
                    <span className="text-name">{t("layouts.login.email")}</span>
                  </label>
                  <div className="errorMsg">
                    <ErrorMessage
                      name="email"
                      component={() => <p>{errors.email}</p>}
                    />
                  </div>
                </div>

                <div className="ContainerInput">
                  <Field
                    type={pwStatus}
                    id="pass"
                    name="password"
                    required
                    
                  />
                  <label htmlFor="password">
                    <span className="text-name">{t("layouts.login.pw")}</span>
                  </label>
                  <div className="icon_input" onClick={()=>{
                    showPassword()
                    setIconPassword(!iconPassword)
                  }}
                  >
                    {changeIcon()}
                  </div>
                  <div className="errorMsg">
                    <ErrorMessage
                      name="password"
                      component={() => <p>{errors.password}</p>}
                    />
                  </div>
                </div>
                <Button text={t("layouts.login.loginbtn")} />
              </Form>
              
            </div>
            <Message text={t("layouts.login.loginSuccess")} icon={<Confirmed className="icon__message"/>} message={alert}/>
            <Message text={errorText} icon={<ErrorIcon className="icon__error"/>} message={errorAlert}/>
          </div>
          
        )}
        
      </Formik>
      
    </>
  );
};
