import React, { useEffect, useState } from 'react'
import { LuPlus } from 'react-icons/lu';
import { prepareExpenseLineChartData } from '../../utils/helper';

const ExpenseOverview = ({transactions, onExpenseIncome}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseLineChartData(transactions);
        setChartData(result);

        return () => {};
    }, [transactions]);
    return (
        <div>ExpenseOverview</div>
    )
}

export default ExpenseOverview;