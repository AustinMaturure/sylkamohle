import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client'
import Hero from './Hero'
import Footer from './footer'
import './index.css'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'

const ServiceDetail = lazy(()=>import('./ServiceDetail.jsx'))

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route scrollToTop>
            <Route index element={<Hero />}></Route>
            <Route path='services/:serviceSlug' element={<Suspense fallback={<p>loading...</p>}><ServiceDetail /></Suspense>} />
        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
    <Footer></Footer>
  </React.StrictMode>
)
