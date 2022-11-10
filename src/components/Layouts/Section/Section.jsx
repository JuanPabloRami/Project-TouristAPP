import React , { useState, useContext }from 'react'
import "./Section.css"
import axios from '../../api/axios/axios'
//Componentes
import { CardBusiness } from "../../UI/BussinesCard/CardBusiness";
import {Title} from '../../UI/Title/Title'
import {AddBusiness} from '../AddBusiness/AddBusiness'
import {ComentsStars} from '../ComentsAndStars/ComentsStars'
import {Products} from '../../UI/Products of Business/Products'
import {BsFillHandbagFill as Bag} from "react-icons/bs"
import { BsFillTagFill as Tag } from "react-icons/bs";
import {ModalContext} from '../../context/Modal/ModalContext'


export const Section = () => {
  
  const { OpenModal,locationState,inputCity, openLogin,openRoles} = useContext(ModalContext);

  const [category , setCategory] = useState([])
  //Hace la peticion de las categorias
  const ListCategories = () =>{
    axios.get('/api/tipo-negocio/')
    .then(function (response) {
      setCategory(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  

  return (
    <section>
      <div className="content__cards">
        
        
        <Title text='Negocios' clas="ng" icon={<Bag id='bag' />} />
        <div className="filterSection">
          <button onClick={OpenModal}>ubicacion</button>
          <select name="" id="" onClick={ListCategories} >
            <option value="" defaultValue="ciudad" selected disabled hidden>todas las categorias</option>
            {category.map((Element,index)=>(
                <option key={index} defaultValue={Element.nombre}>{Element.nombre}</option>
              ))}
          </select>
        </div>
        <CardBusiness/>
        <Title text='Promociones' clas="pm" icon={<Tag id='tag' />}/>
        <Products/>
      </div>
      <div className="Add">
        <AddBusiness/>
      </div>
      <ComentsStars/>
    </section>
  )
}
