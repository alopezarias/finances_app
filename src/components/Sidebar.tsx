// src/components/Sidebar.tsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaWallet, FaExchangeAlt, FaChartPie, FaBell, FaCogs } from 'react-icons/fa';
import '@styles/Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                            <FaHome />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/accounts" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <FaWallet />
                            <span>Cuentas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/transactions" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <FaExchangeAlt />
                            <span>Movimientos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/budgets" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <FaChartPie />
                            <span>Presupuestos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/alerts" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <FaBell />
                            <span>Alertas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <FaCogs />
                            <span>Configuración</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;