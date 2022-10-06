import axios from 'axios';
import React, { createContext } from 'react'

export const RegisterContext = createContext()

export const RegisterContextProvider = (props) => {

  const userRegister = () =>{
    axios.post('http://10.199.2.22:8000/auth/signup/',{
      first_name: first_name,
      last_name: last_name,
      email:email ,
      username:username,
      password: password
    })
    .then(function (response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    });
  }

  return (
    <>
      <RegisterContext.Provider value={{
        first_name,
        last_name,
        email,
        usernamee,
        password,
        userRegister
      }}>
        {props.children}
      </RegisterContext.Provider>
    </>
  );
}
