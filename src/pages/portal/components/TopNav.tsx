import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, CheckIcon, ChevronRightIcon, DocumentTextIcon, IdentificationIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { NavigationItem } from 'types/nav'
import TextAvatar from '@/components/atoms/TextAvatar';
import { avatarBgColors } from '@/data/colors';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const navigations: NavigationItem[] = [
  { name: 'About', title: 'About Us', href: '/about', current: false, icon: IdentificationIcon },
  { name: 'FAQs', title: 'FAQs', href: '/faqs', current: false, icon: DocumentTextIcon }
]

const farms = [
    {
        name: 'Farm One',
        slug: 'farm-one',
    },
    {
        name: 'Farm Two',
        slug: 'farm-two',
    },
    {
        name: 'Farm Three',
        slug: 'farm-three',
    },
]

const TopNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;

    console.log('location==',location)
  
    const from = "/login"

    const logout = () => navigate(from, { replace: true });

    const [currentFarm, setFarm] = useState(farms[0]);
    const [farmPosition, setFarmPosition] = useState(0)

    useEffect(() => {

        const farm = farms.find(({slug}) => pathName.includes(slug)) || farms[0];
        const farmIdx = farms.findIndex(({slug}) => pathName.includes(slug)) || 0
        setFarm(farm);
        setFarmPosition(farmIdx);
    }, [pathName])

    return (
        <>
            <Disclosure as="nav" className="bg-neutral-900 sm:hidden">
            {({ open }: {open: boolean}) => (
                <>
                 <div className="mx-auto px-2 sm:px-2 lg:px-3 border-b border-neutral-500">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex w-full sm:w-auto items-center justify-between">
                            <NavLink
                             key='home'
                             to="/"
                             className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto mr-2"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Your Company"
                                /> 
                               <span>
                                 <TextAvatar name={currentFarm.name} bgColor={avatarBgColors[farmPosition]} isRounded={true} />
                               </span>
                            </NavLink>
                            <div className="flex items-center">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-500 hover:bg-gray-700 hover:text-white focus:outline-none">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>

                    </div>
                 </div>

                <Disclosure.Panel className="h-4/5 bg-neutral-900 shadow absolute inset-x-0 z-10">
                    <div className='flex items-center px-3 py-3'>

                        {/* Profile dropdown */}
                        <Menu as="div" className="w-full">
                            <div>
                                <div className='text-neutral-300 py-2 text-xs'>
                                    Farm
                                </div>
                                <Menu.Button className="w-full bg-primary rounded-md p-2 text-sm border border-neutral-500">
                                    <span className="sr-only">Open farm menu</span>
                                    <div className='flex items-center w-full text-neutral-300'>
                                        <TextAvatar name={currentFarm.name} bgColor={avatarBgColors[farmPosition]} isRounded={true} />
                                        <div className='flex-1 text-left px-2 text-xs'>{currentFarm.name}</div>
                                        <ChevronDownIcon className="block h-4 w-6" aria-hidden="true" />
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
                                <Menu.Items className="absolute left-3 right-3 z-10 mt-2 origin-top-right bg-neutral-900 rounded-md border border-neutral-500 py-1 shadow-lg ">
                                    {farms.map((item, index) => (
                                        <Menu.Item>
                                        <NavLink
                                            key={item.name}
                                            to={`/farm/${item.slug}`}
                                            className='px-3 py-2 text-xs font-medium flex items-center flex items-center'
                                        >
                                            <TextAvatar name={item.name} bgColor={avatarBgColors[index]} isRounded={true} />
                                            <span className='ml-2 flex-1'>{item.name}</span>
                                            {pathName === `/farm/${item.slug}` && (<CheckIcon className="block h-4 w-4 ml-2" aria-hidden="true" />)}
                                        </NavLink>
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        
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
                                <TextAvatar name={item.name} />
                                <span>{item.name}</span>
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