import React, { useContext } from 'react';
import AlertContext from '../../context/alert-context';
import PostJobContext from '../../context/postJob-context';
import useHttp from './../../hooks/use-http';
import AuthContext from './../../context/auth-context';

const SubmitForm = () => {
    const { sendRequest } = useHttp();
    const { getAll } = useContext(PostJobContext);
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    console.log(localStorage.getItem('userDetail'))

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

    const handleSubmitJobPost = (e) => {
        e.preventDefault();
        const allFields = getAll();
        console.log('=>', allFields);
        if (isFieldsExist(allFields)) {
            const requestConfig = {
                url: '/user/employer/jobPost',
                method: 'POST',
                data: { jobData: { ...allFields }, userDetail: JSON.parse(authContext.userDetail) }
            }
            sendRequest(requestConfig, onSuccess.bind(null));
        } else {
            alertContext.setErrorAlert(true, 'Missing Fields', 'Please fill out all the fields.')
        }
    }

    return (
        <div>
            <div className='w-full flex justify-end'>
                <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded max-sm:w-full" onClick={handleSubmitJobPost}>Create job</button>
            </div>
        </div>
    );
}

export default SubmitForm;
