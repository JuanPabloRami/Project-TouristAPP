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
import { Transition } from "../../UI/Transition/Transition";
import { TransitionsContext } from "../../context/Transitions/TransitionsContext";

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
  const [likes,setLikes] = useState()
  //token de acceso
  const token = localStorage.getItem('token')
  //id del like a eliminar
  // const [delLikeID,setDelLikeID] = useState(0)
  const url = 'https://touristapp-backend-production-c4fa.up.railway.app/' 

  //estado que visualiza los likes al ser actualizados
  const [updateLike,setUpdateLike] = useState(false)

  //cambiar el estilo del boton likes cuando el usuario da like
  const [likeStyle,setLikeStyle] = useState(false)

  //variable que habilita o deshabilita el boton de dar like cuando la peticion esta en progreso
  const [disableLike,setDisableLike] = useState(false)


  //ver los likes del negocio
  const watchLikes = () =>{
    setLoading(true)
    axios.get(`/auth/viewsets/like/?negocio=${data.id}`)
    .then(function (response){
      setLikes(response.data.length)
      setLoading(false)
      setUpdateLike(false)
    })
    .catch(function(error){
      console.log(error);
    })
    
    
  }

  const setLikeColor = () =>{
    axios.get(`/auth/viewsets/like/?negocio=${data.id}&autor=${userId}`)
      .then(function(response){
        if (response.data.length >0){
          setLikeStyle(true)
        }
      })
      .catch(function(error){
        console.log(error);
      })
  }

  useEffect(()=>{
    watchLikes()
    setLikeColor()
  },[updateLike,data])


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

  const {transition,setTransition} = useContext(TransitionsContext)

  //comprobar si el usuario ya dio like a su negocio para o dar like o eliminarlo.
  const checkLike=()=>{
    setLoading(true)
    console.log(userId);
    setDisableLike(true)
    axios.get(`/auth/viewsets/like/?negocio=${data.id}&autor=${userId}`)
    .then(function(response){
      if (response.data.length  === 0){
        addLike()
        
        setUpdateLike(true)
        
      }
      else if (response.data.length >0){
        
        deleteLike(response.data[0].id)
        
        setUpdateLike(true)
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
      setLikeStyle(true)
      setDisableLike(false)
    })
    .catch(function(error){
      setLoading(false)
      console.log(error)
      setDisableLike(false)
    })
  }

  //eliminar el like realizado
  const deleteLike=(delLikeID)=>{
    console.log(delLikeID);
    axios.delete(`/auth/viewsets/like/${delLikeID}/`,
    config
    )
    .then(function(response){
      setLikeStyle(false)
      setDisableLike(false)
    })
    .catch(function(error){
      console.log(error)
      setDisableLike(false)
    })
  }

  //carga los datos del negocio
  useEffect(()=>{
    setTransition(true)
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
          setTimeout(() => {
            setTransition(false)
          }, 1000);
  }})
      .catch(function (error) {
        console.log(error);
        setTimeout(() => {
          setTransition(false)
        }, 1000);
      });
  },[data]);

  const time = new Date()
  const horaActual = time.toLocaleTimeString('es-ES')

  const stateBusiness = ()=>{
    if(horaActual >= data.horaEntrada && horaActual <= data.horaSalida){
      return (
        <div className="schedule">
          <div className="state"></div>
            <p>
              Abierto: {data.horaEntrada} - {' '}
              {data.horaSalida}
            </p>
        </div>
      )
    }else{
      return (
        <div className="schedule">
          <div className="stated"></div>
            <p>
              Cerrado: {data.horaEntrada} - {' '}
              {data.horaSalida}
            </p>
        </div>
      )
    }
  }

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
                  {stateBusiness()}
              </div>
            </div>
          </div>
        </div>
        {disableLike === true ? <button className={likeStyle ? 'btn_liked_bussines' : 'btn_like_bussines'} disabled>
          {" "}
          <Heart />{likes} Me gusta
        </button> 
        : <button className={likeStyle ? 'btn_liked_bussines' : 'btn_like_bussines'} onClick={checkLike} >
        {" "}
        <Heart />{likes} Me gusta
      </button>}
        
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
      <Transition/>
    </>
  );
};
