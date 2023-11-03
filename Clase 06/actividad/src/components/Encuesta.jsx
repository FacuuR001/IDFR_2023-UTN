import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../assets/css/components/encuesta.css'

const Encuesta = ({ listaEncuestas }) => {
    const { id } = useParams(); // Obtiene el ID de la encuesta desde la URL
    const [seleccionada, setSeleccionada] = useState(false);
    const encuesta = listaEncuestas.find((enc) => enc.id === parseInt(id));

    const handleOpcionSeleccionada = (preguntaId, opcionId) => {
        setSeleccionada({
            ...seleccionada,
            [preguntaId]: opcionId,
        });
    };

    return(
        <div>
            <div className="encuesta-item-container">
                <div className="encuesta-item">
                    <h2>{encuesta.titulo}</h2>
                    <p>{encuesta.descripcion}</p>
                    <br />
                </div>
            </div>
            <div className="encuesta-item-container">
                <div className="encuesta-item">
                    <h2>Preguntas</h2>
                     {!encuesta.preguntas && <p>Sin preguntas definidas.</p>}
                    {encuesta.preguntas && encuesta.preguntas.map((pregunta, index) => (
                        <div key={index}>
                            <p>{pregunta.pregunta}</p>
                            <ol>
                                {pregunta.opciones.map((opcion) => (
                                    <div key={opcion.id}>
                                        <label className="opcion-respuesta">
                                                <input 
                                                    type="radio" 
                                                    name={ `opcion_${pregunta.id}` }  
                                                    onClick={handleOpcionSeleccionada}
                                                />
                                                <span className="opcion" >{opcion.texto}</span>
                                        </label>
                                    </div>
                                ))}
                            </ol>
                        </div>
                    ))}
                <br />
            </div>
            {seleccionada && <Link className="enviar-respuesta" to="/respuesta-enviada">Enviar Respuesta</Link>}
        </div>
        <Link to="/" className="volver">Volver</Link>
        </div>
    );
}

export default Encuesta;