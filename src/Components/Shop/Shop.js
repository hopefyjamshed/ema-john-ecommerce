import React, { useEffect, useState } from 'react';
import Card from '../Product/Card';
import Sidebar from '../sidebar/Sidebar';

import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handler = (product) => {
        console.log(product)
        const newProduct = [...cart, product]
        setCart(newProduct)
        console.log(newProduct)
    }
    return (
        <div className='grid'>
            <div className="shopping-cards">
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}
                        handler={handler}
                    >

                    </Card>)
                }
            </div>
            <div className="side-menu">
                <Sidebar cart={cart.length}></Sidebar>
            </div>
        </div>
    );
};

export default Shop;