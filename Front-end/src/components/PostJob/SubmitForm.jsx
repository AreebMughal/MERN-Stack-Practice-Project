import React, { useContext } from 'react';
import AlertContext from '../../context/alert-context';
import PostJobContext from '../../context/postJob-context';
import useHttp from './../../hooks/use-http';

const SubmitForm = () => {
    const { sendRequest } = useHttp();
    const { getAll } = useContext(PostJobContext);
    const alertContext = useContext(AlertContext);

    const onSuccess = (data) => {
        if (data.status) {
            alertContext.setSuccessAlert(true, 'SUCCESS', 'Your job has been posted.');
        } else {
            alertContext.setErrorAlert(true, 'Failed', 'Somethin happened at backend.');
        }
    }

    const handleSubmitJobPost = (e) => {
        e.preventDefault();
        const allFields = getAll();
        allFields.forEach(field => {
            if (field.toString().trim()) {
                const requestConfig = {
                    url: '/user/employer/jobPost',
                    method: 'post',
                    data: allFields
                }
                sendRequest(requestConfig, onSuccess.bind(null));
            } else {
                alertContext.setErrorAlert(true, 'Missing Fields', 'Please fill out all the fields.')
            }
        });
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
