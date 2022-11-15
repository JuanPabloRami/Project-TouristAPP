import React, { useEffect,useState} from "react";
import './Cards.css'
import { BsGeoAlt as Location } from "react-icons/bs";
import {BiCategoryAlt as Category} from 'react-icons/bi'
import axios from "../../api/axios/axios";
import { UsersContext } from "../../context/Users/UsersContext";
import { useContext } from "react";
import { Navigate } from "react-router";




export const Cards = ({image, owner, description, title,ciudad,departamento,category, id}) => {

  const {idProfile,showId,setValueCard,valueCard} = useContext(UsersContext)


  const {getValue,value,setValue,idBusiness} = useContext(UsersContext)

  const idValue = localStorage.getItem('value');
  
  

  if(value){
    setValue(false)
    return <Navigate to={`/negocio/${idValue}`}/>;
  }

  return (
    <div className="card">
      <div className="img__owner__business">
        <img src={owner} alt="img" />
      </div>
      <div className="container__img">
        <img className="img__business" src={image} alt="img" />
      </div>
      <div className="card__description">
        <h2>{title}</h2>
          <p><Location color="red" />{ciudad} - {departamento}</p>
          <p className="category_p"> <Category color='#8a9401' />{category}</p>
        <p>{description}</p>
        
        <button value={id} onClick={getValue}>Ver más </button>
      </div>
    </div>
  );
};
