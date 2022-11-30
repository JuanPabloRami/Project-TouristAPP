import React, { useEffect, useState, useContext } from "react";


//componentes
import { Coments } from "../../UI/Coments/Coments";
//icons
import { AiFillLike as Heart } from "react-icons/ai";
import { FaFacebook as IconFacebook } from "react-icons/fa";
import { MdEmail as IconEmail } from "react-icons/md";
import { MdLocationPin as IconLocation } from "react-icons/md";
import { BiCategory as Category } from "react-icons/bi";
import axios from "../../api/axios/axios";
import { UsersContext } from "../../context/Users/UsersContext";
import { BarLoader } from "react-spinners";
import {AiTwotoneEdit as Edit} from 'react-icons/ai'
import { Link } from "react-router-dom";

//imagenes por defecto
import Defaultportada from '../../images/BussinesCard/portada.png'
import businessCardDefault from '../../images/Home/businesCardDefault.jpg'

export const  MyBusiness = () => {
  const {users,setNegocioId,alert,errorText} = useContext(UsersContext)
  const [dataBusiness,setDataBusiness] = useState({})
  const [dataItems,setDataItems] = useState({})
  const [category,setcategory] = useState('')
  const token = localStorage.getItem('token')
  const [showItems,setShowItems] = useState(false)
  const [city,setCity] = useState('')
  const [department,setDepartment] = useState('')
  const [loading, setLoading] = useState(false);
  //estado de los likes
  const [likes,setLikes] = useState()


  const url = "https://touristapp-backend-production-c4fa.up.railway.app/";


  

  //consume el negocio del usuario
  useEffect(()=>{
    setLoading(true);
    axios.get('/api/misnegocios/',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(function (response){
      console.log(response.data.negocios[0]);
      if(response.status === 200){
        setDataBusiness(response.data.negocios[0])
        setcategory(response.data.negocios[0].tipo_Negocio.nombre)
        setCity(response.data.negocios[0].ciudad.nombre)
        setDepartment(response.data.negocios[0].ciudad.departamento.nombre)
        setNegocioId(response.data.negocios[0].id)
      }
    })
    .catch(function (error){
      console.log(error);
    });
  },[users])

  useEffect(() => {
    axios.get(`/api/item/?negocio__id=${dataBusiness.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response);
          setDataItems(response.data);
          setShowItems(true);
          setLoading(false);
  }})
      .catch(function (error) {
        console.log(error);
      });
  }, [dataBusiness]);


  //ver los likes del negocio
  const watchLikes = () =>{
    axios.get(`/auth/viewsets/like/?negocio=${dataBusiness.id}`)
    .then(function (response){
      setLikes(response.data.length)
    })
    .catch(function(error){
      console.log(error);
    })
  }

  useEffect(()=>{
    watchLikes()
  },[dataBusiness])

  return (
    <>
      {loading ? (
        <BarLoader
          cssOverride={{
            margin: "auto",
            "justify-content": "center",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            'z-index': 10000000000
            }
          }
          height={8}
          color="#0373b4"
          size={90}
        />
      ) : null}
      <div className="account__images">
        <div className="front__page">
        {
            dataBusiness.imgportada === null ?
            <img src={Defaultportada} alt="portada" />
            :
          <img src={url+dataBusiness.imgportada} alt="portada" />
        }
        </div>
        <div className="profile__img">
        {
            dataBusiness.imgperfil === null ?
            <img src={businessCardDefault} alt="perfil" />
            :
          <img src={url+dataBusiness.imgperfil} alt="perfil" />
        }
        </div>
        <div className="content_creating">
          <div className="create_nameBusiness">
            <h1>{dataBusiness.nombre}</h1>
          </div>
          <div className="more_optiones">
            <div className="information_business">
              <div className="location_business">
                <p>
                  <IconLocation className="icon l" />
                  {dataBusiness.ubicacion} - {city} - {department}
                </p>
              </div>
              <div className="content_grid">
                <div className="information_import">
                  <p>
                    <IconEmail className="icon e" />
                    {dataBusiness.contactEmail}
                  </p>
                  <p>
                    <IconFacebook className="icon f" />@
                    {dataBusiness.contactFacebook}
                  </p>
                  <p>
                    <Category className="icon c" />
                    {category}
                  </p>
                </div>
                <div className="schedule">
                  <div className="state"></div>
                  <p>
                    Abierto: {dataBusiness.horaEntrada} -{" "}
                    {dataBusiness.horaSalida}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn_like_bussines">
          <Heart />{likes}
        </button>
        <Link to='/editar-negocio'>
          <button className="btn_edit">
            Editar <Edit /> 
          </button>
        </Link>
      </div>
      <main>
        <Coments />
        {showItems ? (
          <div className="content_create_bussines">
            <div className="description__create">
              <h2>Descripción</h2>
              <p>{dataBusiness.descripcion}</p>
            </div>
            <div className="bussines__items">
              <h2>Catalogo</h2>
              <div className="items__img">
                {dataItems.map((element, index) => (
                  <>
                  {element.nuevo === true ?
                    <div key={index} className="content__img__items">
                      <div className="promotion_item"><p>En promoción</p></div>
                    <div className="text">
                      <h3>{element.nombre}</h3>
                      <p>{element.descripcion}</p>
                      <p id="price"> {element.precio} COP</p>
                    </div>
                    <img key={index} src={element.imagen} alt="Item imagen" />
                  </div>
                  :
                    <div key={index} className="content__img__items">
                    <div className="text">
                      <h3>{element.nombre}</h3>
                      <p>{element.descripcion}</p>
                      <p id="price"> {element.precio} COP</p>
                    </div>
                    <img key={index} src={element.imagen} alt="Item imagen" />
                  </div>
                  }
                  </>
                ))}
              </div>
            </div>
          </div>
        ) : null}
        
      </main>
    </>
  );
};
