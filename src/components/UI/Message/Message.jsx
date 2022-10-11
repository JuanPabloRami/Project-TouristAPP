import React from 'react'
import './Message.css'

export const Message = ({text, icon,message}) => {
  return (
    <>
      <div className={`message__response window_${message}`}>
        {icon}
        <p>{text}</p>
      </div>
    </>
  )
}
