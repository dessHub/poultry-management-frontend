import { useState, useEffect } from "react";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import Layout from "../layout";
import { InputField, Select, TextArea } from "@components/form";
import { countries } from "@data/countries";

interface IFormInput {
    name: string;
    description: string;
    location: string;
    country: string;
    errors: FieldErrors;
}

const CreateFarm = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        setError(undefined)
        setLoading(false)
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log('form data', data)
    };

    return (
        <Layout>
            <div className="h-full flex flex-col justify-start px-3 pt-12">
                <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-2 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
                      Create a Farm.
                    </h2>
                    <p>Farm allows you to manage different flocks and manage farm workers.</p>
                </div>
        
                <div className="bg-white mt-5 p-5 sm:mx-auto sm:w-full sm:max-w-sm">

                    {error && (
                    <div className="py-2 mb-2 text-center" >
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                    <InputField
                        name="name" 
                        label="Farm name" 
                        type="text" 
                        register={register}
                        rules={{
                            required: {
                                value: true,
                                message: 'Farm name is required'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9 ]*$/i,
                                message: 'Enter a valid name'
                            }
                        }}
                        error={!!errors.name}
                        errorMessage={errors.name?.message as string}
                    />

                    <InputField
                        name="location" 
                        label="Farm location" 
                        type="text" 
                        register={register}
                        rules={{
                            required: {
                                value: true,
                                message: 'Farm location is required'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9 ]*$/i,
                                message: 'Enter a valid location name'
                            }
                        }}
                        error={!!errors.location}
                        errorMessage={errors.location?.message as string}
                    />
                    <Select
                        name="type" 
                        label="Select country" 
                        items={countries} 
                        register={register}
                        rules={{
                            required: {
                                value: true,
                                message: 'Country is required'
                            }
                        }}
                        error={!!errors.country}
                        errorMessage={errors.country?.message as string}
                     />

                    <TextArea
                        name="description" 
                        label="Description (Brief description of the project.)" 
                        register={register}
                        rules={{}}
                        error={!!errors.description}
                        errorMessage={errors.description?.message as string}
                    />
        
                    <div>
                        <button
                        disabled={loading}
                        type="submit"
                        className="flex w-full justify-center rounded-2xl border border-solid border-black bg-blue-900 hover:bg-blue-950 text-white px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm"
                        >
                        {loading ? 'Creating...' : 'Create'}
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </Layout>


    )
}

export default CreateFarm;