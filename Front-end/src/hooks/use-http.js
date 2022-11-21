import axios from 'axios';
import { useContext } from 'react';
import { useState, useCallback } from 'react';
import LoaderContext from '../context/loader-context';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const loaderContext = useContext(LoaderContext);

    const sendRequest = useCallback((requestConfig, applyData) => {
        // setIsLoading(true);
        // setError(null);
        // loaderContext.setLoading(true);
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
        // setIsLoading(false);
        // loaderContext.setLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
