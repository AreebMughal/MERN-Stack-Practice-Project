
import React, { createContext, useState } from 'react';

const LoaderContext = createContext({
    isLoading: false,
    message: '',
    setLoading: (isLoading, message = '') => { },
    setMessage: () => { }
})

export const LoaderContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const setLoading = (isLoading, message = '') => {
        setIsLoading(isLoading);
        console.log('set loading called');
        setMessage(message);
    }

    console.log('Loader rendered');

    return (
        <LoaderContext.Provider value={{ isLoading, message, setLoading, setMessage }}>
            {props.children}
        </LoaderContext.Provider>
    );
}

export default LoaderContext;
