import './Roles.css'
import {useContext, useEffect } from 'react';
import { ModalContext } from "../../context/Modal/ModalContext";
//icons
import {AiOutlineUser as User} from 'react-icons/ai'
import {MdBusinessCenter as Bussines} from 'react-icons/md'
import { RolesContext } from '../../context/Roles/RolesContext';
import { TranslationContext } from '../../context/Translation/TranslationContext';
import { useTranslation } from 'react-i18next';

export const Roles = () => {

  //traduccion multiidioma
  const localLang = localStorage.getItem("lang")
  const {language} = useContext(TranslationContext)
  const [t,i18n] = useTranslation("global")
  useEffect(() => {
    i18n.changeLanguage(localLang);
  }, [language])
  //fin traduccion

  //Contexto
  const { roles,closeRoles,openRegister} = useContext(ModalContext);
  const { rolUSer,rolEntrepreneur,typeUser} = useContext(RolesContext)

  const userRole = () =>{
    rolUSer()
    closeRoles()
    return openRegister()
  }

  const EntrepreneurRole = () =>{
    rolEntrepreneur()
    closeRoles()
    return openRegister()
  }

  return (
    <div className={`modal-login${roles ? " open" : " close"}`}>
      <div className="content_roles">
        <button className="btn-close" onClick={closeRoles}>X</button>
        <h1>{t("ui.roles.typeuserH1")}</h1>
        <div className="roles">
          <div className="role_user">
            <div className="user" onClick={userRole}>
              <User className='icon_role'/>
            </div>
            <h2>{t("ui.roles.user")}</h2>
          </div>
          <div className="role_user">
            <div className="user" onClick={EntrepreneurRole}>
              <Bussines className='icon_role'/>
            </div>
            <h2>{t("ui.roles.entrepreneur")}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
