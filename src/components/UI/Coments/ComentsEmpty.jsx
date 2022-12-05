import React, { useState,useEffect ,useContext} from 'react'
import './Coments.css'




export const ComentsEmpty = () => {
  return (
    <div className="comments">
      <h2>Comentarios</h2>
      <div className="comments__bussines">
        <div className="nothing_coments">
          <h2>Aun no tienes comentarios</h2>
        </div>
      </div>
    </div>
  )
}
