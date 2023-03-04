import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Card from '../Product/Card';
import Items from '../selectedItems/Items';
import Shop from '../Shop/Shop';
import Sidebar from '../sidebar/Sidebar';
import './Order.css'

const Order = () => {
    const { products, initial } = useLoaderData()
    const [carts, setCarts] = useState(initial)

    const RemoveHandler = (id) => {
        const remaining = carts.filter(cart => cart.id !== id)
        setCarts(remaining)
        removeFromDb(id)
    }
    const clearCart = () => {
        setCarts([])
        deleteShoppingCart()

    }



    return (
        <div className='grid'>
            <div className="order-cards">
                {
                    carts.map(item => <Items
                        key={item.id}
                        item={item}
                        RemoveHandler={RemoveHandler}
                    ></Items>)
                }
                {
                    carts.length === 0 && <h2>No Items Founds. Please Shop <Link to='/'>Shop More</Link></h2>
                }
            </div>
            <div className="side-menu">
                <Sidebar cart={carts}
                    clearCart={clearCart}
                ></Sidebar>
            </div>
        </div>
    );
};

export default Order;