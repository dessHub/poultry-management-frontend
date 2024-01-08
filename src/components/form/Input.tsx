import { FC } from 'react';
import { RegisterOptions, UseFormRegister, FieldValues } from 'react-hook-form';

type InputProps = {
  label: string;
  name: string;
  type: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  error?: boolean;
  errorMessage?: string | undefined;
  autoComplete?: string;
};

const InputField: FC<InputProps> = ({label, name, type, register, rules, error, errorMessage, ...rest}) => {
    return (
        <div>
          <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
            {label}
          </label>
          <div className="mt-2">
            <input
              id={name}
              {...register(name, rules)}
              type={type}
              {...rest}
              className={`block w-full rounded-2xl border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-slate-800 focus:outline-none sm:text-sm sm:leading-6 ${error ? 'ring-red-700' : 'ring-slate-900'}`}
            />
            {error && <p className="text-xs text-red-700" role="alert">{errorMessage }</p>}
          </div>
        </div>
    )
}

export default InputField;
