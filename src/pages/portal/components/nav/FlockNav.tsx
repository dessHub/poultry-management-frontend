import { FC, Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
    ArrowLeftIcon,
    ArrowTrendingDownIcon,
    ArrowTrendingUpIcon,
    CheckIcon, 
    ChevronDownIcon,
    ClockIcon,
    PlusIcon,
    Squares2X2Icon
} from '@heroicons/react/24/outline'
import { NavLink, useLocation } from "react-router-dom";
import TextAvatar from '@/components/atoms/TextAvatar';
import { avatarBgColors } from '@/data/colors';
import { classNames } from '@/helpers';

interface Props {
    farmSlug: string
}

const flocks = [
    {
        name: 'Flock One',
        slug: 'flock-one',
    },
    {
        name: 'Flock Two',
        slug: 'flock-two',
    },
    {
        name: 'Flock Three',
        slug: 'flock-three',
    },
]

const FlockNav: FC<Props> = ({farmSlug}) => {
    const location = useLocation();
    const pathName = location.pathname;

    const [currentFlock, setFlock] = useState(flocks[0]);

    return (
        <>
            <div className='flex items-center relative px-3 py-2'>

                {/* Profile dropdown */}
                <Menu as="div" className="w-full">
                    <div className='pb-2'>
                        <div className='text-neutral-300 py-2 text-xs'>
                            Flocks
                        </div>
                        <Menu.Button className="w-full bg-primary rounded-md p-2 text-sm border border-neutral-500">
                            <span className="sr-only">Open flock menu</span>
                            <div className='flex items-center w-full text-neutral-300'>
                                <TextAvatar name={currentFlock.name} bgColor={avatarBgColors[0]} isRounded={false} />
                                <div className='flex-1 text-left px-2 text-xs'>{currentFlock.name}</div>
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
                        <Menu.Items className="absolute left-3 right-3 z-10 mt-0 origin-top-right bg-neutral-900 rounded-md border border-neutral-500 py-1 shadow-lg ">
                            {flocks.map((item, index) => (
                                <Menu.Item key={item.slug}>
                                    <NavLink
                                        key={item.slug}
                                        to={`/farm/${farmSlug}/flocks/${item.slug}`}
                                        end
                                        className='px-3 py-2 text-xs font-medium flex items-center flex items-center'
                                    >
                                        <TextAvatar name={item.name} bgColor={avatarBgColors[index]} isRounded={true} />
                                        <span className='ml-2 flex-1'>{item.name}</span>
                                        {pathName === `/farm/${farmSlug}/flocks/${item.slug}` && (<CheckIcon className="block h-4 w-4 ml-2" aria-hidden="true" />)}
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
                                    <span className='ml-2 flex-1'>All flocks</span>
                                </NavLink>
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>

            </div>
            <div className="px-2 py-4 border-t border-neutral-500 h-3/6 overflow-auto">
                <NavLink
                    key="portal"
                    to={`/farm/${farmSlug}`}
                    end
                    className={({isActive}) => classNames(
                    isActive ? 'bg-blue-950 text-blue-200' : '',
                    'px-0 py-2 mb-2 text-md font-medium flex items-center'
                    )}
                >
                    <ArrowLeftIcon className="block h-5 w-5 mr-1 text-neutral-500" aria-hidden="true" />
                    <span>Back to Dashboard</span>
                </NavLink>
                <div className='flex items-center mt-2 text-xs'>
                    <span>Flock</span>
                </div>
                <NavLink
                    key="flocks"
                    to={`/farm/${farmSlug}/flocks/${currentFlock.slug}`}
                    end
                    className={({isActive}) => classNames(
                    isActive ? 'bg-blue-950 text-blue-200' : '',
                    'py-2 text-xs font-medium flex items-center'
                    )}
                >
                    <Squares2X2Icon className="block h-4 w-4 mr-1" aria-hidden="true" />
                    <span>Overview</span>
                </NavLink>
                <NavLink
                    key="growth"
                    to={`/farm/${farmSlug}/flocks/${currentFlock.slug}/growth`}
                    end
                    className={({isActive}) => classNames(
                    isActive ? 'bg-blue-950 text-blue-200' : '',
                    'py-2 text-xs font-medium flex items-center'
                    )}
                >
                    <ArrowTrendingUpIcon className="block h-4 w-4 mr-1" aria-hidden="true" />
                    <span>Growth</span>
                </NavLink>
                <NavLink
                    key="vaccines"
                    to={`/farm/${farmSlug}/flocks/${currentFlock.slug}/vaccines`}
                    end
                    className={({isActive}) => classNames(
                    isActive ? 'bg-blue-950 text-blue-200' : '',
                    'py-2 text-xs font-medium flex items-center'
                    )}
                >
                    <ClockIcon className="block h-4 w-4 mr-1" aria-hidden="true" />
                    <span>Vaccines</span>
                </NavLink>
                <NavLink
                    key="mortalities"
                    to={`/farm/${farmSlug}/flocks/${currentFlock.slug}/mortalities`}
                    end
                    className={({isActive}) => classNames(
                    isActive ? 'bg-blue-950 text-blue-200' : '',
                    'py-2 text-xs font-medium flex items-center'
                    )}
                >
                    <ArrowTrendingDownIcon className="block h-4 w-4 mr-1" aria-hidden="true" />
                    <span>Mortalities</span>
                </NavLink>
            </div>
        </>
    )
}

export default FlockNav;