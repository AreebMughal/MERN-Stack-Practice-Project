import React, { useContext, useState } from 'react'
import LoginHeader from './LoginHeader';
import Shader from './Shader';
import AlertError from './../general/AlertError';
import AlertContext from '../../context/alert-context';

import LoaderBeat from '../full-page-loader/LoaderBeat';

const _floating_input = 'peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-gray-900';
const _floating_label = "absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm";

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const alertContext = useContext(AlertContext);

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePassword = (e) => {
        console.log('sd');
        setPassword(e.target.value);
    }

    const handleClickLogin = (e) => {
        e.preventDefault();
        if (username.trim() && password.trim()) {
            alertContext.setErrorAlert(false);
        } else {
            alertContext.setErrorAlert(true, 'Invalid username/password');
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <LoaderBeat />
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <Shader />

                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <LoginHeader />
                        <AlertError />
                        <form>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input autoComplete="off" id="email" name="email" type="text"
                                            className={_floating_input} placeholder="Username"
                                            value={username}
                                            onChange={handleChangeUsername}
                                        />
                                        <label htmlFor="email" className={_floating_label}>Username</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" id="password" name="password" type="password"
                                            className={_floating_input} placeholder="Password"
                                            value={password}
                                            onChange={handleChangePassword}
                                        />
                                        <label htmlFor="password" className={_floating_label}>Password</label>
                                    </div>
                                    <div className="relative text-right">
                                        <button
                                            type='submit'
                                            className="bg-blue-500 text-white rounded-md px-3 py-1"
                                            onClick={handleClickLogin}
                                        >
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
