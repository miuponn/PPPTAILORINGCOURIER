import React from 'react';
import './ProfilePage.css';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

function ProfilePage() {
    return(
        <div className="profile-page">
            <div className="profile-page-content">
                <Header />
                <h2 className="profile-header">
                    DUE TO TIME CONSTRAINTS, THE PROFILE PAGE IS NOT AVAILABLE AT THIS TIME.
                </h2>
                <p>WE (I) APOLOGIZE FOR NOT BEING ABLE TO CODE THIS. HOWEVER, DUE TO TIME CONSTRAINTS I AM NOT ABLE TO FINISH CODING THIS.</p>
                <br></br>
                <p>PLEASE TAKE A LOOK AT THE OTHER FOLLOWING PAGES.</p>
            </div>
            <div className="profile-page-controls">
                <Button type="secondary" path="/product" size="medium">VIEW PRODUCTS</Button>
                <Button type="secondary" path="/services" size="medium">VIEW TAILORING SERVICES</Button>
            </div>
        </div>
    );
}

export default ProfilePage;