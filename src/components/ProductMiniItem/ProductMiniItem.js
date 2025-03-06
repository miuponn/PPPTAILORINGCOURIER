import React, { useState } from 'react';
import './ProductMiniItem.css'
import {useLocation, useParams, useNavigate} from 'react-router-dom';

function ProductMiniItemPage() {
    const {id} = useParams();
    const location = useLocation();
    
    if (!location.state) {
        return <h1>LOCATION NOT FOUND</h1>
    }

    console.log('location state', location.state);

    const {name, price, description, images} = location.state;

    return(
        <div className="product-mini-item">
            <div className="product-mini-left">
                <img alt="purchase-photo" src={images[0]} className="mini-product-photo"/>
            </div>
            <div className="product-mini-center">
                <p className="product-mini-details">
                    {name}
                </p>
                <p>{price}</p>
            </div>
            <div className="product-mini-right">
                <p> x 1</p>
            </div>
        </div>
    );
}

export default ProductMiniItemPage;
