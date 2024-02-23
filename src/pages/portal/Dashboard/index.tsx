import { ArrowRightIcon, FolderIcon, WindowIcon } from "@heroicons/react/24/outline";
import Layout from "../layout"
import TextAvatar from "@/components/atoms/TextAvatar";
import { avatarBgColors } from "@/data/colors";
import FlockCard from "./components/FlockCard";
import { NavLink, useLocation } from "react-router-dom";

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


const Dashboard = () => {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <Layout>
            <div className="w-full px-2 md:px-5 py-5">
                <div className="mb-5">
                    <div className="flex items-center font-normal text-xl text-neutral-100 mb-5">
                        <WindowIcon className="block h-8 w-8 mr-1 text-neutral-400" aria-hidden="true" />
                        <span>Dashboard</span>
                    </div>
                    <div className="w-full border border-neutral-500 rounded-md bg-neutral-900">
                        <div className='flex items-center w-full font-bold text-neutral-300 p-5'>
                            <TextAvatar name="Farm One" bgColor={avatarBgColors[0]} isRounded={false} />
                            <div className='flex-1 text-left px-2 text-xs'>Farm one</div>
                        </div>

                        <div className="overflow-auto">
                            <div className="min-w-96">
                                <div className="grid grid-cols-4 gap-0 px-5 py-2 border-y border-neutral-500 text-xs font-light bg-neutral-800">
                                    <div className="col-span-1">Slug</div>
                                    <div className="col-span-1">Location</div>
                                    <div className="col-span-2">Description</div>
                                </div>

                                <div className="grid grid-cols-4 gap-0 px-5 py-3 text-xs font-light">
                                    <div className="col-span-1">farm-one</div>
                                    <div className="col-span-1">Kenya, Bomet</div>
                                    <div className="col-span-2">Poultry farm description.</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="mt-10">
                    <div className="w-full border border-neutral-500 rounded-md bg-neutral-900">
                        <div className='flex items-center w-full font-bold text-neutral-300 px-5 py-3 border-b border-neutral-500'>
                            <FolderIcon className="block h-7 w-7 mr-1 text-neutral-400" aria-hidden="true" />
                            <div className='flex-1 text-left px-2 text-md'>Farm one</div>
                            <NavLink to={`${pathName}/flocks`} className="flex items-center hover:bg-neutral-800 p-2">
                                <span className="text-xs px-2">All Flocks</span>
                                <ArrowRightIcon className="h-5 w-5" />
                            </NavLink>
                        </div>

                        <div className="overflow-auto">
                            <div className="min-w-96">
                                {flocks.map(({slug, name}) => (<FlockCard name={name} slug={slug} />))}
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Dashboard;