import clsx from 'clsx'
import React from 'react'

const Input = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    meta,
    className,
    ...props
}) => {
  return (
    <div>
            <label htmlFor={props.id} className="sr-only">
              {props.placeholder}
            </label>
            <input
             className={clsx("relative block w-full appearance-none rounded-none  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
             {
                [className]:!!className,
             },
             )}
             type="text"
              {...props}
              {...field}
            />
            {errors[field.name] && touched[field.name] && (<p className='text-sm text-red-500 my-1 font-semibold'>{errors[field.name]}</p>)}
          </div>
  )
}

export default Input