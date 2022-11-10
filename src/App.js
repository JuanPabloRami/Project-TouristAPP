import { Route, Routes } from 'react-router-dom';

//Componentes react-router
import {Home} from './components/Pages/Home/Home';
import {Register} from './components/Layouts/Register/Register';
import {Login} from './components/Layouts/Login/Login';
import { MyProfile } from './components/Pages/MyProfile/MyProfile';
import {AboutUs} from './components/Pages/AboutUs/AboutUs';
import { ProfileCreate } from './components/Pages/ProfileCreate/ProfileCreate';
import {Categories} from './components/Pages/Categories/Categories';
import {NotFound} from './components/Pages/NotFound/NotFound'
import { TermsAndConditions } from './components/Pages/TermsAndConditions/TermsAndConditions'
import { PrivacyPolicy } from './components/Pages/TermsAndConditions/PrivacyPolicy';
//componentes
import {Navbar} from './components/Layouts/Navbar/Navbar';
import {Footer} from './components/Layouts/Footer/Footer'
//ProtectedRoute
import {ProtectedRouteCreateBusiness} from './components/ProtectRouter/ProtectedRoute';

/*https://www.youtube.com/watch?v=emiCMV-oVoE*/
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/register' element={<Register/>} />
        <Route path='/minegocio' element={
        <ProtectedRouteCreateBusiness>
          <MyProfile/>
        </ProtectedRouteCreateBusiness>
        }/>
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
