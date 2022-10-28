import { useContext } from 'react'
import { TransitionsContext } from '../../context/Transitions/TransitionsContext'
import './Transition.css'

//Imagenes
import Tourist from '../../images/Logos TouristApp/logo5.png'

export const Transition = () => {

  const {transition,setTransition} = useContext(TransitionsContext)

  const timeOut = () =>{
    setTimeout(() => {
      setTransition(false)
    }, 3000);
  }

  return (
    <>
      {transition&& 
      timeOut() } 
          <img className={`logo ${transition ? 'open' : 'close'}`} src={Tourist} alt ="logo_transition"/>
          <div className={`left_transition ${transition ? 'open' : 'close'}`}></div>
          <div className={`right_transition ${transition ? 'open' : 'close'}`}></div>
    </>
  )
}
