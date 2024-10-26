// src/pages/Login.tsx

import React, { useState, useContext } from 'react';
import { AuthContext } from '@contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import '@styles/Login.css';

const Login: React.FC = () => {
    const { user, login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (user) {
        // Usuario ya autenticado, redirigir al dashboard
        return <Navigate to="/" replace />;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            // Redireccionamiento manejado por el cambio de estado en AuthContext
        } catch (error) {
            // Manejar errores de autenticación
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Correo Electrónico
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="username"
                    />
                </label>
                <label>
                    Contraseña
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                    />
                </label>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;