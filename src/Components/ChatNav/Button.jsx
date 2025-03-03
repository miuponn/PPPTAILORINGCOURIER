import React from 'react';
const Button = ({ icon, onClick, ariaLabel, className = '' }) => {
  return (
    <button 
      className={`chat-nav-button ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default Button;