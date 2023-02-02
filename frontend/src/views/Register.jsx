import React, { useState } from 'react';
import Logo from '../assets/Logo.png'
import '../Styles/Login.css';
import { useNavigate, Link } from "react-router-dom";
import Combobox from "react-widgets/Combobox";
import DatePicker from "react-widgets/DatePicker";
import BotonVolver from './BotonVolver';


import axios from "axios";
import { format } from "date-fns";
import { useEffect } from 'react';

// const baseUrl = "http://localhost:5000/"
const baseUrl = "http://127.0.0.1:5000"

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function Register() {

    const [nombre_usuario, setNombre_usuario] = useState("");
    const [contrasena_usuario, setContrasena_usuario] = useState("");

    const [nombre_usuarioEdit, setEditNombre_usuario] = useState("");
    const [usuarioLista, setUsuarioLista] = useState([]);
    const [usuarionombre, setUsuarioNombre] = useState(null);

    const estados = []
    const municipios = []
    const parroquias = []
    const [email, setEmail] = useState('')
    const [usuario, setUsuario] = useState('')
    const [contra, setContra] = useState('')
    const [contra2, setContra2] = useState('')
    const [cedula, setCedula] = useState('')
    const [nombre, setNombre] = useState('')
    const [nombre2, setNombre2] = useState('')
    const [apellido, setApellido] = useState('')
    const [apellido2, setApellido2] = useState('')
    const [estado, setEstado] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [parroquia, setParroquia] = useState('')
    const [direccion, setDireccion] = useState('')
    const [fechaNac, setFechaNac] = useState('')

    const fetchUsuarios = async () => {
        const data = await axios.get(`${baseUrl}/usuario`)
            .then(res => {
                console.log(res);
                const { Usuario } = res.data;
                setUsuarioLista(Usuario);
            })
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
    useEffect(() => {
        fetchUsuarios();
    }, [])

    const handleDelete = async (nombre_usuario) => {
        try {
            await axios.delete(`${baseUrl}/usuario/${nombre_usuario}`);
            const updatedLista = usuarioLista.filter(usuario => usuario.nombre_usuario != nombre_usuario);
            setUsuarioLista(updatedLista);
        } catch (err) {
            console.error(err.message)
        }
    }

    const handleEdit = async (usuario) => {
        // Boceto de put con Axios
        await axios.put(`${baseUrl}/usuario/${nombre_usuario}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.error(err.message))
        setUsuarioNombre(usuario.nombre_usuario);
        setEditNombre_usuario(usuario.nombre_usuario);
    }

    const handlerSubmit = async (e) => {
        console.log(e)
        e.preventDefault();
        // try{
        await axios.post(`${baseUrl}/usuario`, {
            usuario: setUsuario,
            contra: setContra
        },)
            .then(res => {
                console.log(res)
                navigate("/Login")
            })
            .catch(err => {
                console.error(err);
            })
        // catch (err){
        //     console.error(err.message);
        // }
    }

    async function sendData(e) {
        e.preventDefault();
        const config = {
            url: 'http://localhost:5000/usuario',
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                'Content-Type': 'application/json',
            },
            //crossdomain: true,
            data: JSON.stringify({ usuario, contra }),
        };
        const response = await axios(config).catch((err) => err)
            //response.headers.add('Access-Control-Allow-Origin', '*')
            .then(res => {
                console.log(res)
                navigate("/Login")
            })
            .catch(err => {
                console.error(err);
            })
    }

    // const verificarRegistro = () => {
    //     handlerSubmit();
    //     navigate("/Login")
    // }

    const navigate = useNavigate();
    return (<>

        <div className="container-fluid" style={{
            /*
            /*
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',*/
            height: '100vh',
        }}>
            <BotonVolver />
            <div className="row main-content bg-success text-center" style={{ margin: 'auto' }}>
                <div className="row main-content bg-success text-center" style={{ margin: 'auto' }}>
                    <div className="col-md-4 col-sm-8 text-center company__info">
                        <span className="company__logo"><img src={Logo} alt="Logo" width="220" height="130" className="logo" id='Logo' /></span>
                    </div>
                    <div className="col-md-8 col-xs-16 col-sm-16 login_form ">
                        <div className="col-md-8 col-xs-16 col-sm-16 login_form ">
                            <div className="container-fluid">
                                <div className="row">
                                    <h2>Registro</h2>
                                </div>
                                <div className="row">
                                    <form control="" className="form-group">
                                        <div className="row">
                                            <input type="text" name="Email" id="Email" className="form__input" placeholder="Correo Electronico" onChange={event => { setEmail(event.target.value) }} />
                                        </div>
                                        <div className="row">
                                            <input type="text" name="Username" id="Username" className="form__input" placeholder="Nombre de Usuario" onChange={event => { setUsuario(event.target.value) }} />
                                        </div>
                                        <div className="row">
                                            <div className='col-6'>
                                                <input type="text" name="Password" id="Password" className="form__input" placeholder="Contraseña" onChange={event => { setContra(event.target.value) }} />
                                            </div>
                                            <div className='col-6'>
                                                <input type="text" name="Password2" id="Password2" className="form__input" placeholder="Confirmar Contraseña" onChange={event => { setContra2(event.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <input type="text" name="Cedula" id="Cedula" className="form__input" placeholder="Cedula" onChange={event => { setCedula(event.target.value) }} />
                                        </div>
                                        <div className="row">
                                            <div className='col-6'>
                                                <input type="text" name="PrimerNombre" id="PrimerNombre" className="form__input" placeholder="Primer Nombre" onChange={event => { setNombre(event.target.value) }} />
                                            </div>
                                            <div className='col-6'>
                                                <input type="text" name="SegundoNombre" id="SegundoNombre" className="form__input" placeholder="Segundo Nombre" onChange={event => { setNombre2(event.target.value) }} />
                                            </div>
                                            <div className='col-6'>
                                                <input type="text" name="PrimerApellido" id="PrimerApellido" className="form__input" placeholder="Primer Apellido" onChange={event => { setApellido(event.target.value) }} />
                                            </div>
                                            <div className='col-6'>
                                                <input type="text" name="SegundoApellido" id="SegundoApellido" className="form__input" placeholder="Segundo Apellido" onChange={event => { setApellido2(event.target.value) }} />
                                            </div>
                                            <input type="text" name="Email" id="Email" className="form__input" placeholder="Correo Electronico" onChange={event => { setEmail(event.target.value) }} />
                                        </div>
                                        <div className="row">
                                            <input type="text" name="Username" id="Username" className="form__input" placeholder="Nombre de Usuario" onChange={event => { setUsuario(event.target.value) }} />
                                        </div>
                                        <div className="row">
                                            <div className='col-6'>
                                                <input type="text" name="Password" id="Password" className="form__input" placeholder="Contraseña" onChange={event => { setContra(event.target.value) }} />
                                            </div>
                                            <div className='col-6'>
                                                <input type="text" name="Password2" id="Password2" className="form__input" placeholder="Confirmar Contraseña" onChange={event => { setContra2(event.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <input type="text" name="Cedula" id="Cedula" className="form__input" placeholder="Cedula" onChange={event => { setCedula(event.target.value) }} />
                                        </div>
                                        <div className="row">
                                            <div className='col-6'>
                                                <input type="text" name="PrimerNombre" id="PrimerNombre" className="form__input" placeholder="Primer Nombre" onChange={event => { setNombre(event.target.value) }} />
                                            </div>
                                            <div className='col-6'>
                                                <input type="text" name="SegundoNombre" id="SegundoNombre" className="form__input" placeholder="Segundo Nombre" onChange={event => { setNombre2(event.target.value) }} />
                                            </div>
                                            <div className='col-6'>
                                                <input type="text" name="PrimerApellido" id="PrimerApellido" className="form__input" placeholder="Primer Apellido" onChange={event => { setApellido(event.target.value) }} />
                                            </div>
                                            <div className='col-6'>
                                                <input type="text" name="SegundoApellido" id="SegundoApellido" className="form__input" placeholder="Segundo Apellido" onChange={event => { setApellido2(event.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <Combobox
                                                data={estados}
                                                placeholder={'Estado'}
                                                value={estado}
                                                onChange={estado => setEstado(estado)}
                                                className="form__input"
                                            />
                                            <Combobox
                                                data={estados}
                                                placeholder={'Estado'}
                                                value={estado}
                                                onChange={estado => setEstado(estado)}
                                                className="form__input"
                                            />
                                        </div>
                                        <div className="row">
                                            <Combobox
                                                data={municipios}
                                                placeholder={'Municipio'}
                                                value={municipio}
                                                onChange={municipio => setMunicipio(municipio)}
                                                className="form__input"
                                            />
                                            <Combobox
                                                data={municipios}
                                                placeholder={'Municipio'}
                                                value={municipio}
                                                onChange={municipio => setMunicipio(municipio)}
                                                className="form__input"
                                            />
                                        </div>
                                        <div className="row">
                                            <Combobox
                                                data={parroquias}
                                                placeholder={'Parroquia'}
                                                value={parroquia}
                                                onChange={parroquia => setParroquia(parroquia)}
                                                className="form__input"
                                            />
                                        </div>
                                        <div className='row'>
                                            <input type="text" name="DireccionDetalle" id="DireccionDetalle" className="form__input" placeholder="Detalle Direccion" onChange={event => { setDireccion(event.target.value) }} />
                                            <div className='col-6' style={{ margin: 'auto' }}>
                                                <label>Fecha de Nacimiento:</label>
                                            </div>
                                            <div className='col-5' style={{ margin: 'auto' }}>
                                                <DatePicker placeholder="m/dd/yy"
                                                    className="form__input"
                                                    onChange={event => { setFechaNac(event.target.value) }}
                                                />
                                            </div>
                                            <Combobox
                                                data={parroquias}
                                                placeholder={'Parroquia'}
                                                value={parroquia}
                                                onChange={parroquia => setParroquia(parroquia)}
                                                className="form__input"
                                            />
                                        </div>
                                        <div className='row'>
                                            <input type="text" name="DireccionDetalle" id="DireccionDetalle" className="form__input" placeholder="Detalle Direccion" onChange={event => { setDireccion(event.target.value) }} />
                                            <div className='col-6' style={{ margin: 'auto' }}>
                                                <label>Fecha de Nacimiento:</label>
                                            </div>
                                            <div className='col-5' style={{ margin: 'auto' }}>
                                                <DatePicker placeholder="m/dd/yy"
                                                    className="form__input"
                                                    onChange={event => { setFechaNac(event.target.value) }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <input type="button" value="Registrar" id="btn" className="boton" onClick={sendData} />
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

            </div>

        </div>

    </>

    );
}

export default Register