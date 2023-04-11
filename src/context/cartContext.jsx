import React from 'react';
import { createContext, useCallback, useMemo, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { data } from 'autoprefixer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loadCart = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get('cart');
      setCart(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addToCart=useCallback(async(data)=>{
     try {
        setLoading(true)
        const res=await axiosInstance.post('cart',data);
        setCart((val)=>[...val,res.data])
     } catch (err) {
        setError(err);
     }finally{
        setLoading(false);
     }
  },[])

  const updateCartItem=useCallback(async(data)=>{
    try {
        setLoading(true);
        const res=await axiosInstance.put(`cart/${data.id}`,data,);
        setCart((val)=>{
            const index=val.findIndex((x)=>x.id===data.id);
            return[
                ...val.slice(0,index),
                res.data,
                ...val.slice(index+1)
            ]
        })
    } catch (err) {
        setError(err)
    } finally{
        setLoading(false)
    }
  },[])

  const deleteCartItem=useCallback(async(data)=>{
    try {
        setLoading(true);
        setCart((val)=>{
            const index=val.findIndex((x)=>x.id===data.id);
            return[
                ...val.slice(0,index),
                ...val.slice(index+1)
            ]
        })
    } catch (err) {
        setError(err)
    } finally{
        setLoading(false)
    }
  },[])

  const value = useMemo(
    () => ({ loadCart, addToCart,cartLoading: loading, cartError: error, cart,updateCartItem,deleteCartItem }),
    [cart, loadCart, loading, error,addToCart,updateCartItem,deleteCartItem]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
