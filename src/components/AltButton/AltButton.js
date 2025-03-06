import React from 'react';
import './AltButton.css';
import {Link} from 'react-router-dom';

function AltButton({
    children, 
    path, 
    type = 'primary', 
    size = 'medium',
    onClick,
    disabled = false,
    className = ''
}) {
    return (
        <div className="altbutton-container">
            {path ? (
                <Link 
                    to={path} 
                    className={`altbutton altbutton-${type} ${className} altbutton-${size} ${disabled ? 'altbutton-disabled' : ''}`}
                    onClick={disabled ? null : onClick}
                >
                    {children}
                </Link>
            ) : (
                <button
                    className={`altbutton altbutton-${type} ${className} altbutton-${size}  ${disabled ? 'altbutton-disabled' : ''}`}
                    onClick={disabled ? null : onClick}
                    disabled={disabled}
                    
                >
                    {children}
                </button>
            )}
        </div>
    );
}


export default AltButton;