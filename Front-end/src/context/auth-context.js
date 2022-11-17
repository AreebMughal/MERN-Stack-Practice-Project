import { createContext, useState, useEffect } from 'react';


const AuthContext = createContext({
    isLoggedIn: false,
    type: '',
    name: '',
    onLoggedIn: (type, name) => { },
    onLoggedOut: () => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [type, setType] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === 1)
            setIsLoggedIn(true);
    }, []);

    const handleLoggedIn = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 1);
        localStorage.setItem('name', name);
    }

    const handleLoggedOut = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, onLoggedIn: handleLoggedIn, onLoggedOut: handleLoggedOut }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
