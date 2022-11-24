import React, { useRef, useState } from 'react';
import { useContext, useEffect } from 'react';
import AlertContext from '../../context/alert-context';
import AuthContext from '../../context/auth-context';
import PostJobContext from './../../context/postJob-context';
import useHttp from './../../hooks/use-http';
import AlertSuccess from './../alerts/AlertSuccess';
import AlertError from './../alerts/AlertError';

const CompanyForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyUrl, setCompanyUrl] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const { sendRequest } = useHttp();
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const setFields = (data) => {
        if (data.status) {
            const companyDetail = data.data;
            setCompanyName(companyDetail.companyName);
            setCompanyUrl(companyDetail.companyUrl);
            setCountry(companyDetail.country);
            setState(companyDetail.state);
            setCity(companyDetail.city);
        } else {
            alertContext.setErrorAlert(true, 'Failed', data.message);
        }

        // setCompanyName
    }
    // abort controller
    useEffect(() => {
        const requestConfig = {
            url: '/user/employer/getCompanyData/',
            method: 'GET',
            params: {
                userId: authContext.userDetail._id
            }
        }
        sendRequest(requestConfig, setFields.bind(null));
    }, [])

    const handleChangeCompanyName = (e) => {
        setCompanyName(e.target.value);
    }

    const handleChangeCompanyUrl = (e) => {
        setCompanyUrl(e.target.value);
    }

    const handleChangeCity = (e) => {
        setCity(e.target.value);
    }

    const handleChangeState = (e) => {
        setState(e.target.value);
    }

    const handleChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onResponse = (data) => {
        if (data.status) {
            alertContext.setSuccessAlert(true, "SUCCESS", data.message);
        } else {
            alertContext.setErrorAlert(true, 'Failed', data.message);
        }
    }
    const handleUpdateCompanyDetail = (e) => {
        const requestConfig = {
            url: '/user/employer/companyData',
            method: 'POST',
            data: {
                companyDetail: { companyName, companyUrl, country, state, city },
                userId: authContext.userDetail._id
            }
        }
        sendRequest(requestConfig, onResponse.bind(null));
    }
    return (
        <>

            <div className='ml-5 mr-5'>
                <AlertSuccess />
                <AlertError />
                <div className="flex flex-wrap -mx-3 mt-2">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label htmlFor="company" className="block font-semibold text-gray-700 text-sm mb-2">
                            Company
                        </label>
                        <input type="text" id="company" name="company" placeholder="Company Name"
                            className="profile-fields"
                            value={companyName}
                            onChange={handleChangeCompanyName}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label htmlFor="company" className="block font-semibold text-gray-700 text-sm mb-2">
                            Company Website
                        </label>
                        <input type="text" id="company" name="company"
                            placeholder="https://www.djangoproject.com/"
                            className="profile-fields"
                            value={companyUrl}
                            onChange={handleChangeCompanyUrl}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label htmlFor="country" className="block font-semibold text-gray-700 text-sm mb-2">
                            Country
                        </label>
                        <input type="text" id="country" name="country" placeholder="Country Name"
                            className="profile-fields"
                            value={country}
                            onChange={handleChangeCountry}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label htmlFor="state" className="block font-semibold text-gray-700 text-sm mb-2">
                            State
                        </label>
                        <input type="text" id="state" name="state"
                            placeholder="State Name"
                            className="profile-fields"
                            value={state}
                            onChange={handleChangeState}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label htmlFor="city" className="block font-semibold text-gray-700 text-sm mb-2">
                            City
                        </label>
                        <input type="text" id="city" name="city"
                            placeholder="City Name"
                            className="profile-fields"
                            value={city}
                            onChange={handleChangeCity}
                        />
                    </div>
                </div>

            </div>
            <div className='border-b-2 pl-0 border-gray-300'></div>
            <div className='mr-5 mt-2 flex float-right'>
                <button className='px-4 py-1 mt-2 rounded-md border-1 border-blue-800  hover:bg-blue-600 hover:text-white hover:'
                    onClick={handleUpdateCompanyDetail}
                >
                    Update
                </button>
            </div>
        </>
    );
}

export default CompanyForm;
