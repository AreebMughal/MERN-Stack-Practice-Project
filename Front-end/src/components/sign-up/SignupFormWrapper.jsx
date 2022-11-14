import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PasswordVisibility from '../general/PasswordVisibility';
import axios from 'axios';

const SignupFormWrapper = (props) => {

    const handleSignUp = (e) => {
        e.preventDefault();

        axios.post('http://localhost:9000/', '')
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <form onSubmit={handleSignUp} className="mx-auto mt-2 mb-0 max-w-md space-y-4">
            {props.children}
        </form>
    );
}

export default SignupFormWrapper;
