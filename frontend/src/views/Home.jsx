import Logo from '../assets/Logo.png'
import '../App.scss'
import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
let botonIngresar;

export function Home() {
    return <>
        <Navbar />
        <div className='container'>
            <div id="carouselExample" class="carousel slide" data-bs-ride="true" style={{margin: 'auto', padding: '54px 0'}}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.petalatino.com/wp-content/uploads/horses-used-for-racing.jpg" class="d-block w-100" width="450" height="500"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://4.bp.blogspot.com/-fU2ijx-NQr0/UKfCvCTnNUI/AAAAAAAAGdo/YWxx2u3xQqk/s1600/Cómo+seleccionar+un+caballo+de+carreras.bmp" class="d-block w-100" width="450" height="500"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.anipedia.net/imagenes/carrera-caballos.jpg" class="d-block w-100" width="450" height="500"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>
}





export default Home;
