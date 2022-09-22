import React, { createContext, useState } from 'react'

export const ModalContext = createContext();

export const ModalContextProvider = (props) => {

  const [locationState,setLocationState] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [inputDepartment, setInputDepartment] = useState("");
  const [inputCity, setInputCity] = useState("");
  const body = document.querySelector("body");

  const OpenModal = () => {
    setOpenModal(true);
    body.style = "overflow-y:hidden;";
  };

  const CloseModal = () => {
    setOpenModal(false);
    body.style = "overflow-y:scroll;";
  };

  const locationCity = (event) => {
    const city = event.target.value;
    return setInputCity(city);
  }

  const locationDepartment = (event) => {
    const department = event.target.value;
    return setInputDepartment(department);
  }

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
      locationState
    }}>
      {props.children}
 
    </ModalContext.Provider>
   
  )
}
