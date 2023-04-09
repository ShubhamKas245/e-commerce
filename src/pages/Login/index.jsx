import { Field } from 'formik';
import React, { useContext } from 'react';
import Checkbox from '../../compoents/checkbox';
import CustomForm from '../../compoents/customForm';
import { loginFields, loginInitValues } from './loginFields';
import { AuthContext } from '../../context/authContext';

const Login = () => {

  const {login}=useContext(AuthContext);

  return (
    <>
      <CustomForm
        fields={loginFields}
        initialValues={loginInitValues}
        onSubmit={login}
        btnProps={{
          children: 'Sign Up',
        }}
      >
        <div className="flex items-center justify-between">
          <Field
            name="rememberMe"
            id="rememberMe"
            component={Checkbox}
            label="Remember Me"
          />
          <div className="text-sm">
            <a
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </CustomForm>
    </>
  );
};

export default Login;
