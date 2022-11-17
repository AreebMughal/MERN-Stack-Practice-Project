import React, { useContext, useEffect } from 'react';
import useRedirect from '../hooks/use-Redirect';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth-context';

const AdminHome = () => {

    const navigate = useNavigate();
    console.log('home');
    useRedirect('admin');

    const authContext = useContext(AuthContext);

    return (
        <div className='text-center text-lg'>
            Hello there, this is admin home page.
            <br />
            <button onClick={authContext.onLoggedOut}>Logout</button>
        </div>
    );
}

export default AdminHome;
