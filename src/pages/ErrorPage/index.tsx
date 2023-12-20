import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: unknown = useRouteError();

  return (
    <div className="h-screen">
        <div className="w-full text-center pt-20">
            <h1 className="text-2xl text-slate-700">Oops!!!!</h1>
            <p className="text-base my-2">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg text-red-700">
                <i>{(error as Error)?.message ||
                    (error as { statusText?: string })?.statusText}</i>
            </p>
        </div>
    </div>

  );
}