import { useEffect } from "react";
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
  //Estado que oculta los botones de editar cuando crea negocio
  const [hiddenBtn,setHiddenBtn] = useState(false)
  //Estado que oculta el componente de carga
    const [loading, setLoading] = useState(false)
  //estado del alert de exito o error
  const [alert,setAlert] = useState("close")
  const [errorAlert,setErrAlert] = useState("close")
  const [errorText,setErrText] = useState("Ha ocurrido un error")
  const [updateDrop,setUpdateDrop] = useState(false)

  
  
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
    

//Estados que recogen la data del negocio
const [imageProfile, setimageProfile] = useState("");
const [imagePort, setImagePort] = useState("");
const [informationSocial,setInformationSocial] = useState([])
const [idCategory, setIdCategory] = useState(0);
const [idCity, setIdCity] = useState(0);

const token = localStorage.getItem('token')

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    },
}
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
  contactEmail: informationSocial.contactEmail,
}

const bussinesRequest = () =>{
  setLoading(true)
  axios.post('/api/negocio/',
    data,
    config
    )
  .then(function (response){
    console.log(response);
    if(response.status === 201){
      setIdBusiness(response.data.id)
      setUpdateDrop(true)
      setHiddenItems(true)
      setShowBtnItem(true)
      setHiddenBtn(true)
      setLoading(false);
      setAlert("open")
      setTimeout(()=>{
        setAlert("close")
      },3500)
      setTimeout(()=>{
        setModalConfirm(false)
      },4000)
    }
  })
  .catch(function (error){
    console.log(error);
    if (error.response.status === 400){
      setLoading(false)
      setErrText(error.response.data.message)
      setErrAlert("open")
      setTimeout(()=>{
        setErrAlert("close")
      },1500)
      setTimeout(()=>{
        setModalConfirm(false)
      },2000)
    }
  });
}

//Estado que obtiene la informacion de los items
const [dataItems,setDataItems] = useState({})
const [showBtnItem,setShowBtnItem] = useState(false)
const [idBusiness,setIdBusiness] = useState(0)
const [hiddenItems,setHiddenItems] = useState(false)
const [useItem,setUseItem] = useState(false)

const dataIte = {
  nombre:dataItems.nombre,
  descripcion:dataItems.descripcion,
  precio:dataItems.precio,
  nuevo:true,
  imagen:dataItems.itemImage,
  imgpromocion:dataItems.promotionImage,
  negocio:localStorage.getItem('idNegocio')
}

  useEffect(()=>{
    setUseItem(true)
    axios.post('/api/item/',
      dataIte,
      config
    )
    .then(function (response){
      console.log(response);
      if(response.status === 201){
        setUseItem(false)
      }
    })
    .catch(function (error){
      console.log(error);
    });
  },[dataItems])


let dataItem = {}

const [itemsData,setItemsData] = useState([])

  useEffect(()=>{
    setUseItem(true)
    itemsData.map((Element)=>(
      axios.post('/api/item/',
        dataItem={
          nombre:Element.nombre,
          descripcion:Element.descripcion,
          precio:Element.precio,
          nuevo:true,
          imagen:Element.imagen,
          imgpromocion: Element.imgpromocion,
          negocio:idBusiness
        },
        config
      )
      .then(function (response){
        console.log(response);
        if(response.status === 201){
          setUseItem(false)
        }
      })
      .catch(function (error){
        console.log(error);
      })
    ))
  },[idBusiness])

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
      setUpdateDrop,
      updateDrop,
      setItemsData,
      itemsData,
      alert,
      errorAlert,
      errorText,
      loading,
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
      setIdCity,
      setIdCategory,
      bussinesRequest,
      dataItems,
      hiddenItems,
      showBtnItem,
      setDataItems,
      dataItems,
      idBusiness,
      hiddenBtn,
      useItem,
    }}>
      {props.children}
    </CreateBussinesContext.Provider>
  )
}
