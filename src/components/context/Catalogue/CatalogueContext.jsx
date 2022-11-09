import { createContext,useState } from "react";

export const CatalogueContext = createContext()

export const CatalogueContextProvider = (props) => {
  const [itemImage, setItemImage] = useState("");
  const [promotionImage, setPromotionImage] = useState("");
  //guarda toda la informacion de los items
  const [catalogue,setCatalogue] = useState([])
  const [stateItem,setStateItem] = useState(false)

  //convertidor de images a base 64
  const uploadImageItem = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64Item(file);
    setItemImage(base64);
  };

  const convertBase64Item = (file) => {
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
  
  const uploadImagePromotion = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64Promotion(file);
    setPromotionImage(base64);
  };

  const convertBase64Promotion = (file) => {
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



  return (
    <CatalogueContext.Provider value={{
      itemImage,
      uploadImageItem,
      uploadImagePromotion,
      promotionImage,
      catalogue,
      setCatalogue,
      setStateItem,
      stateItem,
    }}> 
      {props.children}
    </CatalogueContext.Provider>
  )      
}
