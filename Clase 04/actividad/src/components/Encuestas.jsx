import React from 'react';
import './styles.css'

const Encuestas = ({ encuestas }) => {
    return (
        <div>
            <h2 className='titulo-encuesta'>Encuestas Disponibles</h2>
            <ul>
                {
                    encuestas.map(({ id, pregunta, opciones }) => (
                        <li key={id}> 
                            { pregunta } 
                            <ul>
                            {
                                opciones.map((opcion, index) => (
                                    <li key={index}>{opcion}</li>
                                ))
                            }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>   
    );
}
export default Encuestas; 