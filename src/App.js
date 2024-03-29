import { Route, Routes } from 'react-router-dom';

//Componentes react-router
import {Home} from './components/Pages/Home/Home';
import {Register} from './components/Layouts/Register/Register';
import {Login} from './components/Layouts/Login/Login';
import { MyBusiness } from './components/Pages/MyBusiness/MyBusiness';
import {AboutUs} from './components/Pages/AboutUs/AboutUs';
import { ProfileCreate } from './components/Pages/ProfileCreate/ProfileCreate';
import {Categories} from './components/Pages/Categories/Categories';
import {NotFound} from './components/Pages/NotFound/NotFound'
import { TermsAndConditions } from './components/Pages/TermsAndConditions/TermsAndConditions'
import { PrivacyPolicy } from './components/Pages/TermsAndConditions/PrivacyPolicy';
import {ShowsBusiness} from './components/Pages/ShowBusiness/ShowsBusiness'
import {EditBusiness} from './components/Pages/EditBusiness/EditBusiness'
import { MyProfile } from './components/Pages/MyProfile/MyProfile';
//componentes
import {Navbar} from './components/Layouts/Navbar/Navbar';
import {Footer} from './components/Layouts/Footer/Footer'
//ProtectedRoute
import {ProtectedRouteCreateBusiness} from './components/ProtectRouter/ProtectedRoute';
import { useContext, useEffect, useState } from 'react';
import { UsersContext } from './components/context/Users/UsersContext';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-6D92XZEZWK');

/*https://www.youtube.com/watch?v=emiCMV-oVoE*/
function App() {

  const {idBusiness} = useContext(UsersContext)

  const value = localStorage.getItem('value')

  useEffect(()=>{
    localStorage.getItem('title') 
  },[idBusiness])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/editar-negocio' element={
        <ProtectedRouteCreateBusiness>
          <EditBusiness/>
        </ProtectedRouteCreateBusiness>
        }/>
        <Route path='/register' element={<Register/>} />
        <Route path='/minegocio' element={
        <ProtectedRouteCreateBusiness>
          <MyBusiness/>
        </ProtectedRouteCreateBusiness>
        }/>
        <Route path='/miperfil' element={
          <MyProfile/>
        }/>
        <Route path={`/negocio/${value}`} element={<ShowsBusiness/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/crear-negocio' element={
        <ProtectedRouteCreateBusiness>
            <ProfileCreate/>
        </ProtectedRouteCreateBusiness>
        } />
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/terminosycondiciones' element={<TermsAndConditions/>}/>
        <Route path='/privacidad' element={<PrivacyPolicy/>}/>
        <Route path='*' element={<NotFound/>} />
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
      <Footer/>    
    </div>
  );
}

export default App;
