import { useState, useEffect } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { FolderIcon, PlusIcon } from "@heroicons/react/24/outline";
import DatePicker from 'react-datepicker';
import Layout from "../layout";
import FlockCard from "./components/FlockCard";
import EmptyCard from "../components/atoms/EmptyCard";
import Modal from "@/components/modals";

interface IFormInput {
    name: string;
    quantity: number;
    breed: string;
    notes: string;
    farmMethod: number;
    chickType: number;
    dob: Date;
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

const farmMethods = [
    {
        id: 1,
        name: 'Deep litter'
    },
    {
        id: 2,
        name: 'Cage system'
    },
    {
        id: 3,
        name: 'Free range'
    },
]

const chickTypes = [
    {
        id: 1,
        name: 'Layers'
    },
    {
        id: 2,
        name: 'Broilers'
    },
    {
        id: 3,
        name: 'Improved kienyeji'
    },
]

const Flocks = () => {

    const [isOpen, setModalOpen] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        setError(undefined)
        setLoading(false)
    }, [])

    const { control, register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log('form data', data)
    };

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
                            <button
                             onClick={() => setModalOpen(true)}
                             className="flex items-center p-2 rounded-md bg-blue-900 text-xs text-neutral-300">
                                <PlusIcon className="h-4 w-4 mr-2" />
                                <span>Create Flock</span>
                            </button>
                        </div>
                    </div>

                    <div className="w-full border border-neutral-500 rounded-md bg-neutral-900">

                        <div className="overflow-auto">
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
                <Modal open={isOpen} setOpen={setModalOpen} >
                    <div className="mt-2">

                        {error && (
                        <div className="py-2 mb-2 text-center" >
                            <p className="text-red-700 text-sm">{error}</p>
                        </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-full px-5">
                                <label htmlFor="name" className="block text-sm font-medium leading-6">
                                  Flock name
                                </label>
                                <div className="text-xs font-light">A unique Flock name.</div>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        {...register("name")}
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="block w-full md:h-12 rounded-md px-2 py-1.5 bg-neutral-800 border-neutral-300 shadow-sm ring-1 ring-inset ring-slate-900 placeholder:text-neutral-400 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-5">
                                <label htmlFor="quantity" className="block text-sm font-medium leading-6">
                                  Number of birds
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="quantity"
                                        {...register("quantity")}
                                        type="number"
                                        autoComplete="quantity"
                                        required
                                        className="block w-full md:h-12 rounded-md px-2 py-1.5 bg-neutral-800 border-neutral-300 shadow-sm ring-1 ring-inset ring-slate-900 placeholder:text-neutral-400 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-5">
                                <label htmlFor="dob" className="block text-sm font-medium leading-6">
                                  Hatch Date
                                </label>
                                <div className="mt-2 relative">
                                    <Controller
                                        control={control}
                                        name='dob'
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
                                <label htmlFor="breed" className="block text-sm font-medium leading-6">
                                  Flock (Chicken) breed
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="breed"
                                        {...register("breed")}
                                        type="text"
                                        autoComplete="breed"
                                        required
                                        className="block w-full md:h-12 rounded-md px-2 py-1.5 bg-neutral-800 border-neutral-300 shadow-sm ring-1 ring-inset ring-slate-900 placeholder:text-neutral-400 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-5">
                                <label htmlFor="chickType" className="block text-sm font-medium leading-6">
                                  Flock (Chicken) Types
                                </label>
                                <div className="mt-2">
                                    <select
                                        {...register('chickType')}
                                        defaultValue=""
                                        className={`block w-full md:h-12 rounded-md px-2 py-1.5 bg-neutral-800 shadow-sm ring-1 ring-inset ${errors.chickType ? 'ring-red-700' : 'ring-slate-900'} placeholder:text-neutral-400 focus:outline-none`} 
                                        >
                                        <option value="" disabled>
                                        Select option
                                        </option>
                                        {chickTypes.map(({id, name}, index) => <option value={id} key={index}>{name}</option>)}
                                    </select>
                                    {error && <p className="text-xs text-red-700" role="alert">{errors.chickType?.message }</p>}
                                </div>
                            </div>
                            <div className="w-full px-5">
                                <label htmlFor="farmMethod" className="block text-sm font-medium leading-6">
                                  Farm Method
                                </label>
                                <div className="mt-2">
                                    <select
                                        {...register('farmMethod')}
                                        defaultValue=""
                                        className={`block w-full md:h-12 rounded-md px-2 py-1.5 bg-neutral-800 shadow-sm ring-1 ring-inset ${errors.farmMethod ? 'ring-red-700' : 'ring-slate-900'} placeholder:text-neutral-400 focus:outline-none`} 
                                        >
                                        <option value="" disabled>
                                        Select option
                                        </option>
                                        {farmMethods.map(({id, name}, index) => <option value={id} key={index}>{name}</option>)}
                                    </select>
                                    {error && <p className="text-xs text-red-700" role="alert">{errors.farmMethod?.message }</p>}
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

export default Flocks;