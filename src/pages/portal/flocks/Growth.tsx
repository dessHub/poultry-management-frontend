import { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { PlusIcon, WindowIcon } from "@heroicons/react/24/outline";
import Layout from "../layout"
import GrowthTable from "./components/GrowthTable";
import type { LineChart as LineChartType} from "types/chart";
import { LineChart } from "@/components/charts";
import Modal from "@/components/modals";

interface IFormInput {
    age: number;
    weight: number;
    notes: string;
}

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

const age = [
    {
        id: 1,
        value: 1,
        title: '1 Week'
    },
    {
        id: 2,
        value: 2,
        title: '2 Weeks'
    },
    {
        id: 3,
        value: 3,
        title: '3 Weeks'
    },
    {
        id: 4,
        value: 4,
        title: '4 Weeks'
    },
    {
        id: 5,
        value: 5,
        title: '5 Weeks'
    },
]

const Growth = () => {
    const [tab, setTab] = useState('table');

    const [isOpen, setModalOpen] = useState(false);
    const [isEdiditing, setFormType] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        setError(undefined)
        setLoading(false)
    }, [])

    const { setValue, register, reset, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log('form data', data)
    };

    const handleCreateNew = () => {
        setFormType(false);
        setModalOpen(true);
        reset()
    }

    const handleEdit = (id: number, age: number, weight: number, notes: string) => {
        setFormType(true);
        setModalOpen(true);
        setValue('age', age);
        setValue('weight', weight);
        setValue('notes', notes);
    }

    return (
        <Layout>
            <div className="w-full px-2 md:px-5 py-5">
                <div className="mb-5">
                    <div className="flex items-center font-normal text-xl text-neutral-100 mb-5">
                        <WindowIcon className="block h-8 w-8 mr-1 text-neutral-400" aria-hidden="true" />
                        <span>Growth Overview</span>
                    </div>

                    <div className="flex sm:justify-end px-2">
                        <button
                         onClick={() => handleCreateNew()}
                         className="flex items-center justify-center py-2 px-3 rounded-md bg-blue-800 text-neutral-300 text-xs font-semibold">
                            <PlusIcon className="h-4 w-4 mr-2" />
                            <span>Record new Weight</span>
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
                            <GrowthTable handleEdit={handleEdit} />
                        )
                    }
                </div>

                <Modal title="Weekly weight" open={isOpen} setOpen={setModalOpen} >
                    <div className="mt-2">

                        {error && (
                        <div className="py-2 mb-2 text-center" >
                            <p className="text-red-700 text-sm">{error}</p>
                        </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-full px-5">
                                <label htmlFor="age" className="block text-sm font-medium leading-6">
                                  Chicken Age
                                </label>
                                <div className="mt-2">
                                    <select
                                        {...register('age')}
                                        defaultValue=""
                                        className={`block w-full md:h-12 rounded-md px-2 py-1.5 bg-neutral-800 shadow-sm ring-1 ring-inset ${errors.age ? 'ring-red-700' : 'ring-slate-900'} placeholder:text-neutral-400 focus:outline-none`} 
                                        >
                                        <option value="" disabled>
                                        Select option
                                        </option>
                                        {age.map(({id, value, title}) => <option value={value} key={id}>{title}</option>)}
                                    </select>
                                    {error && <p className="text-xs text-red-700" role="alert">{errors.age?.message }</p>}
                                </div>
                            </div>
                            <div className="w-full px-5">
                                <label htmlFor="weight" className="block text-sm font-medium leading-6">
                                  Birds Weight
                                </label>
                                <div className="text-xs font-light">Average birds weight in grams.</div>
                                <div className="mt-2">
                                    <input
                                        id="weight"
                                        {...register("weight")}
                                        type="number"
                                        required
                                        className="block w-full md:h-12 rounded-md px-2 py-1.5 bg-neutral-800 border-neutral-300 shadow-sm ring-1 ring-inset ring-slate-900 placeholder:text-neutral-400 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-5">
                                <label htmlFor="notes" className="block text-sm font-medium leading-6">
                                  Notes
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="notes"
                                        {...register("notes")}
                                        className={`block w-full rounded-md border-0 px-2 py-1.5 bg-neutral-800 shadow-sm ring-1 ring-inset ${error ? 'ring-red-700' : 'ring-slate-900'} placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6`}
                                    />
                                    {error && <p className="text-xs text-red-700" role="alert">{errors.notes?.message }</p>}
                                </div>
                            </div>

                            <div className="border-t border-neutral-500 py-2 px-5 flex justify-end">
                                <button
                                    disabled={loading}
                                    type="button"
                                    className="flex justify-center rounded-sm border border-solid border-black bg-neutral-900 hover:bg-neutral-800 text-neutral-300 mr-2 px-3 py-1.5 text-sm font-bold leading-6 shadow-sm"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="flex justify-center rounded-sm border border-solid border-black bg-blue-900 hover:bg-blue-950 text-neutral-300 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm"
                                >
                                    {loading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>

            </div>
        </Layout>
    )
}

export default Growth;