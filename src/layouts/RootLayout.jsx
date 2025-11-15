import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer/Footer';
import Nabvar from '../pages/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;