// src/components/RecentTransactions.tsx

import React, { useEffect, useState } from 'react';
import '@styles/RecentTransactions.css';

interface Transaction {
    id: number;
    description: string;
    amount: number;
    date: string;
}

const RecentTransactions: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        // Simulación de obtención de transacciones
        const fetchTransactions = async () => {
            const data: Transaction[] = [
                { id: 1, description: 'Compra en Supermercado', amount: -50.0, date: '2023-10-01' },
                { id: 2, description: 'Salario', amount: 2000.0, date: '2023-10-01' },
                // Más transacciones...
            ];
            setTransactions(data);
        };

        fetchTransactions();
    }, []);

    return (
        <section className="recent-transactions">
            <h2>Últimos Movimientos</h2>
            <ul>
                {transactions.map((tx) => (
                    <li key={tx.id}>
                        <div className="transaction-details">
                            <span className="description">{tx.description}</span>
                            <span className="date">{tx.date}</span>
                        </div>
                        <span
                            className={`amount ${tx.amount < 0 ? 'expense' : 'income'}`}
                        >
              {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
            </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default RecentTransactions;