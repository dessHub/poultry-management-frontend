import { WindowIcon, ArrowTrendingDownIcon, ClockIcon, FolderIcon, ScaleIcon } from "@heroicons/react/24/outline";
import Layout from "../layout"
import TextAvatar from "@/components/atoms/TextAvatar";
import { avatarBgColors } from "@/data/colors";


const FlockOverview = () => {

    return (
        <Layout>
            <div className="w-full px-2 md:px-5 py-5">
                <div className="mb-5">
                    <div className="flex items-center font-normal text-xl text-neutral-100 mb-5">
                        <WindowIcon className="block h-8 w-8 mr-1 text-neutral-400" aria-hidden="true" />
                        <span>Overview</span>
                    </div>
                    <div className="w-full border border-neutral-500 rounded-md bg-neutral-900">
                        <div className='flex items-center w-full font-bold text-neutral-300 p-5'>
                            <TextAvatar name="Farm One" bgColor={avatarBgColors[0]} isRounded={false} />
                            <div className='flex-1 text-left px-2 text-xs'>Flock one</div>
                        </div>

                        <div className="overflow-auto">
                            <div className="min-w-96">
                                <div className="grid grid-cols-6 gap-0 px-5 py-2 border-y border-neutral-500 text-xs font-light bg-neutral-800">
                                    <div className="col-span-1">Hatch Date</div>
                                    <div className="col-span-1">Number</div>
                                    <div className="col-span-1">Type</div>
                                    <div className="col-span-1">Method</div>
                                    <div className="col-span-2">Notes</div>
                                </div>

                                <div className="grid grid-cols-6 gap-0 px-5 py-3 text-xs font-light">
                                    <div className="col-span-1">01-01-2024</div>
                                    <div className="col-span-1">500</div>
                                    <div className="col-span-1">Layers</div>
                                    <div className="col-span-1">Deep litter</div>
                                    <div className="col-span-2">Flock description.</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="mt-10">
                    <div className="w-full border border-neutral-500 rounded-md bg-neutral-900">
                        <div className='flex items-center w-full font-bold text-neutral-300 px-5 py-3 border-b border-neutral-500'>
                            <FolderIcon className="block h-7 w-7 mr-1 text-neutral-400" aria-hidden="true" />
                            <div className='flex-1 text-left px-2 text-md'>Summary</div>
                        </div>

                        <div className="overflow-auto">
                            <div className="min-w-96">
                                <div className="grid grid-cols-6 gap-0 px-5 py-2 border-y border-neutral-500 text-xs font-light bg-neutral-800">
                                    <div className="col-span-2 flex items-center">
                                        <ClockIcon className="block h-4 w-4 mr-1 text-neutral-400" aria-hidden="true" />
                                        Age
                                    </div>
                                    <div className="col-span-2 flex items-center">
                                        <ScaleIcon className="block h-4 w-4 mr-1 text-neutral-400" aria-hidden="true" />
                                        Current Weight
                                    </div>
                                    <div className="col-span-2 flex items-center">
                                        Mortalities
                                        <ArrowTrendingDownIcon className="block h-4 w-4 mr-1 text-red-400" aria-hidden="true" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-6 gap-0 px-5 py-3 text-xs font-light">
                                    <div className="col-span-2">11 Weeks</div>
                                    <div className="col-span-2">1.23 KG</div>
                                    <div className="col-span-2">45</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default FlockOverview;