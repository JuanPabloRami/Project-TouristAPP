import './Roles.css'
import { useContext } from 'react';
import { ModalContext } from "../../context/Modal/ModalContext";
//icons
import {AiOutlineUser as User} from 'react-icons/ai'
import {MdBusinessCenter as Bussines} from 'react-icons/md'

export const Roles = () => {

  //Contexto
  const { roles,closeRoles,openRegister} = useContext(ModalContext);

   //Funcion para cambiar de modales de roles a registro
   const rolesRegister = () => {
    closeRoles();
    return openRegister();
  };



  return (
    <div className={`modal-login${roles ? " open" : " close"}`}>
      <div className="content_roles">
        <button className="btn-close" onClick={closeRoles}>X</button>
        <h1>Escoge el tipo de usuario</h1>
        <div className="roles">
          <div className="role_user">
            <div className="user" onClick={rolesRegister}>
              <User className='icon_role'/>
            </div>
            <h2>Usuario</h2>
            <div className="role_description">
              <p className='des'>Los usuarios tendran la capacidad de apoyar y visitar los negocios que más le agraden o que esten mas cerca de su posición. </p>
            </div>
          </div>
          <div className="role_user">
            <div className="user" onClick={rolesRegister}>
              <Bussines className='icon_role'/>
            </div>
            <h2>Emprendedor</h2>
            <div className="role_description">
              <p className='des'>Los emprendedores podran crear su negocio y editarlo como más deseen, para que los usuarios los vean y puedan interactuar, Asi, con el proposito de que alcancen más clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
