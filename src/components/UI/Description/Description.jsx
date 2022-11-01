import React, { useContext } from 'react'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import './Description.css'

export const Description = () => {
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
            No sirve lo otro
          </>
          }
          </p>
      </div>
    </>
  )
}
