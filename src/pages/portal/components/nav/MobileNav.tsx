import { FC, useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import TextAvatar from '@/components/atoms/TextAvatar';
import { avatarBgColors } from '@/data/colors';

interface Props {
    children: JSX.Element;
}

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

const MobileNav: FC<Props> = ({children}) => {
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
            <Disclosure as="nav" className={`bg-neutral-900 sm:hidden`}>
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

                <Disclosure.Panel className="bg-neutral-900 shadow absolute inset-x-0 z-10 flex flex-col" style={{height: '-webkit-fill-available'}}>
                    {children}
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </>
    )
}

export default MobileNav;