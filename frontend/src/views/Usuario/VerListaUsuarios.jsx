import React from 'react';
import Navbar from '../Navbar';
import { useNavigate } from "react-router-dom";
import Toast from '../../Scripts/Mensajes.js';

function VerListaUsuarios(){
    const navigate = useNavigate();
    var permisos = localStorage.getItem('Permisos')
    permisos = JSON.parse(permisos)

    const agregar = () => {
        if((permisos.includes("Agregar Usuario"))){
            navigate('/AgregarUsuario');
        }else{
            Toast.fire({icon: 'error', title: 'No Tienes Permiso'})
        }  
    }

    const modificar = () => {
        if((permisos.includes("Modificar Usuario"))){
            navigate('/ModificarUsuario');
        }else{
            Toast.fire({icon: 'error', title: 'No Tienes Permiso'})
        }   
    }

    const eliminar = () => {
        if((permisos.includes("Eliminar Usuario"))){
            navigate('/EliminarUsuario');
        }else{
            Toast.fire({icon: 'error', title: 'No Tienes Permiso'})
        }  
    }


    return(
        <>
            <Navbar/>
            <div style={{
                margin: 'auto',
                width: '75%',
                padding: '45px 0',
                'text-align': 'center'
            }}>
                <h2>Lista de Usuarios</h2>
            </div>
            <div className='container'>
                <div className='row'>
                <div
                    style={{
                        margin: '20px',
                        width: '75%'
                    }} className='col-10'>
                    <div >
                        <table className="table table-striped" id='TablaUsuarios'>
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
                    <button type="button" className="btn btn-outline-success" id='AgregarUsuario' style={{margin : '15px'}} onClick={agregar}>Agregar Usuario</button>
                    <button type="button" className="btn btn-outline-warning" id='ModificarUsuario' style={{margin : '15px'}} onClick={modificar}>Modificar Usuario</button>
                    <button type="button" className="btn btn-outline-danger" id='EliminarUsuario' style={{margin : '15px'}} onClick={eliminar}>Eliminar Usuario</button>
                </div>
                </div>
            </div>
        </>
    );
}

export default VerListaUsuarios;