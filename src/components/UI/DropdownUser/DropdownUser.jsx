import './DropdownUser.css'
import { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../context/Users/UsersContext'
import { Link } from 'react-router-dom'
import axios from '../../api/axios/axios'
import { SyncLoader } from "react-spinners";
//icons
import {AiOutlineUser as User} from 'react-icons/ai'
import {MdBusinessCenter as Bussines} from 'react-icons/md'
import { TransitionsContext } from '../../context/Transitions/TransitionsContext'
export const DropdownUser = () => {
  //Estado que me guarda los datos de la persona logueada
  const [api,setApi] = useState({})
  const {setLoading, loading,setSwitchNav} = useContext(TransitionsContext)
  //Ejecuta el useEffect cuando hay un usuario logueado
  const {users,setDataBusiness} = useContext(UsersContext)
  //trae el token del usuario
  const token = localStorage.getItem('token')

  const getUser = () =>{
    axios.get('/api/misnegocios/',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(function (response){
      setApi(response.data)
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
      return (<><li><Link to='/crear-negocio'>Crear mi negocio</Link></li>
              <li onClick={logout}>Cerrar sesión</li></>)
    }else if(api.type_user === 'Emprendedor' && api.negocios.length > 0)
      return (
        <>
        <li><Link to='/minegocio'>Ver mi negocio</Link></li>
        <li onClick={logout}>Cerrar sesión</li>
        </>)
  return(
    <li onClick={logout}>Cerrar sesión</li>
    )
  }
  
  //icono dependiente del tipo de usuario
  const typeUser = () =>{
    if (api.type_user === "Turista"){
      return <User className='icon'/> 
    }else{
      return <Bussines className='icon'/> 
    }
  }
  if(loading){
    return(
      <SyncLoader cssOverride={{margin: 'auto','justify-content': 'center'}} color="rgba(155, 170, 177, 1)"size={18}/>
    )
  }
  else{
  return (
    <>
    {loading&&  <SyncLoader cssOverride={{margin: 'auto','justify-content': 'center'}} color="rgba(155, 170, 177, 1)"size={18}/>}
      {api ?
      <div className="dropdown_user">
        <span>{typeUser()} {api.first_name} {api.last_name}</span>
        <ul className='bussines_drop'>
          {
            showProfile()
            // api.type_user === 'Emprendedor' && api.negocios === [] ?
            // <li><Link to='/crear-negocio'>Crear mi negocio</Link></li>
            // :
            // <>
            //   <li><Link to='/perfil'>Ver mi negocio</Link></li>
            //   <li onClick={logout}>Cerrar sesión</li>
            // </>
            // api.type_user === 'Turista' ?
            //   <li onClick={logout}>Cerrar sesión</li>
            // :
            // <>
            //   <li><Link to='/perfil'>Ver mi negocio</Link></li>
            //   <li onClick={logout}>Cerrar sesión</li>
            // </>
          } 
        </ul>
      </div>
       
      : 
        console.log("No sirvio login")
       }
    </>
  )
}
}