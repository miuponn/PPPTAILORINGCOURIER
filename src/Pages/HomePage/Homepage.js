import React from 'react';
import {useState, useEffect} from 'react';
import {link} from 'react-router-dom';
import './Homepage.css';
import Header from '../../components/Header/Header.js';
import AltButton from '../../components/AltButton/AltButton.js';
import fff1 from './introPhotos/fff1.jpg';
import fff2 from './introPhotos/fff2.jpg';
import fff3 from './introPhotos/fff3.jpg';
import fff4 from './introPhotos/fff4.jpg';
import fff5 from './introPhotos/fff5.jpg';
import fff6 from './introPhotos/fff6.jpg';
import fff7 from './introPhotos/fff7.jpg';
import fff8 from './introPhotos/fff8.jpg';
import fff9 from './introPhotos/fff9.jpg';
import fff10 from './introPhotos/fff10.jpg';
import fff11 from './introPhotos/fff11.jpg';
import fff12 from './introPhotos/fff12.jpg';
import fff13 from './introPhotos/fff13.jpg';
import fff14 from './introPhotos/fff14.jpg';
import fff15 from './introPhotos/fff15.jpg';
import fff16 from './introPhotos/fff16.jpg';
import fff17 from './introPhotos/fff17.jpg';
import fff18 from './introPhotos/fff18.jpg';
import Button from '../../components/Button/Button.js';

function Homepage() {


    const [photoIndex, setPhotoIndex] = useState(1);

    const fffPhotos = {
        1: fff1,
        2: fff2,
        3: fff3,
        4: fff4,
        5: fff5,
        6: fff6,
        7: fff7,
        8: fff8, 
        9: fff9, 
        10: fff10,
        11: fff11,
        12: fff12,
        13: fff13,
        14: fff14,
        15: fff15,
        16: fff16,
        17: fff17,
        18: fff18,
    }

    const handleNextPhoto = () => {
        setPhotoIndex(prevIndex => prevIndex === 18 ? 1: prevIndex +1);
        console.log(photoIndex);
    }

    const handlePreviousPhoto = () => {
        setPhotoIndex(prevIndex => prevIndex === 1 ? 18: prevIndex -1);
        console.log(photoIndex);
    }
    
    return(
        <div className="homepage">
            <Header />
            <div className="homepage-content">
                <div className="homepage-content-left">
                    <div className="photo-container">

                        <img className="home-photo" src={fffPhotos[photoIndex]} alt={"fffphoto" + photoIndex}/>
                    </div>
                    <div className="photo-controls">
                        <AltButton size="very-small" onClick={handlePreviousPhoto} type="primary">PREVIOUS</AltButton>
                        <AltButton size="very-small" onClick={handleNextPhoto}>NEXT</AltButton>
                    </div>
                </div>
                <div className="homepage-content-right">
                    <div className="homepage-content-right-text">
                        <h1>WELCOME TO PPPTAILORINGCOURIER</h1>
                        <h2>A CONSTANT FUTURISM-BASED MOVIE</h2>
                    <br></br>
                        <p>PPPTAILORINGCOURIER IS A COMPANY THAT PROVIDES FASHION AND ALTERATION SERVICES FOR ALL.</p>
                        <p>BASED FROM THE URBAN STREETS OF SOUTH KOREA, WE ENSURE THAT ALL SERVICES AND PRODUCTS ARE OF THE HIGHEST QUALITY.</p>
                    </div>
                    <div className="homepage-buttons">
                        <Button path="/products" type="secondary" size="small" className="homepage-button">SHOP PRODUCTS</Button>
                        <Button path="/services" type="secondary" size="small" className="homepage-button">SHOP SERVICES</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;