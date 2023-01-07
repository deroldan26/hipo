import React from 'react';
import Navbar from '../Navbar';
import { useNavigate } from "react-router-dom";
import Toast from '../../Scripts/Mensajes.js';

function VerListaEntrenadores() {
    const navigate = useNavigate();
    var permisos = localStorage.getItem('Permisos')
    permisos = JSON.parse(permisos)

    const agregar = () => {
        if((permisos.includes("Agregar Entrenador"))){
            navigate('/AgregarEntrenador');
        }else{
            Toast.fire({icon: 'error', title: 'No Tienes Permiso'})
        }  
    }

    const modificar = () => {
        if((permisos.includes("Modificar Entrenador"))){
            navigate('/ModificarEntrenador');
        }else{
            Toast.fire({icon: 'error', title: 'No Tienes Permiso'})
        }   
    }

    const eliminar = () => {
        if((permisos.includes("Eliminar Entrenador"))){
            navigate('/EliminarEntrenador');
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
                <h2>Lista de Entrenadores</h2>
            </div>
            <div className='container'>
                <div className='row'>
                <div
                    style={{
                        margin: '20px',
                        width: '75%'
                    }} className='col-10'>
                    <div >
                        <table className="table table-striped" id='TablaEntrenador'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Horacio</td>
                                    <td>Facundo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Sapo</td>
                                    <td>FASd</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Raimundo</td>
                                    <td>asdoasd</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Todls</td>
                                    <td>asdasdasd</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>asdasdasd</td>
                                    <td>fghfgh</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{
                    //'margin-right': '-20px',
                    //margin: 'auto',
                    //float: 'right',
                    //width: '10%'
                }} className='col-2'>
                    <button type="button" className="btn btn-outline-success" id='AgregarEntrenador' style={{margin : '15px'}} onClick={agregar}>Agregar Entrenador</button>
                    <button type="button" className="btn btn-outline-warning" id='ModificarEntrenador' style={{margin : '15px'}} onClick={modificar}>Modificar Entrenador</button>
                    <button type="button" className="btn btn-outline-danger" id='EliminarEntrenador' style={{margin : '15px'}} onClick={eliminar}>Eliminar Entrenador</button>
                </div>
                </div>
            </div>
        </>
    );
}

export default VerListaEntrenadores;