import React, { useContext, useEffect, useRef, useState } from 'react';
import AuthContext from '../../context/auth-context';

const ProfileForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const authContext = useContext(AuthContext);
    const user = authContext.userDetail;

    useEffect(() => {
        firstNameRef.current.value = user.firstName;
        lastNameRef.current.value = user.lastName;
        emailRef.current.value = user.email;
        setAbout(user.about);
    }, [user]);

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleChangeAbout = (e) => {
        setAbout(e.target.value);
    }

    const handleChangeEmail = (e) => {
        // e.preventDefault();
        setEmail(e.target.value)
    }
    return (
        <>
            <div className='ml-5 mr-5'>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label htmlFor="company" className="block font-semibold text-gray-700 text-sm mb-2">
                            First Name
                        </label>
                        <input type="text" id="company" name="company" placeholder="First Name"
                            className="profile-fields"
                            ref={firstNameRef}
                        // value={firstName}
                        // onChange={handleChangeFirstName}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label htmlFor="company" className="block font-semibold text-gray-700 text-sm mb-2">
                            Last Name
                        </label>
                        <input type="text"
                            placeholder="Last Name"
                            className="profile-fields"
                            ref={lastNameRef}
                        // value={lastName}
                        // onChange={handleChangeLastName}
                        />
                    </div>
                </div>
                <div className="px-3 mb-4 md:mb-0">
                    <label htmlFor="company" className="block font-semibold text-gray-700 text-sm mb-2">
                        Email
                    </label>
                    <input type="text"
                        placeholder="something@domain.com"
                        className="profile-fields"
                        ref={emailRef}
                        disabled={true}
                    // value={email}
                    // onChange={handleChangeEmail}
                    />
                </div>
                <div className="px-3 mb-4 md:mb-0">
                    <label htmlFor="description" className="block font-semibold text-gray-700 text-sm mb-2">
                        Description
                    </label>
                    <textarea id="description"
                        row={1}
                        placeholder={'Tell something about yourself ...'}
                        className="post-job-fields resize-y h-28 max-h-64"
                        value={about}
                        onChange={handleChangeAbout}
                    />
                </div>
            </div>
            <div className='border-b-2 pl-0 border-gray-300'></div>
            <div className='mr-5 mt-2  flex float-right'>
                <button className='px-4 py-1 rounded-md border-1 border-blue-800  hover:bg-blue-600 hover:text-white hover:'>
                    Update
                </button>
            </div>
        </>
    );
}

export default ProfileForm;
