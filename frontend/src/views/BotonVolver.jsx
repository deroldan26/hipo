import React from 'react';
import { useNavigate } from "react-router-dom";

function BotonVolver() {

    const navigate = useNavigate();

    return(
        <div className="col-md-1" style={{
            position: 'relative',
            bottom: '-350px',
            right: '280px'
        }}>
            <button type="button" className="boton" id='Volver' onClick={() => navigate("/home")}>Volver</button>
        </div>
    );
}

export default BotonVolver