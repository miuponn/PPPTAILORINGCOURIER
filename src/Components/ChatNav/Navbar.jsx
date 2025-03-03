import React from 'react';
import Button from './Button';
import './Navbar.css';
import exitIcon from './exit.svg';

const Navbar = ({ onClose }) => {
  return (
    <div className="chat-nav">
      <Button
        icon={<img src={exitIcon} alt="Exit" />}
        onClick={onClose}
        className="exit-button"
      />
    </div>
  );
};

export default Navbar;