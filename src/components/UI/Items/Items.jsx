import React, { useContext,useState } from 'react'
import './Items.css'

import { ModalContext } from '../../context/Modal/ModalContext'
import { Field, Formik, Form} from 'formik'
import { Button } from '../Button/Button'

export const Items = () => {
  
  const {items,closeItems} = useContext(ModalContext)

  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          descripcion: '',
          precio: '',
          nuevo: '',
          imagen: '',
          imgpromocion: '',
          negocio: '',
        }}

        validate={()=>{

        }}
        
        onSubmit={()=>{}}
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
                  name="nameItem"
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
                  name="desItem"
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
                  name="numItem"
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
                  onChange={uploadImage}
                  required
                />
                <div className="errorMsg"></div>
                <img src={baseImage} height="200px" />
              </div>

              <Button text="Crear Item" />
            </Form>
          </div>
        </div>
      </Formik>
    </>
  )
}
