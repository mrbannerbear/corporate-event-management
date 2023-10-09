import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '../routes/Router.jsx'
import AuthContext from '../context/AuthContext'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
    <RouterProvider router={router}></RouterProvider>
    <Toaster position="bottom-center" reverseOrder={false}></Toaster>
    </AuthContext>
  </React.StrictMode>,
)
