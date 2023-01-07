import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import "react-widgets/scss/styles.scss";
import Toast from '../../Scripts/Mensajes.js';

function EliminarUsuario() {

    const [ID, setID] = useState ('');
    const [busco, setBusco] = useState(false);
    const navigate = useNavigate();
    var permisos = localStorage.getItem('Permisos')
    permisos = JSON.parse(permisos)
    const verificarDatos = () =>{
        if(busco){
            if((permisos.includes("Agregar Usuario"))){
                Toast.fire({icon: 'success', title: 'Datos Agregados'})
                //otro if para agregar los datos....
            }else{
                Toast.fire({icon: 'error', title: 'No Tienes Permiso'})
            }
        }else{
            Toast.fire({icon: 'error', title: 'Coloca un ID Valido'})
        }
        
        
    }

    const buscar = () => {
        //if para buscar el id
        Toast.fire({icon: 'error', title: 'ID No Encontrado'})
        setBusco(true);
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
                <h2>Eliminar Usuario</h2>
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
                            {//<input type="submit" value="Agregar" id="btn" className="boton" onClick={verificarDatos} />
                            }
                            <button type="button" className="boton" id='btn' onClick={verificarDatos}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="col-md-1" style={{
                position: 'absolute',
                bottom: '30px',
                left: '35px'
            }}>
                <button type="button" className="boton" id='Volver' onClick={() => navigate("/ListaUsuarios")}>Volver</button>
            </div>
            <p></p>
        </>
    );
}

export default EliminarUsuario;