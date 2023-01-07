import React, { useState } from 'react';
import Logo from '../assets/Logo.png'
import '../Styles/Login.css';
import { useNavigate, Link } from "react-router-dom";
import BotonVolver from './BotonVolver';
import axios from "axios";
import {format} from "date-fns";
import { useEffect} from 'react';

const baseUrl = "http://localhost:5000"

function Register() {

  const [nombre_usuario, setNombre_usuario] = useState("");
  const [contrasena_usuario, setContrasena_usuario] = useState("");

  const [nombre_usuarioEdit, setEditNombre_usuario] = useState("");
  const [usuarioLista, setUsuarioLista] = useState([]);
  const [usuarionombre, setUsuarioNombre] = useState(null);

  const fetchUsuarios = async() => {
    const data = await axios.get('${baseUrl}/usuario')
    const {Usuario} = data.data
    setUsuarioLista(Usuario);
  }

  const handleChange = e => {
    setNombre_usuario(e.target.value);
  }

  const handleChange2 = e => {
    setContrasena_usuario(e.target.value);
  }

  useEffect(() => {
    fetchUsuarios();
  }, [])

  const handleDelete = async(nombre_usuario) => {
    try {
      await axios.delete('${baseUrl}/usuario/${nombre_usuario}');
      const updatedLista = usuarioLista.filter(usuario => usuario.nombre_usuario != nombre_usuario);
      setUsuarioLista(updatedLista);
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleEdit = (usuario) => {
    setUsuarioNombre(usuario.nombre_usuario);
    setEditNombre_usuario(usuario.nombre_usuario);
  }

  const handlerSubmit = async(e) => {
    e.preventDefault();
    try{
      await axios.post('${baseUrl}/usuario', {nombre_usuario, contrasena_usuario})
        //setUsuarioLista([...usuarioLista, data.data]);
        //setNombre_usuario('');
        //setContrasena_usuario('');
    } catch (err){
      console.error(err.message);
    }
  }


    const verificarRegistro = () => {

        navigate("/Login")
    }

    const navigate = useNavigate();
    return (<>

        <div className="container-fluid" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <BotonVolver />
            <div className="row main-content bg-success text-center" >
                <div className="col-md-4 col-sm-8 text-center company__info">
                    <span className="company__logo"><img src={Logo} alt="Logo" width="220" height="130" className="logo" id='Logo' /></span>
                </div>
                <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                    <div className="container-fluid">
                        <div className="row">
                            <h2>Registro</h2>
                        </div>
                        <div className="row">
                            <form control="" className="form-group">
                                <div className="row">
                                    <input type="text" name="Email" id="email" className="form__input" placeholder="Correo Electronico" />
                                </div>
                                <div className="row">
                                    <input onChange={handleChange} type="text" name="Username" id="username" className="form__input" placeholder="Nombre de Usuario" value={nombre_usuario}/>
                                </div>
                                <div className="row">
                                    <span className="fa fa-lock"></span>
                                    <input type="password" name="Password" id="password" className="form__input" placeholder="Contraseña" />
                                </div>
                                <div className="row">
                                    <span className="fa fa-lock"></span>
                                    <input onChange={handleChange2} type="password" name="PasswordConfirm" id="passwordConfirm" className="form__input" placeholder="Confirmar Contraseña" value={contrasena_usuario}/>
                                </div>
                                <div className="row">
                                    <input type="button" value="Registrar" id="btn" className="boton" onClick={handlerSubmit}/>
                                </div>
                            </form>
                        </div>
                        <p></p>
                        <div className="row">
                            <p>Ya tienes cuenta? <Link to="/Login">Ingresa Aqui</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>

    );
}

export default Register