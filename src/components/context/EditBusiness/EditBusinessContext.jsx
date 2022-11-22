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
  const [changeButton,setChangeButton] = useState(false)

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

  
  const [apiProfile,setApiProfile] = useState('')
  const [apiPort,setApiPort] = useState('')


  const imageApiProfile = async (e) => {
    const file = editBusiness.imgperfil;
    const base64 = await convertImageApiProfilet(file);
    setApiProfile(base64);
  };

  const convertImageApiProfilet = (file) => {
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
     const imageApiPort = async (e) => {
      const file =editBusiness.imgportada;
      const base64 = await convertImageApiPort(file);
      setApiPort(base64);
    };
  
    const convertImageApiPort = (file) => {
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

    imageProfile !== '' ? data.imgperfil = imageProfile : console.log("no cambia imagen")
    imagePort !== '' ? data.imgportada =  imagePort : console.log("no cambia portada")

    const token = localStorage.getItem('token')
    const id = localStorage.getItem('idNegocio')

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
    }

    const [updateBusiness,setUpdateBusiness] = useState(false)

    const requestEditBusiness = () =>{
      axios.put(`/api/negocio/${id}/`,
        data,config
      ).then(function (response){
        if (response.status === 200) {
          setUpdateBusiness(true)
        }
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


  //Editar items
  const [editItems,setEditItems] = useState({})
  const idItems = localStorage.getItem('idItems')

  const [nameItem,setNameItem] = useState('')
  const [desItem,setDesItem] = useState('')
  const [priceItem,setPriceItem] = useState('')
  const [imgItem,setImgItem] = useState('')
  const [uploadItemModal,setUploadItemModal] = useState(false)

  //convertidor de images de perfil
    const imgItems = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertImgItems(file);
      setImgItem(base64);
    };
  
    const convertImgItems = (file) => {
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
  
    const dataItems ={
      nombre: nameItem === '' ? editItems.nombre : nameItem,
      descripcion:  desItem === '' ? editItems.nombre : desItem,
      precio: priceItem === 0 ? editItems.nombre : priceItem,
      nuevo: true,
      imagen: imgItem === '' ? editItems.imagen : imgItem,
      negocio: id
    }

    const requestEditItems = () =>{
      setUploadItemModal(true)
      axios.put(`/api/item/${idItems}/`,
        dataItems,config
      ).then(function (response){
        if(response.status === 200){
          setUploadItemModal(false)
        }
        console.log(response);
      })
      .catch(function (error){
        console.log(error);
      });
    }

    const [delItem,setDelItem] = useState(false)
    const [alertTrash,setAlertTrash] = useState(false)
    

  return(
    <EditBusinessContext.Provider value={{
      setUpdateBusiness,
      updateBusiness,
      changeButton,
      setChangeButton,
      setAlertTrash,alertTrash,
      delItem,setDelItem,
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
      nameCategorie,
      setEditItems,
      setNameItem,setDesItem,
      setPriceItem,
      imgItem,
      imgItems,
      nameItem,
      desItem,
      priceItem,
      requestEditItems,
      uploadItemModal
    }}>
      {props.children}
    </EditBusinessContext.Provider>
  )
}