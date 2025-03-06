import React from 'react';
import './SuggestedResponses.css';

const SuggestedResponses = ({ suggestions, onSelectSuggestion }) => {
  // Make sure we have valid suggestions
  const displaySuggestions = Array.isArray(suggestions) ? suggestions : [];

  return (
    <div className="suggested-responses-container">
      {displaySuggestions.map((suggestion, index) => (
        <button
          key={index}
          className="suggested-response-button"
          onClick={() => onSelectSuggestion(suggestion)}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default SuggestedResponses;