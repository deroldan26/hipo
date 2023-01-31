import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import Combobox from "react-widgets/Combobox";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/scss/styles.scss";
import Toast from '../../Scripts/Mensajes.js';

let sexo = ['Macho', 'Hembra'];
let pelaje = ['Castaño', 'Alazan', 'Zaino', 'Tordillo'];

function ModificarEjemplar() {

    const navigate = useNavigate();
    const [value, setValue] = useState('Macho')
    const [value2, setValue2] = useState('Castaño')
    var permisos = localStorage.getItem('Permisos')
    permisos = JSON.parse(permisos)
    const verificarDatos = () =>{
        if((permisos.includes("Modificar Ejemplar"))){
            Toast.fire({icon: 'success', title: 'Datos Modificados'})
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
                <h2>Modificar Ejemplar</h2>
            </div>
            <form control="" className="form-group">
                <div className='container'>
                    <div className='col-4' style={{margin: 'auto'}}>
                        <div className='row'>
                            <div className='col-4' style={{margin: 'auto'}}>
                                <input type="text" name="ID" id="ID" className="form__input" placeholder="ID" />
                            </div>
                            <div className='col-5' style={{margin: 'auto'}}>
                                <button type="button" className="btn btn-outline-info">Buscar ID Ejemplar</button>
                            </div>
                        </div>
                        <div className="row">
                            <input type="text" name="Nombre Ejemplar" id="Nombre Ejemplar" className="form__input" placeholder="Nombre del Ejemplar" />
                        </div>
                        <div className="row">
                            <input type="text" name="Numero Tatuaje Labial" id="Tatuaje Labial" className="form__input" placeholder="Numero de Tatuaje Labial" />
                        </div>
                        <div className="row">
                            <div className='col-3' style={{margin: 'auto', alignContent: 'right'}}>Sexo: </div>
                            <div className='col-4' style={{margin: 'auto'}}>
                                <Combobox
                                    data={sexo}
                                    value={value}
                                    onChange={value => setValue(value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                        <p></p>
                            <div className='col-5' style={{margin: 'auto', alignText: 'right'}}>Fecha Nacimiento: </div>
                            <div className='col-4' style={{margin: 'auto'}}>
                                <DatePicker placeholder="m/dd/yy" />
                            </div>
                        </div>
                        <div className="row">
                        <p></p>
                            <div className='col-3' style={{margin: 'auto', alignContent: 'right'}}>Pelaje: </div>
                            <div className='col-4' style={{margin: 'auto'}}>
                                <Combobox
                                    data={pelaje}
                                    value={value2}
                                    onChange={value2 => setValue2(value2)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <input type="text" name="IdPadre" id="IdPadre" className="form__input" placeholder="ID Padre" />
                        </div>
                        <div className="row">
                            <input type="text" name="IdMadre" id="IdMadre" className="form__input" placeholder="ID Madre" />
                        </div>
                        <div className="row">
                            <input type="text" name="IdHaras" id="IdHaras" className="form__input" placeholder="ID Haras de Procedencia" />
                        </div>
                        <div className="row">
                            {//<input type="submit" value="Agregar" id="btn" className="boton" onClick={verificarDatos} />
                            }
                            <button type="button" className="boton" id='btn' onClick={verificarDatos}>Modificar</button>
                        </div>
                        <p></p>
                    </div>
                </div>
            </form>
            <div className="col-md-1" style={{
                position: 'absolute',
                bottom: '-165px',
                left: '35px'
            }}>
                <button type="button" className="boton" id='Volver' onClick={() => navigate("/ListaEjemplares")}>Volver</button>
            </div>
            <p></p>
        </>
    );
}

export default ModificarEjemplar;