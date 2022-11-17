import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { AuthContextProvider } from './../../context/auth-context';

function AdminRouteLayout() {
    return (
        <React.Fragment>

            <Outlet />

        </React.Fragment>
    )
}

export default AdminRouteLayout;