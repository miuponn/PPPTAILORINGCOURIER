import React from 'react';
import Button from '../../components/Button/Button';
import './ConfirmationPage.css';
import Header from '../../components/Header/Header';
import ProductMiniItem from '../../components/ProductMiniItem/ProductMiniItem';
import {useLocation, useNavigate} from 'react-router-dom';
function ConfirmationPage() {
    
    return(
        <div className="confirmation-page">
            <Header />
            <div className="confirmation-container">
                    <h2 className="confirmation-header">THANK YOU FOR YOUR PURCHASE.</h2>
                    <p className="confirmation-text">PLEASE STOP BY OUR STORE TO PICK UP YOUR ORDER / FULFILL YOUR TAILORING SERVICE. </p>
                    <br></br>
                    <p className="confirmation-text">PLEASE MAKE SURE TO CHECK YOUR EMAIL FOR YOUR CONFIRMATION ORDER AND INVOICE.</p>
                
                <div className="confirmation-mini-div" >
                    <div className="confirmation-mini">
                    <p className="confirmation-text">WONDERING WHERE TO FULFILL YOUR ORDER?</p>
                    <Button type="secondary" path="/contact+location" size="medium">FIND OUR STORE</Button>
                    </div>
                    <div className="confirmation-mini">
                        <p className="confirmation-text">HAVE QUESTIONS? WANT TO ALTER YOUR REQUEST?</p>
                        <Button type="secondary" path="/contact+location" size="medium">CONTACT US</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationPage;