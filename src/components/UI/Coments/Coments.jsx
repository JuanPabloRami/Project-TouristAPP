import React, { useState,useEffect } from 'react'
import './Coments.css'
//Imagenes
import User from '../../images/Profile/owner.jpg'
//icons
import {MdSend as Send} from 'react-icons/md'
import axios from '../../api/axios/axios'

export const Coments = () => {

  const [comments,setComments] = useState([])
  

  const showComments =()=>{
    axios.get('/api/comentario/')
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
  },[])



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
        
        

        {/* <div className="comment__user">
          <div className="comment__img_user"></div>
          <div className="comment__letters">
            <img src={User} alt='Usuario'/>
            <p>otro</p>
          </div>
        </div> */}
      </div>
        <div className="comments__write">
          <input name='comments' type='text' placeholder='Escribe un comentario...'/>
          <div className="content__btn__send">
            <Send className='btn__send'/>
          </div>
        </div>
    </div>
  )
}
