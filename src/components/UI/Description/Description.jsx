import React from 'react'
import '../InfoBussines/InfoBussines.css'
export const Description = ({description}) => {
  return (
    <>
     <div className="description__profile">
      <h2>Descripción</h2>
      <p>
        {description != null ?
            description
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
