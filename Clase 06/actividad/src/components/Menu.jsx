import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/components/menu.css'

const Menu = () => {

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/encuesta/crear">Crear Encuesta</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;