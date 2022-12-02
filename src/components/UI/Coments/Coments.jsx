import React, { useState,useEffect ,useContext} from 'react'
import './Coments.css'
//Imagenes
import User from '../../images/Profile/owner.jpg'
//icons
import {MdSend as Send} from 'react-icons/md'
import {ScaleLoader} from 'react-spinners'
import axios from '../../api/axios/axios'
import { UsersContext } from '../../context/Users/UsersContext'

import { ModalContext } from '../../context/Modal/ModalContext'
import { TransitionsContext } from '../../context/Transitions/TransitionsContext'

//GoogleAnalytics
import ReactGA  from 'react-ga4'

//url base del backend con guion al final
const url = "https://touristapp-backend-production-c4fa.up.railway.app/files/"

// token de acceso
const token = localStorage.getItem('token')

export const Coments = () => {


  // se trae el id del negocio donde el usuario esta ubicado
  const {negocioId,setAlert,setErrAlert,setErrText} = useContext(UsersContext)


  // se almacenan los comentarios guardados para ser visualizados
  const [comments,setComments] = useState([])

  //Estado que oculta el componente de carga
  const [loading, setLoading] = useState(false)

  //Uso de contexto
  const {openLogin} = useContext(ModalContext)

  //variable que habilita o deshabilita el boton de enviar comentario cuando la peticion esta en progreso
  const [disableComment,setDisableComment] = useState(false)


  //estado de componente de carga global
  const {transition,setTransition} = useContext(TransitionsContext)

  // se visualizan los comentarios
  const showComments =()=>{
    setDisableComment(true)
    axios.get(`/auth/viewsets/comentario/?negocio=${negocioId}`)
    .then(function (response) {
      setComments(response.data)
      setDisableComment(false)
    })
    .catch(function (error) {
      console.log(error);
      setDisableComment(false)
    })
  }
  useEffect(()=>{
    showComments()
  },[negocioId])

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      },
  }

  // se almacena el comentario a enviar por el usuario
  const [newComment,setNewComment] = useState("")

  // datos del comentario a enviar
  const data = {
    comentario:newComment,
    negocio:negocioId,
  }
  // aca se crea el comentario
  const createComment = () =>{
    
    console.log(token);
    
    if (token === null ){
      openLogin()
      return console.log("TOKEN nulo asdsad")
    }
    else if (newComment === ""){
      
      return console.log("comentario vacio")
    }
    else{
      setLoading(true)
      setDisableComment(true)
      axios.post('/auth/viewsets/comentario/',
        data,
        config
        )
      .then(function (response){
        console.log(response);
        if(response.status === 201){
          showComments()
          setLoading(false);
          setDisableComment(false)
          setNewComment("")
          setAlert("open")
          // setErrText("Error al enviar el comentario")
          setTimeout(()=>{
            setAlert("close")
          },3500)
        }
      })
      .catch(function (error){
        console.log(error);
        setLoading(false)
        setDisableComment(false)
        // setErrText("error al crear comentario")
        setErrAlert("open")
        setTimeout(()=>{
          setErrAlert("close")
        },1500)
      });
    }
  }

  const clickComent = () => {
    ReactGA.event({
      'category':'event_coment',
      'action':'clickComent',
      'label': 'label'
    });
    createComment();
  }
  //valida si el usuario esta logueado para permitirle o no comentar.
  const validateCommentInput = () =>{
    if (token === null) {
    return(
        <div className="comments__write">
          <input name='comments' type='text' placeholder='Inicia sesion para publicar un comentario' disabled />
        </div>
        )
      }
    else{
      return(
      <div className="comments__write">
        {disableComment === true ? 
        <input name='comments' type='text' placeholder='Escribe un comentario...'   disabled/>
        : <input name='comments' type='text' placeholder='Escribe un comentario...'  onChange={(e)=>{
          setNewComment(e.target.value)
        }} value={newComment} autocomplete="off" />
      }


        {/* <input name='comments' type='text' placeholder='Escribe un comentario...'  onChange={(e)=>
          setNewComment(e.target.value)}
          /> */}
          
        
        {disableComment === true ? 
          <div className="content__btn__send" disabled>
            <ScaleLoader
              color="#ffffff"
              height={18}
              width={3}
            />
          </div>
          
          :
          <button className="content__btn__send" onClick={clickComent}>
            <Send className='btn__send' />
          </button>
        }
        </div>
      
      )
    }
  }
  useEffect(()=>{
    validateCommentInput()
  },[token])



  return (
    <div className="comments">
      <h2>Comentarios</h2>
      <div className="comments__bussines">
        
        {
          comments.length >0  ?
            comments.map((e,index)=>(
              <div className="comment__user" key={index}  >
                <div className="comment__img_user"></div>
                <div className="comment__letters">
                  {
                    e.autorImg !== "" ?
                    <img src={url +e.autorImg} alt='Usuario'/>
                    :
                    <img src={User} alt='Usuario'/>
                  }
                  <h3>{e.autorNombre} {e.autorApellido}</h3>
                  <p>{e.comentario}</p>
                </div>
              </div>
            ))
          :
            <div className="nothing_coments">
                <h2>Aun no tienes comentarios</h2>
            </div>
        }
      </div>
      
      {
        validateCommentInput()
      }  
      {
        disableComment === true ?
      <div className="commentLoading">
          <div>
            <ScaleLoader
              color="#000000"
              height={18}
              width={3}
            />
            <p>Cargando</p>
          </div>
      </div>
      :null
      }
    </div>
  )
}
