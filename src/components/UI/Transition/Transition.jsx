import { useContext } from 'react'
import { TransitionsContext } from '../../context/Transitions/TransitionsContext'
import './Transition.css'
import {ScaleLoader} from 'react-spinners'

//Imagenes
import Tourist from '../../images/Logos TouristApp/logo1.png'

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
      <>
        <div className="transition_content">
          <img className={`logo ${transition ? 'open' : 'close'}`} src={Tourist} alt ="logo_transition"/>
          <div className={`left_transition ${transition ? 'open' : 'close'}`}></div>
          <div className={`right_transition ${transition ? 'open' : 'close'}`}></div>          
          <ScaleLoader className='loading_transition'
            color="#2180a8"
            height={37}
            loading
            width={7}
          />
        </div>
      </>
      }
    </>
  )
}
