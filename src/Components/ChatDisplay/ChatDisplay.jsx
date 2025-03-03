import UserMessage from './UserMessage';
import KitMessage from './KitMessage';

const ChatDisplay = ({ messages }) => (
  <div className="chat-messages">
    {messages.map((msg, index) => (
      msg.type === 'user' 
        ? <UserMessage key={index} content={msg.content} />
        : <KitMessage key={index} content={msg.content} />
    ))}
  </div>
);

export default ChatDisplay;