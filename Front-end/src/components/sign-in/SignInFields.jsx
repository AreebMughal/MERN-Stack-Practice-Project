import React from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import GoogleIcon from './GoogleIcon';

function SignInFields() {
    return (
        <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <button className="flex items-center w-full justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                <GoogleIcon />
                <h1 className="px-4 py-3 w-full text-center text-gray-600 font-bold">Sign in with Google</h1>
            </button>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4" />
                <span className="text-xs text-center text-gray-500 uppercase">or login with email</span>
                <span className="border-b w-1/5 lg:w-1/4" />
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="email" />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <a href="/" className="text-xs text-gray-500 hover:text-red-500">Forget Password?</a>
                </div>
                <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none "
                    type="password" />
                <div className="float-right password-eye">
                    <EyeIcon className="h-6 w-6 text-gray-500 " />
                </div>
                <div className="float-right password-eye">
                    <EyeSlashIcon className="h-6 w-6 text-gray-500" />
                </div>
            </div>
            <div className="mt-8">
                <button
                    className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login
                </button>
            </div>
            <div className="mt-4 flex place-items-endend float-right">
                <a href="/" className="text-xs text-gray-500">
                    <span id="_signup">
                        Don't have an account?</span> <span id="_signup_text" className="uppercase hover:text-cyan-500">sign up</span>
                </a>
            </div>
        </div>
    );
}

export default SignInFields
