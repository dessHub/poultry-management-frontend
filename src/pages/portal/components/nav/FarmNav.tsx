import { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { NavLink } from "react-router-dom";
import { 
    ChevronDownIcon, 
    ChevronUpIcon,
    Cog6ToothIcon,
    Squares2X2Icon,
    UsersIcon
} from '@heroicons/react/24/outline';
import { classNames } from '@/helpers';

interface Props {
    slug: string
}

const FarmNav: FC<Props> = ({slug}) => {
  return (
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="px-3 py-2 text-xs font-medium flex items-center w-full">
                <Cog6ToothIcon className="block h-4 w-4 mr-1" aria-hidden="true" />
                <span className='flex-1 text-left'>Settings</span>
                {open ?
                    <ChevronUpIcon
                    className="block h-4 w-4"
                    /> :
                    <ChevronDownIcon
                        className="block h-4 w-4"
                    />
                }

              </Disclosure.Button>
              <Disclosure.Panel className="pl-4">
                    <NavLink
                        key="portal"
                        to={`/farm/${slug}/settings`}
                        className={({isActive}) => classNames(
                        isActive ? 'bg-blue-950 text-blue-200' : '',
                        'px-3 py-2 text-xs font-medium flex items-center'
                        )}
                    >
                        <Squares2X2Icon className="block h-4 w-4 mr-1" aria-hidden="true" />
                        <span>Overview</span>
                    </NavLink>
                    <NavLink
                        key="flocks"
                        to={`/farm/${slug}/settings/members`}
                        className={({isActive}) => classNames(
                        isActive ? 'bg-blue-950 text-blue-200' : '',
                        'px-3 py-2 text-xs font-medium flex items-center'
                        )}
                    >
                        <UsersIcon className="block h-4 w-4 mr-1" aria-hidden="true" />
                        <span>Members</span>
                    </NavLink>

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
  )
}

export default FarmNav;
