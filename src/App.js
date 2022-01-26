import 'bootstrap/dist/css/bootstrap.min.css';
import {

  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Casa from './Home/Casa';
import Contactenos from "./models/Formularios/Contactanos/Contactos"
import Inicio from "./models/Formularios/Login/Inicio"
import Juguetes from "./models/Juguetes/Jugue"
import Marcas from "./models/Marcas/Marcas"




function App() {
  return (

    
    <BrowserRouter className="container" >
    <Routes>
    
      <Route path="/" element={<Casa/>}/>
      <Route path="/Contactenos" element={<Contactenos/>}/>
      <Route path="/Login" element={<Inicio/>}/>
      <Route path="/productos" element={<Juguetes/>}/>
      <Route path="/Marcas" element={<Marcas/>}/>
      
    </Routes>
  
      </BrowserRouter>
      
  );
}

export default App;
