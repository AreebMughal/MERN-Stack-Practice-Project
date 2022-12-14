import React, { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, useLocation } from 'react-router-dom'
import ProfileMenu from './ProfileMenu';
import './navbar.css';
import ViewNotification from './ViewNotification';
import Authentication from './Authentication';
import AuthContext from '../../context/auth-context';

// const navigation = [
//     { name: 'Home', href: '#', current: true },
//     { name: 'Sign In', href: '#', current: false },
//     { name: 'Sign Up', href: '#', current: false },
//     { name: 'Admin', href: '#', current: false },
// ]

const navigation = [
    { name: 'Home', to: '/', type: '' },
    // { name: 'Sign In', to: '/sign-in' },
    // { name: 'Sign Up', to: '/sign-up' },
    { name: 'Job Portal', to: '/candidate/job-portal', type: 'candidate' },
    { name: 'Admin', to: '/admin/login', type: '' },
    { name: 'Post Job', to: '/employer/post-job', type: 'employer' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Navbar() {

    const authContext = useContext(AuthContext);

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item, index) => {
                                            if (authContext.type === item.type || item.type === '')
                                                return (
                                                    <NavLink
                                                        key={item.name + '-' + index}
                                                        to={item.to}
                                                        className='px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white '
                                                        activeclassname='active'
                                                    >
                                                        {item.name}
                                                    </NavLink>
                                                )
                                            else return ''
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* <ViewNotification /> */}
                                <Authentication />
                                <ProfileMenu />

                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item, index) => (
                                <NavLink
                                    key={index + '+' + item}
                                    to={item.to}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}

export default Navbar;