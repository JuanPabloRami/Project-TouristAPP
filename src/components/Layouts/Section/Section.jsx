import React from 'react'
import "./Section.css"

//Componentes
import { CardBusiness } from "../../UI/BussinesCard/CardBusiness";
import {Title} from '../../UI/Title/Title'
import {AddBusiness} from '../AddBusiness/AddBusiness'
import {ComentsStars} from '../ComentsAndStars/ComentsStars'
import {Products} from '../../UI/Products of Business/Products'

export const Section = () => {
  return (
    <section>
      <div className="content__cards">
        <Title text='Negocios' clas="ng" />
        <CardBusiness/>
        <Title text='Promociones' clas="pm"/>
        <Products/>
      </div>
      <div className="Add">
        <AddBusiness/>
      </div>
      <ComentsStars/>
    </section>
  )
}
