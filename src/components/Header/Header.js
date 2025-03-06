import React from 'react';
import './Header.css';
import pppLogo from './PPPTAILORINGCOURIER.png'
import {Link} from 'react-router-dom';
import AltButton from '../AltButton/AltButton.js';
function Header() {
    return(
        <div className="header">
            <div className="header-left">
                <AltButton
                    path="/products"
                    type="primary"
                    className="header-button"
                    size="small"
                    >
                    PRODUCTS
                </AltButton>
                <AltButton
                    path="/services"
                    type="primary"
                    className="header-button"
                    size="small"
                    >
                    TAILORING
                </AltButton>
                <AltButton
                    path="/contact+location"
                    type="primary"
                    className="header-button"
                    size="small">
                    CONTACT US
                </AltButton>
            </div>
            <div className="header-center">     
               <Link to="/home" className="header-link"><p className="header-logo"><b>PPPTAILORINGCOURIER</b></p></Link>
            </div>
            <div className="header-right">
            <AltButton
                    path="/contact+location"
                    type="primary"
                    className="header-button"
                    size="small">
                    LOCATION
                </AltButton>
                <AltButton
                    path="/about"
                    type="primary"
                    className="header-button"
                    size="small" >
                        ABOUT
                </AltButton>
                <AltButton
                     path="/profile"
                     type="primary"
                     className="header-button"
                     size="small">
                    PROFILE
                </AltButton>
            </div>
        </div>
    );
}


export default Header;