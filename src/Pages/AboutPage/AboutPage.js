import React from 'react';
import './AboutPage.css';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
function AboutPage() {
    return(
        <div className="about-page">
            <Header />
            <div className="about-page-header">
                <h1 className="about-page-header-text">
                    HI, WE ARE PPPTAILORINGCOURIER. HOPE YOU ENJOY YOUR STAY.
                </h1>
            </div>
            <div className="about-page-content">
                <p className="about-page-text">WE ARE A KOREAN-INSPIRED FASHION BRAND PROVIDING UNIQUE AND TAILORED GARMENTS FOR OUR COMMUNITY
                    OF URBAN TRAVELERS, MODERN EXPLORERS AND THE DARING.
                </p>
                <p className="about-page-text">WE ALSO PROVIDE TAILORING SERVICES TO ALL GARMENTS AND PROVIDE CONSULTATION
                    SERVICES TO THOSE IN NEED.
                </p>
                <p className="about-page-text">ESTABLISHED IN 2014, OUR COMPANY SERVES TO CARE FOR OUR ALL. <b>AS BY OUR NAME, WE SERVE: </b></p>
                <li className="about-page-point"><b>P</b>EOPLE</li>
                <li className="about-page-point"><b>P</b>EDIGREE</li>
                <li className="about-page-point"><b>P</b>ERPETUALLY</li>
                </div>
                <div className="about-page-controls">
                    <div className="about-page-mini">
                        <p className="confirmation-text">WANT TO KNOW WHERE WE ARE LOCATED?</p>
                        <Button type="secondary" path="/contact+location" size="medium">FIND OUR STORE</Button>
                        </div>
                    <div className="about-page-mini">
                        <p className="confirmation-text">CURIOUS ABOUT OUR PRODUCTS?</p>
                        <Button type="secondary" path="/products" size="medium">VIEW OUR PRODUCTS</Button>
                        </div>
            </div>
        </div>
    );
}

export default AboutPage;