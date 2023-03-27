import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayouts from './layouts/authLayouts'
import DashboardLayout from './layouts/dashboardLayout'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const router=createBrowserRouter([
  {
    path:'/',
    element:<DashboardLayout />,
    children:[
        {
          index:true,
          element:<Home />
        },
        {
          path:'about',
          element:<About />
        }
    ]
  },
  {
    path:'/auth',
    element:<AuthLayouts />,
    children:[
      {
        index:true,
        element:<Login />
      },
      {
        path:'register',
        element:<Register />
      }
    ]
  },

])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App