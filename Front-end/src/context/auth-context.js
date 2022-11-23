import { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext({
    isAdmin: false,
    isLoggedIn: false,
    type: '',
    name: '',
    userDetail: {},
    onLoggedIn: (type, name, userDetail = {}) => { },
    onLoggedOut: () => { },
    onAdminLogIn: (adminDetail = {}) => { },
    onAdminLogOut: () => { },
    adminDetail: {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [userDetail, setUserDetail] = useState({});

    const [isAdmin, setIsAdmin] = useState(false);
    const [adminDetail, setAdminDetail] = useState({});

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === '1') {
            setIsLoggedIn(true);
            setName(localStorage.getItem('name'));
            setType(localStorage.getItem('type'));
            setUserDetail(JSON.parse(localStorage.getItem('userDetail')));
        }
        if (localStorage.getItem('isAdmin') === '1') {
            // const data = parser(localStorage.getItem('adminDetail'))
            setIsAdmin(true);
            setAdminDetail(localStorage.getItem('adminDetail'));
        }
        if (localStorage.getItem('isAdmin') === '1') {
            setIsAdmin(true);
            setAdminDetail(localStorage.getItem('adminDetail'));
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

    const onAdminLogIn = (adminDetail) => {
        setIsAdmin(true);
        setAdminDetail(adminDetail);
        localStorage.setItem('isAdmin', '1');
        localStorage.setItem('adminDetail', JSON.stringify(adminDetail));
    }

    const onAdminLogOut = () => {
        setIsAdmin(false);
        setAdminDetail({});
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('adminDetail');
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, onLoggedIn: handleLoggedIn, onLoggedOut: handleLoggedOut, userDetail, name, type, setType, isAdmin, onAdminLogIn, onAdminLogOut, adminDetail }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
