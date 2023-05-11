import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SharedLayout from '../layout/SharedLayout';
import ErrorPage from '../extra/ErrorPage';
import Home from '../layout/Home';
import AddCoffee from '../extra/AddCoffee';
import UpdateCoffee from '../extra/UpdateCoffee';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SharedLayout></SharedLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            
        ]
    },
    {
        path: 'addcoffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: 'updatecoffee',
        element: <UpdateCoffee></UpdateCoffee>
    }
])

export default router;