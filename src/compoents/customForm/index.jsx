import { Field, Form, Formik } from 'formik';
import React from 'react'

const CustomForm = ({fields,children, btnProps, ...props}) => {
  return (
    <Formik {...props}  >
      {({isValid,dirty,isSubmitting})=>(
        
        <Form className="mt-8 space-y-6">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          {fields.map((x)=>(
            <Field key={x.name} {...x} />
          ))}
        </div>
            {children}
        <div>
          <button disabled={isSubmitting || !(isValid && dirty)}
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait"
            {...btnProps}
          />
        </div>
      </Form>

      )}
    </Formik>
  )
}

export default CustomForm