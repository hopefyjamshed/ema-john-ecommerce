import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Card from '../Product/Card';
import Sidebar from '../sidebar/Sidebar';

import './Shop.css'
const Shop = () => {
    const products = useLoaderData()


    const [cart, setCart] = useState([])

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()

    }


    // useEffect(() => {
    //     const storedCart = getStoredCart();
    //     const savedCart = [];
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id);
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart);
    // }, [products])

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }



    const handler = (product) => {




    }
    return (
        <div className='grid'>
            <div className="shopping-cards">
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}
                        handler={handler}
                        handleAddToCart={handleAddToCart}
                    >

                    </Card>)
                }
            </div>
            <div className="side-menu">
                <Sidebar
                    clearCart={clearCart}
                    cart={cart}>
                    <Link to='order'>
                        <button>Go To order</button>
                    </Link>
                </Sidebar>
            </div>
        </div>
    );
};

export default Shop;