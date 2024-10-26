// src/components/BalanceTotal.tsx

import React, { useEffect, useState } from 'react';
import '@styles/BalanceTotal.css';

const BalanceTotal: React.FC = () => {
    const [balanceTotal, setBalanceTotal] = useState<number>(0);

    useEffect(() => {
        // Aquí se realizaría la llamada al backend para obtener el balance total
        // Por ahora, simularemos un valor
        const fetchBalanceTotal = async () => {
            // Simulación de una llamada asíncrona
            const total = 5000.0; // Reemplazar con llamada real
            setBalanceTotal(total);
        };

        fetchBalanceTotal();
    }, []);

    return (
        <section className="balance-total">
            <h2>Saldo Total</h2>
            <p>${balanceTotal.toFixed(2)}</p>
        </section>
    );
};

export default BalanceTotal;