import React, { useContext } from 'react';
import CustomForm from '../../compoents/customForm';

import { registerFields, registerInitValues } from './registerFields';
import { AuthContext } from '../../context/authContext';

// const wait=(time)=> new Promise((resolve)=>setTimeout(resolve,time));

const Register = () => {
  const { register } = useContext(AuthContext);
  return (
    <>
      <CustomForm
        fields={registerFields}
        initialValues={registerInitValues}
        onSubmit={register}
        btnProps={{
          children: 'Sign Up',
        }}
      />
    </>
  );
};

export default Register;

