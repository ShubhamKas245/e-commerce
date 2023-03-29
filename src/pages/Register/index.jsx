
import React from 'react'
import CustomForm from '../../compoents/customForm';

import { registerFields, registerInitValues } from './registerFields';

const wait=(time)=> new Promise((resolve)=>setTimeout(resolve,time));

const Register = () => {
  return (
    <>
   <CustomForm 
     fields={registerFields}
     initialValues={registerInitValues}  
     onSubmit={async (values)=>{await wait(3000); console.log(values)}}
     btnProps={{
      children:'Sign Up'
     }}
   />
    </>
  )
}

export default Register