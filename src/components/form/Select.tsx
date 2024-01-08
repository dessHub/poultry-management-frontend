import { FC } from "react"
import { RegisterOptions, UseFormRegister } from "react-hook-form"

interface SelectItems {
  label?: string;
  value: string;
}

type SelectProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  error?: boolean;
  errorMessage?: string | undefined;
  items: SelectItems[]
};

const Select: FC<SelectProps> = (({ label, name, items, rules, error, errorMessage, register }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <select
        {...register(name, rules)}
        defaultValue=""
        className={`block w-full h-9 rounded-2xl border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ${error ? 'ring-red-700' : 'ring-slate-900'} placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6`} 
        >
        <option value="" disabled>
          Select option
        </option>
        {items.map(({label, value}, index) => <option value={value} key={index}>{label || value}</option>)}
      </select>
      {error && <p className="text-xs text-red-700" role="alert">{errorMessage }</p>}
    </div>
  </div>
))

export default Select;