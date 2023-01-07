import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import "react-widgets/scss/styles.scss";
import Multiselect from "react-widgets/Multiselect";
import Toast from '../../Scripts/Mensajes.js';

function ModificarStud() {
    
    const colores = ['Rojo','Azul','Amarillo','Verde','Naranja','Morado','Blanco','Negro','Marron']
    const navigate = useNavigate();
    var permisos = localStorage.getItem('Permisos')
    permisos = JSON.parse(permisos)
    const verificarDatos = () =>{
        if((permisos.includes("Modificar Stud"))){
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
                <h2>Modificar Stud</h2>
            </div>
            <form control="" className="form-group">
                <div className='container'>
                    <div className='col-4' style={{ margin: 'auto' }}>
                        <div className="row">
                            <input type="text" name="Nombre" id="Nombre" className="form__input" placeholder="Nombre de STUD" />
                        </div>
                        <div className='row'>
                            <div className='col-4'><label style={{
                                position: 'relative',
                                bottom: '-40px',
                            }}>Propietario 1:</label></div>
                            <div className='col-4'><input type="text" name="IDProp1" id="IDProp1" className="form__input" placeholder="ID" /></div>
                            <div className='col-4'><input type="text" name="PorcentajeProp1" id="PorcentajeProp1" className="form__input" placeholder="Porcentaje" /></div>
                        </div>
                        <div className='row'>
                            <div className='col-4'><label style={{
                                position: 'relative',
                                bottom: '-40px',
                            }}>Propietario 2:</label></div>
                            <div className='col-4'><input type="text" name="IDProp2" id="IDProp2" className="form__input" placeholder="ID" /></div>
                            <div className='col-4'><input type="text" name="PorcentajeProp2" id="PorcentajeProp2" className="form__input" placeholder="Porcentaje" /></div>
                        </div>
                        <div className='row'>
                            <div className='col-4'><label style={{
                                position: 'relative',
                                bottom: '-40px',
                            }}>Propietario 3:</label></div>
                            <div className='col-4'><input type="text" name="IDProp3" id="IDProp3" className="form__input" placeholder="ID" /></div>
                            <div className='col-4'><input type="text" name="PorcentajeProp3" id="PorcentajeProp3" className="form__input" placeholder="Porcentaje" /></div>
                        </div>
                        <div className='row'>
                            <div className='col-4'><label style={{
                                position: 'relative',
                                bottom: '-40px',
                            }}>Propietario 4:</label></div>
                            <div className='col-4'><input type="text" name="IDProp4" id="IDProp4" className="form__input" placeholder="ID" /></div>
                            <div className='col-4'><input type="text" name="PorcentajeProp4" id="PorcentajeProp4" className="form__input" placeholder="Porcentaje" /></div>
                        </div>
                        <div className='row'>
                            <div className='col-4'><label style={{
                                position: 'relative',
                                bottom: '-40px',
                            }}>Propietario 5:</label></div>
                            <div className='col-4'><input type="text" name="IDProp5" id="IDProp5" className="form__input" placeholder="ID" /></div>
                            <div className='col-4'><input type="text" name="PorcentajeProp5" id="PorcentajeProp5" className="form__input" placeholder="Porcentaje" /></div>
                        </div>
                        <div className="row">
                            <div style={{'text-align': 'center'}}>
                                <label>Uniforme:</label>
                            </div>
                            <Multiselect
                                data={colores}
                                placeholder='Selecciona Colores de Camisa'
                                textField='colores'
                                filter='contains'
                            />
                            <p></p>
                        </div>
                        <div className="row">
                            <Multiselect
                                data={colores}
                                placeholder='Selecciona Colores de Gorra'
                                textField='colores'
                                filter='contains'
                            />
                            <div className='col-4'></div>
                            <div className='col-4'></div>
                            <p></p>
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
                bottom: '-250px',
                left: '35px'
            }}>
                <button type="button" className="boton" id='Volver' onClick={() => navigate("/ListaStuds")}>Volver</button>
            </div>
            <p></p>
        </>
    );
}

export default ModificarStud;