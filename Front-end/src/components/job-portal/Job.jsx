import { joinPaths } from '@remix-run/router';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const navigate = useNavigate();
    const handleJobClick = (e) => {
        // console.log(job);
        navigate('/candidate/single-job', { state: job })
    }

    return (
        <div className="bg-white shadow-xl shadow-gray-300 w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md mb-3 pl-5 hover:border-l-4 hover:border-cyan-800 hover:cursor-pointer" onClick={handleJobClick}>
            <div>
                <span className="text-purple-800 text-sm">{job.companyName}</span>
                <h3 className="font-bold mt-px">{job.title}</h3>
                <div className="flex items-center gap-3 mt-2">
                    <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
                        {job.jobType}
                    </span>
                    <span className="text-slate-600 text-sm flex gap-1 items-center"> <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                        {job.location}
                    </span>
                </div>
            </div>
            <div>
                <button className="bg-cyan-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-slate-800">Apply Now <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>

                </button>
            </div>

        </div>
    );
}

export default Job;
