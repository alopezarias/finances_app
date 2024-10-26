// src/components/Footer.tsx

import React from 'react';
import '@styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Finanzas Personales. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;