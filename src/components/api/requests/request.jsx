import axios from "../axios/axios"

export const login = (email,password) =>{
  axios.post('/auth/login/',{
    email,password
  })
  .then(function (response){
    console.log(response);
  })
  .catch(function (error){
    console.log(error);
  });
}

export const register = (first_name,last_name,email,username,password) =>{
  axios.post('/auth/signup/',{
    first_name,last_name,email,username,password
  })
  .then(function (response){
    console.log(response);
  })
  .catch(function (error){
    console.log(error);
  });
}