import React, { useContext, useEffect } from 'react';
import useRedirect from '../hooks/use-Redirect';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth-context';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' }
];

const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' }
];

const AdminHome = () => {

    const navigate = useNavigate();
    console.log('home');
    // useRedirect('admin');

    const authContext = useContext(AuthContext);

    return (
        <div className='text-center text-lg'>
            <DataGrid columns={columns} rows={rows} />;
            {/* Hello there, this is admin home page.
            <br />
            <button onClick={authContext.onAdminLogOut}>Logout</button> */}
            {/* <Table columns={['asd', 'asdad']} rows={[]} /> */}
        </div>
    );
}

export default AdminHome;
