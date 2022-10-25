import axios from "../axios/axios"
import {Navigate} from 'react-router-dom'

  const automation = (email,password) =>{
  login(email,password)
  return <Navigate to='/perfil'/>
  
}

export const login = (email,password) =>{
  axios.post('/auth/login/',{
    email,password
  })
  .then(function (response){
    console.log(response);
    console.log(response.data.tokens.access);
    localStorage.setItem('token',response.data.tokens.access)
  })
  .catch(function (error){
    console.log(error);
  });
}

export const register = (first_name,last_name,email,username,password,typeUser) =>{
  axios.post('/auth/signup/',{
    first_name,last_name,email,username,password,
    type_user: typeUser
  })
  .then(function (response){
    console.log(response);
    if (response.status === 201){
      automation(email,password)
    }
  })
  .catch(function (error){
    console.log(error);
  });
}

export const accessToken = (access) =>{
  axios.get('/api/misnegocios/',{
    access
  })
  .then(function (response){
    console.log(response);
  })
  .catch(function (error){
    console.log(error);
  });
}