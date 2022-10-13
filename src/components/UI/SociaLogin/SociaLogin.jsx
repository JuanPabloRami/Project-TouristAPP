import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export const SociaLogin = () => {
//https://www.npmjs.com/package/@react-oauth/google
//https://developers.google.com/identity/gsi/web
const login = useGoogleLogin({
  onSuccess: async response => {
    try{
      const data = await axios.get("https:10.199.2.22/accounts/login/",{
        headers: {
          "Authorization": `Bearer ${response.access_token}`
        }
      })
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }
});

return (
  <>
    <button onClick={login}>Acceder con google</button>
  </>
  )
}
