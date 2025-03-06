import React from 'react';
import './ContactLocationPage.css';
import Header from '../../components/Header/Header';


function ContactLocationPage() {


    return(
        <div className="contact-location-page">
            <Header />
            <div className="contact-location-content">
                <div className="contact-location-left">
                <iframe width="500" height="500" 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.9917638897896%2C40.71769653073429%2C-73.98927479982378%2C40.71901589210707&amp;layer=mapnik&amp;marker=40.718357231146435%2C-73.99051934480667" style={{border: "1px solid black"}}></iframe><br/>
                </div>
                <div className="contact-location-right">
                    <div className="contact-mini-div">
                        <h2 className="location-details">LOCATION DETAILS</h2>
                        <p className="contact-mini-div-text">92 ORCHARD STREET</p>
                        <p className="contact-mini-div-text">NY, UNITED STATES</p>
                        <p className="contact-mini-div-text">10002</p>  
                    </div>
                    <div className="contact-mini-div">
                        <h2 className="location-details">CONTACT DETAILS</h2>
                            <p><b>EMAIL:</b> CONTACT@PPPTAILORINGCOURIER.COM</p>
                            <p><b>PHONE NUMBER:</b> (646)-713-2874 </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactLocationPage;