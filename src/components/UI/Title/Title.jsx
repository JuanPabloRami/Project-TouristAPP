import React from 'react'
import "./Title.css"

//icons
import {BsFillHandbagFill as Bag} from "react-icons/bs"

export const Title = ({text, clas}) => {
  return (
    <>
      <Bag id='bag'/>
      <h1 id={`title__${clas}`}>{text}</h1>
    </>
    
  );
}
