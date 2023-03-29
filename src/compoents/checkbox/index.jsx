import clsx from 'clsx'
import React from 'react'

const Checkbox = ({
    field, // { name, value, onChange, onBlur }
    meta,
    className,
    label,
    ...props
}) => {
  return (
    <div className="flex items-center">
    <input
    type="checkbox"
    {...props}
    {...field}
     className={clsx("h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
     {
        [className]:!!className,
     }
     )}
   />
   <label htmlFor={props.id} className="ml-2 block text-sm text-gray-900">
     {label}
   </label>
 </div>
  )
}

export default Checkbox