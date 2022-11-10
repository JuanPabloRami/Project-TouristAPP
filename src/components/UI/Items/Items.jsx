import React, { useContext } from 'react'
import './Items.css'

import { ModalContext } from '../../context/Modal/ModalContext'
import { Field, Formik, Form} from 'formik'
import { Button } from '../Button/Button'
import { CatalogueContext } from '../../context/Catalogue/CatalogueContext'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'

export const Items = () => {
  
  const {items,closeItems} = useContext(ModalContext)
  const {uploadImageItem,uploadImagePromotion,setStateItem,catalogue,itemImage,promotionImage} = useContext(CatalogueContext)
  const {setDataItems,responseItems} = useContext(CreateBussinesContext)

 const sendItem = (nombre,descripcion,precio,negocio) =>{
  let item = {nombre,descripcion,precio,itemImage,promotionImage,negocio}
  setDataItems(item)
  setStateItem(true)
  catalogue.push(item)
  closeItems()
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
                  id="file"
                  name="file"
                  onChange={uploadImageItem}
                  required
                />
                <label className='name_file'>Imagen del producto</label>
                <div className="errorMsg"></div>
              </div>

              <div className="ContainerInput">
                <Field
                  type="file"
                  id="files"
                  name="files"
                  onChange={uploadImagePromotion}
                  required
                />
                <label className='name_file'>Imagen de promoción</label>
                <div className="errorMsg"></div>
              </div>
              <button className='btn' onClick={responseItems}>Crear item</button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  )
}
