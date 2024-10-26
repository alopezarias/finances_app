// src/components/AlertsSummary.tsx

import React, { useEffect, useState } from 'react';
import '@styles/AlertsSummary.css';

interface Alert {
    id: number;
    message: string;
}

const AlertsSummary: React.FC = () => {
    const [alerts, setAlerts] = useState<Alert[]>([]);

    useEffect(() => {
        // Simulación de obtención de alertas
        const fetchAlerts = async () => {
            const data: Alert[] = [
                { id: 1, message: 'Pago de tarjeta próximo en 2 días' },
                { id: 2, message: 'Has excedido tu presupuesto de entretenimiento' },
                // Más alertas...
            ];
            setAlerts(data);
        };

        fetchAlerts();
    }, []);

    return (
        <section className="alerts-summary">
            <h2>Alertas</h2>
            <ul>
                {alerts.map((alert) => (
                    <li key={alert.id}>
                        <span>{alert.message}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AlertsSummary;