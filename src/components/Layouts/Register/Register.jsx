/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import "./Register.css";
import { BarLoader } from "react-spinners";
//Icons
import {GiConfirmed as Confirmed} from 'react-icons/gi'
import {VscError as Error} from 'react-icons/vsc'
//icono show password
import {AiFillEye as Eye} from 'react-icons/ai'
import {AiFillEyeInvisible as EyeClose} from 'react-icons/ai'
import { RolesContext } from "../../context/Roles/RolesContext";

//iconos exito o error para alerts
import {GiConfirmed as ConfirmedIcon} from 'react-icons/gi'
import {VscError as ErrorIcon} from 'react-icons/vsc'

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
import { UsersContext } from "../../context/Users/UsersContext";
import { TransitionsContext } from "../../context/Transitions/TransitionsContext";
import UserImg from '../../images/Profile/owner.jpg'
//GoogleAnalytics
import ReactGA from 'react-ga4';
import { TranslationContext } from "../../context/Translation/TranslationContext";
import { useTranslation } from "react-i18next";

export const Register = () => {

  //traduccion multiidioma
  const localLang = localStorage.getItem("lang")
  const {language} = useContext(TranslationContext)
  const [t,i18n] = useTranslation("global")
  useEffect(() => {
    i18n.changeLanguage(localLang);
  }, [language])
  //fin traduccion

  let [confirm,setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const messageResponse = () =>{
    if(confirm === "confirmed"){
      return <Message text={t("layouts.register.signupSuccess")} icon={<Confirmed className="icon__message"/>} message="open"/>

    }else if (confirm === "error"){
      return <Message text={t("layouts.register.incorrectFields")} icon={<Error className="icon__message"/>} message="open"/>
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
  const { setUsers } = useContext(UsersContext);
  const {setSwitchNav} = useContext(TransitionsContext)
  
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
    axios.post('/auth/login/',{
      email,password
    })
    .then(function (response){
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem('token',response.data.tokens.access)
          setUsers(true);
      }
    })
    .catch(function (error){
      console.log(error);
    });
  }

  //estado del alert de exito o error
  const [alert,setAlert] = useState("close")
  const [errorAlert,setErrAlert] = useState("close")
  const [errorText,setErrText] = useState(t("layouts.register.erroroccurred"))
  const [fileImage,setFileImage] = useState('')

  //convertidor de imagen de registro
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertImage(file);
    setFileImage(base64);
  };

  const convertImage = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
      //GoogleAnalytics
      const clickRegister = ()=>{
        ReactGA.event({
          'category': 'register',
          'action': 'clickRegister',
          'label':'label'
  
        });
      }

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          last_name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validate={(values)=>{
          let errors = {}

          //validacion para el nombre
          if(!values.name){
            errors.name = t("layouts.register.errorsname1")
          }else if(!regularExpressions.name.test(values.name)){
            errors.name = t("layouts.register.errorsname2")
          }

          //validacion para el apellido
          if(!values.last_name){
            errors.last_name = t("layouts.register.errorslastname1")
          }else if(!regularExpressions.name.test(values.last_name)){
            errors.last_name = t("layouts.register.errorslastname2")
          }
          
           //validacion para el email
          if(!values.email){
            errors.email = t("layouts.register.errorsemail1")
          }else if(!regularExpressions.email.test(values.email)){
            errors.email = t("layouts.register.errorsemail2")
          }

           //validacion para el password
          if(!values.password){
            errors.password = t("layouts.register.errorspw1")
          }else if(!regularExpressions.password.test(values.password)){
            errors.password = t("layouts.register.errorspw2")
          }

           //validacion para el confirmPassword
          if(!values.confirmPassword){
            errors.confirmPassword = 'Por favor ingresa una contraseña'
          }else if(values.confirmPassword !== values.password){
            errors.confirmPassword = 'Las contraseñas no coinciden'
          }
          
          return errors;
        }}
        onSubmit={({name,last_name,email,password}) => {
          setLoading(true);
          axios.post('/auth/signup/',{
            first_name:name,
            last_name,email,password,username:email,
            image: fileImage,
            type_user: typeUser
          })
          .then(function (response){
            console.log(response);
            if (response.status === 201){
              automation(email,password)
              setAlert("open")
                setTimeout(()=>{
                  setAlert("close")
                  clickRegister()
                  
                },1500)
              setTimeout(() =>{
                setLoading(false);              
                setSwitchNav(true)
                closeRegister()
              },1000)
             
            }
          })
          .catch(function (error){
            console.log(error);
            if (error.response.status === 400){
              setLoading(false)
              setErrText(error.response.data.errors)
              setErrAlert("open")
              setTimeout(()=>{
                setErrAlert("close")
              },1500)
            }
          });
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
                 <h1>{t("layouts.register.alreadyHaveAccountH1")}</h1>
                <button onClick={loginRegister}>{t("layouts.register.login")}</button>
              </div>

              <Form method="POST" className="form">
                <h2>{t("layouts.register.register")}</h2>

                <div  className="content_file">
                  <label htmlFor="imgFile">
                    <p>{t("layouts.register.uploadpic")}</p>
                  </label>
                  {fileImage === '' ?
                    <img src={UserImg} alt="ImgUser" />  
                    :
                    <img src={fileImage} alt="ImgUser" /> 
                  }
                  <Field
                    type="file"
                    id="imgFile"
                    name='imgFile'
                    onChange={uploadImage}
                  />
                </div>

                <div className="ContainerInput">
                  <Field
                    type="text"
                    id="name"
                    name="name" 
                    required 
                  />
                  <label htmlFor="name">
                    <span className="text-name">{t("layouts.register.name")}</span>
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
                    <span className="text-name">{t("layouts.register.lastname")}</span>
                  </label>
                  <div className="errorMsg">
                    <ErrorMessage name="last_name" component={() => (<p>{errors.last_name}</p>)} />
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
                    <span className="text-name">{t("layouts.register.email")}</span>
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
                    <span className="text-name">{t("layouts.register.pw")}</span>
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
                    <span className="text-name">{t("layouts.register.pwconfirm")}</span>
                  </label>
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
                      <span className="">{t("layouts.register.iAcceptthe")} <Link to='/terminosycondiciones' >{t("layouts.register.termsandconditions")}</Link> {t("layouts.register.andthe")} <Link to='/privacidad' >{t("layouts.register.privacypolicy")}</Link></span>
                    </label>
                  </div>
                </div>
                <Button text={t("layouts.register.registerbutton")}/>
              </Form>
            </div>
            <Message text={t("layouts.register.signupSuccess")} icon={<ConfirmedIcon className="icon__message"/>} message={alert}/>
            <Message text={errorText} icon={<ErrorIcon className="icon__error"/>} message={errorAlert}/>
          </div>
        )}
      </Formik>
    </>
  );
};
