// src/pages/Transactions.tsx

import React, { useEffect, useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import BottomNavigation from '@components/BottomNavigation';
import TransactionItem from '@components/TransactionItem';
import '@styles/Transactions.css';

interface Transaction {
    id: number;
    description: string;
    amount: number;
    date: string;
}

const Transactions: React.FC = () => {
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
        <div className="transactions-page">
            <Header />
            <div className="main-content">
                <Sidebar />
                <main>
                    <h1>Movimientos</h1>
                    <div className="transactions-list">
                        {transactions.map((tx) => (
                            <TransactionItem key={tx.id} transaction={tx} />
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
            <BottomNavigation />
        </div>
    );
};

export default Transactions;