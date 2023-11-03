import React from 'react';
import '../assets/css/notFound.css';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Página no encontrada</p>
        <Link className='volver-inicio-404' to={"/"}>Volver al Inicio</Link>
      </div>
    </div>
  );
};

export default NotFound;
