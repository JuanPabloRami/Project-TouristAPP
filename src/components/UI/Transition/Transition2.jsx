import React from 'react'
import {ScaleLoader} from 'react-spinners'
import Transition2Style from './Transition2.module.css'

export const Transition2 = () => {
  return (
    <>
    <div className={Transition2Style.ScreenLoading}>
      <div>
        <ScaleLoader
        color="#ffffff"
          height={60}
          width={10}
        />
        <h3>Cargando</h3>
      </div>
    </div>
    </>
  )
}
