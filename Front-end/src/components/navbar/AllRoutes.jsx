import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import Signup from './../../pages/Signup';
import SignIn from './../../pages/SignIn';
import AdminLogin from './../admin-login/AdminLogin';
import AdminRouteLayout from './AdminRouteLayout';
import AdminHome from './../../pages/AdminHome';
import NavbarLayout from './NavbarLayout';
import Home from './../../pages/Home';
import PostJob from './../../pages/PostJob';
import JobPortal from './../job-portal/JobPortal';
import SingleJob from '../job-portal/SingleJob';

const AllRoutes = () => {

    const authContext = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/user/sign-up" element={<Signup />} />
            <Route path="/user/sign-in" element={<SignIn />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route path="/admin" element={<AdminRouteLayout />} >
                <Route path="/admin/home" element={<AdminHome />} />
            </Route>

            <Route path="/" element={<NavbarLayout />} >
                <Route path="/" element={<Home />} />
                {authContext.type === 'employer' &&
                    <Route path='/employer/post-job' element={<PostJob />} />
                }
                {authContext.type === 'candidate' &&
                    <>
                        <Route path='/candidate/job-portal' element={<JobPortal />} />
                        <Route path='/candidate/single-job' element={<SingleJob />} />
                    </>
                }
            </Route>
        </Routes>
    );
}

export default AllRoutes;
