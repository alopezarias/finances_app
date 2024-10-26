// src/components/TransactionItem.tsx

import React from 'react';
import '@styles/TransactionItem.css';

interface Transaction {
    id: number;
    description: string;
    amount: number;
    date: string;
}

interface TransactionItemProps {
    transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
    return (
        <div className="transaction-item">
            <div className="transaction-details">
                <span className="description">{transaction.description}</span>
                <span className="date">{transaction.date}</span>
            </div>
            <span
                className={`amount ${transaction.amount < 0 ? 'expense' : 'income'}`}
            >
        {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
      </span>
        </div>
    );
};

export default TransactionItem;