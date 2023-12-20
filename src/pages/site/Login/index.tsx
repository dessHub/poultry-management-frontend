import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Layout from '../layout';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    email: string;
    password: string;
}
  

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        setError(undefined)
        setLoading(false)
    }, [])

    const { register, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log('form data', data)
        navigate(from, { replace: true });
    };

    return (
      <Layout>
        <>
          <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="text-3xl font-bold text-gray-950">PMP</div>
            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">

            {error && (
              <div className="py-2 mb-2 text-center" >
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                    className="block w-full rounded-2xl border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    {...register("password")}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-2xl border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="flex w-full justify-center rounded-2xl  border border-solid border-black bg-transparent px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {loading ? 'Loging...' : 'Log in'}
                </button>
              </div>
            </form>
          </div>
        </>
      </Layout>
    )
  }
  