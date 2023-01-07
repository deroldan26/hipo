import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png'
import '../Styles/Login.css';
import { Link, useNavigate } from "react-router-dom";
import BotonVolver from './BotonVolver';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



function LogIn() {

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

  function verificarLogin() {
    localStorage.setItem('Permisos', JSON.stringify(['Agregar Usuario','Modificar Usuario','Eliminar Usuario','Agregar Ejemplar','Modificar Ejemplar','Eliminar Ejemplar','Agregar Rol','Modificar Rol','Eliminar Rol','Agregar Stud','Modificar Stud','Eliminar Stud','Agregar Jinete','Modificar Jinete','Eliminar Jinete','Agregar Entrenador','Modificar Entrenador','Eliminar Entrenador','Agregar Carrera','Modificar Carrera','Eliminar Carrera','Agregar Caballeriza','Modificar Caballeriza','Eliminar Caballeriza','Agregar Retiro','Modificar Retiro','Eliminar Retiro','Agregar Restaurante','Modificar Restaurante','Eliminar Restaurante','Agregar Implemento','Modificar Implemento','Eliminar Implemento','Agregar Inscripcion','Modificar Inscripcion','Eliminar Inscripcion','Generar Reportes']))
    localStorage.setItem('isLog', false)
    Toast.fire({
      icon: 'success',
      title: 'Sesion Iniciada'
    })
    navigate("/Home");
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <BotonVolver />
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo"><img src={Logo} alt="Logo" width="220" height="130" className="logo" id='Logo' /></span>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2>Login</h2>
              </div>
              <div className="row">
                <form control="" className="form-group">
                  <div className="row">
                    <input type="text" name="Username" id="username" className="form__input" placeholder="Nombre de Usuario" />
                  </div>
                  <div className="row">
                    <span className="fa fa-lock"></span>
                    <input type="password" name="Password" id="password" className="form__input" placeholder="Contraseña" />
                  </div>
                  <div className="row">
                    <input type="submit" value="Entrar" id="btn" className="boton" onClick={() => { verificarLogin()}} />
                  </div>
                </form>
              </div>
              <p></p>
              <div className="row">
                <p>No tienes cuenta? <Link to="/Register">Registrate Aqui</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;