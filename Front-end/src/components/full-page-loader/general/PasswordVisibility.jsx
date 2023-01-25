import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import React, { useRef } from 'react';

const PasswordVisibility = (props) => {
    const eyeRef = useRef();
    const eyeSlashRef = useRef();

    const handleEyeOpen = (e) => {
        eyeRef.current?.classList.add('hidden');
        eyeSlashRef.current?.classList.remove('hidden');
        props.inputRef.current.type = 'text';
    }

    const handleEyeClose = (e) => {
        eyeRef.current?.classList.remove('hidden');
        eyeSlashRef.current?.classList.add('hidden');
        props.inputRef.current.type = 'password';
    }

    return (
        <>
            <span
                className={props.className}
                onClick={handleEyeOpen}
            >
                <EyeIcon ref={eyeRef} className="h-6 w-6 text-gray-500 " title='Show Password' />
            </span>
            <span
                className={props.className}
                onClick={handleEyeClose}
            >
                <EyeSlashIcon ref={eyeSlashRef} className="h-6 w-6 text-gray-500 hidden" title='Hide Password' />
            </span>
        </>
    );
}

export default PasswordVisibility;
