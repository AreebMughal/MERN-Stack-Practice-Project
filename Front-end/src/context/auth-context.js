import { createContext, useState, useEffect, useCallback } from 'react';


const AuthContext = createContext({
    isLoggedIn: false,
    type: '',
    name: '',
    onLoggedIn: (type, name, userDetail = {}) => { },
    onLoggedOut: () => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [type, setType] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === '1')
            setIsLoggedIn(true);
    }, []);

    const handleLoggedIn = (type, name, userDetail = {}) => {
        setIsLoggedIn(true);
        setType(type);
        setName(name);
        localStorage.setItem('isLoggedIn', '1');
        localStorage.setItem('name', name);
        localStorage.setItem('type', type);
        localStorage.setItem('userDetail', userDetail);
    }

    const handleLoggedOut = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('type');
        localStorage.removeItem('name');
        localStorage.removeItem('userDetail');

        console.log('isLoggedIn');
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, onLoggedIn: handleLoggedIn, onLoggedOut: handleLoggedOut }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
