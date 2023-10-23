import React from 'react';
import '../assets/css/notFound.css';


const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Página no encontrada</p>
        <button>Volver al Inicio</button>
      </div>
    </div>
  );
};

export default NotFound;
