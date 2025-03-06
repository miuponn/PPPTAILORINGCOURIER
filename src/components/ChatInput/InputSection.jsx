import React, { useState, useRef } from 'react';
import './InputSection.css';
import arrow from './arrow.svg';

const InputSection = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() || imageFile) {
      onSendMessage(message, imageFile);
      setMessage('');
      setImageFile(null);
      setImagePreview(null);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <div className="chat-input-section">
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Preview" />
          <button onClick={handleRemoveImage} className="remove-image">×</button>
        </div>
      )}
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="chat-input-field"
        />
        <button type="submit" className="chat-submit-button">
          <img src={arrow} alt="Send" />
        </button>
      </form>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
      <div className="chat-attach-photo" onClick={handleAttachClick}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59723 21.9983 8.005 21.9983C6.41277 21.9983 4.88584 21.3658 3.76 20.24C2.63416 19.1142 2.00166 17.5872 2.00166 15.995C2.00166 14.4028 2.63416 12.8758 3.76 11.75L12.33 3.17997C13.0825 2.42748 14.1123 1.99829 15.185 1.99829C16.2577 1.99829 17.2875 2.42748 18.04 3.17997C18.7925 3.93246 19.2217 4.96232 19.2217 6.03497C19.2217 7.10763 18.7925 8.13749 18.04 8.88997L9.46 17.47C9.08375 17.8462 8.56878 18.0558 8.03 18.0558C7.49122 18.0558 6.97625 17.8462 6.6 17.47C6.22375 17.0937 6.01415 16.5788 6.01415 16.04C6.01415 15.5012 6.22375 14.9862 6.6 14.61L14.09 7.11997" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>ATTACH IMAGE</span>
      </div>
    </div>
  );
};

export default InputSection;