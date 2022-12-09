import './CreateBussines.css'
//icons
import {BsPlusSquareFill as Plus} from 'react-icons/bs'
import { useContext,useState } from 'react'
//components
import { Textarea } from '../Textarea/Textarea'
import { CreateBussinesContext } from '../../context/CreateBussines/CreateBussinesContext'
import { Description } from '../Description/Description'
import { ModalContext } from '../../context/Modal/ModalContext'
import { CatalogueContext } from '../../context/Catalogue/CatalogueContext'
import { Catalogue } from '../Catalogue/Catalogue'




export const CreateBussines = () => {
  const {openItems} = useContext(ModalContext)
  const {inputDescription,textarea,description,del,hiddenItems} = useContext(CreateBussinesContext)
  const {stateItem} = useContext(CatalogueContext)

  //estado de componente de carga global
  const [transition,setTransition] = useState(false)

  return (
    <>
      <div className='content_create_bussines'>
        <>
          {description ?
            <Description/>
          :
            null
          }
        </>
        <div className={`create description ${del ? 'close' : null}`}>
        {description ?
          null
        :
          <>
            {textarea ? 
              <Textarea/>
              : 
              <h2>Descripción</h2>
            }
          </>
        }
          
          <Plus id='input' className='icon_create' onClick={inputDescription}/>
        </div>
        <>
            <>
              <div className={`create items ${stateItem ? 'close' : null}`}>
                {stateItem?
                  null
                :
                <>
                  <h2>Catalogo</h2>
                  <Plus id='catalogue_icon' className='icon_create' onClick={openItems}/>
                </>
                }
              </div>
              <>
                {stateItem ?
                  <Catalogue/>
                :
                null
                }
              </>
            </>
        </>
      </div>
    </>
    )
  }
