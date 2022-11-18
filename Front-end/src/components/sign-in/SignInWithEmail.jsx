import React, { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AlertContext from '../../context/alert-context';
import PasswordVisibility from '../general/PasswordVisibility';
import AlertError from './../alerts/AlertError';
import useHttp from './../../hooks/use-http';
import AuthContext from '../../context/auth-context';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const SignInWithEmail = () => {
    const passwordInpRef = useRef();
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const { sendRequest } = useHttp();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onLoggedIn = (data) => {
        if (data.status) {
            authContext.onLoggedIn('user', data.data.firstName, data);
            navigate('/');
        } else {
            alertContext.setErrorAlert(true, data.message);
        }
    }

    const handleSignIn = (e) => {
        if (email.trim() && password.trim()) {
            alertContext.setErrorAlert(false);
            const requestConfig = {
                url: '/user/signin',
                method: 'POST',
                data: {
                    email,
                    password
                }
            }
            sendRequest(requestConfig, onLoggedIn.bind(null))
        } else {
            alertContext.setErrorAlert(true, "Invalid email/password");
        }
    }

    return (
        <>
            <AlertError />
            {/* <BeatLoader /> */}
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="email"
                    onChange={handleChangeEmail}
                    value={email}
                />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    {/* <a href="#" className="text-xs text-gray-500 hover:text-red-500">Forget Password?</a> */}
                </div>
                <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none "
                    ref={passwordInpRef}
                    type="password"
                    onChange={handleChangePassword}
                    value={password}
                />
                <PasswordVisibility
                    className='float-right password-eye'
                    inputRef={passwordInpRef}

                />
            </div>
            <div className="mt-8">
                <button
                    className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                    onClick={handleSignIn}
                >
                    Login
                </button>
            </div>
            <div className="mt-4 flex place-items-endend float-right">
                <NavLink to="/sign-up" className="text-xs text-gray-500">
                    <span id="_signup">
                        Don't have an account?</span> <span id="_signup_text" className="uppercase hover:text-cyan-500">sign up</span>
                </NavLink>
            </div>
        </>
    );
}

export default SignInWithEmail;
