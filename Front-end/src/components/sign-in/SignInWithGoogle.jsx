import React from 'react'
import GoogleIcon from './GoogleIcon';


function SignInWithGoogle() {

    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <button className="flex items-center w-full justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                <GoogleIcon />
                <h1 className="px-4 py-3 w-full text-center text-gray-600 font-bold">Sign in with Google</h1>
            </button>
        </>
    );
}

export default SignInWithGoogle
