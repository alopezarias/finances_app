// src/components/ProtectedRoute.tsx

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '@contexts/AuthContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        // Usuario no autenticado, redirigir al login
        return <Navigate to="/login" replace />;
    }

    // Usuario autenticado, renderizar el componente hijo
    return <>{children}</>;
};

export default ProtectedRoute;