import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from '../../api/axios/axios';
import { UsersContext } from '../../context/Users/UsersContext';
import './MyProfile.css'
//icons
import {MdEmail as Email} from 'react-icons/md'
import {FaUserAlt as User} from 'react-icons/fa'
//components
import { Cards } from '../../UI/Cards/Cards';
//imagen
import UserImg from '../../images/Profile/owner.jpg'
 
export const MyProfile = () => {

  const {users} = useContext(UsersContext) 
  const [dataUser,setDatauser] = useState([])
  const [business,setBusiness] = useState([])

  const token = localStorage.getItem('token')
  const url = 'https://touristapp-backend-production-c4fa.up.railway.app' 

  const getUser = () =>{
    axios.get('/api/misnegocios/',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(function (response){
      setDatauser(response.data)
      setBusiness(response.data.negocios)
    })
    .catch(function (error){
      console.log(error);
    });
  }

  useEffect(()=>{
    getUser()
  },[users])

  console.log(dataUser);

  return (
    <div className='main_myprofile'>
      <header>
        <div className="portada"></div>
        <div className="img_user_profile">
          {dataUser.image === null ?
            <img src={UserImg} alt='imgUser'/>
          :
            <img src={url+dataUser.image} alt='imgUser'/>
          }
          <h2>{dataUser.first_name} {dataUser.last_name}</h2>
          <div className="information_personal">
            <p><User className='icon_user'/>@{dataUser.username}</p>
            <p><Email className='icon_email'/>{dataUser.email}</p>
          </div>
        </div>
      </header>
      <main>
        {business.map((element, index) => (
          <div key={index}>
            <Cards
              image={url+element.imgperfil}
              owner={element.imgperfil}
              description={element.descripcion}
              title={element.nombre}
              id={element.id}
              ciudad={element.ciudad.nombre}
              departamento={element.ciudad.departamento.nombre}
              category={element.tipo_Negocio.nombre}
            />
          </div>
        ))}
      </main>
    </div>
  )
}
