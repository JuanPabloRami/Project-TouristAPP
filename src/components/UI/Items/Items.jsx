import React, { useContext, useState } from 'react'
import './Items.css'

import { ModalContext } from '../../context/Modal/ModalContext'
import { Field, Formik, Form} from 'formik'
import { CatalogueContext } from '../../context/Catalogue/CatalogueContext'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import { EditBusinessContext } from '../../context/EditBusiness/EditBusinessContext'

export const Items = () => {
  
  const {items,closeItems} = useContext(ModalContext)
  const {uploadImageItem,setStateItem,catalogue,itemImage,promotionImage} = useContext(CatalogueContext)
  const {setDataItems,itemsData} = useContext(CreateBussinesContext)
  const {changeButton} = useContext(EditBusinessContext)
  const [promotion,setPromotion] = useState(false)

  const sendItem = (nombre,descripcion,precio,negocio) =>{
  let item = {nombre,descripcion,precio,itemImage,promotionImage,negocio,nuevo:promotion}
  let items = {nombre,descripcion,precio,imagen: itemImage,imgpromocion: '',}
  if (changeButton) {
    setDataItems(item)
    setPromotion(false)
  }
  itemsData.push(items)
  setStateItem(true)
  catalogue.push(item)
  closeItems()
  }

  const promotionYes = () =>{
    console.log('si');
    setPromotion(true)
  }

  const promotionNot = () =>{
    console.log('no');
    setPromotion(false)
  }

  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          descripcion: '',
          precio: '',
          nuevo: null,
          imagen: '',
          imgpromocion: '',
          negocio: '',
        }}

        validate={()=>{

        }}
        
        onSubmit={({nombre,descripcion,precio,negocio})=>{
          sendItem(nombre,descripcion,precio,negocio)
        }}
      >
        <div className={`modal-login${items ? " open" : " close"}`}>
          <div className="conten_itemsCreate">
            <h1>Crear items</h1>
            <button className="btn-close" onClick={closeItems}>
              X
            </button>
            <Form method="GET" className="form_items">
              <div className="ContainerInput">
                <Field
                  type="text"
                  id="nameItem"
                  name="nombre"
                  required
                />
                <label htmlFor="nameItem">
                  <span className="text-name">Nombre</span>
                </label>
                <div className="errorMsg"></div>
              </div>

              <div className="ContainerInput">
                <Field
                  type="text"
                  id="desItem"
                  name="descripcion"
                  maxlength="150"
                  required
                />
                <label htmlFor="desItem">
                  <span className="text-name">Descripción</span>
                </label>
                <div className="errorMsg"></div>
              </div>

              <div className="ContainerInput">
                <Field
                  type="number"
                  id="numItem"
                  name="precio"
                  maxlength='9'
                  required
                />
                <label htmlFor="numItem">
                  <span className="text-name">Precio</span>
                </label>
                <div className="errorMsg"></div>
              </div>

              <div className="ContainerInput">
                <Field
                  type="file"
                  id="fil"
                  name="fil"
                  onChange={uploadImageItem}
                  required
                />
                <label className='name_file'>Imagen del producto</label>
              </div>

              <div className='promotion_items'>
                <label>¿Desea hacer este producto una promoción?</label>
                <div className='radio'>
                  <label htmlFor='Si'>Si</label>
                  <Field
                  type='radio'
                  name='yes'
                  id='Si'
                  onClick={promotionYes}
                  />
                </div>
                <div className='radio'>
                  <label htmlFor='No' >No</label>
                  <Field
                  type='radio'
                  name='yes'
                  id='No'
                  onClick={promotionNot}
                  />
                </div>
              </div>
              <button className='btn' >Crear item</button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  )
}
