import React, { useState, useEffect } from 'react';
import './ChatModal.css';
import Navbar from '../ChatNav/Navbar';
import ChatCards from '../ChatAutorecommend/ChatCards';
import InputSection from '../ChatInput/InputSection';
import ChatDisplay from '../ChatDisplay/ChatDisplay';
import KitMessage from '../ChatDisplay/KitMessage'; 
import SuggestedResponses from '../ChatAutorecommend/SuggestedResponses';
import { sendMessage, fetchSuggestedResponses, checkHealth } from '../../services/api';

/**
 * ChatModal component - Main chat interface for KIT bot
 */
const ChatModal = ({ onClose }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedResponses, setSuggestedResponses] = useState([]);
  const [apiHealthy, setApiHealthy] = useState(true);

  // Check API health on mount
  useEffect(() => {
    const checkApiHealth = async () => {
      const healthy = await checkHealth();
      setApiHealthy(healthy);
    };
    
    checkApiHealth();
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        
        // Target the chat-messages-container
        const container = document.querySelector('.chat-messages-container');
        if (container) {
          const scrollAmount = e.key === 'ArrowUp' ? -50 : 50;
          container.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);
  
  /**
   * Handles sending messages to the KIT bot
   */
  const handleSendMessage = async (message, imageFile) => {
    // Skip if message is empty and no image
    if (!message.trim() && !imageFile) return;
    
    // Create user message and add to chat history
    const userMessage = { 
      type: 'user', 
      content: message,
      image: imageFile ? URL.createObjectURL(imageFile) : null
    };
    setChatHistory(prev => [...prev, userMessage]);
    
    // Clear any existing suggested responses
    setSuggestedResponses([]);
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Send message to API
      const responseData = await sendMessage(message, imageFile, chatHistory);
      
      // Add bot response to chat history
      const botMessage = { 
        type: 'kit', 
        content: responseData.text 
      };
      setChatHistory(prev => [...prev, botMessage]);
      
      // Update suggested responses
      if (responseData.suggestedResponses?.length > 0) {
        setSuggestedResponses(responseData.suggestedResponses.slice(0, 3));
      } else {
        const suggestions = await fetchSuggestedResponses(message, responseData.text);
        setSuggestedResponses(suggestions);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Add error message to chat history
      const errorMessage = {
        type: 'kit',
        content: "I'm having trouble connecting right now. Please try again in a moment."
      };
      setChatHistory(prev => [...prev, errorMessage]);
      setSuggestedResponses(["Try again", "Different question", "Help"]);
    } finally {
      // Always hide typing indicator when done, regardless of success or error
      setIsTyping(false);
    }
  };

  /**
   * Clears the chat history
   */
  const handleClearChat = () => {
    setChatHistory([]);
    setSuggestedResponses([]);
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
          <>
            <div className="chat-messages-container">
              <ChatDisplay messages={chatHistory} />
              {isTyping && <KitMessage isTyping={true} />}
            </div>
            
            {!isTyping && suggestedResponses.length > 0 && (
              <div className="suggested-responses-wrapper">
                <SuggestedResponses 
                  suggestions={suggestedResponses} 
                  onSelectSuggestion={handleSendMessage}
                />
              </div>
            )}
          </>
        )}

        <InputSection 
          onSendMessage={handleSendMessage} 
          onClear={handleClearChat}
          isDisabled={!apiHealthy || isTyping}
        />
      </div>
    </div>
  );
};

export default ChatModal;