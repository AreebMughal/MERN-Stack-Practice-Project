import axios from 'axios';
import { useState, useCallback } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback((requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        console.log(requestConfig);
        try {
            axios({
                url: requestConfig.url,
                method: requestConfig.method ? requestConfig.method : 'GET',
                // headers: requestConfig.headers ? requestConfig.headers : {},
                data: requestConfig.data ? requestConfig.data : null,
            }).then(res => {
                console.log(res);
                applyData(res.data);
            }).catch(err => {
                console.log(err);
            });
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
