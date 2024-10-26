// src/pages/NotFound.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/NotFound.css';

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h1>404 - Página No Encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
};

export default NotFound;