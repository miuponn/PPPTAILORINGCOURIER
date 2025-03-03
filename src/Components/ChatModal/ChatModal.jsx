import React, { useState } from 'react';
import './ChatModal.css';
import Navbar from '../ChatNav/Navbar';
import ChatCards from '../ChatAutorecommend/ChatCards';
import InputSection from '../ChatInput/InputSection';
import ChatDisplay from '../ChatDisplay/ChatDisplay'; // Import the ChatDisplay component

const ChatModal = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = (message) => {
    if (!message.trim()) return;
    setChatHistory([...chatHistory, { type: 'user', content: message }]);
  };

  const handleSelectPrompt = (prompt) => {
    handleSubmit(prompt);
  };

  return (
    <div className="chat-modal-overlay">
      <div className="chat-modal">
        <Navbar onClose={onClose} />
        
        {chatHistory.length === 0 ? (
          <div className="chat-welcome">
            <h2 className="welcome-header">
              <span>WELCOME TO </span>
              <strong>KIT.</strong>
            </h2>
            <h3 className="welcome-subheader">WHAT'S YOUR VISION?</h3>
            <ChatCards onSelectPrompt={handleSelectPrompt} />
          </div>
        ) : (
          <div className="chat-messages-container">
            <ChatDisplay messages={chatHistory} />
          </div>
        )}

        <InputSection onSendMessage={handleSubmit} />
      </div>
    </div>
  );
};

export default ChatModal;