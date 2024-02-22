import { FC } from "react";

interface Props {
    children: JSX.Element
}

const Desktop: FC<Props> = ({children}) => {

    return (
        <>
          <div className="relative w-48 xl:w-60 hidden sm:block h-full bg-neutral-900 border-r border-neutral-500">
            <div className="flex items-center border-b border-neutral-500 py-2">
                <img
                    className="h-8 w-auto mr-2"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                /> 
                <span>PMP</span>
            </div>
            {children}
          </div>
        </>
    )
}

export default Desktop;