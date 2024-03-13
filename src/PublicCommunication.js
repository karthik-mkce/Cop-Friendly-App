
import React, { useState } from 'react';

function PublicCommunication() {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSendMessage = () => {
   
    console.log('Sending message:', message, messageType);
   
    setMessage('');
    setMessageType('');
  };

  return (
    <div>
      <h2>Public Communication</h2>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </div>
      <div>
        <label>Message Type:</label>
        <select value={messageType} onChange={(e) => setMessageType(e.target.value)}>
          <option value="">Select Message Type</option>
          <option value="alert">Alert</option>
          <option value="notification">Notification</option>
        </select>
      </div>
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
}

export default PublicCommunication;
