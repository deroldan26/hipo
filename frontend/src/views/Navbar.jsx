import Logo from '../assets/Logo.png'
import '../App.scss'
import React, { useContext, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import * as Variables from '../Scripts/Variables.js';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

let botonIngresar;


export function Navbar() {

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const navigate = useNavigate();
    var permisos = localStorage.getItem('Permisos')
    permisos = JSON.parse(permisos)


    function listaUsuarios(){
        if((permisos.includes("Agregar Usuario")) || (permisos.includes("Modificar Usuario")) || (permisos.includes("Eliminar Usuario"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaUsuarios')}>Ver lista de Usuarios</a></li>)
        }else{
            return('')
        }
    }
    let botonUsuarios = listaUsuarios();

    function listaRoles(){
        if((permisos.includes("Agregar Rol")) || (permisos.includes("Modificar Rol")) || (permisos.includes("Eliminar Rol"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaRoles')}>Ver lista de Roles</a></li>)
        }else{
            return('')
        }
    }
    let botonRoles = listaRoles();

    function listaEjemplares(){
        if((permisos.includes("Agregar Ejemplar")) || (permisos.includes("Modificar Ejemplar")) || (permisos.includes("Eliminar Ejemplar"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaEjemplares')}>Ver lista de Ejemplares</a></li>)
        }else{
            return('')
        }
    }
    let botonEjemplares = listaEjemplares();

    function listaEntrenadores(){
        if((permisos.includes("Agregar Entrenador")) || (permisos.includes("Modificar Entrenador")) || (permisos.includes("Eliminar Entrenador"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaEntrenadores')}>Ver lista de Entrenadores</a></li>)
        }else{
            return('')
        }
    }
    let botonEntrenadores = listaEntrenadores();

    function listaJinetes(){
        if((permisos.includes("Agregar Jinete")) || (permisos.includes("Modificar Jinete")) || (permisos.includes("Eliminar Jinete"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaJinetes')}>Ver lista de Jinetes</a></li>)
        }else{
            return('')
        }
    }
    let botonJinetes = listaJinetes();

    function listaCarreras(){
        if((permisos.includes("Agregar Carrera")) || (permisos.includes("Modificar Carrera")) || (permisos.includes("Eliminar Carrera"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaCarreras')}>Ver lista de Carreras</a></li>)
        }else{
            return('')
        }
    }
    let botonCarreras = listaCarreras();

    function ListaCaballerizas(){
        if((permisos.includes("Agregar Caballeriza")) || (permisos.includes("Modificar Caballeriza")) || (permisos.includes("Eliminar Caballeriza"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaCaballerizas')}>Ver lista de Caballerizas</a></li>)
        }else{
            return('')
        }
    }
    let botonCaballerizas = ListaCaballerizas();

    function listaStuds(){
        if((permisos.includes("Agregar Stud")) || (permisos.includes("Modificar Stud")) || (permisos.includes("Eliminar Stud"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaStuds')}>Ver lista de Studs</a></li>)
        }else{
            return('')
        }
    }
    let botonStuds = listaStuds();

    function listaRestaurantes(){
        if((permisos.includes("Agregar Restaurant")) || (permisos.includes("Modificar Restaurant")) || (permisos.includes("Eliminar Restaurant"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaRestaurantes')}>Ver lista de Restaurantes</a></li>)
        }else{
            return('')
        }
    }
    let botonRestaurantes = listaRestaurantes();

    function listaRetiros(){
        if((permisos.includes("Agregar Retiro")) || (permisos.includes("Modificar Retiro")) || (permisos.includes("Eliminar Retiro"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaRetiros')}>Ver lista de Retiros</a></li>)
        }else{
            return('')
        }
    }
    let botonRetiros = listaRetiros();

    function listaImplementos(){
        if((permisos.includes("Agregar Implemento")) || (permisos.includes("Modificar Implemento")) || (permisos.includes("Eliminar Implemento"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaImplementos')}>Ver lista de Implementos</a></li>)
        }else{
            return('')
        }
    }
    let botonImplementos = listaImplementos();

    function listaInscripciones(){
        if((permisos.includes("Agregar Inscripcion")) || (permisos.includes("Modificar Inscripcion")) || (permisos.includes("Eliminar Inscripcion"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/ListaInscripciones')}>Ver lista de Inscripciones</a></li>)
        }else{
            return('')
        }
    }
    let botonInscripciones = listaInscripciones();

    function listaReportes(){
        if((permisos.includes("Generar Reportes"))){
            return(<li><a className="dropdown-item" href="#" onClick={() => navigate('/GenerarReportes')}>Reportes</a></li>)
        }else{
            return('')
        }
    }
    let botonReportes = listaReportes();

    function botonLog() {
        
        if (localStorage.getItem('isLog') == 'true') {
            return (<button type="button" className="btn btn-outline-light" id='Ingresar' onClick={() => navigate("/login")}>Ingresar</button>);
        } else {
            return (<li className="btn-group dropstart" id='Logeado'>
                <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Opciones
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={() => {{}}}>Perfil</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => {{}}}>Apuestas</a></li>
                    {botonUsuarios}
                    {botonRoles}
                    {botonEjemplares}
                    {botonEntrenadores}
                    {botonJinetes}
                    {botonCarreras}
                    {botonCaballerizas}
                    {botonStuds}
                    {botonRestaurantes}
                    {botonRetiros}
                    {botonImplementos}
                    {botonInscripciones}
                    {botonReportes}
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#" onClick={() => {localStorage.setItem('isLog', true);localStorage.setItem('Permisos', JSON.stringify(['']));Toast.fire({icon: 'error', title: 'Sesion Cerrada'}); navigate('/home')}}>Cerrar Sesion</a></li>
                </ul>
            </li>);
        }
    }

    botonIngresar = botonLog();



    return <>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
                <Link to="/Home">
                    <img src={Logo} alt="Logo" width="220" height="120" className="d-inline-block align-text-top" id='Logo' />
                </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <button type="button" className="btn btn-outline-light" id='Eventos'>Programas / Eventos</button>
                    <button type="button" className="btn btn-outline-light" id='Resultados'>Resultados</button>
                    <button type="button" className="btn btn-outline-light" id='Ejemplares'>Ejemplares</button>
                    <button type="button" className="btn btn-outline-light" id='Nosotros' onClick={() => navigate("/SobreNosotros")}>Acerca de Nosotros</button>
                    {botonIngresar}
                </ul>
            </div>
        </div>
    </nav>
    </>
}





export default Navbar;
