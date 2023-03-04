import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Card.css'

const Card = (props) => {
    const { product, handleAddToCart } = props
    const { img, name, seller, price, ratings } = props.product
    return (
        <div className='card-div'>
            <div>
                <img className='image' src={img} alt="" />
                <p className='product-name'>{name}</p>
                <p className='product-price'>price: ${price}</p>
                <p>Manufecturar: {seller}</p>
                <p className='rating'>rating: {ratings}star</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn'>
                <p className='btn-title'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Card;