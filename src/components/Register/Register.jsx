/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import {AiFillEye} from 'react-icons/ai'
import axios from 'axios'




export const Register = () => {

    //objeto el cual incluye todas las expresiones regulares para validar los campos.
    const regularExpressions = {
      name:/^[a-z ,.'-]+$/i,
      username:/^[a-zA-Z0-9\_\-]{4,16}$/,
      email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
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
      pwStatus == "password" ? setPwStatus("text") :setPwStatus("password")
    }
    // lo mismo pero con confirmar contraseña
    function changePWCStatus(){
      console.log("baaa");
      pwCStatus == "password" ? setPwCStatus("text") :setPwCStatus("password")
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
      if (username == "") {
        setUserMsg("") 
        setUserVal(false)
      }
      else{
        if (regularExpressions.username.test(username)){
          setUserMsg("")
          setUserVal(true)
        }
        else{
          setUserMsg("username no valido!")
          setUserVal(false)
        }
      }
    },[username])
  
    // validacion de password
    useEffect(()=>{
      if (pw == ""){
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
      if (pwConfirm == ""){
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
      if (nameValidation == true & usernameVal == true & pwVal == true & pwConfVal == true){
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


  return (
    <div className="RegisterMainContainer">
        <div className="CardContainer">
          <h2>Registrate</h2>
          <form action="" method="POST" onSubmit={validateForm}>
            <label for="name">Nombre completo</label>
            <input onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="ejemplo: juan pedro" />
            <p>{nameMsg}</p>
            
            <label for="username">Nombre de usuario</label>
            <input onChange={(e)=>setUsername(e.target.value)} type="username" name="username" placeholder="No debe contener espacios" maxLength="16"  />
            <p>{userMsg}</p>
            

            <label for="ciudades">Ciudad de residencia</label>
            <select className="controls" type="text" name="ciudades" id="ciudades" placeholder="Ciudad">
              <option>Armenia</option>
              <option>Circasia</option>
              <option>Calarcá</option>
              <option>Montenegro</option>
              <option>Quimbaya</option>
              <option>Salento</option>
              <option>Pijao</option>
              <option>Córdoba</option>
              <option>Tebaida</option>
              <option>Filandia</option>
              <option>Génova</option>
              <option>Buenavista</option>
            </select>

            <label for="direccion">Direccion</label>
            <textarea className="controls" type="text" name="direccion" placeholder=""></textarea>
            
            <label for="pw">Contraseña</label>
            <div className="pwContainer">
              <input onChange={(e)=>setPW(e.target.value)} type={pwStatus} name="pw" placeholder="Ingresa una contraseña segura"  />
              <a className= "revealPwBtn" type="button" onClick={changePWStatus}><AiFillEye/></a>
            </div>
            <p>{pwMsg}</p>
            
            <label for="pwConfirm">Confirmar Contraseña</label>
            <div className="pwContainer">
              <input onChange={(e)=>setPWConfirm(e.target.value)} type={pwCStatus} placeholder="Las contraseñas deben coincidir"/>
              <a className= "revealPwBtn" type="button" onClick={changePWCStatus}><AiFillEye/></a>
            </div>
            <p>{pwConfirmMsg}</p>
            
            <div className="buttonArea">
              <button type='submit' className = "submitButton">Registrarse</button>
            </div>
          </form>
          <p>{resultMsg}</p>
        </div>
        
      </div>
  )
}
