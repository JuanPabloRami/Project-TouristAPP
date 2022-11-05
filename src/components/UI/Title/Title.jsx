import React from 'react'
import "./Title.css"

//icons

export const Title = ({text, clas, icon}) => {
  return (
    <>
      <h1 id={`title__${clas}`}>{text}{icon}</h1>
    </>
    
    
  );
}
