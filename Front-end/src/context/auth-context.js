import { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext({
    isLoggedIn: false,
    type: '',
    name: '',
    userDetail: {},
    onLoggedIn: (type, name, userDetail = {}) => { },
    onLoggedOut: () => { },
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [userDetail, setUserDetail] = useState({});
    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === '1') {
            setIsLoggedIn(true);
            setName(localStorage.getItem('name'));
            setType(localStorage.getItem('type'));
            setUserDetail(localStorage.getItem('userDetail'));
        }
        console.log(localStorage.getItem('type'));
    }, []);

    const handleLoggedIn = (type, name, userDetail = {}) => {
        setIsLoggedIn(true);
        setType(type);
        setName(name);
        setUserDetail(userDetail);
        localStorage.setItem('isLoggedIn', '1');
        localStorage.setItem('name', name);
        localStorage.setItem('type', type);
        localStorage.setItem('userDetail', JSON.stringify(userDetail));
    }

    const handleLoggedOut = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('type');
        localStorage.removeItem('name');
        localStorage.removeItem('userDetail');
        console.log('isLoggedIn');
        setIsLoggedIn(false);
        console.info('User have been signed out.');
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, onLoggedIn: handleLoggedIn, onLoggedOut: handleLoggedOut, userDetail, name, type, setType, }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
