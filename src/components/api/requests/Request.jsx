import axios from "../axios/axios"

  const automation = (email,password) =>{
  login(email,password)
}

export const login = (email,password) =>{
  axios.post('/auth/login/',{
    email,password
  })
  .then(function (response){
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem('token',response.data.tokens.access)
    }
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

export const accessToken = (token) =>{
  axios.get('/api/misnegocios/')
  .then(function (response){
    console.log(response);
  })
  .catch(function (error){
    console.log(error);
  });
}