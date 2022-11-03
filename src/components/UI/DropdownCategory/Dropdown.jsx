import React,{useEffect,useState} from 'react'
import { useContext } from 'react'
import axios from '../../api/axios/axios'
import { CategoriesContext } from '../../context/Categories/CategoriesContext'
import './Dropdown.css'
import { Link } from 'react-router-dom'

export const Dropdown = () => {
  //estado que me guarda las categorias
  const [category,setCategory] = useState([])
  const {setCategories} = useContext(CategoriesContext)
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

  const selectCategory = (e) => {
    let category = e.target.outerText
    return setCategories(category)
  }
  
  //renderiza la api al cargar siempre la pagina
  useEffect(()=>{
    categorys()
  },[])



  return (
    <div className="drop__down">
      {category.map((Element,index)=>(
        <Link to="/categories">
          <p key={index} onClick={selectCategory} >{Element.nombre}</p>
        </Link>
      ))}
    </div>
  )
}
