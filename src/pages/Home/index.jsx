import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const {state}=useLocation();
  return (
    <div>
        <h1>{`Hello ${state?.email}`}</h1>
    </div>
  )
}

export default Home