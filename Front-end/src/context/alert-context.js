
import React, { createContext, useState } from 'react';


const AlertContext = createContext({
    isVisible: false,
    errorType: '',
    errorMessage: '',
    setErrorAlert: (isVisible, errorType = '', errorMessage = '') => { },
    successType: '',
    successMessage: '',
    setSuccessAlert: (isVisible, successType = '', successMessage = '') => { }
});


export const AlertContextProvider = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [errorType, setErrorType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const setErrorAlert = (isVisible, errorType = '', errorMessage = '') => {
        setIsVisible(isVisible);
        setErrorType(errorType);
        setErrorMessage(errorMessage);
    }

    const setSuccessAlert = (isVisible, successType = '', successMessage = '') => {
    }
    return (
        <AlertContext.Provider
            value={{ isVisible, errorType, errorMessage, setErrorAlert }}
        >
            {props.children}
        </AlertContext.Provider>
    );
}


export default AlertContext;