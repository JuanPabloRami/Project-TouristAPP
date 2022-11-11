import React, {useContext} from 'react'
import './StyleCategories.css'
import { Cards } from "../../UI/Cards/Cards"
import OWner from '../../images/Profile/owner.jpg'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "../../api/axios/axios";
import { CategoriesContext } from '../../context/Categories/CategoriesContext'



export const Categories = () => {
    const {categories} = useContext(CategoriesContext)
    const [data, setData] = useState({})
    const [dataBussiness, setDataBussiness] = useState([])
    const showCategory = () =>{
        axios.get(`api/tipo-negocio/?nombre=${localStorage.getItem('categories')}`)
        .then(function(response) {
            //console.log(response)
            if(response.status === 200) {
                setData(response.data[0])
            }
        })
        .catch(function(error){
            console.log(error)
        })
        
        axios.get(`api/negocio/?tipo_Negocio__nombre__contains=${localStorage.getItem('categories')}`)
        .then(function(response) {
            //console.log(response)
            if(response.status === 200) {
                setDataBussiness(response.data)
            }
        })
        .catch(function(error){
            console.log(error)
        })
    }
    useEffect(()=>{
        showCategory()
    }, [categories])
  
  return (
    <div>
        <div className='header'>
            <img src={data.imgCategoria} alt="imgCategoria" />
        </div>
        <div className='content'>
            <h1>{data.nombre}</h1>
            <p>{data.descripcion}</p>
        </div>
        <div className='contCard'>
            {dataBussiness.map((element,index)=>(
                <div key={index}>
                < Cards image={element.imgperfil} owner={element.imgperfil} description={element.descripcion} title={element.nombre} id={element.id} />
                </div>
            ))}
        </div>
    </div>
  )
}
