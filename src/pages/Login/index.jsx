import { Field } from 'formik';
import React from 'react'
import Checkbox from '../../compoents/checkbox';
import CustomForm from '../../compoents/customForm';
import { loginFields, loginInitValues } from './loginFields';

const Login = () => {
   return (
    <>
       <CustomForm 
     fields={loginFields}
     initialValues={loginInitValues}  
     onSubmit={async (values)=>{ console.log(values)}}
     btnProps={{
      children:'Sign Up'
     }} > 
     
          <div className="flex items-center justify-between">
            <Field name='rememberMe' id='rememberMe' component={Checkbox} label="Remember Me" />
             <div className="text-sm">
               <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                 Forgot your password?
               </a>
             </div>
           </div>
     </CustomForm>
    </>
   )

  // return (
  //   <>
  //        <Formik initialValues={{
  //         email:'',
  //         password:''
  //        }}  
  //        validate={(values)=>{
  //         const errors={};
  //         if(!values.email){
  //           errors.email='Required'
  //         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //           errors.email = 'Invalid email address';
  //         }
  //         if(!values.password){
  //           errors.password='Required';
  //         }
  //        }}
  //        >
  //         {({values,errors,dirty,touched,isSubmitting,isValid, handleChange,handleBlur})=>(
  //          <form className="mt-8 space-y-6"  onSubmit={()=>{navigate('/',{state:{email:'shubh@gmail.com',password:'Passowrd!',},replace:true,});}}>
  //          <input type="hidden" name="remember" defaultValue="true" />
  //          <div className="-space-y-px rounded-md shadow-sm">
  //            <div>
  //              <label htmlFor="email-address" className="sr-only">
  //                Email address
  //              </label>
  //              <input
  //                id="email-address"
  //                name="email"
  //                type="email"
  //                autoComplete="email"
  //                required
  //                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //                placeholder="Email address"
  //                value={values.email}
  //                onChange={handleChange}
  //                onBlur={handleBlur}
  //              />
  //              {errors.email && touched.email && <p className='text-sm font-semibold text-red-500'>{errors.email}</p>}
  //            </div> 
  //            <div>
  //              <label htmlFor="password" className="sr-only">
  //                Password
  //              </label>
  //              <input
  //                id="password"
  //                name="password"
  //                type="password"
  //                autoComplete="current-password"
  //                required
  //                className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //                placeholder="Password"
  //                value={values.password}
  //                onChange={handleChange}
  //                onBlur={handleBlur}
  //              />
  //              {errors.password && touched.password && <p className='text-sm text-red-500 my-1 font-semibold'>{errors.password}</p>}
  //            </div>
  //          </div>

  //          <div className="flex items-center justify-between">
  //            <div className="flex items-center">
  //              <input
  //                id="remember-me"
  //                name="remember-me"
  //                type="checkbox"
  //                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  //              />
  //              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
  //                Remember me
  //              </label>
  //            </div>

  //            <div className="text-sm">
  //              <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
  //                Forgot your password?
  //              </a>
  //            </div>
  //          </div>

  //          <div>
  //            <button disabled={isSubmitting || !(isValid && dirty)}
  //              type="submit"
  //              className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait"
  //            >       
  //              Sign in
  //            </button>
  //          </div>
  //        </form>
  //         )}
  //        </Formik>
  //   </>
  // )
}

export default Login