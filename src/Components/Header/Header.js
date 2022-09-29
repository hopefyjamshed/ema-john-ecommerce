import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <img src={Logo} alt="" />
            <div className='ancors'>
                <a href="./order">Order</a>
                <a href="./order-reviwe">Order Reviwe</a>
                <a href="./manage-inventory">Manage Inventory</a>
                <a href="./login">Login</a>
            </div>
        </nav>
    );
};

export default Header;