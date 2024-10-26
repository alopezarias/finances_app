// src/components/AppRoutes.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '@pages/Login';
import Dashboard from '@pages/Dashboard';
import NotFound from '@pages/NotFound';
import Settings from '@pages/Settings';
import Accounts from '@pages/Accounts';
import Transactions from '@pages/Transactions';
import ProtectedRoute from '@components/ProtectedRoute';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Ruta pública */}
            <Route path="/login" element={<Login />} />

            {/* Rutas protegidas */}
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/settings"
                element={
                    <ProtectedRoute>
                        <Settings />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/accounts"
                element={
                    <ProtectedRoute>
                        <Accounts />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/transactions"
                element={
                    <ProtectedRoute>
                        <Transactions />
                    </ProtectedRoute>
                }
            />
            {/* Ruta para páginas no encontradas */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;