import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import "swiper/css/bundle";

//Contextos
import {ModalContextProvider} from './components/context/Modal/ModalContext'
import { CreateBussinesContextProvider } from './components/context/CreateBussines/CreateBussinesContext';
import { RolesContextProvider } from './components/context/Roles/RolesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="81239876980-ksnj46hhfoe1guvrj4apligvulphpnr4.apps.googleusercontent.com">
    <CreateBussinesContextProvider>
      <RolesContextProvider>
        <ModalContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </ModalContextProvider>
      </RolesContextProvider>
    </CreateBussinesContextProvider>
  </GoogleOAuthProvider>
);
reportWebVitals();
