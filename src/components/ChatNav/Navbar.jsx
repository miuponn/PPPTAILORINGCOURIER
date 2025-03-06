import React from 'react';
import Button from './Button';
import './Navbar.css';
import exitIcon from './exit.svg';

const Navbar = ({ onClose }) => {
  return (
    <div className="chat-nav">
      <div className="chat-nav-title">
        <span className="chat-nav-name">KIT</span>
        <span className="chat-nav-version">v1.0</span>
      </div>
      <Button
        icon={<img src={exitIcon} alt="Exit" />}
        onClick={onClose}
        className="exit-button"
      />
    </div>
  );
};

export default Navbar;