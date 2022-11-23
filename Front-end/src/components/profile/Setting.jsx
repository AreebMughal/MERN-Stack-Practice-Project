import React, { useState } from 'react';
import Company from './Company';
import Profile from './Profile';
import './profile.css';
import EmployerJobs from './EmployerJobs';

const Setting = () => {
    const [menuItem, setMenueItem] = useState('profile');

    const handleProfileClick = (e) => {
        console.log(e.target.innerHTML);
        setMenueItem(e.target.innerHTML.toLowerCase())
    }
    const getClassName = (current) => {
        const generalClass = 'p-2 pl-5 border-l-4 font-semibold cursor-pointer border-transparent';
        const activeClass = 'border-cyan-700 bg-cyan-100';
        return (menuItem.includes(current)) ? (generalClass + ' ' + activeClass) : generalClass
    }
    return (
        <div className='grid min-h-screen-fit bg-slate-500'>
            {/* <Profile /> */}
            <div className="m-5 container mx-auto pr-0 pt-0 pb-0 pl-0 rounded-lg bg-white shadow-md shadow-black  h-auto ">
                <div className="md:flex no-wrap md:-mx-2 ml-0 pb-0">
                    {/* <!-- Left Side --> */}
                    <div className="w-full md:w-3/12 md:mx-2 md:mr-0 pb-0 pt-5">
                        {/* <!-- Profile Card --> */}
                        <div className="p-3 pl-0 pr-0 pt-0 ">
                            <ul className=''>
                                <li className={getClassName('profile')}
                                    onClick={handleProfileClick}
                                >
                                    Profile
                                </li>
                                <li className={getClassName('company')}
                                    onClick={handleProfileClick}
                                >
                                    Company
                                </li>
                                <li className={getClassName('jobs')}
                                    onClick={handleProfileClick}
                                >
                                    Posted Jobs List
                                </li>
                            </ul>
                        </div>
                    </div>

                    {menuItem === 'profile' &&
                        <Profile />
                    }
                    {menuItem === 'company' &&
                        <Company />
                    }
                    {menuItem.includes('jobs') &&
                        <EmployerJobs />
                    }
                </div>

            </div>
        </div>
    );
}

export default Setting;
