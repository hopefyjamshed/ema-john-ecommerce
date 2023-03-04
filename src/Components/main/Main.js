import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Card from '../Product/Card';
import Shop from '../Shop/Shop';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;