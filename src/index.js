import React from 'react';


import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';



import "swiper/css/bundle";

//Contextos
import {ModalContextProvider} from './components/context/Modal/ModalContext'
import { CreateBussinesContextProvider } from './components/context/CreateBussines/CreateBussinesContext';
import { RolesContextProvider } from './components/context/Roles/RolesContext';
import { TransitionsContextProvider } from './components/context/Transitions/TransitionsContext';
import { UsersContextProvider } from './components/context/Users/UsersContext';
import { CategoriesContextProvider } from './components/context/Categories/CategoriesContext';
import { CatalogueContextProvider } from './components/context/Catalogue/CatalogueContext';
import { InformationBusinessContextProvider } from './components/context/InformationBusiness/InformationBusinessContext';
import { EditBusinessContextProvider } from './components/context/EditBusiness/EditBusinessContext';
import { TranslationContextProvider } from './components/context/Translation/TranslationContext';

import ScrollToTop from './components/ScrollToTop';


//traduccion
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

//importaciones de archivos de texto de traducciones

import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"

const browserLanguage = navigator.language || navigator.userLanguage;

i18next.init({
  interpolation:{escapeValue:false},
  lng:browserLanguage,
  resources:{
    es:{
      global:global_es
    },
    en:{
      global:global_en
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EditBusinessContextProvider>
  <InformationBusinessContextProvider>
    <CreateBussinesContextProvider>
      <CatalogueContextProvider>
        <CategoriesContextProvider>
          <UsersContextProvider>
            <TransitionsContextProvider>
                <RolesContextProvider>
                  <ModalContextProvider>
                    <TranslationContextProvider>
                    <BrowserRouter>
                      <ScrollToTop/>
                      <I18nextProvider i18n={i18next}>
                          <App />
                      </I18nextProvider>
                    </BrowserRouter>
                    </TranslationContextProvider>
                  </ModalContextProvider>
                </RolesContextProvider>
            </TransitionsContextProvider>
          </UsersContextProvider>
        </CategoriesContextProvider>
      </CatalogueContextProvider>
    </CreateBussinesContextProvider>
  </InformationBusinessContextProvider>
  </EditBusinessContextProvider>
);
reportWebVitals();
