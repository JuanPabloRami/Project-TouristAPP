import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export const SociaLogin = () => {
//https://www.npmjs.com/package/@react-oauth/google
//https://developers.google.com/identity/gsi/web
const userGoogle = () =>{
  axios.post('http://10.199.2.22:8000/accounts/login/')}
return (
  <>
    <GoogleOAuthProvider clientId="81239876980-ksnj46hhfoe1guvrj4apligvulphpnr4.apps.googleusercontent.com">
      <GoogleLogin 
        onSuccess={credentialResponse => {
          console.log(credentialResponse)
          {userGoogle()}
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />
  </GoogleOAuthProvider>
  </>
  )
}
