import './DropdownUser.css'
import { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../context/Users/UsersContext'
import { Link } from 'react-router-dom'
import axios from '../../api/axios/axios'
import { SyncLoader } from "react-spinners";
import { Navigate } from 'react-router-dom'
import UserImg from '../../images/Profile/owner.jpg'
//icons
import {BiDownArrow as Arrow} from 'react-icons/bi'
import { TransitionsContext } from '../../context/Transitions/TransitionsContext'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
export const DropdownUser = () => {
  //Estado que me guarda los datos de la persona logueada
  const [api,setApi] = useState({})
  const {setLoading, loading,setSwitchNav} = useContext(TransitionsContext)
  //Ejecuta el useEffect cuando hay un usuario logueado
  const {users,setDataBusiness,setUserId} = useContext(UsersContext)
  //trae el token del usuario
  const token = localStorage.getItem('token')
  const {updateDrop} = useContext(CreateBussinesContext)

  const url = 'https://touristapp-backend-production-c4fa.up.railway.app' 

  const getUser = () =>{
    axios.get('/api/misnegocios/',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(function (response){
      setApi(response.data)
      //seteo el id del usuario
      console.log(response.data.id);
      setUserId(response.data.id)
      localStorage.setItem('typeUser', response.data.type_user)
    })
    .catch(function (error){
      console.log(error);
    });
  }
  
  const changeState = () =>{
    setTimeout(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('typeUser');
      setLoading(false)
      setSwitchNav(false)
      window.location.reload()
    }, 2000);
  }

  //llama la funcion que hace la petición
  useEffect(()=>{
   getUser()
  },[users])

  //Cerrar sesion
  const logout = () =>{
    setLoading(true)
     return changeState()
  }

  
    const showProfile = () =>{
      if(api.type_user === 'Emprendedor' && api.negocios.length <= 0){
        return (
          <>
            <Link to='/minegocio'><li>Mi negocio</li></Link>
            <Link to='/miperfil'><li>Mi perfil</li></Link>
            <li onClick={logout}>Cerrar sesión</li>
          </>)
      }else if(api.type_user === 'Emprendedor' && api.negocios.length > 0)
        return (
          <>
          <Link to='/minegocio'><li>Mi negocio</li></Link>
          <Link to='/miperfil'><li>Mi perfil</li></Link>
          <li onClick={logout}>Cerrar sesión</li>
          </>)
    return(
      <>
        <li><Link to='/miperfil'> Mi perfil </Link></li>
        <li onClick={logout}>Cerrar sesión</li>
      </>
      )
    }

  useEffect(()=>{
    getUser()
  },[updateDrop])

  if(loading){
    return(
      <>
      <SyncLoader cssOverride={{margin: 'auto','justify-content': 'center'}} color="rgba(155, 170, 177, 1)"size={18}/>
      <Navigate to='/'/>
      </>
    )
  }
  else{
  return (
    <>
    {loading&&  <SyncLoader cssOverride={{margin: 'auto','justify-content': 'center'}} color="rgba(155, 170, 177, 1)"size={18}/>}
      {api ?
      <div className="dropdown_user">
        {api.image === null ?
          <img className='img_user' src={UserImg} alt='imgUser'/> 
        :
          <img className='img_user' src={url+api.image} alt='imgUser'/> 
        }
        <span>{api.first_name} {api.last_name} <Arrow className='icon_drop'/></span>
        <ul className='bussines_drop'>
          {
            showProfile()
          } 
        </ul>
      </div>
      : 
        null
      }
    </>
  )
}
}