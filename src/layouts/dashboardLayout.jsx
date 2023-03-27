import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../compoents/header'

const DashboardLayout = () => {
  return (
   <>
   <Header />
   <Outlet />
   </>
  )
}

export default DashboardLayout