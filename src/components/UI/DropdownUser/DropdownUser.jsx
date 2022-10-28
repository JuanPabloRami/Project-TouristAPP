import './DropdownUser.css'
import { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../context/Users/UsersContext'
import axios from '../../api/axios/axios'

export const DropdownUser = () => {

  const [api,setApi] = useState({})

  const token = localStorage.getItem('token')

  useEffect(()=>{
    axios.get('/api/misnegocios/',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(function (response){
      console.log(response);
      setApi(response)
    })
    .catch(function (error){
      console.log(error);
    });
  },[])

  const logout = () =>{
    localStorage.removeItem('token')
    return window.location.reload()
  }

  console.log(api.data.first_name);
  return (
    <>
      {api&&
      <ul>
        <li><span onClick={logout}>{api.data.first_name}</span></li>
      </ul>
    } 
    </>
  )
}
