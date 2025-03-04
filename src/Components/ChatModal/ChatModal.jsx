import React, { useState } from 'react';
import './ChatModal.css';
import Navbar from '../ChatNav/Navbar';
import ChatCards from '../ChatAutorecommend/ChatCards';
import InputSection from '../ChatInput/InputSection';
import ChatDisplay from '../ChatDisplay/ChatDisplay';
import KitMessage from '../ChatDisplay/KitMessage'; 
import SuggestedResponses from '../ChatAutorecommend/SuggestedResponses';

/**
 * ChatModal component - Main chat interface for KIT bot
 * 
 * @param {Object} props
 * @param {Function} props.onClose - Function to close the chat modal
 */
const ChatModal = ({ onClose }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedResponses, setSuggestedResponses] = useState([]);

  /**
   * Handles sending messages to the KIT bot
   * 
   * @param {string} message - User message text
   * @param {File} [imageFile] - Optional image file attachment
   */
  const handleSendMessage = async (message, imageFile) => {
    // Create user message and add to chat history
    const userMessage = { 
      type: 'user', 
      content: message,
      image: imageFile ? URL.createObjectURL(imageFile) : null
    };
    setChatHistory([...chatHistory, userMessage]);
    
    // Clear any existing suggested responses when user sends a new message
    setSuggestedResponses([]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Get response from HuggingFace API
    const response = await fetchHuggingFaceResponse(message, imageFile);
    
    // Hide typing indicator and add bot response
    setIsTyping(false);
    const botMessage = { type: 'kit', content: response.text };
    setChatHistory((prevHistory) => [...prevHistory, botMessage]);
    
    // Update suggested responses from API
    if (response.suggestedResponses && response.suggestedResponses.length > 0) {
      setSuggestedResponses(response.suggestedResponses.slice(0, 3));
    }
  };

  /**
   * Fetches response from the HuggingFace API
   * 
   * HUGGINGFACE IMPLEMENTATION GUIDE:
   * 1. Create a Gradio interface with:
   *    - Text input for user message
   *    - Optional image input
   *    - Text output for bot response
   *    - List output for suggested follow-up responses
   * 
   * 2. Deploy model as a HuggingFace space
   * 
   * 3. Update the API endpoint in the fetch call below
   * 
   * 4. The API should return an object with:
   *    - text: The bot's response text
   *    - suggestedResponses: Array of 3 follow-up response suggestions
   * 
   * 5. Model should be trained to match the style/tone/knowledge of the sample responses below
   * 
   * @param {string} message - Message to send to API
   * @param {File} [imageFile] - Optional image file to analyze
   * @returns {Promise<Object>} - Response object with text and suggestedResponses
   */
  const fetchHuggingFaceResponse = async (message, imageFile) => {
    try {
      // HUGGINGFACE IMPLEMENTATION:
      // Replace this simulation with actual API call to your deployed Gradio endpoint

      /*
      // Example API implementation:
      const formData = new FormData();
      formData.append('message', message);
      if (imageFile) {
        formData.append('image', imageFile);
      }
      
      const response = await fetch('https://huggingface.co/spaces/YourUsername/KitBot/api/predict', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        throw new Error('API request failed');
      }
      
      const data = await response.json();
      return {
        text: data.data[0],           // Bot's text response
        suggestedResponses: data.data[1]  // Array of suggested follow-ups
      };
      */

      // SIMULATED RESPONSE - Replace with actual API call
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple pattern matching for demonstration purposes
      let responseText = "";
      let suggestions = [];
      
      if (message.toLowerCase().includes('wear') || message.toLowerCase().includes('gallery')) {
        responseText = "For a gallery opening, consider a minimalist approach - our black enigma pieces with subtle accessories create an artistic statement without competing with the art.";
        suggestions = [
          "Show me the enigma pieces",
          "What accessories would pair well?",
          "Do you have styling tips for formal events?"
        ];
      } else if (message.toLowerCase().includes('style') || message.toLowerCase().includes('wardrobe')) {
        responseText = "Based on current trends, I'd recommend layering with our hooded scarfs and parachute bombers. These pieces work well together and create a balanced silhouette.";
        suggestions = [
          "Tell me more about parachute bombers",
          "How should I layer for colder weather?",
          "What colors are trending this season?"
        ];
      } else if (message.toLowerCase().includes('trend') || message.toLowerCase().includes('tabi')) {
        responseText = "Tabis have evolved from traditional Japanese footwear into a modern statement piece. The split-toe design represents a perfect blend of heritage and avant-garde fashion.";
        suggestions = [
          "Where can I buy tabis?",
          "What can I wear with tabis?",
          "Show me other Japanese-inspired pieces"
        ];
      } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
        responseText = "Hello! I'm KIT, your PPPTAILORINGCOURIER style assistant. How can I help with your fashion needs today?";
        suggestions = [
          "What's trending this season?",
          "Help me style an outfit",
          "Tell me about your brand"
        ];
      } else {
        responseText = "That's an interesting question about fashion. Our team at PPPTAILORINGCOURIER focuses on creating unique silhouettes that blend functionality with futurism. Would you like to know more about our design philosophy?";
        suggestions = [
          "Yes, tell me about your design philosophy",
          "Show me your bestsellers",
          "What makes your brand unique?"
        ];
      }

      // If an image was included, add image-specific response
      if (imageFile) {
        responseText = `I've analyzed the image you shared. ${responseText}`;
        suggestions = [
          "What items match this style?",
          "Do you have similar pieces?",
          "How would you style this?"
        ];
      }

      return {
        text: responseText,
        suggestedResponses: suggestions
      };
      
    } catch (error) {
      console.error('Error fetching response from KIT:', error);
      return {
        text: "I'm having trouble processing your request right now. Please try again later.",
        suggestedResponses: ["Try a different question", "Tell me about your brand", "What's trending?"]
      };
    }
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
            {isTyping ? (
              <KitMessage isTyping={true} />
            ) : (
              suggestedResponses.length > 0 && (
                <SuggestedResponses 
                  suggestions={suggestedResponses} 
                  onSelectSuggestion={handleSendMessage}
                />
              )
            )}
          </div>
        )}

        <InputSection onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatModal;