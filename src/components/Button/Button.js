import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';



function Button({
    children, 
    path, 
    type = 'primary', 
    size = 'medium',
    onClick,
    disabled = false,
    className = ''
}) {
    return (
        <div className="button-container">
            {path ? (
                <Link 
                    to={path} 
                    className={`button button-${type} ${className} button-${size} ${disabled ? 'button-disabled' : ''}`}
                    onClick={disabled ? null : onClick}
                >
                    {children}
                </Link>
            ) : (
                <button
                    className={`button button-${type} ${className} button-${size}  ${disabled ? 'button-disabled' : ''}`}
                    onClick={disabled ? null : onClick}
                    disabled={disabled}
                    
                >
                    {children}
                </button>
            )}
        </div>
    );
}

Button.defaultProps = {
    type: 'primary',
    disabled: false,
    onClick: () => {},
    className: ''
};

export default Button;