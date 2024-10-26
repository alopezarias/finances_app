// src/pages/Settings.tsx

import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import BottomNavigation from '@components/BottomNavigation';
import '@styles/Settings.css';

const Settings: React.FC = () => {
    return (
        <div className="settings-page">
            <Header />
            <div className="main-content">
                <Sidebar />
                <main>
                    <h1>Configuración</h1>
                    {/* Contenido de configuración */}
                    <p>Aquí podrás ajustar tus preferencias.</p>
                </main>
            </div>
            <Footer />
            <BottomNavigation />
        </div>
    );
};

export default Settings;