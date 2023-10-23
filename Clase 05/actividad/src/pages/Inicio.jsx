import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/inicio.css';

const Inicio = ({ listaEncuestas }) => {
    console.log(listaEncuestas);

    return (
        <div>
            <h1>Lista de Encuestas Disponibles</h1>

            {listaEncuestas.map((encuesta, index) => (
                <div key={index} className="encuesta-item-container">
                    <div className="encuesta-item">
                        <h2>{encuesta.titulo}</h2>
                        <p>{encuesta.descripcion}</p>
                        <Link className="ver-encuesta" to={`/encuesta/${encuesta.id}`}>Ver encuesta</Link>
                        <br />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Inicio;
