import React, { useContext, useEffect } from 'react';
import useRedirect from '../hooks/use-Redirect';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth-context';
import Table from 'react-tailwind-table'

const AdminHome = () => {

    const navigate = useNavigate();
    console.log('home');
    // useRedirect('admin');

    const authContext = useContext(AuthContext);

    return (
        <div className='text-center text-lg'>
            {/* Hello there, this is admin home page.
            <br />
            <button onClick={authContext.onAdminLogOut}>Logout</button> */}
            <Table columns={[]} rows={[]} />
        </div>
    );
}

export default AdminHome;
