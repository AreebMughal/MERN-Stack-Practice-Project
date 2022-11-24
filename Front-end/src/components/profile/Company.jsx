import React from 'react';
import { BarLoader } from 'react-spinners';
import CompanyForm from './CompanyForm';
const Company = () => {
    return (
        <div className="w-full h-auto min-h-max md:w-9/12 mx-2 ml-0 pl-0  border-l-2 border-gray-200">
            <div className="bg-white  rounded-sm mb-4">

                <div className="flex p-3 items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <p className='pl-2 flex flex-col'>
                        <span className="tracking-wide m-0 p-0">Company</span>
                        <span className='m-0 p-0 text-sm font-normal text-gray-400'>You can view/update  your compnay details from here</span>
                    </p>
                </div>

                <div className="text-gray-700">
                    <CompanyForm />
                </div>
            </div>

        </div>
    );
}

export default Company;
