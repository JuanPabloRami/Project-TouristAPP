import { useState } from "react";
import { createContext } from "react";

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
      setCategoryBuss

    }}>
      {props.children}
    </EditBusinessContext.Provider>
  )
}