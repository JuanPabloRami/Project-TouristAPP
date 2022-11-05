import React from 'react'
import "./Section.css"

//Componentes
import { CardBusiness } from "../../UI/BussinesCard/CardBusiness";
import {Title} from '../../UI/Title/Title'
import {AddBusiness} from '../AddBusiness/AddBusiness'
import {ComentsStars} from '../ComentsAndStars/ComentsStars'
import {Products} from '../../UI/Products of Business/Products'
import {BsFillHandbagFill as Bag} from "react-icons/bs"
import { BsFillTagFill as Tag } from "react-icons/bs";

export const Section = () => {
  return (
    <section>
      <div className="content__cards">
        <Title text='Negocios' clas="ng" icon={<Bag id='bag' />} />
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
