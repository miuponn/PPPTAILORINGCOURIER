const API_BASE_URL = ""; // Using relative URL for proxy support

/**
 * Fetches starter prompts for chat cards
 * @returns {Promise<string[]>} Array of prompt strings
 */
export async function fetchStarterPrompts() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/starter-prompts`);
    if (!response.ok) throw new Error('Failed to fetch starter prompts');
    
    const data = await response.json();
    return data.prompts || [];
  } catch (error) {
    console.error('Error fetching starter prompts:', error);
    return [
      "What should I wear to a gallery opening?",
      "Suggest styling tips for minimalist wardrobe",
      "Tell me about tabi boots",
      "What are good fabrics for summer?"
    ];
  }
}

/**
 * Sends a message to the KIT bot
 * @param {string} message - User message
 * @param {File} [imageFile] - Optional image file
 * @param {Array} history - Chat history
 * @returns {Promise<Object>} Bot response with suggested follow-ups
 */
export async function sendMessage(message, imageFile = null, history = []) {
  // Format chat history
  const formattedHistory = history.map(msg => {
    if (msg.type === 'user') {
      return { role: 'user', content: msg.content };
    } else {
      return { role: 'assistant', content: msg.content };
    }
  });
  
  // Build request data
  const requestData = {
    message: message,
    history: formattedHistory
  };
  
  // Add image if present
  if (imageFile) {
    // Convert image to base64
    const reader = new FileReader();
    const imageBase64 = await new Promise((resolve) => {
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(imageFile);
    });
    requestData.image = imageBase64;
  }
  
  // Make API call
  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData)
  });
  
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  
  const responseData = await response.json();
  
  // Ensure we have a properly formatted response even if the server returns fewer suggestions
  return {
    text: responseData.text,
    suggestedResponses: responseData.suggestedResponses || []
  };
}

/**
 * Fetches suggested responses based on a message and reply
 * @param {string} message - User message
 * @param {string} botReply - Bot's reply
 * @param {Array} [history] - Optional chat history
 * @returns {Promise<string[]>} Array of suggested responses
 */
export async function fetchSuggestedResponses(message, botReply, history = []) {
  try {
    // parameter order to match backend API expectation
    const response = await fetch(`${API_BASE_URL}/api/suggested-responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        bot_reply: botReply,
        history
      })
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data.suggestedResponses || [];
  } catch (error) {
    console.error('Error fetching suggested responses:', error);
    return ["Tell me more", "Other options?", "Different topic"];
  }
}

/**
 * Performs a health check on the API
 * @returns {Promise<boolean>} True if API is healthy
 */
export async function checkHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    
    if (!response.ok) {
      return false;
    }
    
    const data = await response.json();
    return data.status === "healthy";
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
}