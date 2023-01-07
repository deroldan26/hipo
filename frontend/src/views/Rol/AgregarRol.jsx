import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import "react-widgets/scss/styles.scss";
import Multiselect from "react-widgets/Multiselect";
import Toast from '../../Scripts/Mensajes.js';

function AgregarRol() {
    const [value, setValue] = useState([]);
    const permisosAg = ['Agregar Usuario','Modificar Usuario','Eliminar Usuario','Agregar Ejemplar','Modificar Ejemplar','Eliminar Ejemplar','Agregar Rol','Modificar Rol','Eliminar Rol','Agregar Stud','Modificar Stud','Eliminar Stud','Agregar Jinete','Modificar Jinete','Eliminar Jinete','Agregar Entrenador','Modificar Entrenador','Eliminar Entrenador','Agregar Carrera','Modificar Carrera','Eliminar Carrera','Agregar Caballeriza','Modificar Caballeriza','Eliminar Caballeriza','Agregar Retiro','Modificar Retiro','Eliminar Retiro','Agregar Restaurante','Modificar Restaurante','Eliminar Restaurante','Agregar Implemento','Modificar Implemento','Eliminar Implemento','Agregar Inscripcion','Modificar Inscripcion','Eliminar Inscripcion','Generar Reportes'];
    const navigate = useNavigate();
    var permisos = localStorage.getItem('Permisos')
    permisos = JSON.parse(permisos)
    const verificarDatos = () =>{
        if((permisos.includes("Agregar Rol"))){
            Toast.fire({icon: 'success', title: 'Datos Agregados'})
            //otro if para agregar los datos....
        }else{
            Toast.fire({icon: 'error', title: 'No Tienes Permiso'})
        }
        
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
                <h2>Agregar Rol</h2>
            </div>
            <form control="" className="form-group">
                <div className='container'>
                    <div className='col-4' style={{ margin: 'auto' }}>
                        <div className="row">
                            <input type="text" name="Nombre" id="Nombre" className="form__input" placeholder="Nombre del Rol" />
                        </div>
                        <div className="row">
                            <input type="text" name="Descripcion" id="Descripcion" className="form__input" placeholder="Descripcion del Rol" />
                        </div>
                        <div className="row">
                            <Multiselect
                                data={permisosAg}
                                placeholder='Selecciona Permisos'
                                textField='permisos'
                                filter='contains'
                                value={value}
                                onChange={value => setValue(value)}
                            />
                            <p></p>
                        </div>
                        <div className="row">
                            {//<input type="submit" value="Agregar" id="btn" className="boton" onClick={verificarDatos} />
                            }
                            <button type="button" className="boton" id='btn' onClick={verificarDatos}>Agregar</button>
                        </div>
                        <div className="row">
                            <p> </p>
                        </div>
                    </div>
                </div>
            </form>
            <div className="col-md-1" style={{
                position: 'absolute',
                bottom: '30px',
                left: '35px'
            }}>
                <button type="button" className="boton" id='Volver' onClick={() => navigate("/ListaRoles")}>Volver</button>
            </div>
            <p></p>
        </>
    );
}

export default AgregarRol;