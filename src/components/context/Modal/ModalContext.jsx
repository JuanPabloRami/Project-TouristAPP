import React, { createContext, useState } from 'react'

export const ModalContext = createContext();

export const ModalContextProvider = (props) => {

  const [locationState,setLocationState] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [inputDepartment, setInputDepartment] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [loginUser,setLoginUser] = useState(false)
  const [registerUser,setRegisterUser] = useState(false)
  const [roles,setRoles] = useState(false)
  const body = document.querySelector("body");

  //abre la modal de roles
  const openRoles = () =>{
    setRoles(true)
    body.style = "overflow-y:hidden;";
  }

  //cierra la modal de roles
  const closeRoles = () =>{
    setRoles(false)
    body.style = "overflow-y:scroll;";
  }

  //abre la modal de registro
  const openRegister = () =>{
    setRegisterUser(true)
    body.style = "overflow-y:hidden;";
  }

  //cierra la modal de registro
  const closeRegister = () =>{
    setRegisterUser(false)
    body.style = "overflow-y:scroll;";
  }

  //abre la modal de inicio de sesion
  const openLogin = () =>{
    setLoginUser(true)
    body.style = "overflow-y:hidden;";
  }

  //cierra la modal de inicio de sesion
  const closeLogin = () =>{
    setLoginUser(false)
    body.style = "overflow-y:scroll;";
  }

  //Abre la modal de localidad por ciudades y departamentos
  const OpenModal = () => {
    setOpenModal(true);
    body.style = "overflow-y:hidden;";
  };
  //Cierra la modal de localidad por ciudades y departamentos
  const CloseModal = () => {
    setOpenModal(false);
    body.style = "overflow-y:scroll;";
  };

  //Obtiene el valor del select de ciudades
  const locationCity = (event) => {
    const city = event.target.value;
    return setInputCity(city);
  }
  //Obtiene el valor del select de departamentos
  const locationDepartment = (event) => {
    const department = event.target.value;
    return setInputDepartment(department);
  }
  //Concatena la ciudad con su departamento 
  const locationChange = () => {
    const location = inputCity + " - " + inputDepartment;
    CloseModal();
    setLocationState(location)
    return location;
  }

  return (
    <ModalContext.Provider value={{
      openModal,
      OpenModal,
      CloseModal,
      locationCity,
      locationDepartment,
      locationChange,
      locationState,
      loginUser,
      openLogin,
      closeLogin,
      registerUser,
      openRegister,
      closeRegister,
      openRoles,
      closeRoles,
      roles,
    }}>
      {props.children}
 
    </ModalContext.Provider>
   
  )
}
