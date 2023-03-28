import { Formik } from 'formik'
import React from 'react'

const wait=(time)=> new Promise((resolve)=>setTimeout(resolve,time));

const Register = () => {
  return (
    <>
    <Formik  initialValues={{
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
    }}  
    onSubmit={async (values)=>{await wait(3000); console.log(values)}}
    
    validate={(values)=>{
      const errors={};
      if(!values.name){
       errors.name='Required...'
      }
      if(!values.email){
        errors.email='Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if(!values.password){
        errors.password='Required';
      }
      if(!values.confirmPassword){
        errors.confirmPassword='Required';
      }else if(values.password !==values.confirmPassword){
        errors.confirmPassword='Confirm Password Should match with passwords'
      }
      return errors;
    }}

    >
      {({values,errors,isValid,dirty,isSubmitting, handleChange,handleSubmit,handleBlur,touched})=>(
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
        <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="relative block w-full  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && <p className='text-sm text-red-500 my-1 font-semibold'>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Email address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
         {errors.email && touched.email && <p className='text-sm text-red-500 my-1 font-semibold'>{errors.email}</p>}

          </div>
          <div>
            <label htmlFor="password" className="sr-only">
             New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="relative block w-full  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}

            />
             {errors.password && touched.password && <p className='text-sm text-red-500 my-1 font-semibold'>{errors.password}</p>}

          </div>
          <div>
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="relative block w-full  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="  Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}

            />
          {errors.confirmPassword && touched.confirmPassword && <p className='text-sm text-red-500 my-1 font-semibold'>{errors.confirmPassword}</p>}

          </div>
        </div>

        <div>
          <button disabled={isSubmitting || !(isValid && dirty)}
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait"
          >
            
            Sign in
          </button>
        </div>
      </form>

      )}
    </Formik>
    </>
  )
}

export default Register