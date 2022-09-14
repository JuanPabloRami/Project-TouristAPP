import React, { useEffect, useState } from 'react'
import {AiFillEye} from 'react-icons/ai'
import axios from 'axios'


export const Login = () => {
  const regularExpressions = {
      name:/^[a-z ,.'-]+$/i,
      username:/^[a-zA-Z0-9\_\-]{4,16}$/,
      email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      password:/^.{4,12}$/,
  }
  
  // informacion capturada de los inputs
  const [email,setEmail] = useState("")
  const [pw,setPW] = useState("")

  //los mensajes que se mostrarán al usuario
  const [emailMsg,setEmailMsg] = useState("");
  const [pwMsg,setPwMsg] = useState("");

  //esta es la variable que controla el tipo de input del password
  const [pwStatus,setPwStatus] = useState("password")

// estas son las variables que determinan si cada campo esta o no validado
const [usernameVal,setUserVal] = useState(false)
const [pwVal,setPwVal]= useState(false)

// la funcion que controla el boton de reveal password
  function changePWStatus(){
  console.log("baaa");
  pwStatus === "password" ? setPwStatus("text") :setPwStatus("password")
  }

  // las validaciones con las expresiones regulares usando el useEffect cambiando el estado de los campos.

  // validacion de username
useEffect(()=>{
  if (email === "") {
    setEmailMsg("") 
    setUserVal(false)
  }
  else{
    if (regularExpressions.email.test(email)){
      setEmailMsg("")
      setUserVal(true)
    }
    else{
      setEmailMsg("Correo no valido!")
      setUserVal(false)
    }
  }
},[email])

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



//aca se ejecuta el post solo si todos los campos son llenados de manera valida

const validateForm = (e)=>{
  e.preventDefault()
  console.log(usernameVal);
  console.log(pwVal);
  if (usernameVal === true & pwVal === true ){
    logUser(email,pw)
    console.log("se va a loguear el usuario");
  }
}

//aca se imprimira si el post fue exitoso o no.
const [resultMsg,setResMsg] = useState("")

// POST para crear el usuario
const  logUser = (email,password)=>{
  axios.post('link del login backend aqui',{
  email:email,
  password:password
  })
  .then((res)=>{
    console.log(res);
    console.log("recoleccion de datos exitosa")
  })
  .catch((err)=>{
    console.log(err)
    setResMsg(err)
  })
  
}

return(
  <div className="LoginMainContainer">
      <div className="CardContainer">
        {/* <div className="closeSection">
          <button>X</button>
        </div> */}
        
          <h2>Inicia Sesion</h2>
          <form action="" method="POST" onSubmit={validateForm}>

            <label htmlFor="email">Correo Electronico</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Ejemplo: Personita123@dominio.com" maxLength="16"  />
            <p>{emailMsg}</p>

            <label htmlFor="pw">Contraseña</label>
            <div className="pwContainer">
              <input onChange={(e)=>setPW(e.target.value)} type={pwStatus} name="pw" placeholder="Ingresa una contraseña segura"  />
              <a className= "revealPwBtn" type="button" onClick={changePWStatus}><AiFillEye/></a>
            </div>
            
            <p>{pwMsg}</p>
            
            <div className="buttonArea">
              <button  type='submit' className = "submitButton" >Iniciar Sesion</button>
            </div>

          </form>
      </div>

  </div>
)

}