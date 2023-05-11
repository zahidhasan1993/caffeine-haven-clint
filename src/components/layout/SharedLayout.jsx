import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <div>
            layout
            <Outlet></Outlet>
        </div>
    );
};

export default SharedLayout;