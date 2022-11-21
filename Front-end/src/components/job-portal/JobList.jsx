import React, { useContext, useEffect, useState } from 'react';
import AlertContext from '../../context/alert-context';
import AuthContext from '../../context/auth-context';
import useHttp from '../../hooks/use-http';
import Job from './Job';

const JobList = () => {

    const [jobList, setJobList] = useState([]);
    const { sendRequest } = useHttp();
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const onResponse = (data) => {
        console.log(data);
        if (data.status) {
            setJobList(data.data);
        } else {
            alertContext.setErrorAlert(true, 'Failed', data.message);
        }
    }

    useEffect(() => {
        const requestConfig = {
            url: '/user/candidate/jobList',
            method: 'GET',
            data: {}
        }
        sendRequest(requestConfig, onResponse.bind(null));
    }, []);

    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-gray-100 p-6 sm:py-12">
            {
                jobList.map(job => {
                    return (
                        <Job
                            job={job}
                        />
                    );
                })
            }


        </div>

    );
}

export default JobList;
