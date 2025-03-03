import React from 'react';
import './EntryPage.css';
import {useState, useEffect} from 'react';
import gif1 from './EntryGifs/desert-dune1.gif';
import gif2 from './EntryGifs/rainforest1.gif';
import gif3 from './EntryGifs/rainforest3.gif';
import gif4 from './EntryGifs/snow-mountain2.gif';
import gif5 from './EntryGifs/forest1.gif';
import logo from "./EntryGifs/PPPTAILORINGCOURIER.png";
import slogan from "./EntryGifs/PPP-SLOGAN.png";
import Button from '../../components/Button/Button';
import Symbol from './EntryGifs/ppp-logo-white.png';
function EntryPage() {
    const [currentImage, setCurrentImage] = useState(1);


    const EntryBackgroundsJson= {
        1: gif1,
        2: gif2,
        3: gif3,
        4: gif4,
        5: gif5,
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev % 5) + 1);
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);
        
    // switching idea to series of gifs around different environments. Rainforests, snowy mountains, 

    

    
    return (
        <div className="entry-page">
            <div className="entry-div">
                <img 
                    alt="background" 
                    className="entry-background"
                    src={EntryBackgroundsJson[currentImage]}
                    ></img>
                <div className="entry-content">
                    <img alt="ppptailoringcourier" className="entry-logo" src={logo}></img>
                    <img alt="ppp-logo" className="entry-symbol" src={Symbol}></img>
                    <img alt="ppp-slogan" className="entry-slogan" src={slogan}></img>
                    <div className="button-wrapper">
                        <Button 
                            path="/home"
                            type="primary"
                            className="entry-button"
                            >
                                ENTER
                        </Button>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default EntryPage;