import React, { useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import IncomeOverview from '../../components/Income/IncomeOverview';

const Income = () => {
    const [incomeData, setIncomeData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false,
        data: null,
    });

    const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

    //Get all income details
    const fetchIncomeDetails = async () => {};

    // Handle Add Income
    const handleAddIncome = async (income) => {};

    // Delete Income
    const deleteIncome = async (id) => {};

    // Handle Download income details
    const handleDownloadIncomeDetails = async () => {};

    return (
        <DashboardLayout activeMenu="Income">
            <div className='my-5 mx-auto'>
                <div className='grid grid-cols-1 gap-6'>
                    <div className=''>
                        <IncomeOverview
                            transactions={incomeData}
                            onAddIncome={() => setOpenAddIncomeModal(true)}
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Income