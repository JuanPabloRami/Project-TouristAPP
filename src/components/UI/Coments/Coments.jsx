import React, { useState,useEffect ,useContext} from 'react'
import './Coments.css'
//Imagenes
import User from '../../images/Profile/owner.jpg'
//icons
import {MdSend as Send} from 'react-icons/md'
import axios from '../../api/axios/axios'
import { UsersContext } from '../../context/Users/UsersContext'

import { ModalContext } from '../../context/Modal/ModalContext'



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
  

  // se visualizan los comentarios
  const showComments =()=>{
    axios.get(`/auth/viewsets/comentario/?negocio=${negocioId}`)
    .then(function (response) {
      setComments(response.data)
    })
    .catch(function (error) {
      console.log(error);
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
  // se crea el comentario
  const createComment = () =>{
    setLoading(true)
    console.log(token);
    if (token === null ){
      openLogin()
      return console.log("nulo asdsad")
    }
    else if (newComment === ""){
      
      return console.log("comentario vacio")
    }
    else{
      axios.post('/auth/viewsets/comentario/',
        data,
        config
        )
      .then(function (response){
        console.log(response);
        if(response.status === 201){
          showComments()
          setLoading(false);
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
        setErrText("error al crear comentario")
        setErrAlert("open")
        setTimeout(()=>{
          setErrAlert("close")
        },1500)
      });
    }
  }



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
                    e.autorImg === null ?
                    <img src={e.autorImg} alt='Usuario'/>
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
        token === null ? 
        <div className="comments__write">
          <input name='comments' type='text' placeholder='Inicia sesion para publicar un comentario' disabled />
        </div>
        :
        <div className="comments__write">
          <input name='comments' type='text' placeholder='Escribe un comentario...'  onChange={(e)=>
            setNewComment(e.target.value)}
            />
          <div className="content__btn__send">
            <Send className='btn__send' onClick={createComment}/>
          </div>
        </div>
      }  
        
    </div>
  )
}
