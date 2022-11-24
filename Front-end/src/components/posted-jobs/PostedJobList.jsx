import { joinPaths } from '@remix-run/router';
import React, { useContext, useEffect, useState } from 'react';
import AlertContext from '../../context/alert-context';
import AuthContext from '../../context/auth-context';
import useHttp from '../../hooks/use-http';
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

const EachJob = ({ job }) => {
    const navigate = useNavigate();

    const handleJobClick = (e) => {

        navigate('/employer/post-job', { state: job })
    }

    return (
        <div className="bg-slate-100  shadow-xl shadow-gray-300 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center border-l-4 border-transparent justify-between px-5 py-4 rounded-md mb-3 hover:border-l-4 hover:border-cyan-800 hover:cursor-pointer hover:bg-blue-100" onClick={handleJobClick}>
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

        </div>
    );
}
const PostedJobList = () => {
    const [jobList, setJobList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { sendRequest } = useHttp();
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const onResponse = (data) => {
        console.log(data);
        if (data.status) {
            setJobList(data.data);
        } else {
            // alertContext.setErrorAlert(true, 'Failed', data.message);s
        }
        setIsLoading(false);
    }

    useEffect(() => {
        const requestConfig = {
            url: '/user/employer/postedJobs/',
            method: 'GET',
            params: {
                userId: authContext.userDetail._id
            }
        }
        sendRequest(requestConfig, onResponse.bind(null));
    }, []);

    return (
        <div
            className="relative flex  flex-col overflow-hidden p-6 sm:py-12"
        >
            {isLoading ?
                <div className='grid h-64 place-items-center' >
                    <BarLoader
                        color="#004335"
                        width={150}
                    />
                </div>
                :
                <>
                    {jobList.length > 0 ?
                        jobList.map((job, index) => {
                            return (
                                <EachJob
                                    key={index}
                                    job={job}
                                />
                            );
                        })
                        :
                        <div className='mt-5 text-lg px-5 py-3 rounded-md bg-red-400 text-white'>
                            You did not post any job yet.
                        </div>
                    }
                </>
            }
        </div>
    );
}

export default PostedJobList;
