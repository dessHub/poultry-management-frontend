import { useState } from "react";
import { PlusIcon, WindowIcon } from "@heroicons/react/24/outline";
import Layout from "../layout"
import GrowthTable from "./components/GrowthTable";
import type { LineChart as LineChartType} from "types/chart";
import { LineChart } from "@/components/charts";

const chartData: LineChartType = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [{
        label: 'Weight',
        data: [300, 420, 560, 620, 700, 850],
        borderWidth: 1
    },
    {
        label: 'Expected Weight',
        data: [340, 450, 550, 625, 740, 860],
        borderWidth: 1
    }
   ]
}

const Growth = () => {
    const [tab, setTab] = useState('table');

    return (
        <Layout>
            <div className="w-full px-2 md:px-5 py-5">
                <div className="mb-5">
                    <div className="flex items-center font-normal text-xl text-neutral-100 mb-5">
                        <WindowIcon className="block h-8 w-8 mr-1 text-neutral-400" aria-hidden="true" />
                        <span>Growth Overview</span>
                    </div>

                    <div className="flex sm:justify-end px-2">
                        <button className="flex items-center justify-center py-2 px-3 rounded-md bg-blue-800 text-neutral-300 text-xs font-semibold">
                            <PlusIcon className="h-4 w-4 mr-2" />
                            <span>Record new Weigth</span>
                        </button>
                    </div>
                </div>

                <div className="mt-10">

                    <div className="grid grid-cols-2 grid-gap-0 bg-neutral-950 border-t border-neutral-900 h-10">
                        <button
                        className={`grid-span-1 p-2 text-neutral-300 text-xs font-light ${tab === 'table' ? '' : 'rounded-ee-2xl bg-neutral-900'}`}
                        onClick={() => setTab('table')}
                        >Table</button>
                        <button
                        className={`grid-span-1 p-2 text-neutral-300 text-xs font-light ${tab === 'chart' ? '' : 'rounded-es-2xl bg-neutral-900'}`}
                        onClick={() => setTab('chart')}
                        >Charts</button>
                    </div>

                    {tab === 'chart' ? (
                        <div className="p-3 max-w-full yt-max-height-32">
                            <LineChart title='Growth history' chartData={chartData} />
                        </div>
                        ):
                        (
                            <GrowthTable />
                        )
                    }
                </div>

            </div>
        </Layout>
    )
}

export default Growth;