import React from 'react'
import {  GoogleLogin  }  from  'react-google-login' ;

export const SociaLogin = () => {
const  responseGoogle  =  ( response )  =>  { 
  console.log(response); 
}
  return (
    <>
    < GoogleLogin 
      clientId = "81239876980-ksnj46hhfoe1guvrj4apligvulphpnr4.apps.googleusercontent.com" 
      buttonText = "Iniciar sesión" 
      onSuccess = { responseGoogle } 
      onFailure = { responseGoogle } 
      cookiePolicy = { 'single_host_origin' } 
    />
    </>
  )
}
