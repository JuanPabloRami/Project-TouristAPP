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
import { UsersContext } from '../../context/Users/UsersContext';
//icons
import {BiCategoryAlt as Category} from 'react-icons/bi'
import { BsGeoAlt as Location } from "react-icons/bs";



export const Section = () => {
  
  const { OpenModal,locationState} = useContext(ModalContext);
  const {setRequest} = useContext(UsersContext)

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

  const valueCategory = (e) =>{
    const value = e.target.value
    localStorage.setItem('categoryFilter',value)
    setRequest(value)
  }
  
  const value = locationState.split(' ')

  return (
    <section>
      <div className="content__cards">
        <Title text={`${value[0] === '' ? 'Negocios': `Negocios de ${value[0]}`}`} clas="ng" icon={<Bag id='bag' />} />
        <div className="filterSection">
          <button onClick={OpenModal}> <Location color="red" className="logo-location"/>{locationState === '' ? 'Filtra por ubicación': locationState }</button>
            <div className="icon_position">
              <div className="icon">
                <Category />
              </div>
              <select  onChange={valueCategory} name="" id="" onClick={ListCategories} >
                <option defaultValue="ciudad" selected disabled hidden>Filtra por categoria</option>
                {category.map((Element,index)=>(
                    <option key={index} defaultValue={Element.nombre}>{Element.nombre}</option>
                  ))}
              </select>
            </div>
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
