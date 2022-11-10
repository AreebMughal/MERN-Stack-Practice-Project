import './signIn.css';
import React from 'react';
import SideImage from './SideImage';
import SignInFields from './SignInFields';

const SignIn = () => {
    return (
        <div className="py-6 bg-slate-500 min-h-screen ">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl ">
                <SideImage />
                <SignInFields />
            </div>
        </div>
    );
}

export default SignIn;