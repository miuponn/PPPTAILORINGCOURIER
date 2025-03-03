import React, { useState } from 'react';
import './ChatModal.css';
import Navbar from '../ChatNav/Navbar';
import ChatCards from '../ChatAutorecommend/ChatCards';
import InputSection from '../ChatInput/InputSection';
import ChatDisplay from '../ChatDisplay/ChatDisplay';

const ChatModal = ({ onClose }) => {
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async (message) => {
    const userMessage = { type: 'user', content: message };
    setChatHistory([...chatHistory, userMessage]);

    // Simulate sending message to Hugging Face API
    const response = await fetchHuggingFaceResponse(message);
    const botMessage = { type: 'kit', content: response };
    setChatHistory((prevHistory) => [...prevHistory, botMessage]);
  };

  const fetchHuggingFaceResponse = async (message) => {
    // Replace with actual Hugging Face API call
    // const response = await fetch('https://api.huggingface.co/chat', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer YOUR_API_KEY`
    //   },
    //   body: JSON.stringify({ message })
    // });
    // const data = await response.json();
    // return data.reply;

    // simulated response for now
    return "This is a simulated response from KIT.";
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
            <ChatCards onSelectPrompt={handleSendMessage} />
          </div>
        ) : (
          <div className="chat-messages-container">
            <ChatDisplay messages={chatHistory} />
          </div>
        )}

        <InputSection onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatModal;