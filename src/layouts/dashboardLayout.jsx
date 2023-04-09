import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../compoents/header';
import { AuthContext } from '../context/authContext';
import { CounterProvider } from '../context/counterContext';
import { ProductProvider } from '../context/productContext';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <ProductProvider>
      <CounterProvider>
        <Header />
        <Outlet />
      </CounterProvider>
    </ProductProvider>
  );
};

export default DashboardLayout;

