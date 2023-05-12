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
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: 'addcoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: 'updatecoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            }
            
        ]
    },
    
    
])

export default router;