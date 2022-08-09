import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar} from '../src/components/Navbar/Navbar'
import {Login} from '../src/components/Login/Login'
import { Registro } from './components/Registro/Registro.jsx'
import { NotFound } from './components/Not Found/NotFound.jsx'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/register' element={<Registro/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
    </div>
  );
}

export default App;
