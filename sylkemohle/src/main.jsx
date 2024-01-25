import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Hero from './Hero'
import './index.css'
import {createBrowserRouter, Routes, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import ServiceDetail from './ServiceDetail'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Hero />}></Route>
            <Route path='services/:serviceId' element={<ServiceDetail />} />
        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
