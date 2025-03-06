import React from 'react';
import './ProductListItem.css';
import {Link} from 'react-router-dom';
import AltButton from '../AltButton/AltButton.js';
function ProductListItem(props) {
    const {id, name, price, images, description} = props;
    return(
        <Link to={`/product/${id}`} state={{id, name, price, images, description}} className="product-list-item-link">
            <div className="product-list-item">
                <div className="product-list-item-left">
                    <img src={props.images[0]} alt={name} className="product-list-item-image"/>
                </div>
                <div className="product-list-item-right">
                    <h3 className="product-list-item-name">{name}</h3>
                    <p className="product-list-item-price">${price}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProductListItem;