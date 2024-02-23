import { FolderIcon, PlusIcon } from "@heroicons/react/24/outline";
import Layout from "../layout";
import FlockCard from "./components/FlockCard";
import EmptyCard from "../components/atoms/EmptyCard";

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

const Flocks = () => {

    return (
        <Layout>
            <div className="w-full p-5">
                <div className="mb-5">
                    <div className="flex flex-col sm:flex-row mb-8">
                        <div className="flex-1">
                            <div className="flex items-center font-normal text-xl text-neutral-100">
                                <FolderIcon className="block h-8 w-8 mr-1 text-neutral-400" aria-hidden="true" />
                                <span>Flocks</span>
                            </div>
                            <div className="text-xs py-2">View all of the flocks associated with your farm.</div>
                        </div>
                        <div className="flex items-center justify center">
                            <button className="flex items-center p-2 rounded-md bg-blue-900 text-xs text-neutral-300">
                                <PlusIcon className="h-4 w-4 mr-2" />
                                <span>Create Flock</span>
                            </button>
                        </div>
                    </div>

                    <div className="w-full border border-neutral-500 rounded-md bg-neutral-900">

                        <div className="overflow-x">
                            <div className="min-w-96">
                                <div className="grid grid-cols-4 gap-0 px-5 py-2 border-b border-neutral-500 text-xs font-light bg-neutral-800  rounded-t-md">
                                    <div className="col-span-2">Name</div>
                                    <div className="col-span-1">Slug</div>
                                </div>

                                {flocks.length ? 
                                flocks.map(({slug, name}) => (<FlockCard name={name} slug={slug} key={slug} />)) :
                                (
                                    <div className="flex items-center justify-center p-5">
                                        <EmptyCard />
                                    </div>
                                )
                                }
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Flocks;