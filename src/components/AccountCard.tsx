// src/components/AccountCard.tsx

import React from 'react';
import '@styles/AccountCard.css';

interface Account {
    id: number;
    name: string;
    balance: number;
    type: string;
}

interface AccountCardProps {
    account: Account;
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
    return (
        <div className="account-card">
            <h3>{account.name}</h3>
            <p>Tipo: {account.type}</p>
            <p>Saldo: ${account.balance.toFixed(2)}</p>
        </div>
    );
};

export default AccountCard;