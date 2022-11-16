
import React, { createContext, useState } from 'react';


const AlertContext = createContext({
    isVisible: false,
    errorType: '',
    errorMessage: '',
    setErrorAlert: (isVisible, errorType = '', errorMessage = '') => { }
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

    return (
        <AlertContext.Provider
            value={{ isVisible, errorType, errorMessage, setErrorAlert }}
        >
            {props.children}
        </AlertContext.Provider>
    );
}


export default AlertContext;