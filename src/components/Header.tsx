// src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@components/ThemeToggle';
import '@styles/Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <h1>Finanzas Personales</h1>
            </Link>
            <nav className="navigation">
                {/* Puedes agregar más opciones de navegación aquí */}
                <ThemeToggle />
            </nav>
        </header>
    );
};

export default Header;