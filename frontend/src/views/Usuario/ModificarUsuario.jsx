import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import "react-widgets/scss/styles.scss";
import Combobox from "react-widgets/Combobox";
import DatePicker from "react-widgets/DatePicker";
import Toast from '../../Scripts/Mensajes.js';

function ModificarUsuario() {
    const estados = []
    const municipios = []
    const parroquias = []
    const [estado, setEstado] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [parroquia, setParroquia] = useState('')
    const [ID, setID] = useState ('')
    const [email, setEmail] = useState ('')
    const [usuario, setUsuario] = useState ('')
    const [contra, setContra] = useState ('')
    
    const navigate = useNavigate();
    var permisos = localStorage.getItem('Permisos')
    permisos = JSON.parse(permisos)
    const verificarDatos = () =>{
        if((permisos.includes("Agregar Usuario"))){
            Toast.fire({icon: 'success', title: 'Datos Agregados'})
            //otro if para agregar los datos....
        }else{
            Toast.fire({icon: 'error', title: 'No Tienes Permiso'})
        }
        
    }

    const buscar = () => {
        //if para buscar el id
        Toast.fire({icon: 'error', title: 'ID No Encontrado'})
    }

    return (
        <>
            <Navbar />
            <div style={{
                margin: 'auto',
                width: '75%',
                padding: '45px 0',
                'text-align': 'center'
            }}>
                <h2>Modificar Usuario</h2>
            </div>
            <form control="" className="form-group">
                <div className='container'>
                    <div className='col-4' style={{ margin: 'auto' }}>
                        <div className='row'>
                            <div className='col-7' style={{ margin: 'auto' }}>
                                <input type="text" name="Nombre de Usuario buscar" id="Nombre de Usuario buscar" className="form__input" placeholder="Nombre de Usuario" onChange={event => { setID (event.target.value)}}/>
                            </div>
                            <div className='col-4' style={{ margin: 'auto' }}>
                                <button type="button" className="btn btn-outline-info" onClick={buscar}>Buscar</button>
                            </div>
                        </div>
                        <div className="row">
                            <input type="text" name="Email" id="Email" className="form__input" placeholder="Correo Electronico" />
                        </div>
                        <div className="row">
                            <input type="text" name="Username" id="Username" className="form__input" placeholder="Nombre de Usuario" />
                        </div>
                        <div className="row">
                            <input type="text" name="Password" id="Password" className="form__input" placeholder="Contraseña" />
                        </div>
                        <div className="row">
                            <input type="text" name="Cedula" id="Cedula" className="form__input" placeholder="Cedula"/>
                        </div>
                        <div className="row">
                            <input type="text" name="PrimerNombre" id="PrimerNombre" className="form__input" placeholder="Primer Nombre"/>
                        </div>
                        <div className="row">
                            <input type="text" name="SegundoNombre" id="SegundoNombre" className="form__input" placeholder="Segundo Nombre" />
                        </div>
                        <div className="row">
                            <input type="text" name="PrimerApellido" id="PrimerApellido" className="form__input" placeholder="Primer Apellido" />
                        </div>
                        <div className="row">
                            <input type="text" name="SegundoApellido" id="SegundoApellido" className="form__input" placeholder="Segundo Apellido" />
                        </div>
                        <div className="row">
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
                        <div className="row">
                            <input type="text" name="DireccionDetalle" id="DireccionDetalle" className="form__input" placeholder="Detalle Direccion" />
                        </div>
                        <div className='row'>
                            <div className='col-6' style={{ margin: 'auto' }}>
                                <label>Fecha de Nacimiento: </label>
                            </div>
                            <div className='col-5' style={{ margin: 'auto' }}>
                                    <DatePicker placeholder="m/dd/yy" 
                                    className="form__input"
                                    />
                            </div>
                        </div>
                        <div className="row">
                            {//<input type="submit" value="Agregar" id="btn" className="boton" onClick={verificarDatos} />
                            }
                            <button type="button" className="boton" id='btn' onClick={verificarDatos}>Modificar</button>
                        </div>
                        <div className="row">
                            <p> </p>
                        </div>
                    </div>
                </div>
            </form>
            <div className="col-md-1" style={{
                position: 'absolute',
                bottom: '-680px',
                left: '35px'
            }}>
                <button type="button" className="boton" id='Volver' onClick={() => navigate("/ListaUsuarios")}>Volver</button>
            </div>
            <p></p>
        </>
    );
}

export default ModificarUsuario;