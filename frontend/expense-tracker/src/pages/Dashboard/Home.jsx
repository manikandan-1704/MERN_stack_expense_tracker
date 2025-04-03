import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { userUserAuth } from '../../hooks/useUserAuth';

const Home = () => {
    userUserAuth();
    return (
        <DashboardLayout activeMenu="Dashboard">
            <div className='my-5 mx-auto'>
                Home
            </div>
        </DashboardLayout>
    );
};

export default Home;