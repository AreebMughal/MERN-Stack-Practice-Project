import React, { useContext, useReducer, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PasswordVisibility from '../general/PasswordVisibility';
import axios from 'axios';
import { firstNameReducer, lastNameReducer, emailReducer, passwordReducer } from './reducer';
import { isAllRequiredFields } from '../../assets/js/signupValidation';
import AlertContext from '../../context/alert-context';


const SignupForm = () => {
    const passwordInpRef = useRef();
    const [userType, setUserType] = useState('candidate');
    const alertContext = useContext(AlertContext);

    const [firstNameState, dispatchFirstName] = useReducer(firstNameReducer, {
        value: '',
        inputRef: useRef()
    });

    const [lastNameState, dispatchLastName] = useReducer(lastNameReducer, {
        value: '',
        inputRef: useRef()
    });

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        inputRef: useRef()
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        inputRef: passwordInpRef
    });

    const handleSignUp = (e) => {
        e.preventDefault();
        if (isAllRequiredFields([firstNameState, lastNameState, emailState, passwordState])) {
            alertContext.setErrorAlert(false);

            axios({
                url: '/',
                method: 'post',
                data: {
                    firstName: firstNameState.value,
                    lastName: lastNameState.value,
                    email: emailState.value,
                    password: passwordState.value,
                    userType
                }
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
            // axios.post('/', {
            //     firstName: firstNameState.value,
            //     lastName: lastNameState.value,
            //     email: emailState.value,
            //     password: passwordState.value,
            //     userType
            // }, {})
            //     .then((res) => {
            //         console.log(res);
            //     }).catch((err) => {
            //         console.log(err);
            //     });
        } else {
            alertContext.setErrorAlert(true, 'Missing Field', 'Please fill all the fields.');
        }

    }

    const handleFirstName = (e) => {
        dispatchFirstName({ type: 'USER_INPUT', value: e.target.value });
    }

    const handleLastName = (e) => {
        dispatchLastName({ type: 'USER_INPUT', value: e.target.value });
    }

    const handleEmail = (e) => {
        dispatchEmail({ type: 'USER_INPUT', value: e.target.value });
    }

    const handlePassword = (e) => {
        dispatchPassword({ type: 'USER_INPUT', value: e.target.value });
    }

    const handleUserType = (e) => {
        setUserType(e.target.value);
    }

    return (
        <form onSubmit={handleSignUp} className="mx-auto mt-2 mb-0 max-w-md space-y-4">
            <div className='flex flex-wrap items-center justify-between max-sm:block'>
                <div className="relative max-sm:mb-4">
                    <input
                        type="text"
                        className="signup-input-fields border-1"
                        placeholder="First Name"
                        onChange={handleFirstName}
                        ref={firstNameState.inputRef}
                        value={firstNameState.value}
                    />
                </div>
                <div className="relative ">
                    <input
                        type="text"
                        className="signup-input-fields border-1"
                        placeholder="Last Name"
                        onChange={handleLastName}
                        ref={lastNameState.inputRef}
                        value={lastNameState.value}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                    <input
                        type="email"
                        className="signup-input-fields border-1"
                        placeholder="Enter email"
                        onChange={handleEmail}
                        ref={emailState.inputRef}
                        value={emailState.value}
                    />
                    {/* <EmailIcon /> */}
                </div>
            </div>

            <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                    <input
                        type="password"
                        className="signup-input-fields border-1"
                        placeholder="Enter password"
                        ref={passwordInpRef}
                        onChange={handlePassword}
                        value={passwordState.value}
                    />
                    <PasswordVisibility
                        className='absolute inset-y-0 right-4 inline-flex items-center'
                        inputRef={passwordInpRef}
                    />
                </div>
                <div className='flex flex-wrap mt-3 text-slate-800 font-medium'>
                    <div className="mr-3 ">
                        <input type="radio" className="signup-radio-btn" id="employer" name="user_type"
                            checked={userType.toLowerCase() === 'employer'}
                            onChange={handleUserType}
                            value='employer'
                        />
                        <label className="form-check-label inline-block cursor-pointer" value='employer' htmlFor="employer">
                            Employer
                        </label>
                    </div>
                    <div className="">
                        <input type="radio" className="signup-radio-btn" id="candidate" name="user_type"
                            checked={userType.toLowerCase() === 'candidate'}
                            onChange={handleUserType}
                            value='candidate'
                        />
                        <label className="form-check-label inline-block cursor-pointer" value='candidate' htmlFor="candidate">
                            Candidate
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between max-sm:flex max-sm:flex-wrap-reverse">
                <NavLink to="/sign-in" className="text-xs text-gray-800 max-sm:mt-3">
                    <span id="_signup">
                        Already have an account?</span> <span id="_signup_text" className="uppercase hover:text-cyan-500">sign in</span>
                </NavLink>

                <button
                    type="submit"
                    className="inline-block rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white max-sm:w-full max-sm: mt-2"
                >
                    Sign up
                </button>
            </div>
        </form>
    );
}

export default SignupForm;
