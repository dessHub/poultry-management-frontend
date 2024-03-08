import { FC, Fragment } from "react";
import TextAvatar from "@/components/atoms/TextAvatar";
import { avatarBgColors } from "@/data/colors";
import { Cog6ToothIcon, EllipsisVerticalIcon, TrashIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import { classNames } from "@/helpers";
import { Menu, Transition } from "@headlessui/react";

interface Props {
    slug: string;
    name: string;
}

const FlockCard: FC<Props> = ({ slug, name }) => {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <div className="grid grid-cols-4 gap-1 px-1 py-2 border-b border-neutral-700">
            <div className="col-span-2 flex items-center">
                <NavLink to={`${pathName}/${slug}`} key={slug} className="flex items-center w-full hover:bg-neutral-800 rounded-md p-3">
                    <TextAvatar name="Farm One" bgColor={avatarBgColors[0]} isRounded={false} />
                    <div className="text-xs text-neutral-100 px-2">{name}</div>
                </NavLink>
            </div>
            <div className="col-span-1 text-xs text-neutral-100 flex items-center">
              {slug}
            </div>
            <div className="col-span-1 flex justify-end items-center relative">
                <Menu as="div" className="w-full relative">
                    <div className='w-full'>
                        <Menu.Button className="w-full">
                            <span className="sr-only">Open account menu</span>
                            <div className='flex items-center justify-end'>
                                <EllipsisVerticalIcon className="block h-6 w-7" aria-hidden="true" />
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
                        <Menu.Items className="absolute left-1 right-1 z-10 mt-0 origin-top-right px-2 py-1 origin-top-right bg-neutral-900 rounded-md border border-neutral-500 shadow-lg ">
                            <Menu.Item>
                                <NavLink
                                    key="flock-settings"
                                    to={`${pathName}/${slug}/settings`}
                                    className={({isActive}) => classNames(
                                    isActive ? 'bg-blue-950 text-blue-200' : '',
                                    'py-2 text-xs font-medium flex items-center'
                                    )}
                                >
                                    <Cog6ToothIcon className="block h-4 w-4 mr-2" aria-hidden="true" />
                                    <span>Flock settings</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item>
                                <button className='flex items-center py-2 text-sm font-medium text-red-500'>
                                    <TrashIcon className="block h-4 w-4 mr-2" aria-hidden="true" />
                                    <span>Delete flock</span>
                                </button>
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export default FlockCard;
