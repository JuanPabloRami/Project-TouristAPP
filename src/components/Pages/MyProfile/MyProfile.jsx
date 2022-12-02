import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from '../../api/axios/axios';
import { UsersContext } from '../../context/Users/UsersContext';
import './MyProfile.css'
//icons
import {MdEmail as Email} from 'react-icons/md'
import {FaUserAlt as User} from 'react-icons/fa'
import { BsGeoAlt as Location } from "react-icons/bs";
import {BiCategoryAlt as Category} from 'react-icons/bi'
//components
import { Cards } from '../../UI/Cards/Cards';
//imagen
import UserImg from '../../images/Profile/owner.jpg'
import businessCardDefault from '../../images/Home/businesCardDefault.jpg'
import { Link } from 'react-router-dom';
 
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
            <p><Email className='icon_email'/>{dataUser.email}</p>
          </div>
        </div>
      </header>
      <main>
        {business.map((element, index) => (
           <div key={index} className="card_business">
           {
             element.imgperfil === null ?
             <img  src={businessCardDefault} alt="img" />
             :
             <img src={url+element.imgperfil} alt="img" />
           }
             <div className="informacion_business">
               <h2>{element.nombre}</h2>
                 <p><Location color="red" />{element.ciudad.nombre} - {element.ciudad.departamento.nombre}</p>
                 <p className="category_p"> <Category color='#8a9401' />{element.tipo_Negocio.nombre}</p>
               <p>{element.descripcion}</p>
               <Link to='/minegocio'><button>Ver más </button></Link>
             </div>
           </div>
        ))}
      </main>
    </div>
  )
}
