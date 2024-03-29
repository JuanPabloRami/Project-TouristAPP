import React , { useState, useContext, useEffect }from 'react'
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
import { BusinessFeatured } from '../../UI/BusinessFeatured/BusinessFeatured';
import { BusinessNews } from '../../UI/BusinessNews/BusinessNews';
import { TranslationContext } from '../../context/Translation/TranslationContext';
import { useTranslation } from 'react-i18next';



export const Section = () => {

  //traduccion multiidioma
  const localLang = localStorage.getItem("lang")
  const {language} = useContext(TranslationContext)
  const [t,i18n] = useTranslation("global")
  useEffect(() => {
    i18n.changeLanguage(localLang);
  }, [language])
  //fin traduccion
  
  const { OpenModal,locationState,setLocationState} = useContext(ModalContext);
  const {setRequest,setDelFilter,delFilter} = useContext(UsersContext)

  const [category , setCategory] = useState([])
  const [delNameCategory,setDelNameCategory] = useState(false)
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


  const showBussines = () => {
    setDelFilter(true)
    setLocationState('')
    setRequest('')
    setDelNameCategory(true)
    setDelNameCategory(false)
    changeSelected()
  };

  const changeSelected = (e) => {
    const text = t("layouts.section.filterByCategory");
    const $select = document.querySelector('#mySelect');
    const $options = Array.from($select.options);
    const optionToSelect = $options.find(item => item.text ===text);
    optionToSelect.selected = true;
  };


  return (
    <section>
      <div className="content__cards">
        <div className="content_business">
          <Title text={`${value[0] === '' ? t("layouts.section.business"): `${t("layouts.section.businessFrom")} ${value[0]}`}`} clas="ng" icon={<Bag id='bag' />} />
          <div className="filterSection">
            <button className='location_filter' onClick={OpenModal}> <Location color="red" className="logo-location"/>{locationState === '' ? t("layouts.section.filterByLocation"): locationState }</button>
              <div className="icon_position">
                <div className="icon">
                  <Category />
                </div>
                <select  onChange={valueCategory} name="" id="mySelect" onClick={ListCategories} >
                  <option defaultValue="ciudad" selected disabled hidden>{t("layouts.section.filterByCategory")}</option>
                  {category.map((Element,index)=>(
                      <option key={index} defaultValue={Element.nombre}>{Element.nombre}</option>
                    ))}
                </select>
              </div>
              <button onClick={showBussines} className='button_del'>{t("layouts.section.deleteFilters")}</button>
          </div>
          <CardBusiness/>
        </div>
        <Title text={t("layouts.section.latestBusinessTitle")} clas="pm" icon={<Tag id='tag' />}/>
        <BusinessNews/>
        <Title text={t("layouts.section.promotions")} clas="pm" icon={<Tag id='tag' />}/>
        <Products/>
      </div>
      <div className="Add">
        <AddBusiness/>
      </div>
      <ComentsStars/>
    </section>
  )
}
