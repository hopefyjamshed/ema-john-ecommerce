import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <img src={Logo} alt="" />
            <div className='ancors'>
                <Link to='/'>Shop</Link>
                <Link to="./order">Order</Link>
                <Link to="./order-reviwe">Order Reviwe</Link>
                <Link to="./manageInventory">Manage Inventory</Link>
                <Link to="./login">Login</Link>

            </div>
        </nav>
    );
};

export default Header;