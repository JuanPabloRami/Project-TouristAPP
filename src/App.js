import './App.css';
import { Navbar} from '../src/components/Navbar/Navbar'
import {Registro} from '../src/components/Registro/Registro'
import {Login} from '../src/components/Login/Login'




function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Registro/>
      <Login/>
    </div>
  );
}

export default App;
