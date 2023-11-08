import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../assets/css/components/crearEncuesta.css'

const CrearEncuesta = ({ agregarEncuesta, agregarPregunta  }) => {
    const [numOpciones, setNumOpciones] = useState(1); // Número inicial de opciones
    const [opciones, setOpciones] = useState(Array(numOpciones).fill(''));
    const { register, handleSubmit, formState: {errors} } = useForm();

  
    const navigate = useNavigate();
    
    const onSubmit = (data) => {
      const nuevaEncuesta = { ...data, preguntas: [] };
      agregarEncuesta(nuevaEncuesta); // Agregar la encuesta
      const encuestaId = nuevaEncuesta.id; // Obtener el ID de la encuesta
  
      if (data.pregunta) {
          // Asignar un ID único a cada opción
          const opcionesConId = opciones.map((opcion, index) => ({ id: index + 1, texto: opcion }));
          const nuevaPregunta = { pregunta: data.pregunta, opciones: opcionesConId };
          agregarPregunta(encuestaId, nuevaPregunta); // Agregar la pregunta a la encuesta
      }
  
      navigate('/');
  };
  
    
    
  
    const handleNumOpcionesChange = (event) => {
      const cantidad = parseInt(event.target.value, 10);
      setNumOpciones(cantidad);
      setOpciones(Array(cantidad).fill(''));
    };
  
    const handleOpcionChange = (index, texto) => {
        const nuevasOpciones = [...opciones];
        nuevasOpciones[index] = texto;
        setOpciones(nuevasOpciones);
      };
      

    return (
        <div>
            <h1 className='title-crear-encuesta'>Crear Nueva Encuesta</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Título:</label>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    {...register("titulo", {
                        required: 'Este campo es obligatorio',
                        maxLength: { value: 50, message: 'El título debe tener menos de 50 caracteres' }
                    })}
                />
                {errors.titulo && <p className='error-form'>{errors.titulo.message}</p>}
                

                <label>Descripción:</label>
                <textarea
                    id="descripcion"
                    name="descripcion"
                    {... register("descripcion", {
                        required: 'Este campo es obligatorio',
                        maxLength: { value: 200, message: 'La descripción debe tener menos de 200 caracteres' }
                    })}
                />
                {errors.descripcion && <p className='error-form'>{errors.descripcion.message}</p>}

                <h2>Crea Nueva Pregunta</h2>
                <label>Pregunta:</label>
                <input
                    type="text"
                    id="pregunta"
                    name="pregunta"
                    {...register("pregunta", {
                        required: 'Este campo es obligatorio',
                        maxLength: { value: 50, message: 'El título debe tener menos de 50 caracteres' }
                    })}
                />
                {errors.pregunta && <p className='error-form'>{errors.pregunta.message}</p>}
                <label htmlFor="numOpciones">Número de opciones:</label>
        <select
          id="numOpciones"
          value={numOpciones}
          onChange={handleNumOpcionesChange}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <h3>Opciones:</h3>
        {opciones.map((opcion, index) => (
          <div key={index}>
            <input
              type="text"
              id='opciones'
              value={opcion}
              onChange={(e) => handleOpcionChange(index, e.target.value)}
              className="ingresar-opciones"
            />
          </div>
        ))}


                <button type="submit">Guardar Encuesta</button>
            </form>
        </div>
    );
}

export default CrearEncuesta;