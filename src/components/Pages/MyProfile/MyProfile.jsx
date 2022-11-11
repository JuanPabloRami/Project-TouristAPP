import React, { useEffect, useState,useContext} from 'react'

//Imagenes
import Account from '../../images/Profile/profile.jpg'
import FrontPage from '../../images/Profile/frontPage.jpg'
//componentes
import {Coments} from '../../UI/Coments/Coments'
import { CreateBussines } from '../../UI/CreateBussines/CreateBussines'
//icons
import {AiFillLike as Heart} from 'react-icons/ai'
import {FaFacebook as IconFacebook,} from "react-icons/fa";
import {MdEmail as IconEmail} from 'react-icons/md'
import {MdLocationPin as IconLocation} from "react-icons/md";
import {BiCategory as Category} from 'react-icons/bi'
import axios from '../../api/axios/axios'
import { UsersContext } from '../../context/Users/UsersContext'
import { InformationBusinessContext } from '../../context/InformationBusiness/InformationBusinessContext'

export const MyProfile = () => {
  const {users} = useContext(UsersContext)
  const [dataBusiness,setDataBusiness] = useState({})
  const [dataItems,setDataItems] = useState({})
  const [category,setcategory] = useState('')
  const token = localStorage.getItem('token')
  const [showItems,setShowItems] = useState(false)
  const [city,setCity] = useState('')
  const [department,setDepartment] = useState('')


  const url = 'http://touristapp-backend-production.up.railway.app'

  useEffect(()=>{
    axios.get('/api/misnegocios/',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(function (response){
      if(response.status === 200){
        setDataBusiness(response.data.negocios[0])
        setcategory(response.data.negocios[0].tipo_Negocio.nombre)
        setCity(response.data.negocios[0].ciudad.nombre)
        setDepartment(response.data.negocios[0].ciudad.departamento.nombre)
      }
    })
    .catch(function (error){
      console.log(error);
    });
  },[users])

  useEffect(()=>{
    axios.get(`/api/item/?negocio__id=${dataBusiness.id}`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(function (response){
      console.log(response);
      setDataItems(response.data)
      setShowItems(true)
    })
    .catch(function (error){
      console.log(error);
    });
  },[dataBusiness])

  return (
    <>
    <div className="account__images">
      <div className="front__page">
          <img src={url+dataBusiness.imgportada} alt='portada'/>
      </div>
      <div className="profile__img">
        <img src={url+dataBusiness.imgperfil} alt='perfil'/>
      </div>
      <div className="content_creating">
        <div className="create_nameBusiness">
          <h1>{dataBusiness.nombre}</h1>
        </div>
        <div className="more_optiones">
          <div className="information_business">
            <div className="location_business">
              <p><IconLocation className='icon l'/>{dataBusiness.ubicacion} - {city} - {department}</p>
            </div>
            <div className="content_grid">
              <div className="information_import">
                <p><IconEmail className='icon e'/>{dataBusiness.contactEmail}</p>
                <p><IconFacebook className='icon f'/>@{dataBusiness.contactFacebook}</p>
                <p><Category className='icon c'/>{category}</p>
              </div>
              <div className="schedule">
                <div className="state"></div>
                <p>Abierto: {dataBusiness.horaEntrada} - {dataBusiness.horaSalida}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='btn_like_bussines'> <Heart/> 100</button>
    </div>
    <main>
      <Coments/>
      {showItems ?
            <div className='content_create_bussines'>
            <div className="description__create">
              <h2>Descripción</h2>
              <p>{dataBusiness.descripcion}</p>
            </div>
            <div className="bussines__items">
            <h2>Catalogo</h2>
              <div className="items__img">
                {dataItems.map((element, index) => (
                <div key={index} className="content__img__items">
                  <div className="text">
                    <h3>{element.nombre}</h3>
                    <p>{element.descripcion}</p>
                    <p id="price"> {element.precio} COP</p>
                  </div>
                  <img key={index} src={element.imagen} alt="Item imagen" />
                </div>
            ))}
            </div>
          </div>
          </div>
      :
        null
      }
    </main>
    </>
  )
}

