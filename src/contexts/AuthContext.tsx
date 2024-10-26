// src/contexts/AuthContext.tsx

import React, { createContext, useState, useEffect } from 'react';

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthContextProps {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: async () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Función para iniciar sesión
    const login = async (email: string, password: string) => {
        // Lógica para autenticar con el backend
        // Ejemplo:
        /*
        const response = await axios.post('/api/login', { email, password });
        setUser(response.data.user);
        */
        // Simulación de inicio de sesión
        const fakeUser = { id: '1', email, name: 'Usuario' };
        setUser(fakeUser);
    };

    // Función para cerrar sesión
    const logout = () => {
        setUser(null);
        // Eliminar token o información de autenticación si se utiliza
    };

    // Efecto para cargar el estado de autenticación al iniciar la aplicación
    useEffect(() => {
        // Lógica para verificar si el usuario ya está autenticado
        // Por ejemplo, verificar si hay un token en localStorage
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    );
};