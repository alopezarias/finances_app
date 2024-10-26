// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

// Importar registerSW
import { registerSW } from 'virtual:pwa-register';

// Registrar el Service Worker
const updateSW = registerSW({
    onNeedRefresh() {
        if (confirm('Hay una nueva versión disponible. ¿Deseas actualizar?')) {
            updateSW(true);
        }
    },
    onOfflineReady() {
        console.log('La aplicación está lista para funcionar offline.');
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);