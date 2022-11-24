import React, { useContext, useEffect, useState } from 'react';
import AlertContext from '../../context/alert-context';
import PostJobContext from '../../context/postJob-context';
import useHttp from './../../hooks/use-http';
import AuthContext from './../../context/auth-context';

const SubmitForm = (props) => {
    const { sendRequest } = useHttp();
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { getAll, jobId } = useContext(PostJobContext);
    const [isUpdate, setIsUpdate] = useState(false);
    // console.log(localStorage.getItem('userDetail'))
    useEffect(() => {
        console.log(props.isUpdate);
        setIsUpdate(props.isUpdate ?? false);
    }, [props.isUpdate])

    const onSuccess = (data) => {
        if (data.status) {
            alertContext.setSuccessAlert(true, 'SUCCESS', data.message);
        } else {
            alertContext.setErrorAlert(false, 'Failed', data.message);
        }
    }

    const isFieldsExist = (allFields) => {
        for (const key in allFields) {
            const field = allFields[key];
            if (!field.toString().trim()) {
                return false;
            }
        };
        return true;
    }
    const networkCall = (url, method) => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        const allFields = getAll();
        if (isFieldsExist(allFields)) {
            const jobData = isUpdate ? { ...allFields, _id: jobId } : { ...allFields };
            const requestConfig = {
                url,
                method,
                data: { jobData: jobData, userDetail: (authContext.userDetail) }
            }
            sendRequest(requestConfig, onSuccess.bind(null));
        } else {
            alertContext.setSuccessAlert(false);
            alertContext.setErrorAlert(true, 'Missing Fields', 'Please fill out all the fields.')
        }
    }

    const handleSubmitJobPost = (e) => {
        e.preventDefault();
        console.log('=>', authContext.userDetail);
        networkCall('/user/employer/jobPost', 'POST')
    }

    const handleUpdateJobPost = (e) => {
        e.preventDefault();
        // console.log('=>', authContext.userDetail);
        networkCall('/user/employer/UpdatePostedJob', 'PUT')
    }

    return (
        <div>
            {!isUpdate &&
                <div className='w-full flex justify-end'>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded max-sm:w-full" onClick={handleSubmitJobPost}>Create job</button>
                </div>
            }
            {isUpdate &&
                <div className='w-full flex justify-end'>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded max-sm:w-full" onClick={handleUpdateJobPost}>Update job</button>
                </div>
            }
        </div>

    );
}

export default SubmitForm;
