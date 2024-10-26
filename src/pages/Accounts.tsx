// src/pages/Accounts.tsx

import React, { useEffect, useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import BottomNavigation from '@components/BottomNavigation';
import AccountCard from '@components/AccountCard';
import '@styles/Accounts.css';

interface Account {
    id: number;
    name: string;
    balance: number;
    type: string;
}

const Accounts: React.FC = () => {
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(() => {
        // Simulación de obtención de cuentas
        const fetchAccounts = async () => {
            const data: Account[] = [
                { id: 1, name: 'Cuenta Corriente', balance: 2500.0, type: 'Corriente' },
                { id: 2, name: 'Cuenta Ahorro', balance: 3000.0, type: 'Ahorro' },
                // Más cuentas...
            ];
            setAccounts(data);
        };

        fetchAccounts();
    }, []);

    return (
        <div className="accounts-page">
            <Header />
            <div className="main-content">
                <Sidebar />
                <main>
                    <h1>Cuentas</h1>
                    <div className="accounts-list">
                        {accounts.map((account) => (
                            <AccountCard key={account.id} account={account} />
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
            <BottomNavigation />
        </div>
    );
};

export default Accounts;