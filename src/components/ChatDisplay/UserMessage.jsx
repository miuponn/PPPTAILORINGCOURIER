import React from 'react';
import './Messages.css';

const UserMessage = ({ content }) => (
  <div className="message user">
    {content}
  </div>
);

export default UserMessage;