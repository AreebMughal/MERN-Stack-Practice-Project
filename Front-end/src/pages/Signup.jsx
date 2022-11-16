import React from 'react'
import Header from '../components/sign-up/Header'
import SignupForm from '../components/sign-up/SignupForm';
import '../components/sign-up/signup.css';
import AlertError from '../components/general/AlertError';


const Signup = () => {
    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center max-sm:h-screen bg-slate-300">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 bg-slate-300">
                <Header />
                <div className='mt-3 mx-auto mb-0 max-w-md space-y-4'>
                    <AlertError />
                </div>
                <SignupForm />
                <div className="m-4 flex items-center justify-between">
                    <span className="border-b-2 w-1/2 lg:w-1/2 mr-2 p-0" />
                    <span className="text-xs text-center text-gray-500 uppercase ">OR</span>
                    <span className="border-b-2 w-1/2 lg:w-1/2 ml-2" />
                </div>
            </div>

            <div className="relative h-64 w-full sm:h-screen lg:h-screen lg:w-1/2 max-sm:hidden ">
                <img
                    alt="Welcome"
                    src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>

    );
}

export default Signup;
