import React, { useState } from 'react'
import { userUserAuth } from '../../hooks/useUserAuth';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';

const Expense = () => {
    userUserAuth();
        const [expenseData, setExpenseData] = useState([]);
        const [loading, setLoading] = useState(false);
        const [openDeleteAlert, setOpenDeleteAlert] = useState({
            show: false,
            data: null,
        });
    
        const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);

        //Get all expense details
    const fetchExpenseDetails = async () => {
        if(loading) return;

        setLoading(true);

        try{
            const response = await axiosInstance.get(
                `${API_PATHS.EXPENSE.GET_ALL_EXPENSE}`
            );
            if(response.data){
                setExpenseData(response.data);
            }
        }catch(error){
            console.log("Something Went Wrong. Please try again", error);
        }finally{
            setLoading(false);
        }
    };

    // Handle Add Income
    const handleAddIncome = async (income) => {
        const { source, amount, date, icon } = income;

        // Validation Checks
        if(!source.trim()){
            toast.error("Source is required");
            return;
        }

        if(!amount || isNaN(amount) || Number(amount) <=0){
            toast.error("Amount should be a valid number greater than 0")
            return;
        }

        if(!date){
            toast.error("Date is required");
            return;
        }

        try {
            await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, {
                source,
                amount,
                date,
                icon
            });
            setOpenAddIncomeModal(false);
            toast.success("Income added sucessfully");
            fetchIncomeDetails();
        }catch (error){
            console.error(
                "Error adding income:",
                error.response?.data?.message || error.message
            );
        }
    };
    return (
        <DashboardLayout activeMenu="Expense">
            <div className='my-5 mx-auto'>
        </div>
        </DashboardLayout>
    )
}

export default Expense