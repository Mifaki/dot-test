import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

type InputProps<T extends FieldValues> = {
    name: keyof T & string;
    label: string;
    register: UseFormRegister<T>;
    errors: DeepMap<T, FieldError>;
    required?: boolean;
    type?: string;
    validationSchema?: z.ZodTypeAny;
};

const Input = ({ 
    name, 
    label, 
    register, 
    errors, 
    required = false, 
    type = 'text', 
    validationSchema 
}: InputProps<any>) => (
    <div className="flex flex-col gap-2">
        <label className='body-2 text-text-primary' htmlFor={name}>
            {label}
            {required && "*"}
        </label>
        <input
            id={name}
            type={type}
            {...register(name, {
                required: required,
                validate: validationSchema
                    ? (value) => validationSchema.safeParse(value).success
                    : undefined,
            })}
            className='p-4 bg-background border border-border border-solid rounded-lg'
        />
        {errors[name] && (
            <span className="text-red-800 block">
                {errors[name].message}
            </span>
        )}
    </div>
);

export default Input;
