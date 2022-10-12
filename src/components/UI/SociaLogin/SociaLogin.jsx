import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

export const SociaLogin = () => {
//https://www.npmjs.com/package/@react-oauth/google
//https://developers.google.com/identity/gsi/web
const  responseGoogle  =  ( response )  =>  { 
  console.log(response); 
}
return (
  <>
    <GoogleOAuthProvider clientId="81239876980-ksnj46hhfoe1guvrj4apligvulphpnr4.apps.googleusercontent.com">
        
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse)
      }}
      onError={() => {
        console.log('Login Failed')
      }}
    />
    </GoogleOAuthProvider>
    
  </>
  )
}
