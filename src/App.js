import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar} from '../src/components/Navbar/Navbar'
import {Login} from '../src/components/Login/Login'
import { NotFound } from './components/Not Found/NotFound.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import {Register} from './components/Register/Register.jsx'
import { AboutUs } from './components/About us/AboutUs';
import { Inicio } from './components/Inicio/Inicio';
import { CrearNegocio } from './components/CrearNegocio/CrearNegocio';
import { CrearItem } from './components/CrearItem/CrearItem';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/crear-negocio' element={<CrearNegocio/>} />
        <Route path='/crear-item' element={<CrearItem/>} />
        <Route path='/aboutAs' element={<AboutUs/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
