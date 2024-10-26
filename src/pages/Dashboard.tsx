// src/pages/Dashboard.tsx

import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import BalanceTotal from '@components/BalanceTotal';
import IncomeExpenseChart from '@components/IncomeExpenseChart';
import RecentTransactions from '@components/RecentTransactions';
import AlertsSummary from '@components/AlertsSummary';
import BottomNavigation from '@components/BottomNavigation';
import '@styles/Dashboard.css';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <Header />
            <div className="main-content">
                <Sidebar />
                <main>
                    <BalanceTotal />
                    <IncomeExpenseChart />
                    <RecentTransactions />
                    <AlertsSummary />
                </main>
            </div>
            <Footer />
            <BottomNavigation />
        </div>
    );
};

export default Dashboard;