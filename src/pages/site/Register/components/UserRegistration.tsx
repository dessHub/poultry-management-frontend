import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    name: string;
    email: string;
    phone: string;
    password: string;
    confimr_password: string;
}

const UserRegistration = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        setError(undefined)
        setLoading(false)
    }, [])

    const { register, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log('form data', data)
    };

    return (
        <div className="h-full flex flex-col justify-start px-3 pt-12">
          <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-2 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              Let set up your user account.
            </h2>
          </div>
  
          <div className="bg-white mt-5 p-5 sm:mx-auto sm:w-full sm:max-w-sm">

            {error && (
              <div className="py-2 mb-2 text-center" >
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    {...register("name")}
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-2xl border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-slate-900 placeholder:text-slate-800 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-2xl border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-slate-900 placeholder:text-slate-800 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Mobile number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    {...register("phone")}
                    type="text"
                    autoComplete="phone"
                    required
                    className="block w-full rounded-2xl border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-slate-900 placeholder:text-slate-800 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    {...register("password")}
                    type="password"
                    required
                    className="block w-full rounded-2xl border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-slate-900 placeholder:text-slate-800 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="confimr_password"
                    {...register("confimr_password")}
                    type="password"
                    required
                    className="block w-full rounded-2xl border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-slate-900 placeholder:text-slate-800 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="flex w-full justify-center rounded-2xl border border-solid border-black bg-blue-900 hover:bg-blue-950 text-white px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>

    )
}

export default UserRegistration;