import React from 'react';
import Navbar from '../Navbar';
import { useNavigate } from "react-router-dom";
import Toast from '../../Scripts/Mensajes.js';

function VerListaStuds(){
    const navigate = useNavigate();
    var permisos = localStorage.getItem('Permisos')
    permisos = JSON.parse(permisos)

    const agregar = () => {
        if((permisos.includes("Agregar Stud"))){
            navigate('/AgregarStud');
        }else{
            Toast.fire({icon: 'error', title: 'No Tienes Permiso'})
        }  
    }

    const modificar = () => {
        if((permisos.includes("Modificar Stud"))){
            navigate('/ModificarStud');
        }else{
            Toast.fire({icon: 'error', title: 'No Tienes Permiso'})
        }   
    }

    const eliminar = () => {
        if((permisos.includes("Eliminar Stud"))){
            navigate('/EliminarStud');
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
                <h2>Lista de Studs</h2>
            </div>
            <div className='container'>
                <div className='row'>
                <div
                    style={{
                        margin: '20px',
                        width: '75%'
                    }} className='col-10'>
                    <div >
                        <table className="table table-striped" id='TablaStuds'>
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
                    <button type="button" className="btn btn-outline-success" id='AgregarStud' style={{margin : '15px'}} onClick={agregar}>Agregar Stud</button>
                    <button type="button" className="btn btn-outline-warning" id='ModificarStud' style={{margin : '15px'}} onClick={modificar}>Modificar Stud</button>
                    <button type="button" className="btn btn-outline-danger" id='EliminarStud' style={{margin : '15px'}} onClick={eliminar}>Eliminar Stud</button>
                </div>
                </div>
            </div>
        </>
    );
}

export default VerListaStuds;