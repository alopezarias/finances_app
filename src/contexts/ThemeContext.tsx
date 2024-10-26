// src/contexts/ThemeContext.tsx

import React, { createContext, useState, useEffect } from 'react';

interface ThemeContextProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Alternar entre temas
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Cargar el tema desde localStorage al montar el componente
    useEffect(() => {
        const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
        setTheme(savedTheme);
    }, []);

    // Aplicar la clase del tema al elemento body
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};