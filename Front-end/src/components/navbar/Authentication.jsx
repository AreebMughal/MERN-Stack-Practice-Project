import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth-context';

const Authentication = () => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    const handleSignInClick = (e) => {
        navigate('/user/sign-in');
    }

    const handleSignUpClick = (e) => {
        navigate('/user/sign-up');
    }

    return (
        <>
            {!authContext.isLoggedIn &&
                <>
                    <button className='bg-blue-500 px-4 py-1 rounded-md text-white mr-3'
                        onClick={handleSignInClick}
                    >
                        Sign in
                    </button>
                    <button className='bg-slate-600 px-4 py-1 rounded-md text-white'
                        onClick={handleSignUpClick}
                    >
                        Sign up
                    </button>
                </>
            }
        </>
    );
}

export default Authentication;
