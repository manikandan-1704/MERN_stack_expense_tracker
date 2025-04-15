import React, { useState } from 'react'
import { userUserAuth } from '../../hooks/useUserAuth';
import DashboardLayout from '../../components/layouts/DashboardLayout';

const Expense = () => {
    userUserAuth();
        const [expenseData, setExpenseData] = useState([]);
        const [loading, setLoading] = useState(false);
        const [openDeleteAlert, setOpenDeleteAlert] = useState({
            show: false,
            data: null,
        });
    
        const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
    return (
        <DashboardLayout activeMenu="Expense">
            <div className='my-5 mx-auto'>
        </div>
        </DashboardLayout>
    )
}

export default Expense