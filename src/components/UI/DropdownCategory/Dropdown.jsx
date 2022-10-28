import React,{useEffect,useState} from 'react'
import axios from '../../api/axios/axios'
import './Dropdown.css'

export const Dropdown = () => {
  //estado que me guarda las categorias
  const [category,setCategory] = useState([])
  //funcion que me trae las categorias
  const categorys = () =>{
    axios.get('/api/tipo-negocio/')
    .then(function (response){
      setCategory(response.data)
    })
    .catch(function (error){
      console.log(error);
    });
  }
  //renderiza la api al cargar siempre la pagina
  useEffect(()=>{
    categorys()
  },[])
  return (
    <div className="drop__down">
      {category.map((Element,index)=>(
        <p key={index}>{Element.nombre}</p>
      ))}
    </div>
  )
}
