import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, UserCircleIcon, ChevronRightIcon, DocumentTextIcon, IdentificationIcon } from '@heroicons/react/24/outline'
import { NavLink, useNavigate } from "react-router-dom";
import { NavigationItem } from 'types/nav'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const navigations: NavigationItem[] = [
  { name: 'About', title: 'About Us', href: '/about', current: false, icon: IdentificationIcon },
  { name: 'FAQs', title: 'FAQs', href: '/faqs', current: false, icon: DocumentTextIcon }
]

const TopNav = () => {
    const navigate = useNavigate();
  
    const from = "/login"

    const logout = () => navigate(from, { replace: true });

    const [isLogedin, setLogin] = useState(false);

    return (
        <>
            <Disclosure as="nav" className="bg-white">
            {({ open }: {open: boolean}) => (
                <>
                 <div className="mx-auto px-2 sm:px-2 lg:px-3 border-b border-slate-200">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex w-full sm:w-auto items-center justify-between">
                            <NavLink
                             key='home'
                             to="/"
                             className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Your Company"
                                />
                               <span className='px-2 text-blue-800 font-bold'>PMP</span> 
                            </NavLink>
                            <div className="flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                        <div className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigations.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                        item.current ? 'text-slate-900' : 'text-slate-950 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:flex flex-1 sm:flex-initial items-center justify-center">
                            {isLogedin ? (
                                <>
                                    <NavLink
                                        key="portal"
                                        to='/portal'
                                        className="flex items-center relative rounded-md bg-blue-800 p-1 px-2 h-fit text-slate-50 text-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">Open portal</span>
                                        <span>Portal</span>
                                    </NavLink>

                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-0 sm:static sm:inset-auto sm:ml-2">

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative">
                                            <div>
                                                <Menu.Button className="flex bg-primary rounded-sm sm:p-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="sr-only">Open user menu</span>
                                                    <div className='flex items-center'>
                                                        <UserCircleIcon
                                                            className="rounded-full bg-black p-1 text-gray-400 hover:text-white focus:outline-none h-8 w-8"
                                                        />
                                                    </div>
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Button
                                                        onClick={() => logout()}
                                                        className='w-full block px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'>
                                                        <span>Sign out</span>
                                                    </Menu.Button>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <NavLink
                                        key="login"
                                        to="/register"
                                        className="flex items-center relative rounded-md bg-blue-800 p-1 px-2 h-fit text-slate-50 text-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">Open registration form</span>
                                        <span>Try now</span>
                                    </NavLink>

                                    <div className="flex items-center px-2 sm:static sm:inset-auto sm:ml-2 border-l">
                                        <NavLink
                                          key="login"
                                          to="/login"
                                          className='text-blue-950 hover:bg-slate-100 hover:text-blue-900 px-3 py-2 text-sm font-light'
                                        >
                                            Log in
                                        </NavLink>
                                    </div>
                                </>
                            )}
                        </div>

                    </div>
                 </div>

                <Disclosure.Panel className="sm:hidden h-4/5 bg-white shadow absolute inset-x-0 z-10">
                    <div className='flex items-center justify-between px-3 py-3'>
                        {isLogedin ? (
                            <>
                                <NavLink
                                    key="portal"
                                    to='/portal'
                                    className="flex items-center relative rounded-md bg-blue-800 p-1 px-2 h-fit text-slate-50 text-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">Open portal</span>
                                    <span>Portal</span>
                                </NavLink>

                                <div className="flex items-center px-2 sm:static sm:inset-auto sm:ml-2">
                                    <button
                                        type="button"
                                        onClick={() => logout()}
                                        className='text-blue-950 hover:bg-slate-100 hover:text-blue-900 px-3 py-2 text-sm font-light'
                                    >
                                        Sign out
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    key="login"
                                    to="/register"
                                    className="flex items-center relative rounded-md bg-blue-800 p-1 px-2 h-fit text-slate-50 text-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">Open registration form</span>
                                    <span>Try now</span>
                                </NavLink>

                                <div className="flex items-center px-2 sm:static sm:inset-auto sm:ml-2">
                                    <NavLink
                                        key="login"
                                        to="/login"
                                        className='text-blue-950 hover:bg-slate-100 hover:text-blue-900 px-3 py-2 text-sm font-light'
                                    >
                                        Log in
                                    </NavLink>
                                </div>
                            </>
                        )}
                        
                    </div>
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigations.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({isActive}) => classNames(
                                isActive ? 'bg-red-100 text-gray-700' : 'bg-primary text-gray-900 hover:bg-red-400 hover:text-white',
                                'px-3 py-2 text-xs font-medium flex items-center border-b'
                                )}
                            >
                                {item.name} 
                                <ChevronRightIcon className="block h-3 w-4 ml-2" aria-hidden="true" />
                            </NavLink>
                        ))}
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </>
    )
}

export default TopNav;