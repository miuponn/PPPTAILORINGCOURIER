import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ChatModal from '../ChatModal/ChatModal';
import './ChatWidget.css';
import kitFace from './kit-face.svg';

const ChatWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Check if URL ends with /kit to determine modal state
  useEffect(() => {
    const shouldShowModal = currentPath.endsWith('/kit');
    setIsModalOpen(shouldShowModal);
  }, [currentPath]);

  const openModal = () => {
    // Append /kit to current path
    navigate(`${currentPath === '/' ? '' : currentPath}/kit`, { 
      state: { prevPath: currentPath } 
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Go back to previous URL without /kit
    const basePath = currentPath.replace(/\/kit$/, '') || '/';
    navigate(basePath);
    setIsModalOpen(false);
  };

  return (
    <>
      <button 
        className="chat-widget-button"
        onClick={openModal}
      >
        <img src={kitFace} alt="Kit Face" />
      </button>
      
      {isModalOpen && (
        <ChatModal onClose={closeModal} />
      )}
    </>
  );
};

export default ChatWidget;