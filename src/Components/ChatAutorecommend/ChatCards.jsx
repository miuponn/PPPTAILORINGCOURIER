import React from 'react';
import './ChatCard.css';

const ChatCard = ({ prompts = [], onSelectPrompt }) => {
    // This will later fetch from Hugging Face API
    // For now using placeholder prompts
    const defaultPrompts = [
        "What should I wear to a gallery opening?",
        "Suggest styling tips based on my wardrobe.",
        "Break down a trend: tabis.",
    ];

    const displayPrompts = prompts.length > 0 ? prompts : defaultPrompts;

    return (
        <div className="chat-cards-container">
            {displayPrompts.map((prompt, index) => (
                <div 
                    key={index} 
                    className="chat-card"
                    onClick={() => onSelectPrompt(prompt)}
                >
                    {prompt}
                </div>
            ))}
        </div>
    );
};

export default ChatCard;