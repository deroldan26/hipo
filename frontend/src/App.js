import Home from './views/Home';
import LogIn from './views/LogIn';
import Register from './views/Register';
import Nosotros from './views/Nosotros';
import VerListaEjemplares from './views/Ejemplar/VerListaEjemplares';
import AgregarEjemplar from './views/Ejemplar/AgregarEjemplar';
import ModificarEjemplar from './views/Ejemplar/ModificarEjemplar';
import EliminarEjemplar from  './views/Ejemplar/EliminarEjemplar';
import VerListaUsuarios from './views/Usuario/VerListaUsuarios';
import AgregarUsuario from './views/Usuario/AgregarUsuario';
import ModificarUsuario from './views/Usuario/ModificarUsuario';
import EliminarUsuario from './views/Usuario/EliminarUsuario';
import AgregarJinete from './views/Jinete/AgregarJinete';
import EliminarJinete from './views/Jinete/EliminarJinete';
import ModificarJinete from './views/Jinete/ModificarJinete';
import VerListaJinetes from './views/Jinete/VerListaJinetes';
import VerListaEntrenadores from './views/Entrenador/VerListaEntrenador';
import AgregarEntrenador from './views/Entrenador/AgregarEntrenador';
import ModificarEntrenador from './views/Entrenador/ModificarEntrenador';
import EliminarEntrenador from './views/Entrenador/EliminarEntrenador';
import VerListaCarreras from './views/Carrera/VerListaCarreras';
import AgregarCarrera from './views/Carrera/AgregarCarrera';
import ModificarCarrera from './views/Carrera/ModificarCarrera';
import EliminarCarrera from './views/Carrera/EliminarCarrera';
import VerListaCaballerizas from './views/Caballeriza/VerListaCaballeriza';
import AgregarCaballeriza from './views/Caballeriza/AgregarCaballeriza';
import ModificarCaballeriza from './views/Caballeriza/ModificarCaballeriza';
import EliminarCaballeriza from './views/Caballeriza/EliminarCaballeriza';
import VerListaStuds from './views/Stud/VerListaStuds';
import AgregarStud from './views/Stud/AgregarStud';
import ModificarStud from './views/Stud/ModificarStud';
import EliminarStud from './views/Stud/EliminarStud';
import VerListaRoles from './views/Rol/VerListaRoles';
import AgregarRol from './views/Rol/AgregarRol';
import ModificarRol from './views/Rol/ModificarRol';
import EliminarRol from './views/Rol/EliminarRol';
import VerListaRestaurantes from './views/Restaurante/VerListaRestaurantes';
import AgregarRestaurante from './views/Restaurante/AgregarRestaurante';
import ModificarRestaurante from './views/Restaurante/ModificarRestaurante';
import EliminarRestaurante from './views/Restaurante/EliminarRestaurante';
import VerListaImplementos from './views/Implemento/VerListaImplementos';
import AgregarImplemento from './views/Implemento/AgregarImplemento';
import ModificarImplmento from './views/Implemento/ModificarImplemento';
import EliminarImplemento from './views/Implemento/EliminarImplemento';
import VerListaRetiros from './views/Retiro/VerListaRetiros';
import AgregarRetiro from './views/Retiro/AgregarRetiro';
import ModificarRetiro from './views/Retiro/ModificarRetiro';
import EliminarRetiro from './views/Retiro/EliminarRetiro';
import VerListaInscripciones from './views/Inscripcion/VerListaInscripciones';
import AgregarInscipcion from './views/Inscripcion/AgregarInscripcion';
import ModificarInscripcion from './views/Inscripcion/ModificarInscipcion';
import EliminarInscripcion from './views/Inscripcion/EliminarInscripcion';
import GenerarReportes from './views/Reportes/GenerarReportes';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';

export function App() {
  
  return <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/SobreNosotros" element={<Nosotros />} />
          <Route path="/ListaEjemplares" element={<VerListaEjemplares />} />
          <Route path="/AgregarEjemplar" element={<AgregarEjemplar />} />
          <Route path="/ModificarEjemplar" element={<ModificarEjemplar />} />
          <Route path="/EliminarEjemplar" element={<EliminarEjemplar />} />
          <Route path="/ListaUsuarios" element={<VerListaUsuarios />} />
          <Route path="/AgregarUsuario" element={<AgregarUsuario />} />
          <Route path="/ModificarUsuario" element={<ModificarUsuario />} />
          <Route path="/EliminarUsuario" element={<EliminarUsuario />} />
          <Route path="/ListaJinetes" element={<VerListaJinetes />} />
          <Route path="/AgregarJinete" element={<AgregarJinete />} />
          <Route path="/ModificarJinete" element={<ModificarJinete />} />
          <Route path="/EliminarJinete" element={<EliminarJinete />} />
          <Route path="/ListaEntrenadores" element={<VerListaEntrenadores />} />
          <Route path="/AgregarEntrenador" element={<AgregarEntrenador />} />
          <Route path="/ModificarEntrenador" element={<ModificarEntrenador />} />
          <Route path="/EliminarEntrenador" element={<EliminarEntrenador />} />
          <Route path="/ListaCarreras" element={<VerListaCarreras />} />
          <Route path="/AgregarCarrera" element={<AgregarCarrera />} />
          <Route path="/ModificarCarrera" element={<ModificarCarrera />} />
          <Route path="/EliminarCarrera" element={<EliminarCarrera />} />
          <Route path="/ListaCaballerizas" element={<VerListaCaballerizas />} />
          <Route path="/AgregarCaballeriza" element={<AgregarCaballeriza />} />
          <Route path="/ModificarCaballeriza" element={<ModificarCaballeriza />} />
          <Route path="/EliminarCaballeriza" element={<EliminarCaballeriza />} />
          <Route path="/ListaStuds" element={<VerListaStuds />} />
          <Route path="/AgregarStud" element={<AgregarStud />} />
          <Route path="/ModificarStud" element={<ModificarStud />} />
          <Route path="/EliminarStud" element={<EliminarStud />} />
          <Route path="/ListaRoles" element={<VerListaRoles />} />
          <Route path="/AgregarRol" element={<AgregarRol />} />
          <Route path="/ModificarRol" element={<ModificarRol />} />
          <Route path="/EliminarRol" element={<EliminarRol />} />
          <Route path="/ListaRestaurantes" element={<VerListaRestaurantes />} />
          <Route path="/AgregarRestaurante" element={<AgregarRestaurante />} />
          <Route path="/ModificarRestaurante" element={<ModificarRestaurante />} />
          <Route path="/EliminarRestaurante" element={<EliminarRestaurante />} />
          <Route path="/ListaImplementos" element={<VerListaImplementos />} />
          <Route path="/AgregarImplemento" element={<AgregarImplemento />} />
          <Route path="/ModificarImplemento" element={<ModificarImplmento />} />
          <Route path="/EliminarImplemento" element={<EliminarImplemento />} />
          <Route path="/ListaRetiros" element={<VerListaRetiros />} />
          <Route path="/AgregarRetiro" element={<AgregarRetiro />} />
          <Route path="/ModificarRetiro" element={<ModificarRetiro />} />
          <Route path="/EliminarRetiro" element={<EliminarRetiro />} />
          <Route path="/ListaInscripciones" element={<VerListaInscripciones />} />
          <Route path="/AgregarInscripcion" element={<AgregarInscipcion />} />
          <Route path="/ModificarInscripcion" element={<ModificarInscripcion />} />
          <Route path="/EliminarInscripcion" element={<EliminarInscripcion />} />
          <Route path="/GenerarReportes" element={<GenerarReportes />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
  </div>
}
export default App;

