import React, { useState } from 'react'; 
import NewMessageForm from './components/NewMessageForm';
import MessageList from './components/MessageList';

const App = () => {
  const [messages, setMessages] = useState([]);
  const handleSend = newMessage => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <div>
      <NewMessageForm onSend={handleSend}/>
      <MessageList data={messages} />
    </div>
  )
} 

export default App;
