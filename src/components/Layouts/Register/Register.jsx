/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react'
import {AiFillEye} from 'react-icons/ai'
import axios from 'axios'
import './Register.css'
import Image from '../../images/Home/bussines.jpg'
import {ModalContext} from '../../context/Modal/ModalContext'

//componentes
import {Button} from '../../UI/Button/Button'


export const Register = () => {
    //objeto el cual incluye todas las expresiones regulares para validar los campos.
    const regularExpressions = {
      name:/¿^[a-z ,.'-]+$/i,
      username:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      password:/^.{4,12}$/,
    }
    
  
    // informacion capturada de los inputs
    const [name,setName] = useState("")
    const [username,setUsername] = useState("")
    const [pw,setPW] = useState("")
    const [pwConfirm,setPWConfirm] = useState("")
  
    //los mensajes que se mostrarán al usuario en la validacion de los campos
    const [nameMsg,setNameMsg] = useState("");
    const [userMsg,setUserMsg] = useState("");
    const [pwMsg,setPwMsg] = useState("");
    const [pwConfirmMsg,setPwConfirmMsg] = useState("");

    // determina si la password se muestra o no
    const [pwStatus,setPwStatus] = useState("password")
    const [pwCStatus,setPwCStatus] = useState("password")
  
    // estas son las variables que determinan si cada campo esta o no validado
    const [nameValidation,setNameVal] = useState(false)
    const [usernameVal,setUserVal] = useState(false)
    const [pwVal,setPwVal]= useState(false)
    const [pwConfVal,setPwConfVal] = useState(false)
  
    //la funcion que hace la contraseña visible o no visible con el boton reveal password
    function changePWStatus(){
      console.log("baaa");
      pwStatus === "password" ? setPwStatus("text") :setPwStatus("password")
    }
    // lo mismo pero con confirmar contraseña
    function changePWCStatus(){
      console.log("baaa");
      pwCStatus === "password" ? setPwCStatus("text") :setPwCStatus("password")
    }
  
    //estos useEffect son las validaciones con las expresiones regulares usando el useEffect cambiando el estado de los campos.
  
    // validacion de nombre
    useEffect(()=>{
      if (name === ""){
        setNameMsg("")
        setNameVal(false)
      }
      else{
        if (regularExpressions.name.test(name)){
          setNameMsg("")
          setNameVal(true)
        }
        else{
          setNameMsg("nombre no valido!")
          setNameVal(false)
        }
      }
    },[name])
  
    // validacion de username
    useEffect(()=>{
      if (username === "") {
        setUserMsg("") 
        setUserVal(false)
      }
      else{
        if (regularExpressions.username.test(username)){
          setUserMsg("")
          setUserVal(true)
        }
        else{
          setUserMsg("correo incorrecto!")
          setUserVal(false)
        }
      }
    },[username])
  
    // validacion de password
    useEffect(()=>{
      if (pw === ""){
        setPwMsg("")
        setPwVal(false)
      }
      else{
        if (regularExpressions.password.test(pw)){
          setPwMsg("")
          setPwVal(true)
        }
        else{
          setPwMsg("contraseña no valida!")
          setPwVal(false)
        }
      }
    },[pw])
  
    // validacion de confirmacion de password
    useEffect(()=>{
      if (pwConfirm === ""){
        setPwConfirmMsg("")
        setPwConfVal(false)
      }
      else{
        if (pwConfirm === pw ){
          setPwConfirmMsg("Las contraseñas coinciden!")
          setPwConfVal(true)
        }
        else{
          setPwConfirmMsg("Las contraseñas NO coinciden!")
          setPwConfVal(false)
        }
      }
      
    },[pwConfirm])
  
    //aca se imprimira si el post fue exitoso o no.
    const [resultMsg,setResMsg] = useState("")
  
    //aca se ejecuta el post solo si todos los campos son llenados de manera valida
  
    const validateForm = (e)=>{
      e.preventDefault()
      console.log(nameValidation);
      console.log(usernameVal);
      console.log(pwVal);
      console.log(pwConfVal);
      if (nameValidation === true & usernameVal === true & pwVal === true & pwConfVal === true){
        createUser()
      }
    }

    // POST para crear el usuario
    const  createUser = ()=>{
      // link del registro, y el objeto que se va a enviar por metodo post.
      axios.post('link del registro api backend aqui',{
      username:username,
      password:pw,
      name:name
      })
      .then((res)=>{
        console.log(res.data.Message);
        setResMsg(res.data.Message)
      })
      .catch((err)=>{
        console.log(err)
        setResMsg(err)
      })
      
    }

  const {registerUser,closeRegister} = useContext(ModalContext)

  return (
    <div className={`modal-login${registerUser ? ' open':' close'}`}>
       <div className="form-register">
      <button className='btn-close' onClick={closeRegister}>X</button>
      <img className='img-account' src={Image} alt="Login"/>
      <form>
        <h2>REGISTRO</h2>
      <div className="ContainerInput">
        <input onChange={(e)=>setName(e.target.value)} type="text" name="name" required/>
        <label for="name">
          <span className='text-name'>Nombres</span>
        </label>
        <p>{nameMsg}</p>
      </div>
      <div className="ContainerInput">
        <input onChange={(e)=>setName(e.target.value)} type="text" name="name" required/>
        <label for="name">
          <span className='text-name'>Apellidos</span>
        </label>
        <p>{nameMsg}</p>
      </div>
      <div className="ContainerInput">
        <input onChange={(e)=>setUsername(e.target.value)} type="username" name="username" required/>
        <label for="username">
          <span className='text-name'>Email</span>
        </label>
        <p>{userMsg}</p>
      </div>

      <div className="ContainerInput">
        <input onChange={(e)=>setPW(e.target.value)} type={pwStatus} name="pw" required/>
        <label for="pw">
          <span className='text-name'>Contraseña</span>
        </label>
        <a className= "iconShow" type="button" onClick={changePWStatus}><AiFillEye/></a>
        <p>{pwMsg}</p>
      </div>


      <div className="ContainerInput">
          <input onChange={(e)=>setPWConfirm(e.target.value)} type={pwCStatus} required/>
          <label for="pwConfirm">
            <span className='text-name'>Confirmar Contraseña</span>
          </label>
          <a className= "iconShow" type="button" onClick={changePWCStatus}><AiFillEye/></a>
        <p>{pwConfirmMsg}</p>
      </div>
        <Button text="Registrarse"/>
      </form>
    </div>
    </div>
  )
}