// src/components/BottomNavigation.tsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaWallet, FaExchangeAlt, FaChartPie, FaBell } from 'react-icons/fa';
import '@styles/BottomNavigation.css';

const BottomNavigation: React.FC = () => {
    return (
        <nav className="bottom-navigation">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                <FaHome />
                <span>Inicio</span>
            </NavLink>
            <NavLink to="/accounts" className={({ isActive }) => (isActive ? 'active' : '')}>
                <FaWallet />
                <span>Cuentas</span>
            </NavLink>
            <NavLink to="/transactions" className={({ isActive }) => (isActive ? 'active' : '')}>
                <FaExchangeAlt />
                <span>Movimientos</span>
            </NavLink>
            <NavLink to="/budgets" className={({ isActive }) => (isActive ? 'active' : '')}>
                <FaChartPie />
                <span>Presupuestos</span>
            </NavLink>
            <NavLink to="/alerts" className={({ isActive }) => (isActive ? 'active' : '')}>
                <FaBell />
                <span>Alertas</span>
            </NavLink>
        </nav>
    );
};

export default BottomNavigation;