import React, { useState } from 'react';
import './ProductItemPage.css';
import {useLocation, useParams, useNavigate} from 'react-router-dom';
import AltButton from '../../components/AltButton/AltButton';  
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

function ProductItemPage() {

    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    
    const [photoIndex, setPhotoIndex] = useState(0);

    if (!location.state) {
        return <h1>PRODUCT NOT FOUND</h1>
    }

    console.log('location state', location.state);

    const {name, price, description, images} = location.state;

    console.log('images array:', images);

    console.log('current photo index', photoIndex);

    const handleNextPhoto = () => {
        setPhotoIndex(prevIndex => prevIndex === images.length -1 ? 0: prevIndex +1);
        console.log(photoIndex);
    }

    const handlePreviousPhoto = () => {
        setPhotoIndex(prevIndex => 
            prevIndex === 0 ? images.length -1 : prevIndex -1);
        console.log(photoIndex);
    }

    const handlePurchase = () => {
        navigate(`/product/${id}/purchase`, {
            state: { id, name, price, images, description }
        });
    }
    
    return(
        <div className="product-item-page">
            <Header />
            <div className="product-item-image-container">
                <div className="photo-container">

                        <img className="product-photo" src={images[photoIndex]} alt={`${name} - view ${photoIndex + 1}`}/>
                    </div>
                    <div className="photo-controls">
                        <Button size="very-small" onClick={handlePreviousPhoto} type="primary">PREVIOUS</Button>
                        <Button size="very-small" onClick={handleNextPhoto}>NEXT</Button>
                    </div>
            </div>
            <div className="product-item-text-container">
                <h2 className="product-item-name">{name}</h2>
                <p className="product-item-price">${price}</p>
                <div className="product-item-description">
                    {description}
                </div>
                <Button className="product-item-purchase-button"size="small" type="primary" onClick={handlePurchase}>PURCHASE</Button>
            </div>
        </div>
    );
}

export default ProductItemPage;