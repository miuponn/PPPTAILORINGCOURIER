import React from 'react';
import './PurchasePage.css';
import {useState} from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {useLocation, useNavigate} from 'react-router-dom';
import ProductMiniItemPage from '../../components/ProductMiniItem/ProductMiniItem';
function PurchasePage() {

    const location = useLocation();
    const navigate = useNavigate();
    const { id, name: productName, price, images, description } = location.state;


    const [purchase, setPurchase] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: '',
    });


    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setPurchase({
            ...purchase,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(purchase);
        navigate(`/confirmation`, {
            state: {
                purchase,
                product: {
                    id,
                    name: productName,
                    price,
                    images,
                    description
                }
            }
        })
    }

    return(
        <div className="purchase-page">
            <Header />
                <h2 className="purchase-header">PURCHASE FORM</h2>
            <div className="purchase-content">
                <div className="purchase-left">
                    <form className="purchase-form" onSubmit={handleSubmit}>
                        <p><b>ENTER THE FOLLOWING INFORMATION: </b></p>
                        <input
                            type="text"
                            name="name"
                            value={purchase.name}
                            onChange={handleChange}
                            placeholder="NAME"
                            className="purchase-input"
                        />
                        <input
                            type="email"
                            name="email"
                            value={purchase.email}
                            onChange={handleChange}
                            placeholder="EMAIL"
                            className="purchase-input"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={purchase.phone}
                            onChange={handleChange}
                            placeholder="PHONE"
                            className="purchase-input"
                        />
                        <input
                            type="text"
                            name="address"
                            value={purchase.address}
                            onChange={handleChange}
                            placeholder="ADDRESS"
                            className="purchase-input"
                        />
                        <input
                            type="text"
                            name="city"
                            value={purchase.city}
                            onChange={handleChange}
                            placeholder="CITY"
                            className="purchase-input"
                        />
                        <input
                            type="text"
                            name="state"
                            value={purchase.state}
                            onChange={handleChange}
                            placeholder="STATE"
                            className="purchase-input"
                        />
                        <input
                            type="text"
                            name="country"
                            value={purchase.country}
                            onChange={handleChange}
                            placeholder="COUNTRY"
                            className="purchase-input"
                        />
                        <input
                            type="text"
                            name="zip"
                            value={purchase.zip}
                            onChange={handleChange}
                            placeholder="ZIP CODE"
                            className="purchase-input"
                        />

                        <h3 className="purchase-text">NOTE BEFORE PURCHASING:</h3>
                        <p className="purchase-text">
                            ONLINE PURCHASES ARE CURRENTLY NOT AVAILABLE ON THE WEBSITE. IF YOU ARE PURCHASING ONLINE, PLEASE CONTACT US THROUGH OUR EMAIL AFTER COMPLETING THE PURCHASE. WE WILL PROVIDE 
                            SOLUTIONS FOR YOU.
                        </p>  
                        <Button className="purchase-button" size="medium" type="secondary type">PURCHASE</Button>
                    </form>
                </div>
                <div className="purchase-right">
                    <h3 className="purchase-header">ORDER SUMMARY:</h3>
                    <div className="purchase-summary-table">
                        <ProductMiniItemPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchasePage;