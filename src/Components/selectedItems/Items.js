import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Items.css'
import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Items = ({ item, RemoveHandler }) => {
    const { name, shipping, img, price, quantity, ratings, id } = item
    return (
        <div className='item-container'>
            <div className="image-detail">
                <div className='image-div'>
                    <img className='img' src={img} alt="" />
                </div>

                <div className="detailes">
                    <h4 className='name'>{name}</h4>
                    <p className='price'>price: <span className='price-color'>${price}</span></p>
                    <p className='shipping'>shipping: <span className='shipping-color'>{shipping}</span></p>
                    <p className='quantity'><small>quantity: <span className='quantity-color'>{quantity}</span></small></p>
                </div>
            </div>

            {/* detail container */}


            <div className="delete">
                <button onClick={() => RemoveHandler(id)} className='delete-btn'>
                    <FontAwesomeIcon className='icon' icon={faTrashCan}></FontAwesomeIcon>
                </button>
            </div>


        </div>
    );
};

export default Items;