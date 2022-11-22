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

import ScrollToTop from './components/ScrollToTop';


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
                      <BrowserRouter>
                        <ScrollToTop/>
                        <App />
                      </BrowserRouter>
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
