import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function NavbarLayout() {
    return (
        <React.Fragment>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </React.Fragment>
    )
}

export default NavbarLayout
