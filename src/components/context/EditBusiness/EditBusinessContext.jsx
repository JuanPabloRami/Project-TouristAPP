import { useState } from "react";
import { createContext } from "react";
import axios from "../../api/axios/axios";

export const EditBusinessContext = createContext()

export const EditBusinessContextProvider = (props) => {
  const [editBusiness,setEditBusiness] = useState({})
  const [closeTextarea,setCloseTextarea] = useState(false)
  const [textDes,setTextDes] = useState('')
  const [textNameBuss,setTextNameBuss] = useState('')
  const [imageProfile, setimageProfile] = useState("");
  const [imagePort, setImagePort] = useState("");
  const [cityBuss,setCityBuss] = useState('')
  const [departmentBuss,setDepartmentBuss] = useState('')
  const [categoryBuss,setCategoryBuss] = useState('')
  const [dataEditBusiness,setDataEditBusiness] = useState({})
  const [idCity, setIdCity] = useState(0);
  const [idCategory,setIdCategory] = useState(0)

  const [locationBus,setlocationBuss] = useState('')
  const [faceBuss,setFaceBuss] = useState('')
  const [emailBuss,setEmailBuss] = useState('')
  const [hourEnter,setHourEnter] = useState('')
  const [hourClose,setHourClose] = useState('')

  const [locationState,setLocationState] = useState("");
  const [inputDepartment, setInputDepartment] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [nameCategorie,setNameCategorie] = useState('')

  const uploadImagePortEdit = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64PortEdit(file);
    setImagePort(base64);
  };

  const convertBase64PortEdit = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

    //convertidor de images de perfil
  const uploadImageProfileEdit = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertBase64ProfileEdit(file);
      setimageProfile(base64);
    };
  
    const convertBase64ProfileEdit = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

    const data = {
      nombre: textNameBuss === '' ? editBusiness.nombre : textNameBuss,
      descripcion: textDes === '' ? editBusiness.descripcion: textDes,
      imgperfil:imageProfile === '' ? '': imageProfile,
      imgportada: imagePort === '' ? '' : imagePort,
      tipo_Negocio_id: idCategory,
      ciudad_id: idCity,
      ubicacion: locationBus === '' ? editBusiness.ubicacion :locationBus,
      horaEntrada: hourEnter === '' ? editBusiness.horaEntrada : hourEnter,
      horaSalida: hourClose === '' ? editBusiness.horaSalida : hourClose,
      contactFacebook: faceBuss === '' ? editBusiness.contactFacebook : faceBuss,
      contactInstagram:null,
      contactWEB:null,
      contactEmail: emailBuss === '' ? editBusiness.contactEmail : emailBuss,
    }

    const token = localStorage.getItem('token')

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
    }

    const requestEditBusiness = () =>{
      axios.put('/api/negocio/13/',
        data,config
      ).then(function (response){
        console.log(response);
      })
      .catch(function (error){
        console.log(error);
      });
    }

    const locationChange = () => {
      const location = inputCity + " - " + inputDepartment;
      setLocationState(location)
      return location;
    }

    const nameCategories = (e) =>{
      const name = e.target.value
      setNameCategorie(name)
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
    

  return(
    <EditBusinessContext.Provider value={{
      setEditBusiness,
      editBusiness,
      closeTextarea,
      setCloseTextarea,
      textDes,
      setTextDes,
      setTextNameBuss,
      textNameBuss,
      uploadImageProfileEdit,
      uploadImagePortEdit,
      imageProfile,
      imagePort,
      setDepartmentBuss,
      setCityBuss,
      cityBuss,
      departmentBuss,
      categoryBuss,
      setCategoryBuss,
      dataEditBusiness,
      setDataEditBusiness,
      setIdCategory,
      setIdCity,
      requestEditBusiness,
      locationState,
      setLocationState,
      inputDepartment,
      setInputDepartment,
      inputCity,
      setInputCity,
      locationChange,
      locationBus,
      faceBuss,
      emailBuss,
      hourEnter,
      hourClose,
      setlocationBuss,
      setFaceBuss,
      setEmailBuss,
      setHourEnter,
      setHourClose,
      locationDepartment,
      locationCity,
      nameCategories,
      nameCategorie
    }}>
      {props.children}
    </EditBusinessContext.Provider>
  )
}