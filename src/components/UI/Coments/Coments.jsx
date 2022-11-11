import React, { useState,useEffect ,useContext} from 'react'
import './Coments.css'
//Imagenes
import User from '../../images/Profile/owner.jpg'
//icons
import {MdSend as Send} from 'react-icons/md'
import axios from '../../api/axios/axios'
import { UsersContext } from '../../context/Users/UsersContext'


// token de acceso
const token = localStorage.getItem('token')

export const Coments = () => {


  // se trae el id del negocio donde el usuario esta ubicado
  const {negocioId,setAlert,setErrAlert,setErrText} = useContext(UsersContext)


  // se almacenan los comentarios guardados para ser visualizados
  const [comments,setComments] = useState([])

  //Estado que oculta el componente de carga
  const [loading, setLoading] = useState(false)
  

  // se visualizan los comentarios
  const showComments =()=>{
    axios.get(`/api/comentario/?negocio=${negocioId}`)
    .then(function (response) {
      console.log(response.data)
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
    axios.post('/api/comentario/',
      data,
      config
      )
    .then(function (response){
      console.log(response);
      if(response.status === 201){
        console.log("comentario creado")
        showComments()
        setLoading(false);
        setAlert("open")
        setErrText("Error al enviar el comentario")
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
                  <img src={User} alt='Usuario'/>
                  <p>{e.comentario} adsadsad</p>
                </div>
              </div>
            ))
          :
            <div className="nothing_coments">
                <h2>Aun no tienes comentarios</h2>
            </div>
        }
      </div>
        <div className="comments__write">
          <input name='comments' type='text' placeholder='Escribe un comentario...' onChange={(e)=>
            setNewComment(e.target.value)}
            />
          <div className="content__btn__send">
            <Send className='btn__send' onClick={createComment}/>
          </div>
        </div>
        
    </div>
  )
}
