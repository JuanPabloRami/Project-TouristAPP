import { createContext, useState } from "react"

export const InformationBusinessContext = createContext();

export const InformationBusinessContextProvider = (props) => {
  const [dataInformation,setDataInformation] = useState([])
  const [locationState,setLocationState] = useState("");
  const [inputDepartment, setInputDepartment] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [social,setSocial] = useState(false)
  const [socialEdit,setSocialEdit] = useState(false)
  const [buttonInfo,setButtonInfo] = useState(false)
  const body = document.querySelector("body");

   //abre la modal de items
   const openSocialEdit = () =>{
    setSocialEdit(true)
    body.style = "overflow-y:hidden;";
  }
  
  //cierra la modal de items
  const closeSocialEdit = () =>{
    setSocialEdit(false)
    body.style = "overflow-y:scroll;";
  }

  //abre la modal de items
  const openSocial = () =>{
    setSocial(true)
    body.style = "overflow-y:hidden;";
  }
  
  //cierra la modal de items
  const closeSocial = () =>{
    setSocial(false)
    body.style = "overflow-y:scroll;";
  }
  
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
    setLocationState(location)
    closeSocial();
    setButtonInfo(true)
    return location;
  }

  return(
    <InformationBusinessContext.Provider value={{
      setDataInformation,
      dataInformation,
      locationChange,
      locationDepartment,
      locationCity,
      locationState,
      inputDepartment,
      social,
      setSocial,
      closeSocial,
      openSocial,
      buttonInfo,
      setButtonInfo,
      inputCity,
      openSocialEdit,
      closeSocialEdit,
      socialEdit
    }}>
      {props.children}
    </InformationBusinessContext.Provider>
  );
}