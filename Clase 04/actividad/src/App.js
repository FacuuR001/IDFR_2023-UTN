import React from 'react';
import Encuestas from './components/Encuestas';
import './App.css';

function App() {

  const encuestas = [
    { 
      id: 1, 
      pregunta:"¿Cuál es tu color favorito?",
      opciones: ['Rojo', 'Azul', 'Verde'],
    },
    { 
      id: 2, 
      pregunta:"¿Cuál es tu comida favorita?",
      opciones: ['Pizza', 'Hamburguesa', 'Asado'],
    },
    { 
      id: 3, 
      pregunta:"¿Cuál es tu auto favorito?",
      opciones: ['Toyota Supra', 'Dodge', 'Ford'],
    },
    { 
      id: 4, 
      pregunta:"¿Cuál es tu moto favorita?",
      opciones: ['Kawasaki', 'CBR', 'KTM'],
    },

  ]

  return (
    <div className='App'>
      <h1 className='h1'>Aplicación de Encuestas</h1>

      <Encuestas encuestas={encuestas}/>
    </div>
  );
}

export default App;
