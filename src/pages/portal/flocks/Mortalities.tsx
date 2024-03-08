import { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { PlusIcon, WindowIcon } from "@heroicons/react/24/outline";
import DatePicker from 'react-datepicker';
import type { Chart as ChartType} from "types/chart";
import { BarChart, PieChart } from "@/components/charts";
import Layout from "../layout"
import MortalityTable from "./components/MortalityTable";
import Modal from "@/components/modals";

interface IFormInput {
    dateOfDeath: Date;
    quantity: number;
    causeOfDeath: number;
    notes: string;
}

const chartData: ChartType = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [{
        label: 'Mortalites',
        data: [3, 0, 0, 2, 1, 1],
        borderWidth: 1
    }
   ]
}

const pieData = [5, 8, 15, 4];

const pieLabels = ['Fatigue', 'Diseases', 'Suffocation', 'Other']

const causes = [
    {
        id: 1,
        title: 'Fatigue',
        value: 1
    },
    {
        id: 2,
        title: 'Disease',
        value: 2
    },
    {
        id: 3,
        title: 'Suffocation',
        value: 3
    },
]

const Mortalities = () => {
    const [tab, setTab] = useState('table');

    const [isOpen, setModalOpen] = useState(false);
    const [isEdiditing, setFormType] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        setError(undefined)
        setLoading(false)
    }, [])

    const { control, setValue, register, reset, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log('form data', data)
    };

    const handleCreateNew = () => {
        setFormType(false);
        setModalOpen(true);
        reset()
    }

    const handleEdit = (id: number) => {
        setFormType(true);
        setModalOpen(true);
        setValue('dateOfDeath', new Date('01-05-2024'));
        setValue('quantity', 2);
        setValue('causeOfDeath', 1);
        setValue('notes', 'Suffocation');
    }

    return (
        <Layout>
            <div className="w-full h-full overflow-auto px-2 md:px-5 py-5">
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
                        <div className="py-3 px max-w-full yt-max-height-32 space-y-5">
                            <div className="flex items-center justify-center p-2 sm:h-96 w-auto border border-neutral-800 bg-neutral-900 shadow-md">
                                <PieChart labels={pieLabels} data={pieData} />
                            </div>
                            <div className="flex items-center justify-center p-2 w-auto border border-neutral-800 bg-neutral-900">
                                <BarChart title='Mortality history' chartData={chartData} />
                            </div>
                            
                        </div>
                        ):
                        (
                            <MortalityTable handleEdit={handleEdit} />
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
                                <label htmlFor="dateOfDeath" className="block text-sm font-medium leading-6">
                                  Mortality Date
                                </label>
                                <div className="mt-2 relative">
                                    <Controller
                                        control={control}
                                        name='dateOfDeath'
                                        render={({ field }) => (
                                        <DatePicker
                                            placeholderText='Select date'
                                            onChange={(date: Date) => field.onChange(date)}
                                            selected={field.value}
                                            className="rounded-md bg-white py-2 w-full sm:py-px pl-3 text-left text-gray-900 text-xs sm:leading-6 shadow-sm ring-1 ring-inset ring-gray-300"
                                        />
                                    )}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-5">
                                <label htmlFor="causeOfDeath" className="block text-sm font-medium leading-6">
                                  Cause of Death
                                </label>
                                <div className="mt-2">
                                    <select
                                        {...register('causeOfDeath')}
                                        defaultValue=""
                                        className={`block w-full md:h-12 rounded-md px-2 py-1.5 bg-neutral-800 shadow-sm ring-1 ring-inset ${errors.causeOfDeath ? 'ring-red-700' : 'ring-slate-900'} placeholder:text-neutral-400 focus:outline-none`} 
                                        >
                                        <option value="" disabled>
                                        Select option
                                        </option>
                                        {causes.map(({id, value, title}) => <option value={value} key={id}>{title}</option>)}
                                    </select>
                                    {error && <p className="text-xs text-red-700" role="alert">{errors.causeOfDeath?.message }</p>}
                                </div>
                            </div>
                            <div className="w-full px-5">
                                <label htmlFor="quantity" className="block text-sm font-medium leading-6">
                                  Number of death(s)
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="quantity"
                                        {...register("quantity")}
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

export default Mortalities;