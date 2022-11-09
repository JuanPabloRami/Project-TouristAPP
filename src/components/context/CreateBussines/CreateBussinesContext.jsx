import { createContext,useState } from "react";
import axios from "../../api/axios/axios";

export const CreateBussinesContext = createContext();

export const CreateBussinesContextProvider = (props) => {
  //Esconde la descripcion
  const [del,setDel] = useState(false)
  //Abre y cierra la textarea
  const [textarea,setTextarea] = useState(false)
  //habilita la descripcion cuando se guarda los cambios
  const [description,setDescription] = useState(false)
  //obtiene el texto de la descripcion del negocio
  const [text,setText] = useState('')
  //obtiene el nombre del negocio escrito por el usuario
  const [textName,setTextName] = useState('')
  //Muestra el nombre del negocio
  const [nameBusiness,setNameBusiness] = useState(false)
  //Muestra u oculta la modal de confirmacion de crear negocio
  const [modalConfirm,setModalConfirm] = useState(false)

  //Estados que recogen la data del negocio y los items
  const [imageProfile, setimageProfile] = useState("");
  const [imagePort, setImagePort] = useState("");
  const [informationSocial,setInformationSocial] = useState([])
  const [idCategory, setIdCategory] = useState(0);
  const [idCity, setIdCity] = useState(0);
  const [dataBusiness,setDataBusiness] = useState([])
  const [dataItems,setDataItems] = useState([])

  const vamoo = ()=>{
    const data = {
      nombre: textName,
      descripcion: text,
      imgperfil:imageProfile,
      imgportada: imagePort,
      tipo_Negocio_id: idCategory,
      ciudad_id:idCity,
      ubicacion: informationSocial.ubicacion,
      horaEntrada: informationSocial.horaEntrada,
      horaSalida: informationSocial.horaSalida,
      contactFacebook: informationSocial.contactFacebook,
      contactInstagram:null,
      contactWEB:null,
      contactEmail: informationSocial.contactEmail
    }
    console.log(data);
  }



  const bussinesRequest = () =>{
    axios.post('/api/negocio/',{
      nombre: text,
      descripcion: textName,
      imgperfil:imageProfile,
      imgportada: imagePort,
      tipo_Negocio_id: 3,
      ciudad_id:1,
      ubicacion: informationSocial.ubicacion,
      horaEntrada: informationSocial.horaEntrada,
      horaSalida: informationSocial.horaSalida,
      contactFacebook: informationSocial.contactFacebook,
      contactInstagram:null,
      contactWEB:null,
      contactEmail: informationSocial.contactEmail
    })
    .then(function (response){
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem('token',response.data.tokens.access)
      }
    })
    .catch(function (error){
      console.log(error);
    });
  }

     //convertidor de images de perfil
     const uploadImageProfile = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertBase64Profile(file);
      setimageProfile(base64);
    };
  
    const convertBase64Profile = (file) => {
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
    
    //convertidor de images de portada
    const uploadImagePort = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertBase64Port(file);
      setImagePort(base64);
    };
  
    const convertBase64Port = (file) => {
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
  

  //Oculta boton de más de la descripción
  const inputDescription = () =>{
    const icon = document.getElementById('input')
    icon.style.display = "none"
    return setTextarea(true)
  }

  //aparece boton de más de la descripción
  const closeTextarea = () =>{
    const icon = document.getElementById('input')
    icon.style.display = "block"
    return setTextarea(false)
  }

  //Obtiene el texto escrito por el usuario en el textarea
  const getDescription = (text) =>{
    setText(text)
  }

  //Envia el texto y se pinta en la descripción
  const sendText = () =>{
    closeTextarea()
    setDescription(true)
    setDel(true)
  }

  //abre la modal de la creacion de los items 
  
  
  return (
    <CreateBussinesContext.Provider value={{
      inputDescription,
      closeTextarea,
      textarea,
      getDescription,
      sendText,
      description,
      setDescription,
      del,
      setDel,
      text,
      setTextName,
      textName,
      setNameBusiness,
      nameBusiness,
      setModalConfirm,
      modalConfirm,
      uploadImageProfile,
      uploadImagePort,
      imageProfile,
      imagePort,
      setInformationSocial,
      vamoo,
      setIdCity,
      setIdCategory
    }}>
      {props.children}
    </CreateBussinesContext.Provider>
  )
}
