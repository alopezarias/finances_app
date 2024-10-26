// src/components/IncomeExpenseChart.tsx

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '@styles/IncomeExpenseChart.css';

interface DataItem {
    name: string;
    value: number;
}

const COLORS = ['#7ED321', '#D0021B'];

const IncomeExpenseChart: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        // Simulación de obtención de datos
        const fetchData = async () => {
            const income = 7000;
            const expenses = 2000;
            setData([
                { name: 'Ingresos', value: income },
                { name: 'Gastos', value: expenses },
            ]);
        };

        fetchData();
    }, []);

    return (
        <section className="income-expense-chart">
            <h2>Ingresos vs. Gastos</h2>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={data} dataKey="value" innerRadius={60} outerRadius={80}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default IncomeExpenseChart;