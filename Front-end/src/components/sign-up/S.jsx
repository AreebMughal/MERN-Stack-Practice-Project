import React from 'react';
import SignupFormWrapper from './SignupFormWrapper';

const S = () => {
    return (
        <SignupFormWrapper>
            <div className='flex flex-wrap items-center justify-between max-sm:block'>
                <div className="relative max-sm:mb-4">
                    <input
                        type="text"
                        className="signup-input-fields border-1"
                        placeholder="First Name"
                        onChange={handleFirstName}
                        value={firstName}
                    />
                </div>
                <div className="relative ">
                    <input
                        type="text"
                        className="signup-input-fields border-1"
                        placeholder="Last Name"
                        onChange={handleLastName}
                        value={lastName}
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
                        value={email}
                    />
                    {/* <EmailIcon /> */}
                </div>
            </div>
        </SignupFormWrapper>
    );
}

export default S;
