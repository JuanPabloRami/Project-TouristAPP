import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import "swiper/css/bundle";

//Contextos
import {ModalContextProvider} from './components/context/Modal/ModalContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ModalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalContextProvider>
);
reportWebVitals();
