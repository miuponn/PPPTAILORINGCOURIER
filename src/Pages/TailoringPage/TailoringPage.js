import React from 'react';
import './TailoringPage.css';
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header';
import ProductListItem from '../../components/ProductListItem/ProductListItem';
import photo1 from './servicephotos/ppp-service1.jpg';
import photo2 from './servicephotos/ppp-service2.jpg';
import photo3 from './servicephotos/ppp-service3.jpg';
import photo4 from './servicephotos/ppp-service4.jpg';


function TailoringPage() {

    const services = {
        1: {
            name: 'CLOTHING ALTERATIONS',
            price: 'TBD',
            images: [photo1],
            description: 'ALTERATIONS AVAILABLE FOR ALL CLOTHING ARTICLES. PRICES MAY VARY FOR EACH PIECE AND REQUEST.'
        },
        2: {
            name: 'CLOTHING REPAIRS',
            price: '50.00',
            images: [photo2],
            description: 'CLOTHING REPAIRS AVAILABLE FOR ALL CLOTHING ARTICLES. SAME PRICE NO MATTER THE REQUEST.'
        },
        3: {
            name: 'CLOTHING ASSISTANCE -- FOR PERSONAL STYLE',
            price: '75.00 PER SESSION',
            images: [photo3],
            description: 'PERSONAL CLOTHING ASSISTANCE FOR DEVELOPING STYLE. PROVIDED WITH AN HOURLY RATE.'
        },
        4: {
            name: 'CLOTHING RECYCLING --FOR DONATION AND UPCYCLING PURPOSES.',
            price: 'FREE',
            images: [photo4],
            description: 'DONATION SERVICE PROVIDED FOR FREE. HELPS THE COMMUNITY AND OUR TEAM WITH TEXTILE UPCYCLING.'
        }
    }


    return(
        <div className="services-page">
            <Header />
            <div className="services-container">
                <h2 className="services-header">OUR FOLLOWING SERVICES</h2>
                <p className="services-text">FOR THE TIME BEING, THESE ARE THE FOLLOWING SERVICES THAT WE 
                    PROVIDE FOR ALL CUSTOMERS.
                </p>
            </div>
            <div className="services-list">
                {Object.keys(services).map((key) => (
                    <ProductListItem
                        key={key}
                        id={key}
                        name={services[key].name}
                        price={services[key].price}
                        images={services[key].images} 
                        description={services[key].description}/>
                        
                ))}
            </div>
        </div>
    );
}

export default TailoringPage;