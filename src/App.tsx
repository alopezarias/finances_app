// src/App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@components/AppRoutes';
import { AuthProvider } from '@contexts/AuthContext';
import { ThemeProvider } from '@contexts/ThemeContext';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                    <AppRoutes />
            </ThemeProvider>
        </AuthProvider>
    );
};

export default App;