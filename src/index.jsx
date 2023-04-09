import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import ErrorBoundry from './ErrorBoundry';
import './style.scss';
import { AuthProvider } from './context/authContext';

const container=document.getElementById('root');

const root=createRoot(container);


root.render(
<ErrorBoundry>
  <AuthProvider>
  <App />
  </AuthProvider>
</ErrorBoundry>
);
