import React, { useContext,useState } from 'react'

import { ModalContext } from '../../context/Modal/ModalContext'
import { Field, Formik, Form} from 'formik'
import { CatalogueContext } from '../../context/Catalogue/CatalogueContext'
import { EditBusinessContext } from '../../context/EditBusiness/EditBusinessContext'

export const EditItems = () => {
  
  const {itemsEdit,closeItemsEdit} = useContext(ModalContext)
  const {itemImage,promotionImage} = useContext(CatalogueContext)
  const [promotion,setPromotion] = useState(false)



  const {requestEditItems,nameItem,desItem,priceItem,imgItems,setEditItems,setNameItem,setDesItem,setPriceItem} = useContext(EditBusinessContext)

  const sendItem = (nombre,descripcion,precio,negocio) =>{
    let item = {nombre,descripcion,precio,itemImage,promotionImage,negocio,nuevo: promotion}
    setEditItems(item)
    closeItemsEdit()
  }

  const name = (e) =>{
    setNameItem(e.target.value)
  }
  const description = (e) =>{
    setDesItem(e.target.value)
  }
  const price = (e) =>{
    setPriceItem(e.target.value)
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
        <div className={`modal-login${itemsEdit ? " open" : " close"}`}>
          <div className="conten_itemsCreate">
            <h1>Editar items</h1>
            <button className="btn-close" onClick={closeItemsEdit}>
              X
            </button>
            <Form method="GET" className="form_items">
              <div className="ContainerInput">
                <Field
                  type="text"
                  defaultValue=''
                  value={nameItem === '' ? ' ' : nameItem}
                  id="nameItems"
                  onChange={name}
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
                  defaultValue=''
                  value={desItem === '' ? ' ' : desItem}
                  id="desItems"
                  onChange={description}
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
                  defaultValue=''
                  value={priceItem === '' ? 0 : priceItem}
                  id="numItes"
                  onChange={price}
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
                  id="files"
                  name="file"
                  onChange={imgItems}
                  required
                />
                <label className='name_file'>Imagen del producto</label>
                <div className="errorMsg"></div>
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
              <button onClick={requestEditItems} className='btn' >Editar item</button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  )
}
