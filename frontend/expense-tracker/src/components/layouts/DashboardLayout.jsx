import React from 'react';

const DashboardLayout = () => {
    return (
        <div className=''>
            <Navbar activeMenu={activeMenu} />

            {user && (
                <div className='flex'>
                    <div className='max-[1080px]:hidden'>
                        <SideMenu activeMenu={activeMenu} />
                    </div>
                    <div className='grow mx-5'>{children}</div>
                </div>
            )}
        </div>
    )
}

export default DashboardLayout;