// src/components/ThemeToggle.tsx

import React, { useContext } from 'react';
import { ThemeContext } from '@contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import '@styles/ThemeToggle.css';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    );
};

export default ThemeToggle;