import React from 'react';
import './Messages.css';

const UserMessage = ({ content, image }) => {
  return (
    <div className="message user">
      <div className="user-content">{content}</div>
      {image && (
        <div className="user-image-container">
          <img src={image} alt="User upload" className="user-uploaded-image" />
        </div>
      )}
    </div>
  );
};

export default UserMessage;