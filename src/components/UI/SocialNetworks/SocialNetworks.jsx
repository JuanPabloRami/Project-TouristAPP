import './SocialNetworks.css'
import { useContext } from 'react'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import { InformationBusinessContext } from '../../context/InformationBusiness/InformationBusinessContext'

//icons
import {BsPlusSquareFill as Plus} from 'react-icons/bs'
import {FaFacebook as IconFacebook,} from "react-icons/fa";
import {MdEmail as IconEmail} from 'react-icons/md'
import {MdLocationPin as IconLocation} from "react-icons/md";
import {BiCategory as Category} from 'react-icons/bi'


export const SocialNetworks = () => {

  const {setTextName,textName,setNameBusiness,nameBusiness,hiddenBtn} = useContext(CreateBussinesContext)
  const {openSocial,dataInformation,buttonInfo} = useContext(InformationBusinessContext)

  const getText = (event) =>{
    const text = event.target.value
    setTextName(text) 
    if (event.keyCode === 13) {
      setNameBusiness(true)
    }
  }

  const showName = () =>{
    setNameBusiness(true)
  }

  const editName = () =>{
    setNameBusiness(false)
  }

  console.log(dataInformation);

  return (
    <>
      <div className="content_creating">
        <div className="create_nameBusiness">
          {nameBusiness ?
            <>
              {textName === '' ? 
              <>
                <h1>Sin nombre</h1>
                {hiddenBtn ?
                  null
                :
                  <button onClick={editName}>Editar</button>
                }
              </>
              :
              <>
                <h1>{textName}</h1>
                {hiddenBtn ?
                  null
                :
                  <button onClick={editName}>Editar</button>
                }
              </>
              }
            </>
          :
            <>
              <input defaultValue={textName} type='text' placeholder='Escribe el nombre del negocio' maxLength='35' onChange={getText} onKeyUp={getText}/>
              <button onClick={showName}>Guardar</button>
            </>
          }
        </div>
        <div className="more_optiones">
          {buttonInfo ?
            <div className="information_business">
              <div className="location_business">
                <p><IconLocation className='icon l'/>{dataInformation.ubicacion} - {dataInformation.locationState}</p>
              </div>
              <div className="content_grid">
                <div className="information_import">
                  <p><IconEmail className='icon e'/>{dataInformation.contactEmail}</p>
                  <p><IconFacebook className='icon f'/>@{dataInformation.contactFacebook}</p>
                  <p><Category className='icon c'/>{dataInformation.nameCategorie}</p>
                </div>
                <div className="schedule">
                  <div className="state"></div>
                  <p>Abierto: {dataInformation.horaEntrada} - {dataInformation.horaSalida}</p>
                  {hiddenBtn ?
                  null
                :
                  <button onClick={openSocial}>Editar</button>
                }
                </div>
              </div>
            </div>
            :
            <>
              {hiddenBtn ?
                <div className="information_business">
                  <div className="location_business">
                    <p><IconLocation className='icon l'/>{dataInformation.ubicacion} - {dataInformation.locationState}</p>
                  </div>
                  <div className="content_grid">
                    <div className="information_import">
                      <p><IconEmail className='icon e'/>{dataInformation.contactEmail}</p>
                      <p><IconFacebook className='icon f'/>@{dataInformation.contactFacebook}</p>
                      <p><Category className='icon c'/>{dataInformation.nameCategorie}</p>
                    </div>
                    <div className="schedule">
                      <div className="state"></div>
                      <p>Abierto: {dataInformation.horaEntrada} - {dataInformation.horaSalida}</p>
                      {hiddenBtn ?
                        null
                      :
                      <button onClick={openSocial}>Editar</button>
                      }
                    </div>
                  </div>
                </div>
              :
              <button onClick={openSocial}>Más opciones <Plus/></button>
              }
            </>
          }
        </div>
      </div>
    </>
  )
}