import React, { useContext } from 'react'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import { Textarea } from '../Textarea/Textarea'
import './Description.css'

export const Description = () => {
  const {setDel,setDescription,inputDescription} = useContext(CreateBussinesContext)

  const editDescription = () => {
    setDel(false)
    setDescription(false)
    inputDescription()
    return <Textarea/>
  }

  const {text} = useContext(CreateBussinesContext)
  return (
    <>
      <div className="description__create">
      <h2>Descripción</h2>
      <p>
        {text ?
            text
          :
          <>
            No hay ninguna descripción
          </>
          }
          </p>
        <button onClick={editDescription}>Editar</button>
      </div>
    </>
  )
}
