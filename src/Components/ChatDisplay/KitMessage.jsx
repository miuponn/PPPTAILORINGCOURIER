import React from 'react'
import kitIcon from './kit.svg';
import './Messages.css';

const KitMessage = ({ content }) => (
  <div className="message kit">
    <span className="kit-icon">
      <img src={kitIcon} alt="KIT" />
    </span>
    <div className="kit-content">{content}</div>
  </div>
);

export default KitMessage;