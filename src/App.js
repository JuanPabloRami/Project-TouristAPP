import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar} from '../src/components/Navbar/Navbar'
import {Login} from '../src/components/Login/Login'
import { NotFound } from './components/Not Found/NotFound.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import {Register} from './components/Register/Register.jsx'
import { AboutUs } from './components/About us/AboutUs';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/aboutAs' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
