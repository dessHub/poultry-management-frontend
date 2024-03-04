import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
    ArrowRightStartOnRectangleIcon,
    CheckIcon, 
    ChevronDownIcon,
    EllipsisVerticalIcon,
    FolderIcon,
    PlusIcon,
    UserCircleIcon,
    WindowIcon
} from '@heroicons/react/24/outline'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import TextAvatar from '@/components/atoms/TextAvatar';
import SettingsNav from './SettingsNav';
import FlockNav from './FlockNav';
import { avatarBgColors } from '@/data/colors';
import { classNames } from '@/helpers';

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

const NavPanel = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;
    // Check if the current route includes '/flock/'
    const isFlockRoute = pathName.includes('/flocks/');
  
    const from = "/login"

    const logout = () => navigate(from, { replace: true });

    const [currentFarm, setFarm] = useState(farms[0]);
    const [farmPosition, setFarmPosition] = useState(0);

    return (
        <>
            <div className='flex items-center px-3 py-3'>

                {/* Profile dropdown */}
                <Menu as="div" className="w-full relative">
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
                        <Menu.Items className="absolute left-1 right-1 z-10 mt-2 origin-top-right bg-neutral-900 rounded-md border border-neutral-500 py-1 shadow-lg ">
                            <div className='text-xs px-3'>Farms</div>
                            {farms.map((item, index) => (
                                <Menu.Item key={item.slug}>
                                    <NavLink
                                        key={item.slug}
                                        to={`/farm/${item.slug}`}
                                        end
                                        className='px-3 py-2 text-xs font-medium flex items-center flex items-center'
                                    >
                                        <TextAvatar name={item.name} bgColor={avatarBgColors[index]} isRounded={true} />
                                        <span className='ml-2 flex-1'>{item.name}</span>
                                        {pathName.includes(`/farm/${item.slug}`) && (<CheckIcon className="block h-4 w-4 ml-2" aria-hidden="true" />)}
                                    </NavLink>
                                </Menu.Item>
                            ))}
                            <Menu.Item>
                                <NavLink
                                    key="create-farm"
                                    to={`/create-farm`}
                                    className='px-4 py-2 text-xs font-medium flex items-center flex items-center'
                                >
                                    <PlusIcon className="block h-4 w-4 mr-1 border rounded" aria-hidden="true" />
                                    <span className='ml-2 flex-1'>Create Farm</span>
                                </NavLink>
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>

            </div>
            {
                isFlockRoute ?
                (
                    <FlockNav farmSlug={currentFarm.slug} />
                ) : (
                    <div className="space-y-1 px-2 py-4 border-t border-neutral-500">
                        <NavLink
                            key="portal"
                            to={`/farm/${currentFarm.slug}`}
                            end
                            className={({isActive}) => classNames(
                            isActive ? 'bg-blue-950 text-blue-200' : '',
                            'px-3 py-2 text-xs font-medium flex items-center'
                            )}
                        >
                            <WindowIcon className="block h-4 w-4 mr-1" aria-hidden="true" />
                            <span>Dashboard</span>
                        </NavLink>
                        <NavLink
                            key="flocks"
                            to={`/farm/${currentFarm.slug}/flocks`}
                            end
                            className={({isActive}) => classNames(
                            isActive ? 'bg-blue-950 text-blue-200' : '',
                            'px-3 py-2 text-xs font-medium flex items-center'
                            )}
                        >
                            <FolderIcon className="block h-4 w-4 mr-1" aria-hidden="true" />
                            <span>Flocks</span>
                        </NavLink>
                        <SettingsNav slug={currentFarm.slug} />
                    </div>
                )
            }


            <div className='py-4 absolute bottom-1 w-full left-0 border-t border-neutral-500'>
                <div className='flex items-center w-full'>
                    <Menu as="div" className="w-full relative">
                        <div className='w-full'>
                            <Menu.Button className="w-full">
                                <span className="sr-only">Open account menu</span>
                                <div className='flex items-center'>
                                    <TextAvatar name={currentFarm.name} bgColor="bg-blue-300" textColor="text-blue-900" isRounded={true} /> 
                                    <div className='ml-3 flex-1 text-left'>
                                        <div className='text-xs'>Dan Dan</div>
                                        <div className='text-xs text-neutral-500'>farm@mail.com</div>
                                    </div>
                                    <div className='flex items-center text-neutral-300'>
                                        <EllipsisVerticalIcon className="block h-6 w-7" aria-hidden="true" />
                                    </div>

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
                            <Menu.Items className="absolute right-4 left-4 bottom-10 z-10 px-2 py-1 origin-bottom-left bg-neutral-900 rounded-md border border-neutral-500 shadow-lg ">
                                <Menu.Item>
                                    <NavLink
                                        key="profile"
                                        to={`/profile`}
                                        className={({isActive}) => classNames(
                                        isActive ? 'bg-blue-950 text-blue-200' : '',
                                        'py-2 text-xs font-medium flex items-center'
                                        )}
                                    >
                                        <UserCircleIcon className="block h-4 w-4 mr-2" aria-hidden="true" />
                                        <span>Profile</span>
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item>
                                    <button className='flex items-center py-2 text-sm font-medium text-red-500'>
                                        <ArrowRightStartOnRectangleIcon className="block h-4 w-4 mr-2" aria-hidden="true" />
                                        <span>Sign out</span>
                                    </button>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default NavPanel;