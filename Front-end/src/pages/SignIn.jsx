import '../components/sign-in/signIn.css';
import React from 'react';
import SideImage from '../components/sign-in/SideImage';
import SignInWithEmail from '../components/sign-in/SignInWithEmail';
import SignInWithGoogle from '../components/sign-in/SignInWithGoogle';

const SignIn = () => {
    return (
        <div className="py-6 bg-slate-500 min-h-screen ">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl ">
                <SideImage />
                <div className="w-full p-8 lg:w-1/2">
                    <SignInWithGoogle />
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4" />
                        <span className="text-xs text-center text-gray-500 uppercase">or login with email</span>
                        <span className="border-b w-1/5 lg:w-1/4" />
                    </div>
                    <SignInWithEmail />
                </div>

            </div>
        </div>
    );
}

export default SignIn;