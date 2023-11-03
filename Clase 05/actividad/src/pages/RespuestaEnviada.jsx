import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/respuestaEnviada.css'; // Importa tu archivo CSS para el diseño

const RespuestaEnviada = () => {
    return (
        <div className="respuesta-enviada-container">
            <div className="respuesta-enviada-content">
                <h2>¡Respuesta Enviada!</h2>
                <p>Tu respuesta se ha enviado con éxito.</p>
                <Link to="/" className="volver-inicio">Volver</Link>
            </div>
        </div>
    );
}

export default RespuestaEnviada;