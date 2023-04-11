import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../compoents/header';
import { AuthContext } from '../context/authContext';
import { CounterProvider } from '../context/counterContext';
import { ProductProvider } from '../context/productContext';
import { CartProvider } from '../context/cartContext';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <ProductProvider>
      <CartProvider>
        <CounterProvider>
          <Header />
          <Outlet />
        </CounterProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default DashboardLayout;

