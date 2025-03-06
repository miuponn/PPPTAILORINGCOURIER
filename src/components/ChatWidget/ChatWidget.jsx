import React, { useState } from 'react';
import ChatModal from '../ChatModal/ChatModal';
import './ChatWidget.css';
import kitFace from './kit-face.svg';

const ChatWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className="chat-widget-button"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={kitFace} alt="Kit Face" />
      </button>
      
      {isModalOpen && (
        <ChatModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default ChatWidget;