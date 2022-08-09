import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar} from '../src/components/Navbar/Navbar'
import {Login} from '../src/components/Login/Login'
import { Registro } from './components/Registro/Registro.jsx'
import { NotFound } from './components/Not Found/NotFound.jsx'
import { Footer } from './components/Footer/Footer.jsx'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/register' element={<Registro/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/footer' element={<Footer/>} />
        
      </Routes>
      
    </div>
  );
}

export default App;
