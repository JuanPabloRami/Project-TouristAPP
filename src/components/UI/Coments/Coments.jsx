import React from 'react'
import './Coments.css'
//Imagenes
import User from '../../images/Profile/owner.jpg'
//icons
import {MdSend as Send} from 'react-icons/md'

export const Coments = () => {
  return (
    <div className="comments">
      <h2>Comentarios</h2>
      <div className="comments__bussines">
        <div className="comment__user">
          <div className="comment__img_user"></div>
            <div className="comment__letters">
              <img src={User} alt='Usuario'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum omnis iure assumenda consectetur deleniti animi impedit facere et quae laboriosam, unde dolorum deserunt perspiciatis, modi quas architecto obcaecati natus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum omnis iure assumenda consectetur deleniti animi impedit facere et quae laboriosam, unde dolorum deserunt perspiciatis, modi quas architecto obcaecati natus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum omnis iure assumenda consectetur deleniti animi impedit facere et quae laboriosam, unde dolorum deserunt perspiciatis, modi quas architecto obcaecati natus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum omnis iure assumenda consectetur deleniti animi impedit facere et quae laboriosam, unde dolorum deserunt perspiciatis, modi quas architecto obcaecati natusLorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum omnis iure assumenda consectetur deleniti animi impedit facere et quae laboriosam, unde dolorum deserunt perspiciatis, modi quas architecto obcaecati natus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum omnis iure assumenda consectetur deleniti animi impedit facere et quae laboriosam, unde dolorum deserunt perspiciatis, modi quas architecto obcaecati natusLorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum omnis iure assumenda consectetur deleniti animi impedit facere et quae laboriosam, unde dolorum deserunt perspiciatis, modi quas architecto obcaecati natus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum omnis iure assumenda consectetur deleniti animi impedit facere et quae laboriosam, unde dolorum deserunt perspiciatis, modi quas architecto obcaecati natus</p>
            </div>
          </div>
          <div className="comment__user">
          <div className="comment__img_user"></div>
            <div className="comment__letters">
              <img src={User} alt='Usuario'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum omnis iure assumenda consectetur deleniti animi impedit facere et quae laboriosam, unde dolorum deserunt perspiciatis, modi quas architecto obcaecati natus!</p>
            </div>
          </div>
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
