import React from 'react'
import {ScaleLoader} from 'react-spinners'

export const Transition2 = () => {
  return (
    <div className="BusinessLoading">
      <div>
        <ScaleLoader
          height={60}
          width={10}
        />
        <h3>Cargando</h3>
      </div>
    </div>
  )
}
