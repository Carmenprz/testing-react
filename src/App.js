import React, { useState } from 'react'; 
import NewMessageForm from './components/NewMessageForm';
import MessageList from './components/MessageList';
import Title from './components/Title';

const App = () => {
  const [messages, setMessages] = useState([]);
  const handleSend = newMessage => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <div>
      <Title />
      <NewMessageForm onSend={handleSend}/>
      <MessageList data={messages} />
    </div>
  )
} 

export default App;
