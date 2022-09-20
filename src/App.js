import './App.css';
import { Route, Routes } from 'react-router-dom';

//Componentes react-router
import {Home} from './components/Pages/Home/Home';
import {Register} from './components/Layouts/Register/Register';
import {Login} from './components/Layouts/Login/Login';
import {BussinesCreate} from './components/Pages/BussinesCreate/BussinesCreate';
import {ItemCreate} from './components/Pages/ItemCreate/ItemCreate';
import {AboutUs} from './components/Pages/AboutUs/AboutUs';
import {NotFound} from './components/Pages/NotFound/NotFound'
//componentes
import {Navbar} from './components/Layouts/Navbar/Navbar';
import {Footer} from './components/Layouts/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/crear-negocio' element={<BussinesCreate/>} />
        <Route path='/crear-item' element={<ItemCreate/>} />
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
