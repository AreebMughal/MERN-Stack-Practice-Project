import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import companyLogo from '../../assets/images/companyLogo.jpeg';
import Description from './../PostJob/Description';
import { isAllRequiredFields } from './../../assets/js/signupValidation';
import useHttp from './../../hooks/use-http';
import AuthContext from './../../context/auth-context';
import AlertContext from '../../context/alert-context';
import AlertSuccess from './../alerts/AlertSuccess';

const SingleJob = () => {
    const [job, setJob] = useState({});
    const [isApplied, setIsApplied] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { sendRequest } = useHttp();
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const onCheckResponse = (data) => {
        setIsApplied(data.status)
        // if (data.status) {
        //     isApplied(data.status)
        // }
    }

    useEffect(() => {
        if (location.state) {
            setJob(location.state);
            const requestConfig = {
                url: '/user/candidate/singleJob/',
                method: 'GET',
                params: {
                    userId: (JSON.parse(authContext.userDetail))._id,
                    jobId: location.state._id,
                }
            }
            sendRequest(requestConfig, onCheckResponse.bind(null))
        }
        else
            navigate('/');

    }, [location.state]);


    const onResponse = (data) => {
        if (data.status) {
            alertContext.setSuccessAlert(true, 'Success', 'You have applied to this job.')
            setIsApplied(true);
        }
    }

    const handleApplyClick = (e) => {
        if (!isApplied) {
            console.log(authContext.userDetail);
            const user = JSON.parse(authContext.userDetail);
            const requestConfig = {
                url: '/user/candidate/applyJob',
                method: 'POST',
                data: {
                    _id: user._id,
                    job: job,
                }
            }
            sendRequest(requestConfig, onResponse.bind(null))
        }
    }



    return (
        <div className='min-h-screen bg-slate-400 py-5 '>

            <div className='max-w-full h-auto align-middle bg-gray-100 mx-5 rounded-lg p-5 shadow-md shadow-slate-500'>
                <AlertSuccess />
                <div className='grid grid-cols-8 border border-black'>
                    <div className='col-span-1 pl-5 ml-4 max-lg:col-span-2'>
                        <img className='rounded-full border-slate-600 border' src={companyLogo} alt="logo" height='100' width={100} />
                    </div>
                    <div className='col-span-6 mt-7 max-lg:col-span-6'>
                        <div className=''>
                            <span className=' text-cyan-900 inline-block text-2xl align-middle font-semibold capitalize'>{job.title}</span>
                        </div>
                        <div className='mt-2'>
                            <span className=''>
                                hello
                            </span>
                        </div>
                    </div>
                    <div className='my-auto mx-5 col-span-1 max-lg:col-span-4'>
                        <button className={`bg-cyan-700 text-white py-2 px-6 rounded-md ${!isApplied || 'cursor-not-allowed'} `}
                            onClick={handleApplyClick}
                        >
                            {isApplied ? 'Already Applied' : 'Apply'}
                        </button>
                    </div>
                </div>
                <hr className='my-4 border-black ' />
                <div className='main grid grid-cols-3 px-5'>
                    <div className='detail col-span-2 max-md:col-span-3 mx-2 mb-3'>
                        <div className='description'>
                            <span className='text-orange-700 font-bold'>
                                Job Description
                            </span>
                            <p className='text-justify px-4 pr-5'>
                                {job.description}
                            </p>
                        </div>
                    </div>
                    <div className='summary mx-2 max-md:col-span-3'>
                        <div className='w-full border bg-slate-200 border-slate-300 p-4'>
                            {/* <span className='font-semibold text-green-400 text-xl'>Job Summary</span> */}
                            <h3 className="text-green-700 mt-3 h5 pl-3 mb-4 font-semibold text-lg ">Job Summary</h3>
                            <ul className="list-unstyled pl-3 mb-0">
                                <li className="mb-2">
                                    <strong className="text-black">Published on:</strong> April 14, 2019
                                </li>
                                <li className="mb-2">
                                    <strong className="text-black">Vacancy:</strong> 20
                                </li>
                                <li className="mb-2">
                                    <strong className="text-black">Employment Status:</strong> Full-time
                                </li>
                                <li className="mb-2">
                                    <strong className="text-black">Experience:</strong> 2 to 3 year(s)
                                </li>
                                <li className="mb-2">
                                    <strong className="text-black">Job Location:</strong> New ork City
                                </li>
                                <li className="mb-2">
                                    <strong className="text-black">Salary:</strong> $60k - $100k
                                </li>
                                <li className="mb-2">
                                    <strong className="text-black">Gender:</strong> Any</li>
                                <li className="mb-2">
                                    <strong className="text-black">Application Deadline:</strong> April 28, 2019
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleJob;
