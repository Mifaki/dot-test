import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

type SelectProps<T extends FieldValues> = {
    name: keyof T & string;
    label: string;
    options: { label: string; value: string }[];
    register: UseFormRegister<T>;
    errors: DeepMap<T, FieldError>;
    required?: boolean;
    validationSchema?: z.ZodTypeAny;
};

const Select = ({
    name,
    label,
    options,
    register,
    errors,
    required = false,
    validationSchema
}: SelectProps<any>) => (
    <div className="flex flex-col gap-2">
        <label className='body-2 font-semibold text-text-primary' htmlFor={name}>
            {label}
            {required && "*"}
        </label>
        <div className='relative '>

            <select
                id={name}
                {...register(name, {
                    required: required,
                    validate: validationSchema
                        ? (value) => validationSchema.safeParse(value).success
                        : undefined,
                })}
                defaultValue={''}
                className='w-full p-4 border bg-background border-border border-solid rounded-lg'
            >
                <option value="" disabled hidden>
                    Select {label}
                </option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors[name] && (
                <span className="text-red-800 block mt-1">
                    {errors[name].message}
                </span>
            )}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className='absolute right-4 top-1/2 transform -translate-y-1/2 w-3 h-3 pointer-events-none'
            >
                <path d="M2.454 7.93949C2.73529 7.65828 3.11675 7.50031 3.5145 7.50031C3.91224 7.50031 4.2937 7.65828 4.575 7.93949L12 15.3645L19.425 7.93949C19.7079 7.66625 20.0868 7.51506 20.4801 7.51847C20.8734 7.52189 21.2496 7.67964 21.5277 7.95776C21.8058 8.23587 21.9636 8.61209 21.967 9.00538C21.9704 9.39868 21.8192 9.77758 21.546 10.0605L13.0605 18.546C12.7792 18.8272 12.3977 18.9852 12 18.9852C11.6022 18.9852 11.2208 18.8272 10.9395 18.546L2.454 10.0605C2.17279 9.77919 2.01482 9.39773 2.01482 8.99998C2.01482 8.60224 2.17279 8.22078 2.454 7.93949Z" fill="#F2F2F2" />
            </svg>
        </div>
    </div >
);

export default Select;
