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
//component loading
import { BarLoader } from "react-spinners";

//imagenes por defecto
import portada from '../../images/BussinesCard/portada.png'
import businessCardDefault from '../../images/Home/businesCardDefault.jpg'

export const ShowsBusiness = () => {
  const {users,idBusiness,setNegocioId,userId} = useContext(UsersContext)
  const [data,setData] = useState({})
  const [dataItems,setDataItems] = useState({})
  const [category,setcategory] = useState('')
  const [showItems,setShowItems] = useState(false)
  const [city,setCity] = useState('')
  const [department,setDepartment] = useState('')
  const [loading, setLoading] = useState(false);
  //estado de los likes
  const [likes,setLikes] = useState(0)
  //token de acceso
  const token = localStorage.getItem('token')

  const url = 'http://localhost:8000' ;


  //ver los likes
  useEffect(()=>{
    setLoading(true)
    axios.get(`/auth/viewsets/like/?negocio=${data.id}`)
    .then(function (response){
      setLikes(response.data.length)
      setLoading(false)
    })
    .catch(function(error){
      console.log(error);
    })
  },[data])


  //le paso el token de acceso
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      },
  }
  //le paso el id del negocio a la request
  const datosPost = {
    negocio:data.id,
  }

  //comprobar si el usuario ya dio like a su negocio para o dar like o eliminarlo.
  const checkLike=()=>{
    setLoading(true)
    console.log(userId);
    axios.get(`/auth/viewsets/like/?negocio=${data.id}&autor=${userId}`)
    .then(function(response){
      if (response.data.length >0){
        addLike()
      }
      else if (response.data.length === 0){
        deleteLike()
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }

  //añadir un like al negocio
  const addLike = () =>{
    setLoading(true)
    axios.post(`/auth/viewsets/like/`,
      datosPost,
      config
    )
    .then(function(response){
      setLoading(false)
      console.log(response)

    })
    .catch(function(error){
      setLoading(false)
      console.log(error)
    })
  }

  //eliminar el like realizado
  const deleteLike=()=>{
    axios.delete(`/auth/viewsets/like//`,
    config
    )
    .then(function(response){
      console.log(response)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  //carga los datos del negocio
  useEffect(()=>{
    setLoading(true);
    axios.get(`/api/negocio/?id__contains=${localStorage.getItem('value')}`)
    .then(function (response){
      console.log(response.data[0]);
      if(response.status === 200){
        setData(response.data[0])
        localStorage.setItem('title',response.data[0].nombre)
        setcategory(response.data[0].tipo_Negocio.nombre)
        setCity(response.data[0].ciudad.nombre)
        setDepartment(response.data[0].ciudad.departamento.nombre)
        setNegocioId(response.data[0].id)
      }
    })
    .catch(function (error){
      console.log(error);
    });
  },[])

  useEffect(() => {
    axios.get(`/api/item/?negocio__id=${data.id}`)
      .then(function (response) {
        if (response.status === 200) {
          setDataItems(response.data);
          setShowItems(true);
          setLoading(false);
  }})
      .catch(function (error) {
        console.log(error);
      });
  },[data]);

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
            data.imgportada === null ?
            <img src={portada} alt="portada" />
            :
            <img src={data.imgportada} alt="portada" />
          }
        </div>
        <div className="profile__img">
          {
            data.imgperfil === null ?
            <img src={businessCardDefault} alt="perfil" />
            :
            <img src={data.imgperfil} alt="perfil" />
          }
        </div>
        <div className="content_creating">
          <div className="create_nameBusiness">
            <h1>{data.nombre}</h1>
          </div>
          <div className="more_optiones">
            <div className="information_business">
              <div className="location_business">
                <p>
                  <IconLocation className="icon l" />
                  {data.ubicacion} - {city} - {department}
                </p>
              </div>
              <div className="content_grid">
                <div className="information_import">
                  <p>
                    <IconEmail className="icon e" />
                    {data.contactEmail}
                  </p>
                  <p>
                    <IconFacebook className="icon f" />@
                    {data.contactFacebook}
                  </p>
                  <p>
                    <Category className="icon c" />
                    {category}
                  </p>
                </div>
                <div className="schedule">
                  <div className="state"></div>
                  <p>
                    Abierto: {data.horaEntrada} -{" "}
                    {data.horaSalida}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn_like_bussines" onClick={checkLike}>
          {" "}
          <Heart />{likes}
        </button>
      </div>
      <main>
        <Coments />
        {showItems ? (
          <div className="content_create_bussines">
            <div className="description__create">
              <h2>Descripción</h2>
              <p>{data.descripcion}</p>
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
        ) : null}
      </main>
    </>
  );
};
