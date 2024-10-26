// src/App.tsx

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const Home: React.FC = () => {
    return (
        <div>
            <h2>Página Principal</h2>
            <p>Bienvenido a la página principal.</p>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <div>
            <h2>Acerca de</h2>
            <p>Esta es la página de acerca de.</p>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <nav>
                <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;